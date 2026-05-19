"use client"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"

const langNames: Record<string, string> = {
  en: "English",
  hi: "हिंदी",
  pa: "ਪੰਜਾਬੀ",
  ta: "தமிழ்",
  te: "తెలుగు",
  gu: "ગુજરાતી",
  ar: "العربية",
  ur: "اردو",
  bn: "বাংলা",
  de: "Deutsch",
  ja: "日本語",
  pt: "Português",
}

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="relative inline-block">
      <select
        value={locale}
        onChange={(e) => router.replace(pathname, { locale: e.target.value })}
        className="appearance-none bg-white/20 text-white border border-white/30 rounded-lg px-3 py-1.5 text-xs font-medium cursor-pointer pr-7 focus:outline-none hover:bg-white/30 transition-colors"
      >
        {routing.locales.map(l => (
          <option key={l} value={l} className="text-stone-900 bg-white">
            {langNames[l]}
          </option>
        ))}
      </select>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 text-xs pointer-events-none">▾</span>
    </div>
  )
}
