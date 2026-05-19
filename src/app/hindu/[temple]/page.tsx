import { notFound } from "next/navigation"
import { hinduTemples } from "@/lib/hindu-data"
import BookingForm from "@/components/BookingForm"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return hinduTemples.map((t) => ({ temple: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ temple: string }> }): Promise<Metadata> {
  const { temple: slug } = await params
  const temple = hinduTemples.find((t) => t.slug === slug)
  if (!temple) return {}
  return {
    title: `${temple.name} Ritual Booking — Proxy Pooja Service`,
    description: `Book ${temple.name} rituals from anywhere in the world. Performed by verified pandits in your name with video proof and prasad shipping.`,
  }
}

export default async function TemplePage({ params }: { params: Promise<{ temple: string }> }) {
  const { temple: slug } = await params
  const temple = hinduTemples.find((t) => t.slug === slug)
  if (!temple) notFound()

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Temple header */}
      <div className="mb-10">
        <div className="text-4xl mb-3">{temple.icon}</div>
        <h1 className="text-3xl font-bold text-stone-800 mb-1">{temple.name}</h1>
        <p className="text-orange-600 font-semibold mb-1">{temple.deity}</p>
        <p className="text-stone-500 text-sm mb-4">{temple.location}</p>
        <p className="text-stone-600 max-w-2xl">{temple.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {temple.auspiciousDays.map(d => (
            <span key={d} className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full font-medium">✨ {d}</span>
          ))}
        </div>
      </div>

      {/* Rituals */}
      <h2 className="text-xl font-bold text-stone-800 mb-5">Choose a Ritual</h2>
      <BookingForm rituals={temple.rituals} templeName={temple.name} faith="hindu" />

      {/* What you receive */}
      <div className="mt-12 bg-orange-50 rounded-2xl p-6">
        <h3 className="font-bold text-stone-800 mb-4">What You Will Receive</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: "📹", title: "Video Proof", desc: "Your name clearly displayed on a name board during the ritual. Sent within 24 hours." },
            { icon: "📸", title: "Photo Set", desc: "Multiple photos of the ritual, deity, and prasad — yours to keep." },
            { icon: "📦", title: "Prasad Shipping", desc: "Sacred items shipped internationally. Delivered in 10–21 days." },
          ].map(w => (
            <div key={w.title} className="bg-white rounded-xl p-4">
              <span className="text-2xl block mb-2">{w.icon}</span>
              <h4 className="font-semibold text-stone-700 mb-1 text-sm">{w.title}</h4>
              <p className="text-stone-500 text-xs">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
