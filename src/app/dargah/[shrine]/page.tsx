import { notFound } from "next/navigation"
import { dargahShrines } from "@/lib/dargah-data"
import BookingForm from "@/components/BookingForm"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return dargahShrines.map((s) => ({ shrine: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ shrine: string }> }): Promise<Metadata> {
  const { shrine: slug } = await params
  const shrine = dargahShrines.find((s) => s.slug === slug)
  if (!shrine) return {}
  return {
    title: `${shrine.name} — Chaddar & Dua Service`,
    description: `Book offerings at ${shrine.name} from anywhere in the world. Performed by trusted khadims in your name with video proof and tabaruk shipping.`,
  }
}

export default async function ShrinePage({ params }: { params: Promise<{ shrine: string }> }) {
  const { shrine: slug } = await params
  const shrine = dargahShrines.find((s) => s.slug === slug)
  if (!shrine) notFound()

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Shrine header */}
      <div className="mb-10">
        <div className="text-4xl mb-3">{shrine.icon}</div>
        <h1 className="text-3xl font-bold text-stone-800 mb-1">{shrine.name}</h1>
        <p className="text-green-700 font-semibold mb-1">{shrine.saint}</p>
        <p className="text-stone-500 text-sm mb-4">{shrine.location}</p>
        <p className="text-stone-600 max-w-2xl">{shrine.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {shrine.auspiciousDays.map(d => (
            <span key={d} className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">🌙 {d}</span>
          ))}
        </div>
      </div>

      {/* Rituals */}
      <h2 className="text-xl font-bold text-stone-800 mb-5">Choose an Offering</h2>
      <BookingForm rituals={shrine.rituals} templeName={shrine.name} faith="dargah" />

      {/* What you receive */}
      <div className="mt-12 bg-green-50 rounded-2xl p-6">
        <h3 className="font-bold text-stone-800 mb-4">What You Will Receive</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: "📹", title: "Video Proof", desc: "Your offering clearly documented. Your name announced at the mazaar. Sent within 24 hours." },
            { icon: "📸", title: "Photo Set", desc: "Photos of the chaddar placed, the dua, and the mazaar — yours to keep." },
            { icon: "📦", title: "Tabaruk Shipping", desc: "Blessed sweets, rose petals or rose water shipped internationally. Delivered in 10–21 days." },
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
