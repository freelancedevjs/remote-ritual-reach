/**
 * Google Apps Script → Google Sheets form submission.
 *
 * Set NEXT_PUBLIC_SHEETS_URL in your hosting env vars / GitHub Secrets
 * (and in your local .env.local for dev) to the Apps Script web-app URL.
 *
 * See /scripts/google-apps-script.js for the server-side script to deploy.
 */

const ENDPOINT = process.env.NEXT_PUBLIC_SHEETS_URL ?? ""

export type SheetResult =
  | { ok: true }
  | { ok: false; error: string }

export async function postToSheet(payload: Record<string, unknown>): Promise<SheetResult> {
  if (!ENDPOINT) {
    console.warn("[sheets] NEXT_PUBLIC_SHEETS_URL is not set — skipping submission.")
    // Return ok in dev so the UI flow still works without the env var.
    return { ok: true }
  }

  try {
    // Apps Script requires Content-Type: text/plain; it reads postData.contents
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
    })

    // Apps Script always returns 200; check the JSON body.
    const data = await res.json() as { success: boolean; error?: string }
    if (data.success) return { ok: true }
    return { ok: false, error: data.error ?? "Submission failed." }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Network error." }
  }
}
