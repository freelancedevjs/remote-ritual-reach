"use client"
import { useState } from "react"
import { useRouter } from "@/i18n/navigation"
import { postToSheet } from "@/lib/sheets"

type Props = {
  religion: string
  locale: string
  accentClass: string
  accentTextClass: string
}

type FormState = "idle" | "submitting" | "error"

export default function WishForm({ religion, locale, accentClass, accentTextClass }: Props) {
  const router = useRouter()
  const [form, setForm] = useState({ wish: "", whatsapp: "", name: "" })
  const [status, setStatus] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [wishError, setWishError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setWishError("")
    setErrorMsg("")

    const wish = form.wish.trim()
    if (wish.length < 10) {
      setWishError("Please describe your wish or situation in at least 10 characters.")
      return
    }

    setStatus("submitting")

    // 6-digit numeric reference (easier to read/quote than UUID)
    const ref = String(Math.floor(100000 + Math.random() * 900000))

    const result = await postToSheet({
      type: "wish",
      wishRef: ref,
      religion,
      name: form.name.trim() || "",
      whatsapp: form.whatsapp.trim() || "",
      wish,
      locale,
      submittedAt: new Date().toISOString(),
    })

    if (result.ok) {
      const qs = new URLSearchParams({ ref, religion })
      if (form.name.trim()) qs.set("name", form.name.trim())
      router.push(`/ad/thank-you?${qs.toString()}`)
    } else {
      setStatus("error")
      setErrorMsg(result.error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
          {errorMsg || "Something went wrong. Please try again."}
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold text-stone-700 mb-1.5">
          Describe your wish or situation <span className="text-red-500">*</span>
        </label>
        <textarea
          value={form.wish}
          onChange={e => {
            setForm(f => ({ ...f, wish: e.target.value }))
            if (wishError && e.target.value.trim().length >= 10) setWishError("")
          }}
          rows={4}
          placeholder="Tell us what you're going through — a problem, a longing, a hope, or a specific wish..."
          className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-400/10 transition-all bg-white resize-none"
        />
        {wishError && <p className="text-xs text-red-500 mt-1">{wishError}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-1.5">
            Your Name <span className="text-stone-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="First name or full name"
            className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-stone-400 bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-1.5">
            WhatsApp Number <span className="text-stone-400 font-normal">(optional)</span>
          </label>
          <input
            type="tel"
            value={form.whatsapp}
            onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}
            placeholder="+1 555 000 0000"
            className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-stone-400 bg-white transition-all"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`w-full ${accentClass} ${accentTextClass} font-semibold py-3.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm`}
      >
        {status === "submitting" ? "Sending…" : "Send My Wish 🙏"}
      </button>

      <p className="text-xs text-stone-400 text-center">
        Your message is private · We&apos;ll suggest the right ritual or sacred path for your situation
      </p>
    </form>
  )
}
