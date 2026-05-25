"use client"
import { useState, useEffect, useRef } from "react"
import { postToSheet } from "@/lib/sheets"

const SUBJECTS = [
  "Booking Inquiry","Booking Issue / Problem","Temple / Shrine Partnership",
  "Priest / Officiant Application","Prasad Shipping Query","Video Delivery Query",
  "Refund Request","Technical Problem","General Feedback","Other",
]
const SOURCES = [
  "Google Search","WhatsApp / Friend","Facebook / Instagram","YouTube",
  "Diaspora Community Group","Temple / Gurdwara Recommendation","Other",
]
const COUNTRIES = [
  "United States","United Kingdom","Canada","Australia","UAE","Saudi Arabia",
  "Qatar","Kuwait","Bahrain","Oman","Singapore","Malaysia","New Zealand",
  "Germany","Netherlands","France","Italy","Sweden","Norway","Denmark",
  "Japan","South Korea","Pakistan","Bangladesh","Sri Lanka","Nepal",
  "Kenya","South Africa","Mauritius","Fiji","Trinidad & Tobago","India","Other",
]
const PLACES = [
  "Kashi Vishwanath Temple","Tirumala Venkateswara Temple","Shri Sai Baba Mandir, Shirdi",
  "Kedarnath Jyotirlinga","Vaishno Devi Shrine","Mahakaleshwar Jyotirlinga",
  "Jagannath Temple Puri","Harmandir Sahib (Golden Temple)","Hemkund Sahib",
  "Ajmer Sharif Dargah","Data Darbar Shrine","Nizamuddin Dargah",
  "Basilica of Our Lady of Health, Velankanni","Basilica of Bom Jesus Goa",
  "Mahabodhi Temple Bodh Gaya","Palitana Temples","Osho Ashram Pune",
  "Amritapuri Ashram","ISKCON Vrindavan","Belur Math",
  "Not related to a specific place",
]

const STORAGE_KEY = "sr_contact"

type Props = { locale: string; accentClass?: string }
type FormState = "idle" | "submitting" | "success" | "error"

