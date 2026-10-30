import { services } from "@/data/services";
import { readJsonBody } from "@/lib/requestBody";
import { isAllowedRequestOrigin } from "@/lib/requestSecurity";

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

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function errorResponse(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

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
  // Reject requests from other browser origins.
  if (!isAllowedRequestOrigin(request)) {
    return errorResponse("Request origin not allowed.", 403);
  }

  // Only accept JSON.
  const contentType = request.headers.get("content-type") ?? "";

  if (!/^application\/json(?:\s*;|$)/i.test(contentType)) {
    return errorResponse("Unsupported content type.", 415);
  }

  // Read the JSON body with a strict size limit.
  const result = await readJsonBody(request);

  if (!result.ok) {
    return errorResponse(result.error, result.status);
  }

  const data = result.data as ContactPayload;

  // Honeypot: reject unexpected or filled values.
  if (
    data.website !== undefined &&
    (typeof data.website !== "string" || data.website.trim() !== "")
  ) {
    return errorResponse("Invalid request.", 400);
  }

  // Validate customer details.
  if (
    !isText(data.name, 2, 100) ||
    !isText(data.email, 5, 254) ||
    !isValidEmail(data.email.trim()) ||
    !isText(data.subject, 3, 150) ||
    !isText(data.message, 10, 5000)
  ) {
    return errorResponse("Invalid contact details.", 400);
  }

  // Service selection is optional, but it must be valid.
  const service = typeof data.service === "string" ? data.service.trim() : "";

  if (
    (data.service !== undefined && typeof data.service !== "string") ||
    (service !== "" && !validServiceIds.has(service))
  ) {
    return errorResponse("Invalid service selection.", 400);
  }

  // Server-only Resend configuration.
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.QUOTE_FROM_EMAIL;

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

  // Construct a plain-text email.
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

  // Send the message using Resend.
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
