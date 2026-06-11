import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { setRequestLocale } from "next-intl/server"
import FreeConsultWidget from "@/components/FreeConsultWidget"

export const metadata: Metadata = {
  title: "Free Expert Consultation — SacredReach",
  description: "Speak to a Vedic specialist about your situation — completely free. Get personalised guidance on financial blocks, relationships, health, career, and more.",
}

const PROBLEM_AREAS = [
  { icon: "💸", title: "Financial Blocks", desc: "Money leaving no matter how hard you work" },
  { icon: "💔", title: "Relationship Patterns", desc: "The same arguments and wounds, on repeat" },
  { icon: "😰", title: "Unexplained Anxiety", desc: "Stress that therapy cannot find the source of" },
  { icon: "🚧", title: "Career Ceiling", desc: "Invisible forces blocking your next level" },
  { icon: "🏥", title: "Chronic Health Issues", desc: "Illness doctors cannot fully explain" },
  { icon: "🌫️", title: "Manifestation Blocks", desc: "You do the work but nothing shifts" },
]

export default async function ConsultPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="min-h-screen bg-stone-950">
      {/* Nav */}
      <nav className="bg-stone-900/80 backdrop-blur border-b border-white/8 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="font-display font-bold text-amber-400 tracking-widest uppercase text-sm">
          ✦ SacredReach
        </Link>
        <Link href="/" className="bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-lg text-sm">
          ← Back to Home
        </Link>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-950 text-white py-20 px-4 border-b border-stone-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            ✦ No Payment · No Obligation · No Catch
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Talk to a{" "}
            <span className="text-emerald-400">Vedic Expert</span>
            <br />— for Free
          </h1>
          <p className="text-stone-300 text-lg max-w-xl mx-auto mb-6 leading-relaxed">
            Describe your situation. Our specialist will analyse the energetic root cause and tell you
            exactly what type of remedy, ritual, or consultation would help — with zero pressure to buy anything.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {[
              { icon: "⏱️", label: "15-min WhatsApp session" },
              { icon: "🎯", label: "Personalised to your situation" },
              { icon: "🆓", label: "Completely free, always" },
            ].map(f => (
              <span key={f.label} className="bg-white/8 border border-white/10 px-4 py-2 rounded-full text-stone-300">
                {f.icon}&nbsp;&nbsp;{f.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem areas */}
      <section className="py-14 px-4 bg-stone-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-xl font-bold text-white text-center mb-2">
            We specialise in these areas
          </h2>
          <p className="text-stone-500 text-sm text-center mb-8">
            Our experts have helped thousands of people with these exact patterns
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-14">
            {PROBLEM_AREAS.map(p => (
              <div key={p.title} className="bg-stone-900/60 border border-stone-800/60 rounded-xl p-4 flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-0.5">{p.title}</h3>
                  <p className="text-stone-500 text-xs leading-snug">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Widget */}
          <div className="max-w-2xl mx-auto">
            <FreeConsultWidget context="Consult Page" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 px-4 bg-stone-900 border-t border-stone-800/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-xl font-bold text-white text-center mb-10">How the free session works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", icon: "📝", title: "Share your situation", desc: "Fill in the short form above — name, WhatsApp, and a brief description of what you're facing." },
              { step: "2", icon: "💬", title: "Expert reviews & reaches out", desc: "A Vedic specialist reviews your submission and messages you on WhatsApp within 24 hours." },
              { step: "3", icon: "🎯", title: "Get your personalised guidance", desc: "15-minute session to understand the root cause and the specific type of intervention that addresses it." },
            ].map(s => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {s.step}
                </div>
                <div className="text-2xl mb-2">{s.icon}</div>
                <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 border-t border-stone-800/50 py-8 px-4 text-center">
        <p className="text-stone-600 text-xs">© 2024 SacredReach · Free Expert Consultation</p>
      </footer>
    </main>
  )
}
