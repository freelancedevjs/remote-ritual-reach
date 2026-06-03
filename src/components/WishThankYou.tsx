"use client"
import { useSearchParams } from "next/navigation"
import { Link } from "@/i18n/navigation"
import { religions } from "@/lib/religion-ad-data"

export default function WishThankYou() {
  const params = useSearchParams()
  const ref      = params.get("ref")      || ""
  const religion = params.get("religion") || ""
  const name     = params.get("name")     || ""

  const rel = religions.find(r => r.slug === religion)

  return (
    <div className={`min-h-screen flex flex-col ${rel?.theme.bg ?? "bg-amber-50"}`}>
      {/* Nav */}
      <nav className={`${rel?.theme.nav ?? "bg-stone-900"} ${rel?.theme.navText ?? "text-white"} px-4 py-3.5 flex items-center justify-between sticky top-0 z-50 shadow-lg`}>
        <Link href="/" className="font-display font-bold flex items-center gap-2 text-sm">
          <span className="text-xl">{rel?.icon ?? "🕊️"}</span>
          <span className="opacity-90">SacredReach</span>
        </Link>
        <Link
          href="/"
          className="bg-white/15 hover:bg-white/25 transition-colors px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide"
        >
          ← Home
        </Link>
      </nav>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="bg-white border-2 border-amber-100 rounded-3xl p-10 text-center max-w-md w-full shadow-xl">
          <div className="text-6xl mb-5 animate-float inline-block">🙏</div>

          <h1 className="font-display text-2xl font-bold text-stone-800 mb-2">
            Your Wish Has Been Received
          </h1>

          {name && (
            <p className="text-stone-500 text-sm mb-4">Thank you, {name}</p>
          )}

          {ref && (
            <div className="bg-stone-50 border border-stone-200 rounded-2xl px-8 py-4 mb-6 inline-block">
              <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Your reference</p>
              <p className="font-display text-4xl font-bold text-stone-800 tracking-wider">{ref}</p>
            </div>
          )}

          <p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
            We will review your intention and suggest the right sacred path for your situation.
            Sacred things unfold at their own pace.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {religion && (
              <Link
                href={`/ad/${religion}` as `/ad/${string}`}
                className={`inline-flex items-center justify-center gap-2 ${rel?.theme.accent ?? "bg-amber-600 hover:bg-amber-700"} ${rel?.theme.accentText ?? "text-white"} font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-105 active:scale-95`}
              >
                🙏 Submit Another Wish
              </Link>
            )}
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold px-6 py-3 rounded-xl text-sm transition-all"
            >
              Explore Sacred Places →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`${rel?.theme.nav ?? "bg-stone-900"} ${rel?.theme.navText ?? "text-stone-400"} py-6 px-4 text-center`}>
        <p className="text-xs opacity-50">SacredReach · Sacred rituals performed with reverence and full documentation</p>
      </footer>
    </div>
  )
}
