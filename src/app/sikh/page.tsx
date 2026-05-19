import Link from "next/link"
import { sikhGurdwaras } from "@/lib/sikh-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sikh Gurdwara Seva — Ardas, Langar & Akhand Path from Anywhere",
  description: "Can't travel to the Golden Temple or Hemkund Sahib? Book Ardas, langar seva, or Akhand Path on your behalf. Video proof. Prasad shipped worldwide.",
}

const testimonials = [
  { name: "Gurpreet S., Vancouver", text: "I booked langar seva at the Golden Temple for my mother's barsi. 50 souls fed in her name. The certificate they sent me and the photos of the langar hall made it feel like we were all there together. Waheguru.", gurdwara: "Golden Temple" },
  { name: "Harjinder K., Brampton", text: "Every Gurpurab I book an Ardas at Harmandir Sahib with our family names. They send the Hukamnama as well. It's become our family's most sacred tradition from across the ocean.", gurdwara: "Golden Temple" },
  { name: "Manjit S., Wolverhampton", text: "Hemkund Sahib is at 14,000 feet and I'm 68 with a heart condition. I never thought I'd have my Ardas offered there. SacredReach made it possible. The trek video alone brought me to tears.", gurdwara: "Hemkund Sahib" },
]

export default function SikhPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Waheguru&apos;s Blessings Reach<br />
            <span className="text-amber-300">Every Corner of the World</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
            Whether you&apos;re in Canada, the UK, or Australia, your Ardas will rise from the sacred halls of Harmandir Sahib. Our sevaadars perform your Ardas, langar seva and Akhand Path with full devotion and send you the video.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-blue-950 px-3 py-1.5 rounded-full">🙏 Ardas with your family names</span>
            <span className="bg-blue-950 px-3 py-1.5 rounded-full">📹 Video within 24 hours</span>
            <span className="bg-blue-950 px-3 py-1.5 rounded-full">📦 Karah prasad shipped worldwide</span>
          </div>
        </div>
      </section>

      {/* Gurdwaras grid */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-2">Choose Your Gurdwara</h2>
          <p className="text-stone-500 mb-8 text-sm">All gurdwaras have trusted sevaadars who have been serving the Sangat here for years.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {sikhGurdwaras.map((g) => (
              <Link key={g.slug} href={`/sikh/${g.slug}`} className={`block rounded-2xl ${g.theme} border border-blue-100 p-5 hover:shadow-md transition-all group`}>
                <div className="text-3xl mb-3">{g.icon}</div>
                <h3 className="font-bold text-stone-800 text-lg mb-1 group-hover:text-blue-700 transition-colors">{g.name}</h3>
                <p className="text-stone-500 text-sm mb-3">{g.location}</p>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">{g.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-700 font-bold text-sm">From ${Math.min(...g.rituals.map(r => r.price))}</span>
                  <span className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">Book seva →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-14 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">How Your Seva Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "1", title: "Select Gurdwara & Seva", desc: "Choose your gurdwara and the specific seva — Ardas, Langar, or Akhand Path." },
              { n: "2", title: "Share Family Names", desc: "Your name, your family — we include everyone in the Ardas." },
              { n: "3", title: "Sevaadar Performs", desc: "On your chosen day, the seva is performed with full devotion by our trusted sevaadar." },
              { n: "4", title: "Video + Prasad", desc: "Receive the video on WhatsApp and karah prasad at your doorstep." },
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
          <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">Sangat From Around the World</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-blue-100 rounded-xl p-5 shadow-sm">
                <p className="text-stone-600 text-sm mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
                  <p className="text-blue-600 text-xs">{t.gurdwara} sevaadar</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is Ardas?", a: "Ardas is the formal Sikh supplication — a prayer offered standing, in the presence of the Guru Granth Sahib. It begins with remembrance of the Gurus and includes personal intentions and family names. Having Ardas performed at a sacred gurdwara carries deep spiritual significance." },
              { q: "Can I book Langar seva from abroad?", a: "Absolutely. Langar seva — feeding the Sangat — is one of the most meritorious acts in Sikhism. You can sponsor langar for any number of people in your family's name, in memory of a loved one, or on any occasion. A certificate of seva is provided." },
              { q: "What is Hukamnama?", a: "Every day, the Golden Temple opens the Guru Granth Sahib to a random page — this is the Hukamnama, the Guru's daily edict or message. We share the day's Hukamnama along with your Ardas, so you receive the Guru's word for your day." },
              { q: "What is Akhand Path?", a: "Akhand Path is the uninterrupted, continuous recitation of the entire Sri Guru Granth Sahib Ji — 1,430 pages read aloud without stopping over 48 hours by a relay of trained granthis. It is typically done for important occasions, memorials, or to seek Waheguru's blessing for a specific intention." },
              { q: "What if the service isn't delivered?", a: "If video proof of your seva isn't delivered within 48 hours of the agreed date, you receive a full refund. Waheguru's seva must be done with integrity." },
            ].map(f => (
              <div key={f.q} className="bg-white rounded-xl p-5 border border-blue-100">
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
