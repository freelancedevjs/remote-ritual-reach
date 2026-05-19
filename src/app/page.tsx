"use client"
import { useState } from "react"
import Link from "next/link"
import { places } from "@/lib/places-data"
import { gurus } from "@/lib/gurus-data"

const typeFilters = ["All", "temple", "gurdwara", "dargah", "church", "monastery", "ashram", "shrine", "samadhi"]

export default function HomePage() {
  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")

  const filtered = places.filter(p => {
    const matchType = filter === "All" || p.type === filter
    const matchSearch = search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.primaryFigure.toLowerCase().includes(search.toLowerCase()) ||
      p.location.city.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.includes(search.toLowerCase()))
    return matchType && matchSearch
  })

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-stone-400 text-xs font-semibold tracking-widest uppercase mb-3">SacredReach</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Your Faith Has<br /><span className="text-amber-400">No Distance</span>
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto mb-8">
            Book rituals at any sacred place in the world — performed on your behalf by verified priests, pandits, khadims and monks, with video proof and blessed offerings shipped to you.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <span className="bg-stone-700 px-4 py-2 rounded-full">📹 Video proof guaranteed</span>
            <span className="bg-stone-700 px-4 py-2 rounded-full">📦 Shipped worldwide</span>
            <span className="bg-stone-700 px-4 py-2 rounded-full">✅ Verified officiants only</span>
            <span className="bg-stone-700 px-4 py-2 rounded-full">🕊️ Every faith, every tradition</span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            { n: "1", icon: "🔍", title: "Find Your Place", desc: "Search by name, deity, saint, or city" },
            { n: "2", icon: "🙏", title: "Choose a Ritual", desc: "Select the specific ritual or offering" },
            { n: "3", icon: "🎬", title: "We Perform It", desc: "Verified officiant performs in your name" },
            { n: "4", icon: "📦", title: "You Receive Proof", desc: "Video + photos + blessed items shipped" },
          ].map(s => (
            <div key={s.n} className="text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <h3 className="font-semibold text-stone-800 text-sm mb-1">{s.title}</h3>
              <p className="text-stone-400 text-xs">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Places */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-6">Sacred Places</h2>

          {/* Search */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <input
              type="text"
              placeholder="Search by name, deity, saint, city..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-stone-400 bg-white"
            />
          </div>

          {/* Type filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {typeFilters.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-colors border ${filter === f ? "bg-stone-800 text-white border-stone-800" : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"}`}>
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(p => (
              <Link key={p.slug} href={`/place/${p.slug}`}
                className={`block ${p.theme.bg} border border-stone-200 rounded-2xl p-5 hover:shadow-md transition-all group`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{p.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-stone-800 text-sm leading-tight group-hover:text-stone-600 transition-colors mb-0.5">{p.name}</h3>
                    <p className="text-stone-400 text-xs truncate">{p.location.city}, {p.location.state}</p>
                  </div>
                </div>
                <p className="text-stone-500 text-xs mb-1">{p.primaryFigure}</p>
                <p className="text-stone-400 text-xs mb-3 line-clamp-2">{p.description.slice(0, 100)}...</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-0.5 rounded-full capitalize font-medium ${p.theme.badge} ${p.theme.badgeText}`}>{p.type}</span>
                  <span className="text-xs font-bold text-stone-700">From ${Math.min(...p.rituals.map(r => r.price))}</span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-stone-400">
              <p className="text-4xl mb-3">🔍</p>
              <p>No places found for &quot;{search}&quot;. Try a different search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Gurus */}
      <section className="py-12 px-4 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-2">Spiritual Masters &amp; Gurus</h2>
          <p className="text-stone-400 text-sm mb-6">Learn about the masters behind the sacred places. Each page is independent — their teachings, their places, their legacy.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gurus.map(g => (
              <Link key={g.slug} href={`/guru/${g.slug}`}
                className={`block ${g.theme.bg} border border-stone-200 rounded-2xl p-5 hover:shadow-md transition-all group`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{g.icon}</span>
                  <div>
                    <h3 className="font-bold text-stone-800 text-sm group-hover:text-stone-600 transition-colors">{g.name}</h3>
                    <p className="text-stone-400 text-xs">{g.lifespan}</p>
                  </div>
                </div>
                <p className="text-stone-500 text-xs mb-2 line-clamp-2">{g.tradition}</p>
                <p className="text-stone-400 text-xs line-clamp-2">{g.bio.slice(0, 90)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 px-4 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "✅", label: "Verified Officiants", desc: "Background-checked priests, pandits, khadims & monks" },
            { icon: "📹", label: "Video Every Time", desc: "Your name visible. No video = full refund." },
            { icon: "📦", label: "Global Shipping", desc: "Blessed items delivered in 10–21 days worldwide" },
            { icon: "🌍", label: "40+ Countries", desc: "12,000+ rituals performed for diaspora families" },
          ].map(t => (
            <div key={t.label}>
              <div className="text-3xl mb-2">{t.icon}</div>
              <h3 className="font-semibold text-sm mb-1">{t.label}</h3>
              <p className="text-stone-400 text-xs">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-stone-900 border-t border-stone-800 py-6 px-4 text-center">
        <p className="text-stone-400 text-xs">© 2024 SacredReach · Every sacred place is its own independent universe · Serving devotees in 40+ countries</p>
      </footer>
    </main>
  )
}
