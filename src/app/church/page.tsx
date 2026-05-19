import Link from "next/link"
import { churchShrines } from "@/lib/church-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Catholic Shrine Services — Mass Offerings & Novenas from Anywhere",
  description: "Can't travel to Velankanni or St. Thomas Mount? Book a Mass offering, novena dedication or candle lighting on your behalf. Video proof. Blessed items shipped worldwide.",
}

const testimonials = [
  { name: "Maria F., Goa → Dubai", text: "I had a Mass offered at Velankanni for my father's death anniversary. They sent me the Mass card, a beautiful video of the church, and a blessed medal. It felt like I was there. Arokia Matha's grace is truly boundless.", shrine: "Velankanni" },
  { name: "Anthony D., Chennai → London", text: "My whole family in the UK watches the Mass video every Christmas now. We've booked the Christmas Mass at Velankanni for three years running. It keeps us connected to our faith and our homeland.", shrine: "Velankanni" },
  { name: "Susan P., Thrissur → Toronto", text: "St. Thomas Mount holds so much meaning for us — our ancestors were among the earliest Christians in India. Having a special intention prayer offered at the Apostle's tomb for my son's health was deeply moving.", shrine: "St. Thomas Mount" },
]

export default function ChurchPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Our Lady&apos;s Grace<br />
            <span className="text-sky-300">Knows No Distance</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
            Whether you&apos;re in Dubai, Toronto, or London, your Mass intention will be offered, your candle will burn before Our Lady, and your novena will be prayed. Our dedicated priests serve your faith with full sincerity.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-blue-950 px-3 py-1.5 rounded-full">✝️ Mass cards provided</span>
            <span className="bg-blue-950 px-3 py-1.5 rounded-full">📹 Video proof guaranteed</span>
            <span className="bg-blue-950 px-3 py-1.5 rounded-full">📦 Blessed items shipped worldwide</span>
          </div>
        </div>
      </section>

      {/* Shrines grid */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-2">Choose Your Shrine</h2>
          <p className="text-stone-500 mb-8 text-sm">All shrines have resident priests who handle Mass offerings and intentions with pastoral care.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {churchShrines.map((c) => (
              <Link key={c.slug} href={`/church/${c.slug}`} className={`block rounded-2xl ${c.theme} border border-sky-100 p-5 hover:shadow-md transition-all group`}>
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-stone-800 text-lg mb-1 group-hover:text-blue-700 transition-colors">{c.name}</h3>
                <p className="text-blue-700 text-sm font-medium mb-1">{c.saint}</p>
                <p className="text-stone-500 text-sm mb-3">{c.location}</p>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">{c.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-700 font-bold text-sm">From ${Math.min(...c.rituals.map(r => r.price))}</span>
                  <span className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">Book now →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-14 px-4 bg-sky-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">How Your Offering Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "1", title: "Select Shrine & Service", desc: "Choose your shrine and whether you want a Mass offering, novena, or candle lighting." },
              { n: "2", title: "Share Your Intention", desc: "Your name, your specific prayer intention — the priest carries it to the altar." },
              { n: "3", title: "Priest Offers the Service", desc: "On your chosen day, the Mass is offered or the prayer is made in your name." },
              { n: "4", title: "Mass Card + Video", desc: "Receive your Mass card, video proof, and blessed items at your doorstep." },
            ].map(s => (
              <div key={s.n} className="text-center">
                <div className="w-10 h-10 rounded-full bg-blue-800 text-white font-bold flex items-center justify-center mx-auto mb-3">{s.n}</div>
                <h3 className="font-semibold text-stone-800 mb-1 text-sm">{s.title}</h3>
                <p className="text-stone-500 text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">Faithful From Around the World</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-sky-100 rounded-xl p-5 shadow-sm">
                <p className="text-stone-600 text-sm mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
                  <p className="text-blue-600 text-xs">{t.shrine} devotee</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 px-4 bg-sky-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is a Mass offering (Mass intention)?", a: "A Mass intention (also called a stipend or offering) is when you ask a priest to offer a particular Mass for your specific intention — healing of a loved one, the soul of a departed family member, thanksgiving, or any personal need. The priest mentions your intention at the Mass. This is a centuries-old Catholic practice." },
              { q: "How does a novena dedication work?", a: "A novena is a 9-day prayer devotion. When you book a novena dedication, your name and intention are included in the novena prayer for all 9 days. You receive daily confirmation messages and the novena booklet is shipped to you with a blessed medal." },
              { q: "Will I receive a Mass card?", a: "Yes. Every Mass offering includes a signed Mass card from the shrine priest, confirming that a Mass was offered for your intention. This is both a spiritual keepsake and a record of your offering." },
              { q: "Can I request a Mass for a deceased family member?", a: "Absolutely. A Mass for the dead (Requiem Mass intention) is one of the most loving things you can do for a departed soul. The priest specifically prays for the eternal repose of your loved one's soul." },
              { q: "What if I'm not satisfied?", a: "If the Mass card and video proof aren't delivered within 48 hours of the service, you receive a full refund. We take our role in your faith journey seriously." },
            ].map(f => (
              <div key={f.q} className="bg-white rounded-xl p-5 border border-sky-100">
                <h3 className="font-semibold text-stone-800 mb-2 text-sm">Q: {f.q}</h3>
                <p className="text-stone-500 text-sm">A: {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
