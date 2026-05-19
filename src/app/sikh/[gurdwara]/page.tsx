import { notFound } from "next/navigation"
import { sikhGurdwaras } from "@/lib/sikh-data"
import BookingForm from "@/components/BookingForm"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return sikhGurdwaras.map((g) => ({ gurdwara: g.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ gurdwara: string }> }): Promise<Metadata> {
  const { gurdwara: slug } = await params
  const gurdwara = sikhGurdwaras.find((g) => g.slug === slug)
  if (!gurdwara) return {}
  return {
    title: `${gurdwara.name} Seva Booking`,
    description: `Book Ardas, langar seva and more at ${gurdwara.name} from anywhere in the world. Performed by trusted sevaadars with video proof and prasad shipping.`,
  }
}

export default async function GurdwaraPage({ params }: { params: Promise<{ gurdwara: string }> }) {
  const { gurdwara: slug } = await params
  const gurdwara = sikhGurdwaras.find((g) => g.slug === slug)
  if (!gurdwara) notFound()

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Gurdwara header */}
      <div className="mb-10">
        <div className="text-4xl mb-3">{gurdwara.icon}</div>
        <h1 className="text-3xl font-bold text-stone-800 mb-1">{gurdwara.name}</h1>
        <p className="text-stone-500 text-sm mb-4">{gurdwara.location}</p>
        <p className="text-stone-600 max-w-2xl">{gurdwara.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {gurdwara.auspiciousDays.map(d => (
            <span key={d} className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full font-medium">🌟 {d}</span>
          ))}
        </div>
      </div>

      {/* Seva options */}
      <h2 className="text-xl font-bold text-stone-800 mb-5">Choose a Seva</h2>
      <BookingForm rituals={gurdwara.rituals} templeName={gurdwara.name} faith="sikh" />

      {/* What you receive */}
      <div className="mt-12 bg-blue-50 rounded-2xl p-6">
        <h3 className="font-bold text-stone-800 mb-4">What You Will Receive</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: "📹", title: "Video Proof", desc: "Your seva recorded and your family names clearly heard in the Ardas. Sent within 24 hours." },
            { icon: "📜", title: "Hukamnama / Certificate", desc: "Daily Hukamnama shared, or certificate of seva for Langar and Akhand Path." },
            { icon: "📦", title: "Karah Prasad", desc: "Sacred karah prasad or blessed water shipped internationally. Delivered in 10–21 days." },
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
