"use client"
import { useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function BookingThankYou() {
  const params  = useSearchParams()
  const t       = useTranslations("booking")

  const ref     = params.get("ref")    || ""
  const place   = params.get("place")  || ""
  const ritual  = params.get("ritual") || ""
  const name    = params.get("name")   || ""
  const date    = params.get("date")   || ""
  const total   = params.get("total")  || ""
  const prasad  = params.get("prasad") === "1"
  const video   = params.get("video")  === "1"

  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      {/* Nav */}
      <nav className="bg-stone-900 text-white px-4 py-3.5 flex items-center justify-between sticky top-0 z-50 shadow-lg">
        <Link href="/" className="font-display font-bold flex items-center gap-2 text-sm text-amber-400">
          🛕 SacredReach
        </Link>
        <Link href="/" className="bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-full text-xs font-semibold">
          ← Home
        </Link>
      </nav>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="bg-white border-2 border-amber-100 rounded-3xl p-8 md:p-12 text-center max-w-lg w-full shadow-xl">
          <div className="text-6xl mb-5 animate-float inline-block">🙏</div>

          <h1 className="font-display text-2xl md:text-3xl font-bold text-stone-800 mb-2">
            {t("success_title")}
          </h1>

          {/* Reference number */}
          {ref && (
            <div className="bg-stone-50 border border-stone-200 rounded-2xl px-8 py-4 my-5 inline-block">
              <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Booking reference</p>
              <p className="font-display text-4xl font-bold text-stone-800 tracking-wider">{ref}</p>
            </div>
          )}

          {/* Booking summary */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 text-left mb-6 border border-amber-100">
            <div className="space-y-2.5">
              {place && (
                <p className="text-xs font-bold text-amber-700 uppercase tracking-widest">{place}</p>
              )}
              {ritual && (
                <div className="flex justify-between items-start">
                  <span className="text-sm text-stone-500">{t("ritual_label")}</span>
                  <span className="text-sm font-semibold text-stone-800 text-right max-w-[60%]">{ritual}</span>
                </div>
              )}
              {name && (
                <div className="flex justify-between">
                  <span className="text-sm text-stone-500">{t("name_label")}</span>
                  <span className="text-sm font-semibold text-stone-800">{name}</span>
                </div>
              )}
              {date && (
                <div className="flex justify-between">
                  <span className="text-sm text-stone-500">{t("date_label")}</span>
                  <span className="text-sm font-semibold text-stone-800">{date}</span>
                </div>
              )}
              {(prasad || video) && (
                <div className="flex gap-2 flex-wrap pt-1">
                  {prasad && <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-medium">📦 Prasad</span>}
                  {video  && <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-medium">🎥 Priority Video</span>}
                </div>
              )}
              {total && (
                <div className="border-t border-amber-200 pt-2.5 mt-1 flex justify-between items-center">
                  <span className="text-sm font-bold text-stone-700">{t("total_label")}</span>
                  <span className="font-display text-2xl font-bold text-stone-800">${total}</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
            {t("success_hope")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-md text-sm"
            >
              💳 {t("pay_now")}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-amber-300 hover:border-amber-400 text-amber-700 font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-105 active:scale-95 text-sm"
            >
              🤲 {t("donate")}
            </a>
          </div>

          <div className="mt-6">
            <Link href="/" className="text-xs text-stone-400 hover:text-stone-600 underline transition-colors">
              ← Back to all sacred places
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-stone-900 text-stone-400 py-6 px-4 text-center">
        <p className="text-xs opacity-50">SacredReach · All rituals performed with reverence and full video documentation</p>
      </footer>
    </div>
  )
}
