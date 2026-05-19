import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: { default: "Hindu Temple Rituals", template: "%s | SacredReach Hindu" },
  description: "Book Hindu temple rituals at Tirupati, Kedarnath, Shirdi, Vaishno Devi and more — performed by verified pandits with video proof.",
}

export default function HinduLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-amber-50">
      <nav className="bg-orange-700 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/hindu" className="flex items-center gap-2 font-bold text-lg">
            <span>🛕</span> SacredReach Hindu
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/hindu" className="hover:text-orange-200 transition-colors">All Temples</Link>
            <Link href="/hindu#how-it-works" className="hover:text-orange-200 transition-colors">How It Works</Link>
            <Link href="/hindu#faq" className="hover:text-orange-200 transition-colors">FAQ</Link>
            <Link href="/" className="bg-white text-orange-700 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors text-xs font-bold">← Home</Link>
          </div>
        </div>
      </nav>
      {children}
      <footer className="bg-orange-900 text-orange-200 py-10 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h3 className="text-white font-bold mb-2">🛕 SacredReach Hindu</h3>
              <p className="text-sm max-w-xs">Connecting Hindu devotees worldwide with India&apos;s most sacred temples. Every ritual performed with reverence and devotion.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Sacred Temples</h4>
              <ul className="space-y-1 text-sm">
                <li><Link href="/hindu/tirupati" className="hover:text-white transition-colors">Tirupati Balaji</Link></li>
                <li><Link href="/hindu/shirdi" className="hover:text-white transition-colors">Shirdi Sai Baba</Link></li>
                <li><Link href="/hindu/kedarnath" className="hover:text-white transition-colors">Kedarnath</Link></li>
                <li><Link href="/hindu/vaishno-devi" className="hover:text-white transition-colors">Vaishno Devi</Link></li>
                <li><Link href="/hindu/mahakaleshwar" className="hover:text-white transition-colors">Mahakaleshwar</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Support</h4>
              <ul className="space-y-1 text-sm">
                <li>WhatsApp: +91 98765 43210</li>
                <li>Mon–Sun 6AM–10PM IST</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-orange-700 text-xs mt-8">© 2024 SacredReach. Jai Shri Ram 🙏</p>
        </div>
      </footer>
    </div>
  )
}
