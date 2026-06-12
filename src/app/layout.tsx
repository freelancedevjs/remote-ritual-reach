import type { ReactNode } from "react"
import Script from "next/script"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18230881098"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18230881098');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
