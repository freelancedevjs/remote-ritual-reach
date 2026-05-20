import type { Metadata } from "next"
import { Inter, Cinzel, Noto_Sans } from "next/font/google"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import "../globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700", "900"],
  display: "swap",
})

// Covers Devanagari (Hindi, Marathi), Gujarati, Bengali, Tamil, Telugu,
// Gurmukhi (Punjabi), Arabic, Japanese, Cyrillic (Russian), Hebrew
const notoSans = Noto_Sans({
  subsets: ["latin", "devanagari", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SacredReach — Your Faith Has No Distance",
  description: "Book sacred rituals at holy temples, dargahs, gurdwaras and churches worldwide.",
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  const messages = (await import(`../../../messages/${locale}.json`)).default
  const dir = ["ar", "ur", "he"].includes(locale) ? "rtl" : "ltr"

  return (
    <html lang={locale} dir={dir}>
      <body className={`${inter.variable} ${cinzel.variable} ${notoSans.variable} font-body antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
