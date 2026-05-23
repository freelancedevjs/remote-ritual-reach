import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { setRequestLocale } from "next-intl/server"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact & Support — SacredReach",
  description: "Get help with your ritual booking, prasad delivery, video proof, or any other question. Our team responds within 24 hours.",
}

const FAQS = [
  {
    q: "How soon will I receive the ritual video?",
    a: "Standard bookings receive video within 24 hours of the ritual. Priority Video add-on delivers within 4 hours.",
  },
  {
    q: "What if I'm not happy with the ritual?",
    a: "If video proof isn't delivered within 48 hours of the ritual date, you receive a full refund — no questions asked. For quality concerns, contact us within 7 days.",
  },
  {
    q: "Can I change the ritual date after booking?",
    a: "Yes — contact us at least 48 hours before the original date and we'll reschedule at no charge.",
  },
  {
    q: "How long does prasad shipping take?",
    a: "International shipping takes 10–21 days depending on destination country. Tracking is provided.",
  },
  {
    q: "I don't know my gotra / family identifier. Can I still book?",
    a: "Absolutely. For Hindu rituals, Kashyap gotra is the universal fallback. For other traditions, we use your name alone — it's sufficient.",
  },
  {
    q: "Can a temple or gurdwara partner with SacredReach?",
    a: "Yes — use the form below and select 'Temple / Shrine Partnership' as the subject. We'll respond with our partnership terms.",
  },
]

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Nav */}
      <nav className="bg-stone-900 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <Link href="/" className="font-bold flex items-center gap-2 text-amber-400">
          SacredReach
        </Link>
        <Link
          href="/"
          className="bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-lg text-sm"
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Hero */}
      <section className="bg-stone-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">Support</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">How Can We Help?</h1>
          <p className="text-stone-300 text-base max-w-xl mx-auto">
            Whether it's a booking question, a delivery update, or a partnership inquiry — our team is here. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Quick contact strips */}
      <section className="border-b border-stone-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-4">
          {[
            { icon: "💬", label: "WhatsApp", value: "+91 98765 43210", sub: "Mon–Sun, 6AM–10PM IST" },
            { icon: "📧", label: "Email", value: "support@sacredreach.com", sub: "24-hour response guarantee" },
            { icon: "📍", label: "Office", value: "Mumbai, India", sub: "Serving 40+ countries worldwide" },
          ].map(c => (
            <div key={c.label} className="flex items-start gap-3 p-4 rounded-xl bg-stone-50">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <p className="font-semibold text-stone-800 text-sm">{c.label}</p>
                <p className="text-stone-700 text-sm font-medium">{c.value}</p>
                <p className="text-stone-400 text-xs">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-5 gap-10">

        {/* FAQ sidebar */}
        <aside className="md:col-span-2">
          <h2 className="text-lg font-bold text-stone-800 mb-5">Frequently Asked</h2>
          <div className="space-y-4">
            {FAQS.map(f => (
              <div key={f.q} className="bg-white border border-stone-100 rounded-xl p-4 shadow-sm">
                <p className="font-semibold text-stone-800 text-sm mb-1.5">{f.q}</p>
                <p className="text-stone-500 text-xs leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </aside>

        {/* Contact form */}
        <div className="md:col-span-3">
          <h2 className="text-lg font-bold text-stone-800 mb-2">Send Us a Message</h2>
          <p className="text-stone-400 text-sm mb-6">
            All fields marked <span className="text-red-500">*</span> are required.
          </p>
          <ContactForm locale={locale} />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 text-center py-6 text-xs">
        © 2024 SacredReach · Contact & Support
      </footer>
    </main>
  )
}
