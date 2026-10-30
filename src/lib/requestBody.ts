const MAX_BODY_BYTES = 12_000;

type JsonBodyResult =
  | {
      ok: true;
      data: unknown;
    }
  | {
      ok: false;
      status: 400 | 413;
      error: string;
    };

export async function readJsonBody(request: Request): Promise<JsonBodyResult> {
  const contentLength = request.headers.get("content-length");

  if (contentLength !== null) {
    const declaredLength = Number(contentLength);

    if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
      return {
        ok: false,
        status: 413,
        error: "Request too large.",
      };
    }
  }

  if (!request.body) {
    return {
      ok: false,
      status: 400,
      error: "Invalid JSON.",
    };
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      totalBytes += value.byteLength;

      if (totalBytes > MAX_BODY_BYTES) {
        await reader.cancel().catch(() => {});

        return {
          ok: false,
          status: 413,
          error: "Request too large.",
        };
      }

      chunks.push(value);
    }
  } catch {
    return {
      ok: false,
      status: 400,
      error: "Unable to read request body.",
    };
  } finally {
    reader.releaseLock();
  }

  const bodyBytes = new Uint8Array(totalBytes);
  let offset = 0;

  for (const chunk of chunks) {
    bodyBytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    const text = new TextDecoder("utf-8", {
      fatal: true,
    }).decode(bodyBytes);

    const data: unknown = JSON.parse(text);

    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return {
        ok: false,
        status: 400,
        error: "Invalid request.",
      };
    }

    return {
      ok: true,
      data,
    };
  } catch {
    return {
      ok: false,
      status: 400,
      error: "Invalid JSON.",
    };
  }
}
