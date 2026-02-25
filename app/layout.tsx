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
  metadataBase: new URL('https://konya-seo.brodigitalmedia.com'),
  title: 'Konya SEO Ajansı – Yerel SEO Hizmeti, Ücretsiz Analiz',
  description: 'Konya’da SEO hizmetiyle işletmenizi Google’da zirveye taşıyın. Anahtar kelime analizi, teknik optimizasyon ve içerik stratejisi ile ücretsiz SEO analizi alın.',
  keywords: 'Konya SEO, Konya SEO ajansı, Konya SEO hizmeti, yerel SEO, Konya web tasarım, anahtar kelime analizi, Google Harita optimizasyonu',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Konya SEO Ajansı – Yerel SEO Hizmeti, Ücretsiz Analiz',
    description: 'Konya’da SEO hizmetiyle işletmenizi Google’da zirveye taşıyın. Anahtar kelime analizi, teknik optimizasyon ve içerik stratejisi ile ücretsiz SEO analizi alın.',
    siteName: 'Konya SEO Ajansı',
    locale: 'tr_TR',
    type: 'website',
    url: 'https://konya-seo.brodigitalmedia.com',
    images: [
      {
        url: '/images/konya-seo-1.png',
        width: 1200,
        height: 630,
        alt: 'Konya SEO Ajansı - Google Search Console Başarı Grafiği',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konya SEO Ajansı – Yerel SEO Hizmeti',
    description: 'Konya’da SEO hizmetiyle işletmenizi Google’da zirveye taşıyın.',
    images: ['/images/konya-seo-1.png'],
  },
  generator: 'v0.app',
  icons: {
    icon: '/images/favicon-bro.png',
    apple: '/images/favicon-bro.png',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Brothers Digital Media',
    image: 'https://konya-seo.brodigitalmedia.com/images/brodigitalmedia-logo.png',
    '@id': 'https://konya-seo.brodigitalmedia.com',
    url: 'https://konya-seo.brodigitalmedia.com',
    telephone: '05050638543',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fatih Mah. Altınkalem Sok. No:10',
      addressLocality: 'Selçuklu',
      addressRegion: 'KONYA',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.893, // approximate
      longitude: 32.484  // approximate
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [
      'https://brodigitalmedia.com',
    ]
  }

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
