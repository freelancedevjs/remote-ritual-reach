import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { Link } from "@/i18n/navigation"
import { religions } from "@/lib/religion-ad-data"
import WishForm from "@/components/WishForm"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    religions.map(r => ({ locale, religion: r.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; religion: string }>
}): Promise<Metadata> {
  const { religion } = await params
  const rel = religions.find(r => r.slug === religion)
  if (!rel) return {}
  return {
    title: `${rel.heroTitle} — ${rel.name} | SacredReach`,
    description: `${rel.heroSubtitle} Find the right sacred ritual for your life situation.`,
  }
}

function SacredMandala({ className = "" }: { className?: string }) {
  const rings = [190, 150, 110, 70, 30]
  const lines = Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * 2 * Math.PI
    return {
      x1: 200 + 30 * Math.cos(a), y1: 200 + 30 * Math.sin(a),
      x2: 200 + 190 * Math.cos(a), y2: 200 + 190 * Math.sin(a),
    }
  })
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden>
      {rings.map(r => <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="0.6" opacity="0.5" />)}
      {lines.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="currentColor" strokeWidth="0.35" opacity="0.3" />)}
      {Array.from({ length: 8 }, (_, i) => (
        <ellipse key={i} cx="200" cy="70" rx="14" ry="38" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4" transform={`rotate(${i * 45} 200 200)`} />
      ))}
      <circle cx="200" cy="200" r="4" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

