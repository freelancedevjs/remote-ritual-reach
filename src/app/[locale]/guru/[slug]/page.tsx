import { notFound } from "next/navigation"
import { gurus } from "@/lib/gurus-data"
import { places } from "@/lib/places-data"
import { Link } from "@/i18n/navigation"
import { getTranslations } from "next-intl/server"
import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export async function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    gurus.map(g => ({ locale, slug: g.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guru = gurus.find((g) => g.slug === slug)
  if (!guru) return {}
  return {
    title: `${guru.name} — Life, Teachings & Sacred Places`,
    description: `${guru.bio.slice(0, 155)}...`,
  }
}

export default async function GuruPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params
  const guru = gurus.find((g) => g.slug === slug)
  if (!guru) notFound()

  const t = await getTranslations({ locale, namespace: 'guru' })
  const tNav = await getTranslations({ locale, namespace: 'nav' })

  return (
    <div className={`min-h-screen ${guru.theme.bg}`}>
      <nav className={`${guru.theme.nav} ${guru.theme.navText} px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md`}>
        <span className="font-bold flex items-center gap-2">
          <span>{guru.icon}</span>
          <span className="text-sm">{guru.name}</span>
        </span>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link href="/" className="bg-white/20 hover:bg-white/30 transition-colors px-3 py-1.5 rounded-lg text-sm font-medium">
            {tNav('back')}
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">{guru.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">{guru.name}</h1>
          <p className="text-stone-500 text-sm">{guru.lifespan} · {guru.origin}</p>
          <p className={`text-xs font-semibold mt-2 inline-block px-3 py-1 rounded-full ${guru.theme.badge} ${guru.theme.badgeText}`}>{guru.tradition}</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-stone-800 mb-3">{t('life_legacy')}</h2>
          <p className="text-stone-600 leading-relaxed">{guru.bio}</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-stone-800 mb-3">{t('core_teaching')}</h2>
          <blockquote className="border-l-4 border-stone-300 pl-4 italic text-stone-600">{guru.coreTeaching}</blockquote>
        </div>

        {guru.keyWorks.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h2 className="font-bold text-stone-800 mb-3">{t('key_works')}</h2>
            <ul className="space-y-1">
              {guru.keyWorks.map(w => <li key={w} className="text-stone-600 text-sm flex items-center gap-2"><span>📖</span>{w}</li>)}
            </ul>
          </div>
        )}

        {guru.associatedPlaces.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h2 className="font-bold text-stone-800 mb-4">{t('ritual_places')}</h2>
            <div className="space-y-3">
              {guru.associatedPlaces.map(ap => {
                const placeData = places.find(p => p.slug === ap.slug)
                return (
                  <Link key={ap.slug} href={`/place/${ap.slug}`} className="flex items-center justify-between bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-xl p-4 transition-all group">
                    <div>
                      <p className="font-semibold text-stone-800 group-hover:text-stone-900">{ap.name}</p>
                      {placeData && (
                        <p className="text-xs text-stone-400 mt-0.5">
                          From ${Math.min(...placeData.rituals.map(r => r.price))} · {t('rituals_available', { count: placeData.rituals.length })}
                        </p>
                      )}
                    </div>
                    <span className="text-stone-400 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 justify-center">
          {guru.tags.map(tag => <span key={tag} className="text-xs bg-stone-100 text-stone-500 px-2 py-1 rounded-full">#{tag}</span>)}
        </div>
      </main>

      <footer className={`${guru.theme.nav} ${guru.theme.navText} py-6 px-4 text-center mt-10`}>
        <p className="text-sm opacity-80">{guru.name} · {guru.tradition}</p>
        <p className="text-xs opacity-50 mt-1">© 2024 SacredReach</p>
      </footer>
    </div>
  )
}
