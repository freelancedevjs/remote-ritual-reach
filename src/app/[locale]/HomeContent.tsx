"use client"
import { useState, useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import { Link, useRouter } from "@/i18n/navigation"
import { places } from "@/lib/places-data"
import { gurus } from "@/lib/gurus-data"
import { mysticalSciences } from "@/lib/mystical-sciences-data"
import ScrollReveal from "@/components/ScrollReveal"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import HeroShader from "@/components/HeroShader"

const typeFilters = ["All", "temple", "gurdwara", "dargah", "church", "monastery", "ashram", "shrine", "samadhi"]

const SEARCH_SUGGESTIONS = [
  "How to remove negative energy from home permanently",
  "Spiritual healing for ancestral karma",
  "Ancient Vedic rituals for success",
  "How to protect yourself from psychic attacks",
  "Vedic astrology remedies for career",
  "Distance energy healing techniques",
  "Spiritual manifestation techniques",
]

const LIFE_BLOCKS = [
  {
    icon: "💸",
    problem: "Money keeps leaving, no matter how hard you work",
    root: "Financial energy block / karmic debt pattern",
    expert: "Vedic financial astrology & karma analysis",
    science: "Mantra frequency realigns abundance resonance",
  },
  {
    icon: "💔",
    problem: "The same relationship arguments, on repeat",
    root: "Ancestral trauma loop / karmic bond pattern",
    expert: "Ancestral karma & relationship healing consultation",
    science: "Pitru Dosha analysis severs generational cycles",
  },
  {
    icon: "😰",
    problem: "Anxiety that therapy can't explain or fix",
    root: "Psychic attack / negative energy imprint",
    expert: "Energy protection & aura clearing consultation",
    science: "Tantra shields the auric field from external interference",
  },
  {
    icon: "🚧",
    problem: "Career hitting an invisible ceiling",
    root: "Planetary obstruction / Shani / Rahu influence",
    expert: "Vedic astrology career & planetary reading",
    science: "Yantra geometry corrects planetary frequency mismatch",
  },
  {
    icon: "🏥",
    problem: "Chronic illness doctors cannot explain",
    root: "Energetic imbalance / Chakra blockage",
    expert: "Health energy assessment & chakra consultation",
    science: "Sound vibration restores cellular energy coherence",
  },
  {
    icon: "🌫️",
    problem: "Manifestation not working despite the effort",
    root: "Subconscious block / Yantra misalignment",
    expert: "Manifestation block analysis & sacred geometry",
    science: "Sacred geometry reprograms the subconscious focal point",
  },
]

const VEDIC_SCIENCES = [
  {
    name: "Mantra",
    sanskrit: "मंत्र",
    western: "Sound Frequency Science",
    desc: "Specific vocal frequencies that alter brainwave states, shift environmental resonance, and clear mental trauma at the root level.",
    icon: "🔊",
    color: "border-sky-500/30 bg-sky-950/20",
    accent: "text-sky-400",
  },
  {
    name: "Yantra",
    sanskrit: "यंत्र",
    western: "Sacred Geometry Programming",
    desc: "Precise geometric circuits that reprogram the subconscious mind and stabilize chaotic energy currents in your home or body.",
    icon: "⬡",
    color: "border-amber-500/30 bg-amber-950/20",
    accent: "text-amber-400",
  },
  {
    name: "Tantra",
    sanskrit: "तंत्र",
    western: "Energy Integration Technology",
    desc: "From Tan (expand) + Tra (liberate). The practical system combining sound and form to rewire your personal energy grid from friction to flow.",
    icon: "∞",
    color: "border-violet-500/30 bg-violet-950/20",
    accent: "text-violet-400",
  },
]

const scienceCategoryMeta: Record<string, { label: string; color: string }> = {
  numerology:    { label: "Numerology",     color: "bg-violet-100 text-violet-800" },
  astrology:     { label: "Astrology",      color: "bg-indigo-100 text-indigo-800" },
  vastu:         { label: "Vastu",          color: "bg-amber-100 text-amber-800" },
  nameology:     { label: "Nameology",      color: "bg-rose-100 text-rose-800" },
  palmistry:     { label: "Palmistry",      color: "bg-orange-100 text-orange-800" },
  nadi:          { label: "Nadi",           color: "bg-yellow-100 text-yellow-900" },
  tarot:         { label: "Tarot",          color: "bg-purple-100 text-purple-900" },
  gemstone:      { label: "Gemstone",       color: "bg-cyan-100 text-cyan-900" },
  rudraksha:     { label: "Rudraksha",      color: "bg-stone-100 text-stone-800" },
  "lal-kitab":   { label: "Lal Kitab",      color: "bg-red-100 text-red-800" },
  "face-reading":{ label: "Face Reading",   color: "bg-teal-100 text-teal-800" },
  chakra:        { label: "Chakra",         color: "bg-fuchsia-100 text-fuchsia-800" },
  prashna:       { label: "Prashna",        color: "bg-lime-100 text-lime-800" },
  mantra:        { label: "Mantra",         color: "bg-sky-100 text-sky-900" },
}

function SacredMandala({ className = "" }: { className?: string }) {
  const rings = [190, 150, 110, 70, 30]
  const lines = Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * 2 * Math.PI
    return { x1: 200 + 30 * Math.cos(a), y1: 200 + 30 * Math.sin(a), x2: 200 + 190 * Math.cos(a), y2: 200 + 190 * Math.sin(a) }
  })
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none">
      {rings.map(r => <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="0.6" opacity="0.55" />)}
      {lines.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="currentColor" strokeWidth="0.35" opacity="0.35" />)}
      {Array.from({ length: 8 }, (_, i) => (
        <ellipse key={i} cx="200" cy="70" rx="14" ry="38" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.45" transform={`rotate(${i * 45} 200 200)`} />
      ))}
      {Array.from({ length: 24 }, (_, i) => {
        const a = (i / 24) * 2 * Math.PI
        return <circle key={i} cx={200 + 190 * Math.cos(a)} cy={200 + 190 * Math.sin(a)} r="2" fill="currentColor" opacity={i % 2 === 0 ? "0.6" : "0.3"} />
      })}
      <circle cx="200" cy="200" r="4" fill="currentColor" opacity="0.8" />
    </svg>
  )
}

