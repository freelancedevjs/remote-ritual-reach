import type { Metadata } from "next"
import { Inter, Cinzel } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "SacredReach — Your Faith Has No Distance",
  description: "Book sacred rituals at holy temples, dargahs, gurdwaras and churches worldwide, performed on your behalf with video proof.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
