"use client"
import { useActionState, useEffect, useRef } from "react"
import { submitContact, type ContactResult } from "@/app/actions/contact"

const SUBJECTS = [
  "Booking Inquiry",
  "Booking Issue / Problem",
  "Temple / Shrine Partnership",
  "Priest / Officiant Application",
  "Prasad Shipping Query",
  "Video Delivery Query",
  "Refund Request",
  "Technical Problem",
  "General Feedback",
  "Other",
]

const SOURCES = [
  "Google Search",
  "WhatsApp / Friend",
  "Facebook / Instagram",
  "YouTube",
  "Diaspora Community Group",
  "Temple / Gurdwara Recommendation",
  "Other",
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

type Props = {
  locale: string
  accentClass?: string
}

export default function ContactForm({ locale, accentClass = "bg-amber-600 hover:bg-amber-700" }: Props) {
  const action = submitContact.bind(null, locale)
  const [state, formAction, pending] = useActionState<ContactResult | null, FormData>(
    action,
    null
  )
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.ok) formRef.current?.reset()
  }, [state])

  if (state?.ok) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-10 text-center max-w-lg mx-auto">
        <div className="text-5xl mb-4">🙏</div>
        <h3 className="text-xl font-bold text-stone-800 mb-2">Message Received!</h3>
        <p className="text-stone-500 text-sm mb-4">
          We've recorded your message (ref: <code className="bg-stone-100 px-1 rounded text-xs">{state.id.slice(0,8)}</code>).
          Our team typically responds within 24 hours.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="text-sm text-stone-500 underline hover:text-stone-700"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-5 max-w-2xl mx-auto">
      {state && !state.ok && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
          {state.error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name" type="text" required
            placeholder="Your full name"
            className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-stone-400 bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            name="email" type="email" required
            placeholder="you@example.com"
            className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-stone-400 bg-white"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-1">
            WhatsApp / Phone <span className="text-stone-400 font-normal">(optional)</span>
          </label>
          <input
            name="phone" type="tel"
            placeholder="+1 555 000 0000"
            className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-stone-400 bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-1">
            Country / Region <span className="text-red-500">*</span>
          </label>
          <select
            name="country" required
            className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-stone-400 bg-white"
          >
            <option value="">Select your country</option>
            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-stone-700 mb-1">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          name="subject" required
          className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-stone-400 bg-white"
        >
          <option value="">What is this about?</option>
          {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
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
          name="message" required rows={5}
          placeholder="Describe your question, issue or feedback in detail..."
          className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-stone-400 bg-white resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-stone-700 mb-1">
          How did you hear about us? <span className="text-stone-400 font-normal">(optional)</span>
        </label>
        <select
          name="source"
          className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-stone-400 bg-white"
        >
          <option value="">Select...</option>
          {SOURCES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <button
        type="submit"
        disabled={pending}
        className={`w-full text-white font-semibold py-3.5 rounded-xl ${accentClass} transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm`}
      >
        {pending ? "Sending..." : "Send Message →"}
      </button>

      <p className="text-xs text-stone-400 text-center">
        We respond within 24 hours · Your data is stored securely and never shared
      </p>
    </form>
  )
}
