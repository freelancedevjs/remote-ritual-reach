/**
 * Form submission endpoint.
 *
 * Supports two backends — swap by changing NEXT_PUBLIC_SHEETS_URL:
 *
 *  A) Google Apps Script web-app URL  (see /scripts/google-apps-script.js)
 *     → uses Content-Type: text/plain  (Apps Script reads postData.contents)
 *
 *  B) Make.com (Integromat) custom webhook URL
 *     → uses Content-Type: application/json  (standard webhook)
 *     Make.com free tier: 1,000 ops/month permanent — no expiry.
 *     Setup: make.com → New scenario → Webhooks → Custom webhook → copy URL
 *     Then add: Microsoft Excel 365 → Add a Row (map fields from the webhook body)
 *
 * Set NEXT_PUBLIC_SHEETS_URL in your hosting env vars / GitHub Secrets.
 * Also add it to .env.local for local dev.
 */

const ENDPOINT = process.env.NEXT_PUBLIC_SHEETS_URL ?? ""

// Detect which backend we're talking to by the URL shape
const isMake = ENDPOINT.includes("hook.") && ENDPOINT.includes("make.com")

export type SheetResult =
  | { ok: true }
  | { ok: false; error: string }

export async function postToSheet(payload: Record<string, unknown>): Promise<SheetResult> {
  if (!ENDPOINT) {
    console.warn("[sheets] NEXT_PUBLIC_SHEETS_URL is not set — skipping submission.")
    return { ok: true }
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        // Apps Script needs text/plain; Make.com needs application/json
        "Content-Type": isMake ? "application/json" : "text/plain",
      },
      body: JSON.stringify(payload),
    })

    // Make.com returns 200 with "Accepted" text on success
    if (isMake) {
      return res.ok ? { ok: true } : { ok: false, error: `Webhook error ${res.status}` }
    }

    // Apps Script always returns 200; check the JSON body
    const data = await res.json() as { success: boolean; error?: string }
    if (data.success) return { ok: true }
    return { ok: false, error: data.error ?? "Submission failed." }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Network error." }
  }
}
