import { getPublishedProductBySlug } from "@/data/products";
import { readJsonBody } from "@/lib/requestBody";
import { isAllowedRequestOrigin } from "@/lib/requestSecurity";

type QuoteItemInput = {
  slug?: unknown;
  quantity?: unknown;
};

type QuotePayload = {
  items?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
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

  const data = result.data as QuotePayload;

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
    !isText(data.phone, 6, 30) ||
    !(data.message === undefined || isText(data.message, 0, 2000))
  ) {
    return errorResponse("Invalid customer details.", 400);
  }

  // Validate selected products.
  if (
    !Array.isArray(data.items) ||
    data.items.length < 1 ||
    data.items.length > 20
  ) {
    return errorResponse("Invalid product selection.", 400);
  }

  const selectedProducts: {
    name: string;
    slug: string;
    quantity: number;
  }[] = [];

  const seenSlugs = new Set<string>();

  for (const rawItem of data.items) {
    if (!rawItem || typeof rawItem !== "object" || Array.isArray(rawItem)) {
      return errorResponse("Invalid product item.", 400);
    }

    const item = rawItem as QuoteItemInput;

    if (
      !isText(item.slug, 1, 100) ||
      typeof item.quantity !== "number" ||
      !Number.isInteger(item.quantity) ||
      item.quantity < 1 ||
      item.quantity > 99 ||
      seenSlugs.has(item.slug)
    ) {
      return errorResponse("Invalid product or quantity.", 400);
    }

    // Trust the server-side product catalog,
    // not a product name submitted by the client.
    const product = getPublishedProductBySlug(item.slug);

    if (!product) {
      return errorResponse("Product not found.", 400);
    }

    seenSlugs.add(product.slug);

    selectedProducts.push({
      name: product.name,
      slug: product.slug,
      quantity: item.quantity,
    });
  }

  // Server-only Resend configuration.
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.QUOTE_FROM_EMAIL;
  const toEmail = process.env.QUOTE_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Quote email configuration is incomplete.");

    return errorResponse("Email delivery is not configured.", 503);
  }

  const customerName = data.name.trim();
  const customerEmail = data.email.trim();
  const customerPhone = data.phone.trim();

  const customerMessage =
    typeof data.message === "string" ? data.message.trim() : "";

  const productLines = selectedProducts.map(
    (product, index) =>
      `${index + 1}. ${product.name} ` +
      `(Kodi: ${product.slug}) — ` +
      `Sasia: ${product.quantity}`,
  );

  // Construct the plain-text quotation email.
  const emailText = [
    "KËRKESË E RE PËR OFERTË — GEOSYSTEM",
    "",
    "PRODUKTET E ZGJEDHURA:",
    ...productLines,
    "",
    `Numri i modeleve: ${selectedProducts.length}`,
    "",
    "TË DHËNAT E KLIENTIT:",
    `Emri: ${customerName}`,
    `Email: ${customerEmail}`,
    `Telefoni: ${customerPhone}`,
    "",
    "MESAZHI:",
    customerMessage || "(Pa mesazh shtesë)",
  ].join("\n");

  // Send the quotation using Resend.
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
        subject:
          `Kërkesë për ofertë — ` + `${selectedProducts.length} produkte`,
        text: emailText,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected quotation email:", response.status);

      return errorResponse("Email delivery failed.", 502);
    }

    return Response.json({ ok: true });
  } catch {
    console.error("Unable to connect to email delivery service.");

    return errorResponse("Email service unavailable.", 502);
  }
}
