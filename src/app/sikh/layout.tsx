import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: { default: "Sikh Gurdwara Seva", template: "%s | SacredReach Sikh" },
  description: "Book Ardas, langar seva and Akhand Path at the Golden Temple, Hemkund Sahib and other sacred gurdwaras — performed with love and devotion.",
}

export default function SikhLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-blue-50">
      <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/sikh" className="flex items-center gap-2 font-bold text-lg">
            <span>🌟</span> SacredReach Sikh
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/sikh" className="hover:text-blue-200 transition-colors">All Gurdwaras</Link>
            <Link href="/sikh#how-it-works" className="hover:text-blue-200 transition-colors">How It Works</Link>
            <Link href="/sikh#faq" className="hover:text-blue-200 transition-colors">FAQ</Link>
            <Link href="/" className="bg-white text-blue-900 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors text-xs font-bold">← Home</Link>
          </div>
        </div>
      </nav>
      {children}
      <footer className="bg-blue-950 text-blue-200 py-10 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h3 className="text-white font-bold mb-2">🌟 SacredReach Sikh</h3>
              <p className="text-sm max-w-xs">Connecting the Sikh diaspora worldwide with sacred gurdwaras. Every Ardas offered with full faith and devotion.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Sacred Gurdwaras</h4>
              <ul className="space-y-1 text-sm">
                <li><Link href="/sikh/golden-temple" className="hover:text-white transition-colors">Harmandir Sahib (Golden Temple)</Link></li>
                <li><Link href="/sikh/hemkund-sahib" className="hover:text-white transition-colors">Hemkund Sahib</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Support</h4>
              <ul className="space-y-1 text-sm">
                <li>WhatsApp: +91 98765 43210</li>
                <li>Mon–Sun 5AM–10PM IST</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-blue-800 text-xs mt-8">© 2024 SacredReach. Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh 🙏</p>
        </div>
      </footer>
    </div>
  )
}
