import Link from "next/link"
import { dargahShrines } from "@/lib/dargah-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dargah Rituals — Chaddar, Dua & Mannat from Anywhere in the World",
  description: "Can't travel to Ajmer Sharif or Data Darbar? Book a trusted khadim to offer chaddar, recite fatiha and present your mannat on your behalf. Video proof. Tabaruk shipping worldwide.",
}

const testimonials = [
  { name: "Aisha R., Birmingham", text: "My grandmother wanted a chaddar placed at Ajmer Sharif on her behalf — she's 82 and can't travel. The team handled it with such respect. The video made her weep with gratitude. Truly blessed.", shrine: "Ajmer Sharif" },
  { name: "Tariq M., Toronto", text: "I've been booking Thursday qawwali dedications at Nizamuddin for three years now. There's something about knowing your name is being mentioned there, 700 years of unbroken tradition, that fills the heart.", shrine: "Nizamuddin" },
  { name: "Fatima K., Dubai", text: "We had a special mannat at Data Darbar for my son's recovery. The khadim recited the fatiha beautifully and sent us the video. My son recovered fully. Alhamdulillah, Data Ganj Bakhsh's blessing reached us.", shrine: "Data Darbar" },
]

export default function DargahPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-800 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Chaddar, Dua & Mannat —<br />
            <span className="text-emerald-300">Fulfilled From Anywhere in the World</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto mb-6">
            Distance is no barrier to the mercy of the Awliya. Whether you&apos;re in London, Toronto, or Riyadh, our trusted khadims present your offerings, recite your fatiha, and dedicate your mannat at the most beloved dargahs of the subcontinent.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-green-900 px-3 py-1.5 rounded-full">🌹 Chaddar placed with respect</span>
            <span className="bg-green-900 px-3 py-1.5 rounded-full">📹 Video proof guaranteed</span>
            <span className="bg-green-900 px-3 py-1.5 rounded-full">📦 Tabaruk shipped worldwide</span>
          </div>
        </div>
      </section>

      {/* Shrines grid */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-2">Choose Your Dargah</h2>
          <p className="text-stone-500 mb-8 text-sm">All dargahs have trusted khadims who have served at these shrines for generations.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dargahShrines.map((s) => (
              <Link key={s.slug} href={`/dargah/${s.slug}`} className={`block rounded-2xl ${s.theme} border border-green-100 p-5 hover:shadow-md transition-all group`}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-stone-800 text-lg mb-1 group-hover:text-green-700 transition-colors">{s.name}</h3>
                <p className="text-green-700 text-sm font-medium mb-1">{s.saint}</p>
                <p className="text-stone-500 text-sm mb-3">{s.location}</p>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-700 font-bold text-sm">From ${Math.min(...s.rituals.map(r => r.price))}</span>
                  <span className="text-green-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">Book now →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-14 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">How Your Offering Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "1", title: "Select Dargah & Ritual", desc: "Choose your dargah and whether you want chaddar, qawwali dedication, or fatiha." },
              { n: "2", title: "Share Your Intention", desc: "Your name, your mannat, family members — all presented to the saint on your behalf." },
              { n: "3", title: "Khadim Performs", desc: "Our trusted khadim performs the offering on your chosen Thursday or auspicious day." },
              { n: "4", title: "Video + Tabaruk", desc: "Receive the video on WhatsApp and tabaruk (blessed sweets/flowers) at your doorstep." },
            ].map(s => (
              <div key={s.n} className="text-center">
                <div className="w-10 h-10 rounded-full bg-green-700 text-white font-bold flex items-center justify-center mx-auto mb-3">{s.n}</div>
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
          <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">Devotees From Around the World</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-green-100 rounded-xl p-5 shadow-sm">
                <p className="text-stone-600 text-sm mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
                  <p className="text-green-600 text-xs">{t.shrine} devotee</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 px-4 bg-green-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is tawassul (seeking intercession through saints) valid in Islam?", a: "Tawassul — seeking Allah's mercy through the virtue and intercession of His beloved saints — is a practice upheld by the vast majority of Muslim scholars across centuries. Visiting or sending offerings to a dargah is an expression of love for the Awliya and through them, a connection to Allah." },
              { q: "What is a chaddar and what does it signify?", a: "A chaddar is a decorated cloth spread — traditionally green or gold — placed over the mazaar (tomb) of a saint as an act of love and reverence. It symbolizes seeking the saint's spiritual blessing and shelter." },
              { q: "How is my mannat (vow/wish) fulfilled?", a: "Your mannat is presented verbally by our khadim at the mazaar during dua. The intention is yours; the khadim is simply the physical means of conveying it to the shrine. Many devotees make specific vows: 'If this wish is granted, I will send a chaddar to Khwaja Sahib.'" },
              { q: "What is tabaruk?", a: "Tabaruk refers to blessed items from the dargah — typically sweets, rose petals, or rose water that have been placed at or near the mazaar. They are considered to carry barakat (spiritual blessing) and are sent to devotees who cannot visit in person." },
              { q: "What if I'm not satisfied?", a: "If video proof of your offering isn't delivered within 48 hours of the ritual, you receive a full refund. No questions asked." },
            ].map(f => (
              <div key={f.q} className="bg-white rounded-xl p-5 border border-green-100">
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