function Particle({ left, size, delay, dur }: { left: number; size: number; delay: number; dur: number }) {
  return (
    <div className="absolute bottom-0 rounded-full bg-amber-400 pointer-events-none"
      style={{ left: `${left}%`, width: size, height: size, opacity: 0.4, animation: `particleRise ${dur}s ${delay}s ease-out infinite` }} />
  )
}

export default function HomeContent() {
  const t = useTranslations()
  const router = useRouter()
  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [suggIdx, setSuggIdx] = useState(0)
  const [heroSearch, setHeroSearch] = useState("")
  const placesRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const id = setInterval(() => setSuggIdx(i => (i + 1) % SEARCH_SUGGESTIONS.length), 3000)
    return () => clearInterval(id)
  }, [])

  function handleHeroSearch(e: React.FormEvent) {
    e.preventDefault()
    router.push("/consult")
  }

  function pickSuggestion(s: string) {
    setHeroSearch(s)
    router.push("/consult")
  }

  const filtered = places.filter(p => {
    const matchType = filter === "All" || p.type === filter
    const q = search.toLowerCase()
    const matchSearch = q === "" ||
      p.name.toLowerCase().includes(q) ||
      p.primaryFigure.toLowerCase().includes(q) ||
      p.location.city.toLowerCase().includes(q) ||
      p.tags.some(tag => tag.includes(q)) ||
      p.description.toLowerCase().includes(q)
    return matchType && matchSearch
  })

  return (
    <main className="min-h-screen bg-stone-950 overflow-x-hidden">

      {/* ── NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/8">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
          <span className="font-display text-amber-400 text-sm font-bold tracking-widest uppercase flex-shrink-0">✦ SacredReach</span>
          <nav className="flex items-center gap-3 sm:gap-5">
            <a href="#why" className="text-stone-400 hover:text-amber-400 transition-colors text-xs tracking-wide hidden sm:block">Why It Works</a>
            <a href="#sciences" className="text-stone-400 hover:text-amber-400 transition-colors text-xs tracking-wide hidden sm:block">🔮 Divination</a>
            <a href="#gurus" className="text-stone-400 hover:text-amber-400 transition-colors text-xs tracking-wide hidden sm:block">✦ Masters</a>
            <a href="#places" className="text-stone-400 hover:text-amber-400 transition-colors text-xs tracking-wide hidden sm:block">🛕 Holy Sites</a>
            <LanguageSwitcher />
            <Link href="/consult" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-full transition-colors hidden sm:block">
              Free Consultation
            </Link>
          </nav>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          HERO — The Hook
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950 pt-14">
        <HeroShader />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full glow-gold pointer-events-none animate-glow-pulse" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <SacredMandala className="w-[680px] h-[680px] text-amber-400 opacity-[0.07] animate-spin-slow" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <SacredMandala className="w-[440px] h-[440px] text-amber-300 opacity-[0.06] animate-spin-reverse" />
        </div>
        {[
          { left: 8, size: 4, delay: 0, dur: 5.5 }, { left: 18, size: 3, delay: 1.2, dur: 4.8 },
          { left: 32, size: 5, delay: 0.5, dur: 6.2 }, { left: 48, size: 3, delay: 2, dur: 5 },
          { left: 62, size: 4, delay: 0.8, dur: 4.5 }, { left: 76, size: 3, delay: 1.7, dur: 5.8 },
          { left: 88, size: 5, delay: 0.3, dur: 5.2 },
        ].map((p, i) => <Particle key={i} {...p} />)}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24">
          <p className="text-amber-400/70 text-xs font-semibold tracking-[0.4em] uppercase mb-6 animate-fade-in-down" style={{ animationDelay: "0.1s" }}>
            ✦ Ancient Vedic Energy Science ✦
          </p>

          <h1 className="font-display font-bold leading-[1.08] mb-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <span className="block text-4xl sm:text-5xl md:text-6xl text-stone-300 mb-2">Ever feel like you&apos;re</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-shimmer">fighting an invisible wall?</span>
          </h1>

          <p className="text-stone-400 text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            The same patterns repeating. Hard work that stops working. Unexplained exhaustion.
          </p>
          <p className="text-amber-400/80 text-base md:text-lg max-w-xl mx-auto mb-10 font-medium animate-fade-in-up" style={{ animationDelay: "0.42s" }}>
            This isn&apos;t bad luck. It&apos;s an energetic block — and it has a 5,000-year-old solution.
          </p>

          {/* Search */}
          <div className="animate-fade-in-up max-w-2xl mx-auto mb-8" style={{ animationDelay: "0.5s" }}>
            <form onSubmit={handleHeroSearch} className="flex rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <input
                type="text"
                value={heroSearch}
                onChange={e => setHeroSearch(e.target.value)}
                placeholder={SEARCH_SUGGESTIONS[suggIdx]}
                className="flex-1 bg-white/8 backdrop-blur px-5 py-4 text-white placeholder:text-stone-500 focus:outline-none text-sm min-w-0 transition-all focus:bg-white/12"
              />
              <button type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 text-sm transition-all flex-shrink-0">
                Get Free Guidance →
              </button>
            </form>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {SEARCH_SUGGESTIONS.map((s, i) => (
                <button key={i} onClick={() => pickSuggestion(s)}
                  className="text-[11px] bg-white/5 hover:bg-amber-500/15 border border-white/8 hover:border-amber-400/30 text-stone-500 hover:text-amber-300 px-3 py-1.5 rounded-full transition-all text-left leading-snug">
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up" style={{ animationDelay: "0.65s" }}>
            {[
              { icon: "🔬", label: "Rooted in Ancient Science" },
              { icon: "📹", label: "Every Ritual Documented" },
              { icon: "🌍", label: "Distance — No Barrier" },
              { icon: "🕊️", label: "All Faiths Welcome" },
            ].map(f => (
              <span key={f.label} className="glass text-stone-300 text-xs px-4 py-2 rounded-full">
                {f.icon}&nbsp;&nbsp;{f.label}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-5 h-9 border border-stone-600 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2.5 bg-amber-400 rounded-full animate-scroll-bounce" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIFE BLOCKS — Recognize the pattern
      ══════════════════════════════════════════ */}
      <section id="blocks" className="py-24 px-4 bg-stone-950 border-t border-stone-800/50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-amber-500 text-xs font-bold tracking-[0.25em] uppercase mb-3">Recognize Your Pattern</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Which of these sounds like your life?
            </h2>
            <p className="text-stone-500 text-base max-w-xl mx-auto">
              Every invisible problem has a visible ancient remedy. Modern medicine treats symptoms.
              Vedic energy science removes the root.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="reveal-stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {LIFE_BLOCKS.map((b, i) => (
              <Link key={i} href="/consult" className="group block">
                <div className="bg-stone-900/60 border border-stone-800/60 hover:border-emerald-500/40 rounded-2xl p-6 transition-all hover:bg-stone-900 h-full">
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="font-bold text-white text-sm leading-snug mb-3 group-hover:text-emerald-300 transition-colors">
                    &ldquo;{b.problem}&rdquo;
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 text-xs mt-0.5 flex-shrink-0">●</span>
                      <p className="text-stone-500 text-xs leading-relaxed"><span className="text-stone-400 font-semibold">Root cause:</span> {b.root}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400 text-xs mt-0.5 flex-shrink-0">✦</span>
                      <p className="text-stone-500 text-xs leading-relaxed"><span className="text-emerald-400 font-semibold">Expert consultation:</span> {b.expert}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-sky-400 text-xs mt-0.5 flex-shrink-0">◈</span>
                      <p className="text-stone-600 text-xs leading-relaxed italic">{b.science}</p>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-500 group-hover:text-emerald-400 transition-colors font-semibold">
                    Get Free Expert Consultation →
                  </span>
                </div>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DEMYSTIFY — What it actually is
      ══════════════════════════════════════════ */}
      <section id="why" className="py-24 px-4 bg-stone-900 border-t border-stone-800/50 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
          <SacredMandala className="w-[500px] h-[500px] text-amber-400" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <p className="text-amber-500 text-xs font-bold tracking-[0.25em] uppercase mb-3">The Truth vs. The Myth</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              What Hollywood Taught You — vs. What It Actually Is
            </h2>
          </ScrollReveal>

          {/* Misconception vs Reality */}
          <ScrollReveal className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-red-950/20 border border-red-800/30 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">🎬</span>
                <h3 className="font-bold text-red-400 text-sm uppercase tracking-wide">What you were told</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Dark magic, voodoo, witchcraft",
                  "Superstition from uneducated cultures",
                  "Dangerous or taboo practices",
                  "Purely sexual \"Neo-Tantra\" from Instagram",
                  "Has no scientific basis",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-red-500 mt-0.5 flex-shrink-0 text-xs">✗</span>
                    <span className="text-stone-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-950/20 border border-emerald-700/30 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">🔬</span>
                <h3 className="font-bold text-emerald-400 text-sm uppercase tracking-wide">What it actually is</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "A structured science of sound, geometry, and energy",
                  "5,000+ years of tested methodology",
                  "Sound frequencies that alter brainwave states",
                  "Geometric forms that reprogram subconscious patterns",
                  "Quantum physics is only now catching up",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0 text-xs">✓</span>
                    <span className="text-stone-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Three sciences */}
          <ScrollReveal animation="reveal-stagger" className="grid md:grid-cols-3 gap-5">
            {VEDIC_SCIENCES.map(s => (
              <div key={s.name} className={`border rounded-2xl p-6 ${s.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-3xl font-mono ${s.accent}`}>{s.icon}</span>
                  <div>
                    <h3 className={`font-display font-bold text-lg ${s.accent}`}>{s.name}</h3>
                    <p className="text-stone-600 text-xs">{s.sanskrit} · {s.western}</p>
                  </div>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal className="mt-12 text-center">
            <p className="text-stone-600 text-sm italic max-w-2xl mx-auto">
              &ldquo;Tantra comes from Tan (to expand) + Tra (to liberate). It is a systematic method to expand consciousness
              and liberate human potential using cosmic energies.&rdquo;
            </p>
            <a href="#sciences" className="inline-flex items-center gap-2 mt-6 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 font-semibold px-6 py-3 rounded-xl text-sm transition-all">
              Explore the Ancient Sciences →
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MYSTICAL SCIENCES
      ══════════════════════════════════════════ */}
      <section id="sciences" className="py-24 px-4 bg-stone-950 border-t border-stone-800/50 relative overflow-hidden">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none">
          <SacredMandala className="w-[600px] h-[600px] text-amber-400" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal className="mb-10">
            <p className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">🔮 Ancient Wisdom Sciences</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
              Mystical Arts &amp; Divination
            </h2>
            <p className="text-stone-500 text-sm max-w-2xl leading-relaxed">
              Numerology · Astrology · Vastu · Palmistry · Tarot · Nadi · Gemstone Therapy · Mantra Healing.
              Practiced by verified experts. Delivered as written reports, live video calls, or physical items.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="reveal-scale" delay={60} className="flex flex-wrap gap-2 mb-10">
            {(["All", ...Array.from(new Set(mysticalSciences.map(s => s.category)))] as string[]).map((cat, i) => {
              const meta = scienceCategoryMeta[cat]
              return (
                <span key={cat}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border cursor-default ${
                    i === 0 ? "bg-amber-500/20 text-amber-300 border-amber-500/30" : "bg-stone-800/60 text-stone-400 border-stone-700/50"
                  }`}>
                  {i === 0 ? "All Sciences" : (meta?.label ?? cat)}
                </span>
              )
            })}
          </ScrollReveal>

          <ScrollReveal animation="reveal-stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mysticalSciences.map(science => {
              const catMeta = scienceCategoryMeta[science.category]
              const minPrice = Math.min(...science.packages.map(p => p.price))
              return (
                <Link key={science.slug} href={`/service/${science.slug}`} className="block group sacred-card">
                  <div className="bg-stone-800/40 border border-stone-700/40 hover:border-amber-400/30 rounded-2xl overflow-hidden transition-all backdrop-blur-sm">
                    <div className={`h-1 w-full ${science.theme.nav}`} />
                    <div className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${science.theme.badge} ${science.theme.badgeText} flex items-center justify-center text-xl shadow-sm`}>
                          {science.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-white text-sm leading-tight group-hover:text-amber-400 transition-colors mb-0.5">{science.name}</h3>
                          <p className="text-stone-500 text-[11px] truncate">{science.originalName}</p>
                        </div>
                      </div>
                      <p className="text-amber-400/70 text-xs font-semibold italic mb-2 leading-tight">&ldquo;{science.tagline}&rdquo;</p>
                      <div className="space-y-1 mb-4">
                        {science.whatItReveals.slice(0, 3).map((reveal, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="text-amber-500 text-xs mt-0.5 flex-shrink-0">✦</span>
                            <p className="text-stone-400 text-[11px] leading-relaxed line-clamp-1">{reveal}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-stone-700/40">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${catMeta?.color ?? "bg-stone-700 text-stone-300"}`}>
                          {catMeta?.label ?? science.category}
                        </span>
                        <span className="text-sm font-bold text-amber-400">from ${minPrice}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SPIRITUAL MASTERS
      ══════════════════════════════════════════ */}
      <section id="gurus" className="py-24 px-4 bg-stone-900 border-t border-stone-800/50 relative overflow-hidden">
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none">
          <SacredMandala className="w-[600px] h-[600px] text-amber-400" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal className="mb-10">
            <p className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">The Guides</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">Spiritual Masters</h2>
            <p className="text-stone-500 text-sm max-w-lg leading-relaxed">
              The teachers whose wisdom unlocked millions. Understand their science before choosing your remedy.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="reveal-stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {gurus.map(g => (
              <Link key={g.slug} href={`/guru/${g.slug}`} className="block group sacred-card">
                <div className="bg-stone-800/40 border border-stone-700/40 hover:border-amber-400/25 rounded-2xl p-5 transition-colors backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-stone-700/60 border border-stone-600/50 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-stone-600/60 transition-colors">{g.icon}</div>
                    <div>
                      <h3 className="font-bold text-white text-sm leading-tight group-hover:text-amber-400 transition-colors">{g.name}</h3>
                      <p className="text-stone-500 text-xs mt-0.5">{g.lifespan}</p>
                    </div>
                  </div>
                  <p className="text-amber-500/80 text-xs font-semibold mb-2 uppercase tracking-wide">{g.tradition.split(" — ")[0]}</p>
                  <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed">{g.bio.slice(0, 95)}…</p>
                  <div className="mt-4 text-xs text-stone-600 group-hover:text-amber-500 transition-colors font-medium">Explore teachings →</div>
                </div>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOLY SITES
      ══════════════════════════════════════════ */}
      <section id="places" ref={placesRef} className="py-20 px-4 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-10">
            <p className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase mb-2">🛕 Sacred Holy Sites</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-800 mb-2">
              Temples · Dargahs · Gurdwaras · Churches
            </h2>
            <p className="text-stone-400 text-sm max-w-xl">
              Book rituals at the world&apos;s most revered sacred places — performed on your behalf, with video proof, shipped prasad, and full documentation.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="reveal-scale" className="mb-5">
            <div className="relative max-w-xl">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-base">🔍</span>
              <input type="text" placeholder={t('home.search_placeholder')} value={search} onChange={e => setSearch(e.target.value)}
                className="w-full bg-white border border-stone-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 transition-all shadow-sm placeholder:text-stone-300" />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal-scale" delay={80} className="flex flex-wrap gap-2 mb-10">
            {typeFilters.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all duration-200 border ${filter === f ? "bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/25" : "bg-white text-stone-500 border-stone-200 hover:border-amber-300 hover:text-amber-700 hover:bg-amber-50"}`}>
                {f === "All" ? t('home.filter_all') : f}
              </button>
            ))}
          </ScrollReveal>

          <ScrollReveal animation="reveal-stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(p => (
              <Link key={p.slug} href={`/place/${p.slug}`} className="block group sacred-card">
                <div className={`${p.theme.bg} border border-stone-200/70 rounded-2xl overflow-hidden hover:border-amber-300/40 transition-colors`}>
                  <div className={`h-1.5 w-full ${p.theme.nav} opacity-70`} />
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${p.theme.badge} ${p.theme.badgeText} flex items-center justify-center text-xl shadow-sm`}>{p.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-stone-800 text-sm leading-tight group-hover:text-amber-700 transition-colors mb-0.5">{p.name}</h3>
                        <p className="text-stone-400 text-xs truncate">📍 {p.location.city}, {p.location.country}</p>
                      </div>
                    </div>
                    <p className="text-stone-500 text-xs mb-1 font-semibold">{p.primaryFigure}</p>
                    <p className="text-stone-400 text-xs mb-4 line-clamp-2 leading-relaxed">{p.description.slice(0, 100)}…</p>
                    <div className="flex items-center justify-between pt-3 border-t border-stone-200/50">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-xs px-2.5 py-1 rounded-full capitalize font-semibold ${p.theme.badge} ${p.theme.badgeText}`}>{p.type}</span>
                        <span className="text-xs text-stone-400">{p.rituals.length} rituals</span>
                      </div>
                      <span className="text-sm font-bold text-stone-700">{t('home.from_price', { price: Math.min(...p.rituals.map(r => r.price)) })}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </ScrollReveal>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-stone-400">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-lg font-medium text-stone-600">{t('home.no_results', { search })}</p>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-stone-950 border-t border-stone-800/50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
          <SacredMandala className="w-[900px] h-[900px] text-amber-400" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">Why Devotees Trust SacredReach</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Over 12,000 Rituals Performed</h2>
          </ScrollReveal>
          <ScrollReveal animation="reveal-stagger" className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {([
              { icon: "✅", stat: "100%", labelKey: "home.trust_officiants", descKey: "home.trust_officiants_desc" },
              { icon: "📹", stat: "24 hr", labelKey: "home.trust_video", descKey: "home.trust_video_desc" },
              { icon: "📦", stat: "180+", labelKey: "home.trust_shipping", descKey: "home.trust_shipping_desc" },
              { icon: "🌍", stat: "40+", labelKey: "home.trust_countries", descKey: "home.trust_countries_desc" },
            ] as const).map(item => (
              <div key={item.labelKey} className="text-center p-6 gradient-border bg-stone-900/50 rounded-2xl">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="font-display text-4xl font-bold text-amber-400 mb-1 animate-float">{item.stat}</div>
                <h3 className="font-bold text-white text-sm mb-2">{t(item.labelKey)}</h3>
                <p className="text-stone-500 text-xs leading-relaxed">{t(item.descKey)}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <footer className="bg-stone-950 border-t border-stone-800/50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-amber-400 text-sm font-bold tracking-[0.3em] uppercase mb-3">✦ SacredReach ✦</p>
          <p className="text-stone-600 text-xs leading-loose">{t('home.footer_text')}</p>
          <p className="text-stone-700 text-xs mt-6">© 2024 SacredReach</p>
          <div className="mt-3 flex items-center justify-center gap-6">
            <Link href="/contact" className="text-stone-400 hover:text-amber-400 text-xs underline transition-colors">Contact & Support</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
