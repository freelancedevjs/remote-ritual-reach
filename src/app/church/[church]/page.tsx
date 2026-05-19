import { notFound } from "next/navigation"
import { churchShrines } from "@/lib/church-data"
import BookingForm from "@/components/BookingForm"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return churchShrines.map((c) => ({ church: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ church: string }> }): Promise<Metadata> {
  const { church: slug } = await params
  const church = churchShrines.find((c) => c.slug === slug)
  if (!church) return {}
  return {
    title: `${church.name} — Mass Offerings & Novenas`,
    description: `Book Mass offerings, novena dedications and candle lightings at ${church.name} from anywhere in the world. Performed by resident priests with video proof.`,
  }
}

export default async function ChurchPage({ params }: { params: Promise<{ church: string }> }) {
  const { church: slug } = await params
  const church = churchShrines.find((c) => c.slug === slug)
  if (!church) notFound()

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Shrine header */}
      <div className="mb-10">
        <div className="text-4xl mb-3">{church.icon}</div>
        <h1 className="text-3xl font-bold text-stone-800 mb-1">{church.name}</h1>
        <p className="text-blue-700 font-semibold mb-1">{church.saint}</p>
        <p className="text-stone-500 text-sm mb-4">{church.location}</p>
        <p className="text-stone-600 max-w-2xl">{church.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {church.auspiciousDays.map(d => (
            <span key={d} className="bg-sky-100 text-sky-800 text-xs px-3 py-1 rounded-full font-medium">✝️ {d}</span>
          ))}
        </div>
      </div>

      {/* Services */}
      <h2 className="text-xl font-bold text-stone-800 mb-5">Choose a Service</h2>
      <BookingForm rituals={church.rituals} templeName={church.name} faith="church" />

      {/* What you receive */}
      <div className="mt-12 bg-sky-50 rounded-2xl p-6">
        <h3 className="font-bold text-stone-800 mb-4">What You Will Receive</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: "📹", title: "Video Proof", desc: "Your candle lit, your Mass offered, your novena prayed — documented and sent within 24 hours." },
            { icon: "📜", title: "Mass Card / Certificate", desc: "Signed Mass card from the shrine priest confirming your intention was offered at the altar." },
            { icon: "📦", title: "Blessed Items", desc: "Medals, rosaries, novena booklets or holy water shipped internationally. Delivered in 10–21 days." },
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
