import { Suspense } from "react"
import { setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import BookingThankYou from "@/components/BookingThankYou"

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default async function BookingThankYouPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-amber-50">
          <div className="text-4xl animate-pulse">🙏</div>
        </div>
      }
    >
      <BookingThankYou />
    </Suspense>
  )
}
