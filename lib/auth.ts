export const AUTH_COOKIE = "sga_hub_auth";

/** Password comes from the HUB_PASSWORD env var; falls back for local dev. */
export function hubPassword(): string {
  return process.env.HUB_PASSWORD ?? "sga-hub-2026";
}

/**
 * Token stored in the session cookie — SHA-256 of the password via Web
 * Crypto so it works in both the Edge middleware and the server action.
 */
export async function expectedAuthToken(): Promise<string> {
  const data = new TextEncoder().encode(`sga-hub:${hubPassword()}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
