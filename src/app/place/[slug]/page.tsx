import { notFound } from "next/navigation"
import { places } from "@/lib/places-data"
import BookingForm from "@/components/BookingForm"
import Link from "next/link"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return places.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const place = places.find((p) => p.slug === slug)
  if (!place) return {}
  return {
    title: `${place.name} — Remote Ritual Booking`,
    description: `Book rituals at ${place.name} (${place.location.city}) from anywhere in the world. Performed by verified priests with video proof and shipping.`,
  }
}

export default async function PlacePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const place = places.find((p) => p.slug === slug)
  if (!place) notFound()

  return (
    <div className={`min-h-screen ${place.theme.bg}`}>
      {/* Standalone nav — NO links to other places */}
      <nav className={`${place.theme.nav} ${place.theme.navText} px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md`}>
        <span className="font-bold flex items-center gap-2">
          <span>{place.icon}</span>
          <span className="text-sm md:text-base">{place.name}</span>
        </span>
        <Link href="/" className="bg-white/20 hover:bg-white/30 transition-colors px-3 py-1.5 rounded-lg text-sm font-medium">
          ← Back to SacredReach
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{place.icon}</span>
            <div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${place.theme.badge} ${place.theme.badgeText} uppercase tracking-wide`}>
                {place.type} · {place.faith}
              </span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">{place.name}</h1>
          <p className="text-stone-500 text-sm mb-4 flex items-center gap-1">
            📍 {place.location.city}, {place.location.state}, {place.location.country}
          </p>
          <p className="text-stone-700 text-lg mb-4 max-w-3xl">{place.description}</p>
          <div className="border-l-4 border-stone-300 pl-4 py-2 mb-6">
            <p className="text-stone-600 italic text-sm">{place.significance}</p>
          </div>

          {/* Auspicious days */}
          <div className="flex flex-wrap gap-2 mb-4">
            {place.auspiciousDays.map(d => (
              <span key={d} className={`text-xs px-3 py-1 rounded-full font-medium ${place.theme.badge} ${place.theme.badgeText}`}>
                ✨ {d}
              </span>
            ))}
          </div>

          {/* Life problems */}
          <div className="flex flex-wrap gap-2">
            {place.lifeProblems.map(lp => (
              <span key={lp} className="text-xs px-2 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                🙏 {lp}
              </span>
            ))}
          </div>
        </div>

        {/* Booking form */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-stone-800 mb-2">Choose a Ritual</h2>
          <p className="text-stone-500 text-sm mb-6">Select a ritual below to see what&apos;s included and proceed to booking.</p>
          <BookingForm
            rituals={place.rituals}
            placeName={place.name}
            accentClass={place.theme.accent}
            accentTextClass={place.theme.accentText}
            badgeClass={place.theme.badge}
            badgeTextClass={place.theme.badgeText}
          />
        </div>

        {/* What you receive */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-10">
          <h3 className="font-bold text-stone-800 mb-4 text-lg">What You Will Receive</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "📹", title: "Video Proof", desc: "Your name on a name board during the ritual. Delivered within 24 hours via WhatsApp or email." },
              { icon: "📸", title: "Photo Set", desc: "Multiple high-resolution photos of the ritual and sacred space." },
              { icon: "📦", title: "Blessed Items Shipped", desc: "Prasad, sacred ash, water, or other tradition-specific items shipped worldwide." },
            ].map(w => (
              <div key={w.title} className="bg-stone-50 rounded-xl p-4">
                <span className="text-2xl block mb-2">{w.icon}</span>
                <h4 className="font-semibold text-stone-700 mb-1 text-sm">{w.title}</h4>
                <p className="text-stone-500 text-xs">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Festivals */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-10">
          <h3 className="font-bold text-stone-800 mb-3">Major Festivals &amp; Special Dates</h3>
          <div className="flex flex-wrap gap-2">
            {place.festivals.map(f => (
              <span key={f} className="text-sm bg-stone-100 text-stone-700 px-3 py-1.5 rounded-full border border-stone-200">🎉 {f}</span>
            ))}
          </div>
        </div>

        {place.trustNotes && (
          <p className="text-xs text-stone-400 text-center">🏛️ {place.trustNotes}</p>
        )}
      </main>

      <footer className={`${place.theme.nav} ${place.theme.navText} py-6 px-4 text-center mt-10`}>
        <p className="text-sm opacity-80">{place.name} · {place.location.city}, {place.location.country}</p>
        <p className="text-xs opacity-50 mt-1">© 2024 SacredReach · All rituals performed with reverence and full documentation</p>
      </footer>
    </div>
  )
}
