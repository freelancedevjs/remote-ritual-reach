import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: { default: "Dargah & Shrine Rituals", template: "%s | SacredReach Dargah" },
  description: "Book chaddar offerings, qawwali dedications and fatiha at Ajmer Sharif, Data Darbar, Nizamuddin and more — performed with reverence and video proof.",
}

export default function DargahLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-green-50">
      <nav className="bg-green-800 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/dargah" className="flex items-center gap-2 font-bold text-lg">
            <span>☪️</span> SacredReach Dargah
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/dargah" className="hover:text-green-200 transition-colors">All Shrines</Link>
            <Link href="/dargah#how-it-works" className="hover:text-green-200 transition-colors">How It Works</Link>
            <Link href="/dargah#faq" className="hover:text-green-200 transition-colors">FAQ</Link>
            <Link href="/" className="bg-white text-green-800 px-3 py-1.5 rounded-lg hover:bg-green-50 transition-colors text-xs font-bold">← Home</Link>
          </div>
        </div>
      </nav>
      {children}
      <footer className="bg-green-900 text-green-200 py-10 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h3 className="text-white font-bold mb-2">☪️ SacredReach Dargah</h3>
              <p className="text-sm max-w-xs">Connecting devotees worldwide with the blessed dargahs of the subcontinent. Every offering made with sincerity and reverence.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Sacred Dargahs</h4>
              <ul className="space-y-1 text-sm">
                <li><Link href="/dargah/ajmer-sharif" className="hover:text-white transition-colors">Ajmer Sharif</Link></li>
                <li><Link href="/dargah/data-darbar" className="hover:text-white transition-colors">Data Darbar, Lahore</Link></li>
                <li><Link href="/dargah/nizamuddin" className="hover:text-white transition-colors">Nizamuddin Dargah, Delhi</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Support</h4>
              <ul className="space-y-1 text-sm">
                <li>WhatsApp: +91 98765 43210</li>
                <li>Mon–Sun 8AM–10PM IST</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-green-700 text-xs mt-8">© 2024 SacredReach. Khwaja ki dua sabke saath 🌙</p>
        </div>
      </footer>
    </div>
  )
}
