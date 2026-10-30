import { services } from "@/data/services";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
};

function isText(value: unknown, min: number, max: number): value is string {
  return (
    typeof value === "string" &&
    value.trim().length >= min &&
    value.trim().length <= max
  );
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function errorResponse(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

// Only accept service IDs that actually exist
// in GeoSystem's services catalog.
const validServiceIds = new Set([
  ...services.map((service) => service.id),
  "other",
]);

function getServiceName(id: string): string {
  if (!id) {
    return "Nuk është zgjedhur";
  }

  if (id === "other") {
    return "Tjetër / Nuk jam i sigurt";
  }

  return (
    services.find((service) => service.id === id)?.title ?? "Nuk është zgjedhur"
  );
}

export async function POST(request: Request) {
  let data: ContactPayload;

  // Validate content type.
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return errorResponse("Unsupported content type.", 415);
  }

  // Read and validate request body.
  try {
    const rawBody = await request.text();

    if (rawBody.length > 12000) {
      return errorResponse("Request too large.", 413);
    }

    const parsed: unknown = JSON.parse(rawBody);

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return errorResponse("Invalid request.", 400);
    }

    data = parsed as ContactPayload;
  } catch {
    return errorResponse("Invalid JSON.", 400);
  }

  // Basic bot protection.
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return errorResponse("Invalid request.", 400);
  }

  if (data.website !== undefined && typeof data.website !== "string") {
    return errorResponse("Invalid request.", 400);
  }

  // Validate required fields.
  if (
    !isText(data.name, 2, 100) ||
    !isText(data.email, 5, 254) ||
    !isValidEmail(data.email.trim()) ||
    !isText(data.subject, 3, 150) ||
    !isText(data.message, 10, 5000)
  ) {
    return errorResponse("Invalid contact details.", 400);
  }

  // Service selection is optional.
  const service = typeof data.service === "string" ? data.service.trim() : "";

  if (
    (data.service !== undefined && typeof data.service !== "string") ||
    (service !== "" && !validServiceIds.has(service))
  ) {
    return errorResponse("Invalid service selection.", 400);
  }

  // Reuse the working Resend configuration.
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.QUOTE_FROM_EMAIL;

  // Optional separate recipient for contact messages.
  // Defaults to the existing quotation recipient.
  const toEmail = process.env.CONTACT_TO_EMAIL || process.env.QUOTE_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Contact email configuration is incomplete.");

    return errorResponse("Email delivery is not configured.", 503);
  }

  const customerName = data.name.trim();
  const customerEmail = data.email.trim();
  const subject = data.subject.trim();
  const message = data.message.trim();

  const selectedService = getServiceName(service);

  // Plain-text email avoids HTML injection
  // and keeps the message easy to read.
  const emailText = [
    "MESAZH I RI NGA FAQJA GEOSYSTEM",
    "",
    "TË DHËNAT E KLIENTIT:",
    `Emri: ${customerName}`,
    `Email: ${customerEmail}`,
    "",
    `Subjekti: ${subject}`,
    `Shërbimi: ${selectedService}`,
    "",
    "MESAZHI:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: customerEmail,
        subject: "Kontakt GeoSystem — Mesazh i ri",
        text: emailText,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected contact email:", response.status);

      return errorResponse("Email delivery failed.", 502);
    }

    return Response.json({ ok: true });
  } catch {
    console.error("Unable to connect to email service.");

    return errorResponse("Email service unavailable.", 502);
  }
}
