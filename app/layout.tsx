import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: 'Konya SEO | Yerel SEO ile Isletmenizi Buyutun',
  description: 'Konya SEO hizmeti ile Google\'da ust siralarda yer alin. Yerel anahtar kelime analizi, Google Haritalar optimizasyonu, teknik SEO ve icerik stratejisi ile isletmenizi dijitalde buyutun.',
  keywords: 'Konya SEO, Konya SEO ajansi, Konya SEO hizmeti, Konya yerel SEO, Konya web tasarim, Konya SEO uzmani, Konya SEO danismanligi',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
