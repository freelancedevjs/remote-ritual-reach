import { notFound } from "next/navigation"
import { gurus } from "@/lib/gurus-data"
import { places } from "@/lib/places-data"
import { Link } from "@/i18n/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import ScrollReveal from "@/components/ScrollReveal"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    gurus.map(g => ({ locale, slug: g.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guru = gurus.find(g => g.slug === slug)
  if (!guru) return {}
  return {
    title: `${guru.name} — Life, Teachings & Sacred Places`,
    description: `${guru.bio.slice(0, 155)}...`,
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

export default async function GuruPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const guru = gurus.find(g => g.slug === slug)
  if (!guru) notFound()

  const t = await getTranslations({ locale, namespace: 'guru' })
  const tNav = await getTranslations({ locale, namespace: 'nav' })

  return (
    <div className={`min-h-screen ${guru.theme.bg} overflow-x-hidden`}>
      <nav className={`${guru.theme.nav} ${guru.theme.navText} px-4 py-3.5 flex items-center justify-between sticky top-0 z-50 shadow-lg`}>
        <span className="font-display font-bold flex items-center gap-2 text-sm md:text-base">
          <span className="text-xl">{guru.icon}</span>
          <span className="truncate max-w-[160px] sm:max-w-none">{guru.name}</span>
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
      <div className={`relative ${guru.theme.nav} ${guru.theme.navText} overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none flex items-center justify-end pr-8">
          <SacredMandala className="w-72 h-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-16 text-center">
          <div className="text-7xl md:text-8xl mb-5 animate-float inline-block">{guru.icon}</div>
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 bg-white/15 uppercase tracking-widest">
            {guru.tradition}
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3">
            {guru.name}
          </h1>
          <p className="opacity-70 text-sm">{guru.lifespan} · {guru.origin}</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
            <h2 className="font-display font-bold text-stone-800 mb-4 text-xl">{t('life_legacy')}</h2>
            <p className="text-stone-600 leading-relaxed text-base">{guru.bio}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="reveal-left">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
            <h2 className="font-display font-bold text-stone-800 mb-4 text-xl">{t('core_teaching')}</h2>
            <blockquote className="border-l-4 border-amber-400 pl-5 py-2 bg-amber-50 rounded-r-xl">
              <p className="text-stone-600 italic text-base leading-relaxed">{guru.coreTeaching}</p>
            </blockquote>
          </div>
        </ScrollReveal>

        {guru.keyWorks.length > 0 && (
          <ScrollReveal animation="reveal-right">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
              <h2 className="font-display font-bold text-stone-800 mb-4 text-xl">{t('key_works')}</h2>
              <ul className="space-y-2">
                {guru.keyWorks.map(w => (
                  <li key={w} className="text-stone-600 text-sm flex items-center gap-3">
                    <span className="text-amber-500 flex-shrink-0">📖</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {guru.associatedPlaces.length > 0 && (
          <ScrollReveal animation="reveal-stagger">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
              <h2 className="font-display font-bold text-stone-800 mb-5 text-xl">{t('ritual_places')}</h2>
              <div className="space-y-3">
                {guru.associatedPlaces.map(ap => {
                  const placeData = places.find(p => p.slug === ap.slug)
                  return (
                    <Link
                      key={ap.slug}
                      href={`/place/${ap.slug}`}
                      className="flex items-center justify-between bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-200 rounded-xl p-4 transition-all group"
                    >
                      <div>
                        <p className="font-semibold text-stone-800 group-hover:text-amber-900">{ap.name}</p>
                        {placeData && (
                          <p className="text-xs text-stone-400 mt-0.5">
                            From ${Math.min(...placeData.rituals.map(r => r.price))} · {t('rituals_available', { count: placeData.rituals.length })}
                          </p>
                        )}
                      </div>
                      <span className="text-stone-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all">→</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        )}

        {guru.tags.length > 0 && (
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center py-4">
              {guru.tags.map(tag => (
                <span key={tag} className={`text-xs px-3 py-1.5 rounded-full font-medium ${guru.theme.badge} ${guru.theme.badgeText}`}>
                  #{tag}
                </span>
              ))}
            </div>
          </ScrollReveal>
        )}
      </main>

      <footer className={`${guru.theme.nav} ${guru.theme.navText} py-8 px-4 text-center mt-10`}>
        <p className="font-display text-sm font-bold mb-1 opacity-90">{guru.name}</p>
        <p className="text-xs opacity-60">{guru.lifespan} · {guru.tradition}</p>
        <p className="text-xs opacity-40 mt-3">© 2024 SacredReach · All rituals performed with reverence and full documentation</p>
      </footer>
    </div>
  )
}