export default async function AdReligionPage({
  params,
}: {
  params: Promise<{ locale: string; religion: string }>
}) {
  const { locale, religion } = await params
  setRequestLocale(locale)

  const rel = religions.find(r => r.slug === religion)
  if (!rel) notFound()

  return (
    <div className={`min-h-screen ${rel.theme.bg} overflow-x-hidden`}>

      {/* ── NAV ── */}
      <nav className={`${rel.theme.nav} ${rel.theme.navText} px-4 py-3.5 flex items-center justify-between sticky top-0 z-50 shadow-lg`}>
        <Link href="/" className="font-display font-bold flex items-center gap-2 text-sm md:text-base">
          <span className="text-xl">{rel.icon}</span>
          <span className="opacity-90">SacredReach</span>
        </Link>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/"
            className="bg-white/15 hover:bg-white/25 transition-colors px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide flex-shrink-0"
          >
            ← Explore All
          </Link>
        </div>
      </nav>

      {/* ── HERO with background video ── */}
      <section
        className={`relative min-h-[92vh] flex items-center justify-center overflow-hidden ${rel.theme.nav}`}
      >
        {/* Native video — SD 640×360, muted autoplay loop, no iframe/YouTube needed */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
            style={{ opacity: 0.45 }}
            aria-hidden
          >
            <source src={rel.heroVideoUrl} type="video/mp4" />
          </video>
        </div>

        {/* Mandala decoration — visible when iframe hasn't loaded */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none opacity-[0.07]">
          <SacredMandala className="w-80 h-80 text-white animate-spin-slow" />
        </div>

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 pointer-events-none" />

        {/* Text content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center text-white">
          <div className="text-7xl md:text-8xl mb-5 animate-float inline-block">{rel.icon}</div>
          <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-5 bg-white/15 uppercase tracking-widest border border-white/20">
            {rel.name}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            {rel.heroTitle}
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
            {rel.heroSubtitle}
          </p>
          <div className="mt-8">
            <a
              href="#wish"
              className={`inline-flex items-center gap-2 ${rel.theme.accent} ${rel.theme.accentText} font-bold px-8 py-4 rounded-xl text-base shadow-xl transition-all hover:scale-105 active:scale-95`}
            >
              Describe Your Wish 🙏
            </a>
          </div>
        </div>
      </section>

      {/* ── SACRED QUOTES ── */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Sacred Wisdom</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-800 mt-2">
            {rel.icon} Words That Have Guided Millions
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {rel.quotes.map((q, i) => (
            <blockquote
              key={i}
              className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm"
            >
              <div
                className="w-1 h-full absolute left-0 top-0 rounded-l-2xl hidden"
                aria-hidden
              />
              <div className="flex gap-4">
                <div
                  className="w-1 flex-shrink-0 rounded-full self-stretch"
                  style={{ background: "var(--accent-bar)" }}
                />
                <div>
                  <p className="text-stone-700 italic leading-relaxed text-base mb-3">
                    &ldquo;{q.text}&rdquo;
                  </p>
                  <footer className="text-xs font-bold text-stone-400 uppercase tracking-wide">
                    — {q.source}
                  </footer>
                </div>
              </div>
              <style>{`:root { --accent-bar: currentColor }`}</style>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Accent bar styling for quotes — use a colored left border instead */}
      {/* ── LIFE PROBLEMS → REMEDIES ── */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Sacred Remedies</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-800 mt-2">
              What Are You Going Through?
            </h2>
            <p className="text-stone-500 text-base mt-2 max-w-xl mx-auto">
              Every life situation has a sacred response. Here are the most common problems — and the rituals that address them.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rel.lifeProblems.map((lp, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden hover:shadow-md transition-all group"
              >
                {/* Colored top strip */}
                <div className={`h-1.5 w-full ${rel.theme.nav.replace("bg-", "bg-")}`} />
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl flex-shrink-0 mt-0.5">{lp.icon}</span>
                    <h3 className="font-bold text-stone-800 text-sm leading-snug">{lp.problem}</h3>
                  </div>
                  <p className="text-stone-500 text-xs leading-relaxed mb-4">{lp.description}</p>
                  <div className={`${rel.theme.badge} rounded-xl p-3`}>
                    <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${rel.theme.badgeText} opacity-60`}>
                      Ritual Remedy
                    </p>
                    <p className={`text-sm font-semibold ${rel.theme.badgeText} mb-1`}>{lp.remedy}</p>
                    <Link
                      href={`/place/${lp.placeSlug}`}
                      className={`text-xs ${rel.theme.badgeText} opacity-70 hover:opacity-100 transition-opacity flex items-center gap-1 group-hover:gap-2 transition-all`}
                    >
                      📍 {lp.place} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WISH FORM ── */}
      <section id="wish" className="py-16 px-4 bg-white/60 backdrop-blur-sm border-t border-stone-100">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Your Intention</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-800 mt-2 mb-3">
            Describe Your Wish
          </h2>
          <p className="text-stone-500 text-base">
            Tell us what you&apos;re going through. We&apos;ll suggest the right sacred path — the right ritual, the right place, the right time.
          </p>
        </div>
        <WishForm
          religion={religion}
          locale={locale}
          accentClass={rel.theme.accent}
          accentTextClass={rel.theme.accentText}
        />
      </section>

      {/* ── TRUST ROW ── */}
      <section className="border-t border-stone-200 bg-white py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: "🌍", label: "40+ Countries", sub: "Devotees worldwide" },
            { icon: "🏛️", label: "22 Sacred Places", sub: "Verified temples & dargahs" },
            { icon: "📹", label: "Video Proof", sub: "Every ritual documented" },
            { icon: "🤲", label: "All Faiths Welcome", sub: "No religion, no barrier" },
          ].map(t => (
            <div key={t.label} className="py-3">
              <span className="text-2xl block mb-1">{t.icon}</span>
              <p className="text-sm font-bold text-stone-700">{t.label}</p>
              <p className="text-xs text-stone-400">{t.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={`${rel.theme.nav} ${rel.theme.navText} py-8 px-4 text-center`}>
        <p className="font-display text-sm font-bold mb-1 opacity-90">{rel.name} · SacredReach</p>
        <p className="text-xs opacity-50 mt-1">
          Sacred rituals performed with reverence and full video documentation
        </p>
        <div className="mt-3">
          <Link href="/" className="text-xs opacity-60 hover:opacity-90 transition-opacity underline">
            ← Back to all sacred places
          </Link>
        </div>
      </footer>
    </div>
  )
}
