import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: { default: "Catholic Shrine Services", template: "%s | SacredReach Catholic" },
  description: "Book Mass offerings, novena dedications and candle lightings at Velankanni, St. Thomas Mount and other sacred Catholic shrines in South India.",
}

export default function ChurchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-sky-50">
      <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/church" className="flex items-center gap-2 font-bold text-lg">
            <span>⛪</span> SacredReach Catholic
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/church" className="hover:text-blue-200 transition-colors">All Shrines</Link>
            <Link href="/church#how-it-works" className="hover:text-blue-200 transition-colors">How It Works</Link>
            <Link href="/church#faq" className="hover:text-blue-200 transition-colors">FAQ</Link>
            <Link href="/" className="bg-white text-blue-900 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors text-xs font-bold">← Home</Link>
          </div>
        </div>
      </nav>
      {children}
      <footer className="bg-blue-950 text-blue-200 py-10 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h3 className="text-white font-bold mb-2">⛪ SacredReach Catholic</h3>
              <p className="text-sm max-w-xs">Connecting Catholic devotees worldwide with sacred shrines of South India. Every offering made with faith and reverence.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Sacred Shrines</h4>
              <ul className="space-y-1 text-sm">
                <li><Link href="/church/velankanni" className="hover:text-white transition-colors">Velankanni Basilica</Link></li>
                <li><Link href="/church/st-thomas-mount" className="hover:text-white transition-colors">St. Thomas Mount, Chennai</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Support</h4>
              <ul className="space-y-1 text-sm">
                <li>WhatsApp: +91 98765 43210</li>
                <li>Mon–Sun 7AM–9PM IST</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-blue-800 text-xs mt-8">© 2024 SacredReach. May Our Lady&apos;s grace be with all who seek her. ✝️</p>
        </div>
      </footer>
    </div>
  )
}
