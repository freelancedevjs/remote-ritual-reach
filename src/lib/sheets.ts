/**
 * Google Apps Script → Google Sheets form submission.
 *
 * Apps Script web apps require `mode: "no-cors"` from browser clients —
 * the script redirects the initial request internally and the CORS headers
 * only appear on the final hop, which the browser can't read in cors mode.
 * With no-cors we can't read the response body, so we submit optimistically
 * and assume success if no network error is thrown.
 *
 * Set NEXT_PUBLIC_SHEETS_URL to your Apps Script /exec URL in:
 *   - .env.local for local dev
 *   - GitHub Secrets → Actions → NEXT_PUBLIC_SHEETS_URL for CI builds
 *   - Netlify / hosting env vars (requires a new deploy after adding)
 *
 * See /scripts/google-apps-script.js for the Apps Script to deploy.
 */

const ENDPOINT = process.env.NEXT_PUBLIC_SHEETS_URL ?? ""

export type SheetResult =
  | { ok: true }
  | { ok: false; error: string }

export async function postToSheet(payload: Record<string, unknown>): Promise<SheetResult> {
  if (!ENDPOINT) {
    // In dev without the env var, log clearly so it's obvious what's missing
    console.warn(
      "[sheets] NEXT_PUBLIC_SHEETS_URL is not set.\n" +
      "Add it to .env.local (dev) or your hosting env vars (production).\n" +
      "Submission skipped — form will show success locally."
    )
    return { ok: true }
  }

  try {
    // no-cors is required for Apps Script web apps from browser clients.
    // The response body is opaque (unreadable) — we treat a non-throwing
    // fetch as success and rely on the Apps Script execution log for errors.
    await fetch(ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
    })
    return { ok: true }
  } catch (err) {
    // Only genuine network errors (offline, DNS failure) reach here
    return { ok: false, error: err instanceof Error ? err.message : "Network error." }
  }
}
