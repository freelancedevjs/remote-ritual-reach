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
  he: "עברית",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  ru: "Русский",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  ms: "Bahasa Melayu",
  id: "Bahasa Indonesia",
}

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="relative inline-block">
      <select
        value={locale}
        onChange={e => router.replace(pathname, { locale: e.target.value })}
        className="appearance-none bg-white/15 text-white border border-white/25 rounded-full px-3 py-1.5 text-xs font-medium cursor-pointer pr-7 focus:outline-none hover:bg-white/25 transition-colors"
      >
        {routing.locales.map(l => (
          <option key={l} value={l} className="text-stone-900 bg-white">
            {langNames[l] ?? l.toUpperCase()}
          </option>
        ))}
      </select>
      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/60 text-[10px] pointer-events-none">▾</span>
    </div>
  )
}
