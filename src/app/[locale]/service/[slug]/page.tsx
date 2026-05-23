import { notFound } from "next/navigation"
import { mysticalSciences } from "@/lib/mystical-sciences-data"
import BookingForm from "@/components/BookingForm"
import ScrollReveal from "@/components/ScrollReveal"
import { Link } from "@/i18n/navigation"
import { setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    mysticalSciences.map(s => ({ locale, slug: s.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = mysticalSciences.find(s => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.name} — ${service.originalName} | SacredReach`,
    description: `${service.tagline} ${service.description.slice(0, 120)}`,
  }
}

function SacredMandala({ className = "" }: { className?: string }) {
  const rings = [190, 150, 110, 70, 30]
  const lines = Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * 2 * Math.PI
    return {
      x1: 200 + 30 * Math.cos(a),
      y1: 200 + 30 * Math.sin(a),
      x2: 200 + 190 * Math.cos(a),
      y2: 200 + 190 * Math.sin(a),
    }
  })
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none">
      {rings.map(r => (
        <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      ))}
      {lines.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="currentColor" strokeWidth="0.35" opacity="0.3" />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <ellipse
          key={i} cx="200" cy="70" rx="14" ry="38"
          stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4"
          transform={`rotate(${i * 45} 200 200)`}
        />
      ))}
      <circle cx="200" cy="200" r="4" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

const deliveryLabels: Record<string, string> = {
  "report": "📄 Written Report (PDF)",
  "video-call": "📹 Live Video Call",
  "audio": "🎙️ Audio Recording",
  "live-chat": "💬 Live Chat Session",
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const service = mysticalSciences.find(s => s.slug === slug)
  if (!service) notFound()

  const minPrice = Math.min(...service.packages.map(p => p.price))

  // Transform packages to the shape BookingForm expects (Ritual shape)
  const packageAsRituals = service.packages.map(pkg => ({
    id: pkg.id,
    name: pkg.name,
    description: pkg.description,
    offerings: pkg.youProvide,
    duration: pkg.duration,
    price: pkg.price,
    includes: pkg.includes,
    livestream: pkg.delivery === "video-call",
    source: pkg.source,
  }))

  return (
    <div className={`min-h-screen ${service.theme.bg} overflow-x-hidden`}>
      {/* Nav */}
      <nav
        className={`${service.theme.nav} ${service.theme.navText} px-4 py-3.5 flex items-center justify-between sticky top-0 z-50 shadow-lg`}
      >
        <span className="font-display font-bold flex items-center gap-2 text-sm md:text-base">
          <span className="text-xl">{service.icon}</span>
          <span className="truncate max-w-[160px] sm:max-w-none">{service.name}</span>
        </span>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/"
            className="bg-white/15 hover:bg-white/25 transition-colors px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide flex-shrink-0"
          >
            ← Back
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className={`relative ${service.theme.nav} ${service.theme.navText} overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none flex items-center justify-end pr-8">
          <SacredMandala className="w-72 h-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-start gap-4 mb-5">
            <span className="text-5xl md:text-6xl animate-float">{service.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/15 uppercase tracking-widest">
                  {service.category.replace("-", " ")}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  {service.originalName}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  {service.packages.length} packages · from ${minPrice}
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2">
                {service.name}
              </h1>
              <p className="opacity-80 text-base italic">✦ {service.tagline}</p>
              <p className="opacity-60 text-xs mt-2 flex items-center gap-1">
                🌐 Origin: {service.origin}
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-10">

        {/* Description + What it reveals */}
        <ScrollReveal className="mb-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-5">
              {service.description}
            </p>
            <blockquote className="border-l-4 border-amber-400 pl-4 py-2 bg-amber-50 rounded-r-xl">
              <p className="text-stone-600 italic text-sm leading-relaxed">{service.significance}</p>
            </blockquote>
          </div>
          <div className="space-y-3">
            <div className={`p-4 rounded-2xl ${service.theme.badge} ${service.theme.badgeText}`}>
              <p className="text-xs font-bold uppercase tracking-wide mb-2 opacity-70">Best For</p>
              <div className="flex flex-wrap gap-1.5">
                {service.bestFor.map(item => (
                  <span key={item} className="text-xs px-2 py-1 rounded-full bg-white/50 font-medium">
                    🙏 {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* What It Reveals */}
        <ScrollReveal className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-800 mb-6 flex items-center gap-2">
            <span>{service.icon}</span> What {service.name} Reveals About Your Life
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.whatItReveals.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 p-4 rounded-2xl border ${service.theme.badge} border-stone-200/60`}
              >
                <span className={`text-lg flex-shrink-0 mt-0.5 ${service.theme.badgeText}`}>✦</span>
                <p className={`text-sm leading-relaxed font-medium ${service.theme.badgeText}`}>{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Booking / Packages */}
        <ScrollReveal className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-800 mb-1">
            Book a Consultation
          </h2>
          <p className="text-stone-400 text-sm mb-6">
            Select a package, fill in the details, and receive your reading within the stated timeframe.
          </p>
          <BookingForm
            rituals={packageAsRituals}
            placeName={service.name}
            accentClass={service.theme.accent}
            accentTextClass={service.theme.accentText}
            badgeClass={service.theme.badge}
            badgeTextClass={service.theme.badgeText}
          />
        </ScrollReveal>

        {/* Delivery formats */}
        <ScrollReveal animation="reveal-stagger" className="mb-10">
          <h2 className="font-display text-2xl font-bold text-stone-800 mb-6">How Consultations Are Delivered</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📄", title: "PDF Report", desc: "Detailed written analysis delivered to your email within the stated timeframe." },
              { icon: "📹", title: "Video Call", desc: "Live Zoom/Google Meet session — interactive, real-time, with recording." },
              { icon: "🎙️", title: "Audio Note", desc: "Practitioner records a personal voice explanation of your reading." },
              { icon: "📦", title: "Physical Items", desc: "Where applicable — Rudraksha, prasad, or gemstone shipped internationally." },
            ].map(w => (
              <div key={w.title} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
                <span className="text-3xl block mb-3">{w.icon}</span>
                <h4 className="font-bold text-stone-800 mb-1 text-sm">{w.title}</h4>
                <p className="text-stone-500 text-xs leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Traditions */}
        <ScrollReveal className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-10">
          <h3 className="font-display font-bold text-stone-800 mb-4 text-lg">
            🏺 Prominent Traditions & Schools
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.prominentTraditions.map(t => (
              <span
                key={t}
                className={`text-sm px-3 py-1.5 rounded-full border ${service.theme.badge} ${service.theme.badgeText} font-medium`}
              >
                ✦ {t}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Auspicious times */}
        {service.auspiciousTimes.length > 0 && service.auspiciousTimes[0] !== "No specific requirement — photo-based readings are available anytime" && (
          <ScrollReveal className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-10">
            <h3 className="font-display font-bold text-stone-800 mb-4 text-lg">
              ✨ Auspicious Times for This Practice
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.auspiciousTimes.map(t => (
                <span key={t} className="text-xs bg-amber-50 text-amber-800 px-3 py-1.5 rounded-full border border-amber-200 font-medium">
                  🕐 {t}
                </span>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Diaspora */}
        <ScrollReveal className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-10">
          <h3 className="font-display font-bold text-stone-800 mb-3 text-lg">🌍 Practitioners & Seekers Worldwide</h3>
          <div className="flex flex-wrap gap-2">
            {service.diaspora.map(d => (
              <span key={d} className="text-xs bg-stone-100 text-stone-600 px-3 py-1.5 rounded-full border border-stone-200">
                {d}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Tags */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 justify-center py-4">
            {service.tags.map(tag => (
              <span
                key={tag}
                className={`text-xs px-3 py-1.5 rounded-full font-medium ${service.theme.badge} ${service.theme.badgeText}`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </main>

      {/* Footer */}
      <footer
        className={`${service.theme.nav} ${service.theme.navText} py-8 px-4 text-center mt-10`}
      >
        <p className="font-display text-sm font-bold mb-1 opacity-90">{service.name}</p>
        <p className="text-xs opacity-60">{service.originalName}</p>
        <p className="text-xs opacity-40 mt-3">
          © 2024 SacredReach · All consultations conducted by verified practitioners
        </p>
      </footer>
    </div>
  )
}
