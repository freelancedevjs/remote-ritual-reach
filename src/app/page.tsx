import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SacredReach — Your Faith Has No Distance",
  description: "Book rituals at holy temples, dargahs, gurdwaras and churches worldwide. Performed on your behalf with video proof and prasad shipping.",
}

const faithPaths = [
  {
    href: "/hindu",
    label: "Hindu Temples",
    icon: "🛕",
    subtitle: "Tirupati • Kedarnath • Shirdi • Vaishno Devi & more",
    description: "Sacred rituals at India's most revered temples, performed by verified pandits on your behalf.",
    bg: "bg-orange-50",
    border: "border-orange-200",
    heading: "text-orange-800",
    sub: "text-orange-600",
    cta: "bg-orange-600 hover:bg-orange-700",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    href: "/dargah",
    label: "Dargahs & Shrines",
    icon: "☪️",
    subtitle: "Ajmer Sharif • Data Darbar • Nizamuddin & more",
    description: "Chaddar offerings, qawwali dedications and fatiha at the most beloved dargahs of the subcontinent.",
    bg: "bg-green-50",
    border: "border-green-200",
    heading: "text-green-800",
    sub: "text-green-600",
    cta: "bg-green-700 hover:bg-green-800",
    badge: "bg-green-100 text-green-700",
  },
  {
    href: "/sikh",
    label: "Sikh Gurdwaras",
    icon: "🌟",
    subtitle: "Golden Temple • Hemkund Sahib & more",
    description: "Ardas, langar seva, and Akhand Path bookings at Sri Harmandir Sahib and other sacred gurdwaras.",
    bg: "bg-blue-50",
    border: "border-blue-200",
    heading: "text-blue-800",
    sub: "text-blue-600",
    cta: "bg-blue-700 hover:bg-blue-800",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    href: "/church",
    label: "Churches & Basilicas",
    icon: "⛪",
    subtitle: "Velankanni • St. Thomas Mount & more",
    description: "Mass offerings, novena dedications and candle lightings at sacred Catholic shrines in South India.",
    bg: "bg-sky-50",
    border: "border-sky-200",
    heading: "text-sky-800",
    sub: "text-sky-600",
    cta: "bg-sky-700 hover:bg-sky-800",
    badge: "bg-sky-100 text-sky-700",
  },
]

const steps = [
  { n: "1", title: "Choose Your Shrine", desc: "Select the holy place and the specific ritual you want performed." },
  { n: "2", title: "Provide Your Details", desc: "Share your name, family members, and your specific intention or wish." },
  { n: "3", title: "We Perform the Ritual", desc: "Our verified local priest performs the ritual on the auspicious date you choose." },
  { n: "4", title: "Receive Video Proof", desc: "Get a video with your name visible, photos, and your prasad or blessed items shipped to you." },
]

const trust = [
  { icon: "✅", label: "Verified Priests & Khadims", desc: "Every facilitator is background-checked and temple-authorized." },
  { icon: "📹", label: "Video Proof Every Time", desc: "Your name is visible in every ritual. No proof = full refund." },
  { icon: "📦", label: "Prasad Shipped Worldwide", desc: "Receive blessed items at your doorstep, anywhere in the world." },
  { icon: "🙏", label: "12,000+ Rituals Performed", desc: "Trusted by diaspora families across 40+ countries since 2022." },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-stone-400 text-sm font-medium tracking-widest uppercase mb-4">SacredReach</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your Faith Has<br />
            <span className="text-amber-400">No Distance</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Can&apos;t travel to your holy place? We perform sacred rituals on your behalf — with live video proof, your name clearly visible, and blessed offerings shipped to your door.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <span className="bg-stone-700 px-4 py-2 rounded-full">📹 Video proof guaranteed</span>
            <span className="bg-stone-700 px-4 py-2 rounded-full">📦 Prasad shipped worldwide</span>
            <span className="bg-stone-700 px-4 py-2 rounded-full">✅ Verified priests only</span>
          </div>
        </div>
      </section>

      {/* Faith selector */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-stone-800 mb-3">Choose Your Faith Path</h2>
          <p className="text-center text-stone-500 mb-10">Each section is dedicated solely to that tradition — respectfully separate.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {faithPaths.map((f) => (
              <Link key={f.href} href={f.href} className={`block rounded-2xl border-2 ${f.bg} ${f.border} p-6 hover:shadow-lg transition-all group`}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{f.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`text-xl font-bold ${f.heading}`}>{f.label}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${f.badge}`}>Book Now</span>
                    </div>
                    <p className={`text-sm font-medium mb-2 ${f.sub}`}>{f.subtitle}</p>
                    <p className="text-stone-600 text-sm mb-4">{f.description}</p>
                    <span className={`inline-block text-white text-sm font-semibold px-4 py-2 rounded-lg ${f.cta} transition-colors`}>
                      Browse {f.label} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 font-bold text-xl flex items-center justify-center mx-auto mb-3">{s.n}</div>
                <h3 className="font-semibold text-stone-800 mb-2">{s.title}</h3>
                <p className="text-stone-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-stone-800 mb-10">Why 12,000+ Families Trust Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {trust.map((t) => (
              <div key={t.label} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                <span className="text-3xl">{t.icon}</span>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">{t.label}</h3>
                  <p className="text-stone-500 text-sm">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-stone-900 text-center">
        <p className="text-stone-400 text-sm">© 2024 SacredReach. Serving devotees worldwide with reverence and integrity.</p>
        <p className="text-stone-600 text-xs mt-2">Each faith community&apos;s pages are maintained separately and with full respect for their traditions.</p>
      </footer>
    </main>
  )
}
