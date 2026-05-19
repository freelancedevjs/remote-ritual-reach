import { notFound } from "next/navigation"
import { gurus } from "@/lib/gurus-data"
import { places } from "@/lib/places-data"
import ScrollReveal from "@/components/ScrollReveal"
import Link from "next/link"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return gurus.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guru = gurus.find((g) => g.slug === slug)
  if (!guru) return {}
  return {
    title: `${guru.name} — Life, Teachings & Sacred Places | SacredReach`,
    description: `${guru.bio.slice(0, 155)}…`,
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

export default async function GuruPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guru = gurus.find((g) => g.slug === slug)
  if (!guru) notFound()

  return (
    <div className={`min-h-screen ${guru.theme.bg} overflow-x-hidden`}>
      {/* Sticky nav */}
      <nav className={`${guru.theme.nav} ${guru.theme.navText} px-4 py-3.5 flex items-center justify-between sticky top-0 z-50 shadow-lg`}>
        <span className="font-display font-bold flex items-center gap-2 text-sm md:text-base">
          <span className="text-xl">{guru.icon}</span>
          <span className="truncate max-w-[180px] sm:max-w-none">{guru.name}</span>
        </span>
        <Link href="/" className="bg-white/15 hover:bg-white/25 transition-colors px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide flex-shrink-0">
          ← SacredReach
        </Link>
      </nav>

      {/* Hero header */}
      <div className={`relative ${guru.theme.nav} ${guru.theme.navText} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none select-none">
          <SacredMandala className="w-[400px] h-[400px] text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="text-6xl md:text-7xl mb-5 animate-float inline-block">{guru.icon}</div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{guru.name}</h1>
          <p className="opacity-70 text-sm">{guru.lifespan} · {guru.origin}</p>
          <span className={`inline-block mt-4 text-xs font-semibold px-4 py-1.5 rounded-full bg-white/15 border border-white/20 uppercase tracking-wider`}>
            {guru.tradition}
          </span>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Bio */}
        <ScrollReveal className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100 mb-6">
          <h2 className="font-display font-bold text-stone-800 mb-4 text-xl">Life &amp; Legacy</h2>
          <p className="text-stone-600 leading-relaxed text-base">{guru.bio}</p>
        </ScrollReveal>

        {/* Core teaching */}
        <ScrollReveal animation="reveal-left" className="mb-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
            <h2 className="font-display font-bold text-stone-800 mb-4 text-xl">Core Teaching</h2>
            <blockquote className="border-l-4 border-amber-400 pl-5 py-2 bg-amber-50/50 rounded-r-xl">
              <p className="italic text-stone-600 leading-relaxed">{guru.coreTeaching}</p>
            </blockquote>
          </div>
        </ScrollReveal>

        {/* Key works */}
        {guru.keyWorks.length > 0 && (
          <ScrollReveal animation="reveal-right" className="mb-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
              <h2 className="font-display font-bold text-stone-800 mb-4 text-xl">Key Works &amp; Teachings</h2>
              <ul className="space-y-2">
                {guru.keyWorks.map(w => (
                  <li key={w} className="flex items-center gap-3 text-stone-600 text-sm py-1.5 border-b border-stone-50 last:border-0">
                    <span className="text-lg">📖</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {/* Associated places */}
        {guru.associatedPlaces.length > 0 && (
          <ScrollReveal className="mb-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
              <h2 className="font-display font-bold text-stone-800 mb-2 text-xl">Book a Ritual at Their Sacred Place</h2>
              <p className="text-stone-400 text-sm mb-5">Connect with {guru.name.split(" ")[0]}&apos;s energy through a ritual performed in your name.</p>
              <div className="space-y-3">
                {guru.associatedPlaces.map(ap => {
                  const placeData = places.find(p => p.slug === ap.slug)
                  return (
                    <Link
                      key={ap.slug}
                      href={`/place/${ap.slug}`}
                      className="flex items-center justify-between bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-300 rounded-xl p-4 transition-all group sacred-card"
                    >
                      <div>
                        <p className="font-bold text-stone-800 group-hover:text-amber-700 transition-colors text-sm">{ap.name}</p>
                        {placeData && (
                          <p className="text-xs text-stone-400 mt-0.5">
                            From ${Math.min(...placeData.rituals.map(r => r.price))} · {placeData.rituals.length} rituals available
                          </p>
                        )}
                      </div>
                      <span className="text-stone-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all text-xl">→</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Global following */}
        {guru.diaspora.length > 0 && (
          <ScrollReveal animation="reveal-scale" className="mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
              <h2 className="font-display font-bold text-stone-800 mb-3 text-base">Global Following</h2>
              <div className="flex flex-wrap gap-2">
                {guru.diaspora.map(d => (
                  <span key={d} className="text-xs bg-stone-100 text-stone-500 px-3 py-1.5 rounded-full border border-stone-200">
                    🌍 {d}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Tags */}
        <ScrollReveal className="flex flex-wrap gap-2 justify-center mb-6">
          {guru.tags.map(t => (
            <span key={t} className={`text-xs ${guru.theme.badge} ${guru.theme.badgeText} px-3 py-1 rounded-full font-medium`}>
              #{t}
            </span>
          ))}
        </ScrollReveal>
      </main>

      <footer className={`${guru.theme.nav} ${guru.theme.navText} py-8 px-4 text-center mt-6`}>
        <p className="font-display text-sm font-bold mb-1 opacity-90">{guru.name}</p>
        <p className="text-xs opacity-60">{guru.tradition}</p>
        <p className="text-xs opacity-40 mt-3">© 2024 SacredReach</p>
      </footer>
    </div>
  )
}
