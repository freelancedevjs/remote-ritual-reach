import { notFound } from "next/navigation"
import { places } from "@/lib/places-data"
import BookingForm from "@/components/BookingForm"
import ScrollReveal from "@/components/ScrollReveal"
import { Link } from "@/i18n/navigation"
import { getTranslations } from "next-intl/server"
import { routing } from "@/i18n/routing"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    places.map(p => ({ locale, slug: p.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug } = await params
  const place = places.find(p => p.slug === slug)
  if (!place) return {}
  return {
    title: `${place.name} — Remote Ritual Booking | SacredReach`,
    description: `Book rituals at ${place.name} (${place.location.city}) from anywhere in the world. Performed by verified priests with video proof and shipping.`,
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
    <svg className={className} viewBox="0 0 400 400" fill="none">
      {rings.map(r => <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="0.6" opacity="0.5" />)}
      {lines.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="currentColor" strokeWidth="0.35" opacity="0.3" />)}
      {Array.from({ length: 8 }, (_, i) => (
        <ellipse key={i} cx="200" cy="70" rx="14" ry="38" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4" transform={`rotate(${i * 45} 200 200)`} />
      ))}
      <circle cx="200" cy="200" r="4" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

export default async function PlacePage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params
  const place = places.find(p => p.slug === slug)
  if (!place) notFound()

  const t = await getTranslations({ locale, namespace: 'place' })
  const tNav = await getTranslations({ locale, namespace: 'nav' })
  const minPrice = Math.min(...place.rituals.map(r => r.price))

  return (
    <div className={`min-h-screen ${place.theme.bg} overflow-x-hidden`}>
      <nav className={`${place.theme.nav} ${place.theme.navText} px-4 py-3.5 flex items-center justify-between sticky top-0 z-50 shadow-lg`}>
        <span className="font-display font-bold flex items-center gap-2 text-sm md:text-base">
          <span className="text-xl">{place.icon}</span>
          <span className="truncate max-w-[160px] sm:max-w-none">{place.name}</span>
        </span>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/"
            className="bg-white/15 hover:bg-white/25 transition-colors px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide flex-shrink-0"
          >
            {tNav('back')}
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className={`relative ${place.theme.nav} ${place.theme.navText} overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none flex items-center justify-end pr-8">
          <SacredMandala className="w-72 h-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-start gap-4 mb-5">
            <span className="text-5xl md:text-6xl animate-float">{place.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/15 uppercase tracking-widest capitalize">
                  {place.type}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  {place.faith}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  {place.rituals.length} ritual{place.rituals.length !== 1 ? "s" : ""} · from ${minPrice}
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2">
                {place.name}
              </h1>
              <p className="opacity-80 text-sm flex items-center gap-1">
                📍 {place.location.city}, {place.location.state}, {place.location.country}
              </p>
              {place.trustNotes && (
                <p className="mt-3 text-xs opacity-60 flex items-center gap-1.5">
                  🏛️ {t('managed_by')}: {place.trustNotes}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            {place.auspiciousDays.map(d => (
              <span key={d} className="text-xs px-3 py-1.5 rounded-full font-medium bg-white/15 border border-white/20">
                ✨ {t('auspicious')}: {d}
              </span>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Description + significance */}
        <ScrollReveal className="mb-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-5">{place.description}</p>
            <blockquote className="border-l-4 border-amber-400 pl-4 py-2 bg-amber-50 rounded-r-xl">
              <p className="text-stone-600 italic text-sm leading-relaxed">{place.significance}</p>
            </blockquote>
          </div>
          <div className="space-y-3">
            <div className={`p-4 rounded-2xl ${place.theme.badge} ${place.theme.badgeText}`}>
              <p className="text-xs font-bold uppercase tracking-wide mb-2 opacity-70">Solve Life Problems</p>
              <div className="flex flex-wrap gap-1.5">
                {place.lifeProblems.map(lp => (
                  <span key={lp} className="text-xs px-2 py-1 rounded-full bg-white/50 font-medium">
                    🙏 {lp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Booking form */}
        <ScrollReveal className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-800 mb-1">{t('book_title')}</h2>
          <p className="text-stone-400 text-sm mb-6">{t('book_subtitle')}</p>
          <BookingForm
            rituals={place.rituals}
            placeName={place.name}
            accentClass={place.theme.accent}
            accentTextClass={place.theme.accentText}
            badgeClass={place.theme.badge}
            badgeTextClass={place.theme.badgeText}
          />
        </ScrollReveal>

        {/* What you receive */}
        <ScrollReveal animation="reveal-stagger" className="mb-10">
          <h2 className="font-display text-2xl font-bold text-stone-800 mb-6">{t('what_you_receive')}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "📹", title: t('video_proof'), desc: t('video_proof_desc') },
              { icon: "📸", title: t('photo_set'), desc: t('photo_set_desc') },
              { icon: "📦", title: t('shipping'), desc: t('shipping_desc') },
            ].map(w => (
              <div key={w.title} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
                <span className="text-3xl block mb-3">{w.icon}</span>
                <h4 className="font-bold text-stone-800 mb-1 text-sm">{w.title}</h4>
                <p className="text-stone-500 text-xs leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Festivals */}
        <ScrollReveal className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-10">
          <h3 className="font-display font-bold text-stone-800 mb-4 text-lg">{t('festivals')}</h3>
          <div className="flex flex-wrap gap-2">
            {place.festivals.map(f => (
              <span key={f} className={`text-sm px-3 py-1.5 rounded-full border ${place.theme.badge} ${place.theme.badgeText} font-medium`}>
                🎉 {f}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Diaspora */}
        <ScrollReveal className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-10">
          <h3 className="font-display font-bold text-stone-800 mb-3 text-lg">🌍 Devotees Worldwide</h3>
          <div className="flex flex-wrap gap-2">
            {place.diaspora.map(d => (
              <span key={d} className="text-xs bg-stone-100 text-stone-600 px-3 py-1.5 rounded-full border border-stone-200">
                {d}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 justify-center py-4">
            {place.tags.map(tag => (
              <span key={tag} className={`text-xs px-3 py-1.5 rounded-full font-medium ${place.theme.badge} ${place.theme.badgeText}`}>
                #{tag}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </main>

      <footer className={`${place.theme.nav} ${place.theme.navText} py-8 px-4 text-center mt-10`}>
        <p className="font-display text-sm font-bold mb-1 opacity-90">{place.name}</p>
        <p className="text-xs opacity-60">{place.location.city}, {place.location.country}</p>
        <p className="text-xs opacity-40 mt-3">© 2024 SacredReach · All rituals performed with reverence and full documentation</p>
      </footer>
    </div>
  )
}
