import Link from "next/link"
import { hinduTemples } from "@/lib/hindu-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hindu Temple Rituals — Book Pooja & Darshan Proxy from Anywhere",
  description: "Can't travel to Tirupati, Kedarnath, or Vaishno Devi? Book a verified pandit to perform your pooja on your behalf. Video proof. Prasad shipping worldwide.",
}

const testimonials = [
  { name: "Priya S., Toronto", text: "My parents couldn't travel to Tirupati for their 40th anniversary. SacredReach did the Abhishek and shipped the prasad to us in Canada. My mother cried watching the video. Completely worth it.", temple: "Tirupati" },
  { name: "Rajesh M., London", text: "I book the Monday Rudrabhishek at Kedarnath every Shravan month. The video quality is excellent and the pandit actually explains each step. Feels like being there.", temple: "Kedarnath" },
  { name: "Anita K., San Jose", text: "Had them do a Thursday Aarti at Shirdi with my father's name after he passed. They handled it with so much care. The Udi they shipped felt like his blessing reached us.", temple: "Shirdi" },
]

export default function HinduPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-700 to-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Every Sacred Temple in India —<br />
            <span className="text-amber-300">Reachable From Anywhere</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto mb-6">
            Whether you&apos;re in New York, London, or Dubai — your pooja, your abhishek, your darshan will happen. Our verified pandits perform your rituals with full sankalpa (your name &amp; gotra) and send you the video.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-orange-800 px-3 py-1.5 rounded-full">📿 Sankalpa with your name &amp; gotra</span>
            <span className="bg-orange-800 px-3 py-1.5 rounded-full">📹 Video within 24 hours</span>
            <span className="bg-orange-800 px-3 py-1.5 rounded-full">📦 Prasad shipped worldwide</span>
          </div>
        </div>
      </section>

      {/* Temples grid */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-2">Choose Your Temple</h2>
          <p className="text-stone-500 mb-8 text-sm">All temples have verified pandits who have been performing rituals here for years.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hinduTemples.map((t) => (
              <Link key={t.slug} href={`/hindu/${t.slug}`} className={`block rounded-2xl ${t.theme} border border-orange-100 p-5 hover:shadow-md transition-all group`}>
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-bold text-stone-800 text-lg mb-1 group-hover:text-orange-700 transition-colors">{t.name}</h3>
                <p className="text-orange-600 text-sm font-medium mb-1">{t.deity}</p>
                <p className="text-stone-500 text-sm mb-3">{t.location}</p>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">{t.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-700 font-bold text-sm">From ${Math.min(...t.rituals.map(r => r.price))}</span>
                  <span className="text-orange-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">Book ritual →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-14 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">How Your Pooja Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "1", title: "Select Temple & Ritual", desc: "Choose from our verified list of temples and the specific pooja or abhishek." },
              { n: "2", title: "Provide Sankalpa Details", desc: "Your name, gotra, family members — we read it aloud during the ritual." },
              { n: "3", title: "Pandit Performs", desc: "On your chosen auspicious date, the ritual is performed with full devotion." },
              { n: "4", title: "Video + Prasad", desc: "Receive the video on WhatsApp and prasad at your doorstep within 7–14 days." },
            ].map(s => (
              <div key={s.n} className="text-center">
                <div className="w-10 h-10 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center mx-auto mb-3">{s.n}</div>
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
          <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">Devotees Across the World</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-orange-100 rounded-xl p-5 shadow-sm">
                <p className="text-stone-600 text-sm mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
                  <p className="text-orange-600 text-xs">{t.temple} devotee</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 px-4 bg-orange-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is it valid to have someone else perform a ritual on my behalf?", a: "Yes — proxy rituals (sankalpa on behalf) are a well-established practice in Hinduism. The priest takes the sankalpa in your name, your gotra, and your intention, making the punya fully yours." },
              { q: "What if I don't know my gotra?", a: "No problem. You can use 'Kashyap gotra' which is the universal fallback, or simply leave it and the pandit will use the appropriate alternative." },
              { q: "How will I receive the video?", a: "Via WhatsApp (preferred), email, or a private link — your choice at booking time." },
              { q: "Can I request a specific auspicious date?", a: "Absolutely. Our calendar highlights Ekadashi, Purnima, Amavasya, and temple-specific festival days. We'll confirm availability for your chosen date." },
              { q: "What if I'm not satisfied?", a: "If video proof isn't delivered within 48 hours of the ritual date, you get a full refund. No questions asked." },
            ].map(f => (
              <div key={f.q} className="bg-white rounded-xl p-5 border border-orange-100">
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