export default function ContactForm({ locale, accentClass = "bg-amber-600 hover:bg-amber-700" }: Props) {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, setState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [refId, setRefId] = useState("")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [geo, setGeo] = useState<{ lat: number; lng: number } | null>(null)

  // Prefill non-sensitive fields from localStorage (lazy initializer pattern)
  const [prefill, setPrefill] = useState(() => {
    const initial = { name: "", country: "", source: "" }
    if (typeof window === "undefined") return initial
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) return { ...initial, ...JSON.parse(saved) as Partial<typeof initial> }
    } catch {}
    return initial
  })

  // Passive geolocation
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => setGeo({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => {}
      )
    }
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFieldErrors({})
    setErrorMsg("")

    const fd = new FormData(e.currentTarget)
    const name         = (fd.get("name")          as string || "").trim()
    const email        = (fd.get("email")         as string || "").trim()
    const phone        = (fd.get("phone")         as string || "").trim()
    const country      = (fd.get("country")       as string || "").trim()
    const subject      = (fd.get("subject")       as string || "").trim()
    const relatedPlace = (fd.get("relatedPlace")  as string || "").trim()
    const message      = (fd.get("message")       as string || "").trim()
    const source       = (fd.get("source")        as string || "").trim()

    // Per-field validation
    const errors: Record<string, string> = {}
    if (!name) errors.name = "Name is required."
    if (!email) errors.email = "Email address is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Email address is invalid."
    if (!country) errors.country = "Please select your country."
    if (!subject) errors.subject = "Please select a subject."
    if (!message) errors.message = "Message is required."
    else if (message.length < 10) errors.message = "Message must be at least 10 characters."

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setState("submitting")

    const id = crypto.randomUUID()
    const result = await postToSheet({
      type: "contact",
      submissionRef: id,
      name, email,
      phone: phone || "",
      country, subject,
      relatedPlace: relatedPlace || "",
      message,
      source: source || "",
      locale,
      submittedAt: new Date().toISOString(),
      ...(geo ? { latitude: geo.lat, longitude: geo.lng } : {}),
    })

    if (result.ok) {
      setRefId(id.slice(0, 8))
      setState("success")
      formRef.current?.reset()
      // Persist non-sensitive fields for prefill next time
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, country, source }))
      } catch {}
    } else {
      setState("error")
      setErrorMsg(result.error)
    }
  }

  if (state === "success") {
    return (
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-10 text-center max-w-lg mx-auto">
        <div className="text-5xl mb-4">🙏</div>
        <h3 className="text-xl font-bold text-stone-800 mb-2">Message Received!</h3>
        <p className="text-stone-500 text-sm mb-4 leading-relaxed">
          We have received your message
          {refId && <> (ref: <code className="bg-stone-100 px-1 rounded text-xs">{refId}</code>)</>}.
          <br />We will reach out when the time is right.
        </p>
        <button onClick={() => setState("idle")} className="text-sm text-stone-500 underline hover:text-stone-700">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
      {/* Network / submission errors only — validation errors are shown per-field */}
      {state === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
          {errorMsg || "Something went wrong. Please try again."}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Your full name"
            value={prefill.name}
            onChange={e => setPrefill(p => ({ ...p, name: e.target.value }))}
            className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
              fieldErrors.name
                ? "border-red-300 focus:border-red-400 focus:ring-red-400/10"
                : "border-stone-200 focus:border-stone-400 focus:ring-stone-400/10"
            }`}
          />
          {fieldErrors.name && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
              fieldErrors.email
                ? "border-red-300 focus:border-red-400 focus:ring-red-400/10"
                : "border-stone-200 focus:border-stone-400 focus:ring-stone-400/10"
            }`}
          />
          {fieldErrors.email && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-1">
            WhatsApp / Phone <span className="text-stone-400 font-normal">(optional)</span>
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="+1 555 000 0000"
            className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-stone-400 bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-1">
            Country / Region <span className="text-red-500">*</span>
          </label>
          <select
            name="country"
            required
            value={prefill.country}
            onChange={e => setPrefill(p => ({ ...p, country: e.target.value }))}
            className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
              fieldErrors.country
                ? "border-red-300 focus:border-red-400 focus:ring-red-400/10"
                : "border-stone-200 focus:border-stone-400 focus:ring-stone-400/10"
            }`}
          >
            <option value="">Select your country</option>
            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {fieldErrors.country && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.country}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-stone-700 mb-1">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          name="subject"
          required
          className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
            fieldErrors.subject
              ? "border-red-300 focus:border-red-400 focus:ring-red-400/10"
              : "border-stone-200 focus:border-stone-400 focus:ring-stone-400/10"
          }`}
        >
          <option value="">What is this about?</option>
          {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {fieldErrors.subject && (
          <p className="text-xs text-red-500 mt-1">{fieldErrors.subject}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-stone-700 mb-1">
          Related Sacred Place <span className="text-stone-400 font-normal">(if applicable)</span>
        </label>
        <select
          name="relatedPlace"
          className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-stone-400 bg-white"
        >
          <option value="">Select a place (optional)</option>
          {PLACES.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-stone-700 mb-1">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Describe your question, issue or feedback in detail..."
          className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all bg-white resize-none ${
            fieldErrors.message
              ? "border-red-300 focus:border-red-400 focus:ring-red-400/10"
              : "border-stone-200 focus:border-stone-400 focus:ring-stone-400/10"
          }`}
        />
        {fieldErrors.message && (
          <p className="text-xs text-red-500 mt-1">{fieldErrors.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-stone-700 mb-1">
          How did you hear about us? <span className="text-stone-400 font-normal">(optional)</span>
        </label>
        <select
          name="source"
          value={prefill.source}
          onChange={e => setPrefill(p => ({ ...p, source: e.target.value }))}
          className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-stone-400 bg-white"
        >
          <option value="">Select...</option>
          {SOURCES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className={`w-full text-white font-semibold py-3.5 rounded-xl ${accentClass} transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm`}
      >
        {state === "submitting" ? "Sending…" : "Send Message →"}
      </button>

      <p className="text-xs text-stone-400 text-center">
        We&apos;ll be in touch · Your data is never shared with third parties
      </p>
    </form>
  )
}
