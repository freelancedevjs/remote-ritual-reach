"use client"
import { useState } from "react"
import { postToSheet } from "@/lib/sheets"

type Props = {
  context?: string        // e.g. place name, service name — logged to sheets
  accentClass?: string
  compact?: boolean       // narrower header for inside BookingForm
}

export default function FreeConsultWidget({
  context = "General",
  accentClass = "bg-emerald-600",
  compact = false,
}: Props) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: "", whatsapp: "", concern: "" })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function update(k: keyof typeof form, v: string) {
    setForm(f => ({ ...f, [k]: v }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.whatsapp.trim() || !form.concern.trim()) return
    setSubmitting(true)
    setError(null)
    const result = await postToSheet({
      type: "consult",
      context,
      name: form.name,
      whatsapp: form.whatsapp,
      concern: form.concern,
      submittedAt: new Date().toISOString(),
    })
    setSubmitting(false)
    if (result.ok) {
      setDone(true)
    } else {
      setError(result.error)
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6 text-center">
        <div className="text-4xl mb-3">🙏</div>
        <h3 className="font-bold text-emerald-800 text-lg mb-1">We&apos;ll reach out within 24 hours</h3>
        <p className="text-emerald-700 text-sm">Check WhatsApp — our expert will message you personally.</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
      {/* Header */}
      <div className="bg-emerald-600 text-white px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">💬</span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`font-bold ${compact ? "text-sm" : "text-base"}`}>Free Expert Consultation</h3>
              <span className="bg-white text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">FREE</span>
            </div>
            <p className="text-emerald-100 text-xs mt-0.5">Speak to a specialist — no payment, ever</p>
          </div>
        </div>
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="bg-white text-emerald-700 font-bold text-xs px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors flex-shrink-0"
          >
            Book Now →
          </button>
        )}
      </div>

      {/* Body */}
      {!open ? (
        <div className="px-5 py-4">
          <div className="grid sm:grid-cols-3 gap-3 mb-4">
            {[
              { icon: "🎯", text: "Understand your specific situation" },
              { icon: "📋", text: "Get a personalised guidance plan" },
              { icon: "⏱️", text: "15-minute WhatsApp session" },
            ].map(i => (
              <div key={i.text} className="flex items-start gap-2">
                <span className="text-base flex-shrink-0">{i.icon}</span>
                <p className="text-emerald-800 text-xs leading-snug">{i.text}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setOpen(true)}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-sm transition-colors"
          >
            Book Your Free Consultation →
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="px-5 py-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
              Your Full Name *
            </label>
            <input
              required
              type="text"
              value={form.name}
              onChange={e => update("name", e.target.value)}
              placeholder="e.g. Sarah Mitchell"
              className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
              WhatsApp Number *
            </label>
            <input
              required
              type="tel"
              value={form.whatsapp}
              onChange={e => update("whatsapp", e.target.value)}
              placeholder="+1 555 000 0000"
              className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
              Describe Your Situation *
            </label>
            <textarea
              required
              rows={3}
              value={form.concern}
              onChange={e => update("concern", e.target.value)}
              placeholder="e.g. I've been struggling with financial blocks for years — tried everything but nothing works..."
              className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all resize-none"
            />
          </div>

          {error && <p className="text-red-600 text-xs">{error}</p>}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex-1 border border-stone-200 text-stone-500 font-semibold py-3 rounded-xl text-sm hover:bg-stone-50 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-[2] bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white font-bold py-3 rounded-xl text-sm transition-colors"
            >
              {submitting ? "Sending…" : "Book Free Session →"}
            </button>
          </div>
          <p className="text-xs text-stone-400 text-center">
            Our expert will WhatsApp you within 24 hours — completely free, no obligation.
          </p>
        </form>
      )}
    </div>
  )
}
