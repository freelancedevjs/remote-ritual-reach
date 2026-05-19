import type { Metadata } from "next"
import { Inter, Noto_Sans } from "next/font/google"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import "../globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

// Noto Sans covers Devanagari (Hindi), Gujarati, Bengali, Tamil, Telugu, Gurmukhi, Arabic, Japanese
const notoSans = Noto_Sans({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
})

export const metadata: Metadata = {
  title: "SacredReach — Your Faith Has No Distance",
  description: "Book sacred rituals at holy temples, dargahs, gurdwaras and churches worldwide.",
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  const messages = (await import(`../../../messages/${locale}.json`)).default

  const dir = ['ar', 'ur'].includes(locale) ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir}>
      <body className={`${inter.variable} ${notoSans.variable} font-sans antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}


export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}
