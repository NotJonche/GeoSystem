/**
 * Checks whether a browser request originates
 * from the same origin as the API endpoint.
 *
 * This is one layer of protection, not a substitute
 * for rate limiting.
 */
export function isAllowedRequestOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");

  // Modern browsers identify cross-origin requests.
  if (fetchSite && fetchSite !== "same-origin") {
    return false;
  }

  // Compare the Origin header with the request URL.
  // URL.origin includes the scheme, hostname, and port.
  if (origin !== null) {
    try {
      return new URL(origin).origin === new URL(request.url).origin;
    } catch {
      return false;
    }
  }

  // Requests without either header are usually made
  // by non-browser clients such as PowerShell or curl.
  // Keep them allowed for compatibility.
  return true;
}
