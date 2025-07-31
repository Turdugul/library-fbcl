import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

export const metadata: Metadata = {
  title: {
    default: 'Friern Barnet Community Library',
    template: '%s | FBCL'
  },
  description: 'Supporting literacy and community engagement through the Friern Barnet Community Library. Join us in fostering a love for reading and learning.',
  keywords: [
    'library',
    'community library',
    'Friern Barnet',
    'literacy',
    'reading',
    'education',
    'volunteer',
    'community engagement',
    'books',
    'learning',
    'London library',
    'community center',
    'literacy programs',
    'reading programs',
    'volunteer opportunities',
    'community events',
    'library events',
    'children reading',
    'adult education',
    'digital literacy'
  ],
  authors: [{ name: 'Friern Barnet Community Library' }],
  creator: 'FBCL',
  publisher: 'Friern Barnet Community Library',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fbcl.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://fbcl.org',
    siteName: 'Friern Barnet Community Library',
    title: 'Friern Barnet Community Library',
    description: 'Supporting literacy and community engagement through the Friern Barnet Community Library. Join us in fostering a love for reading and learning.',
    images: [
      {
        url: 'https://fbcl.org/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Friern Barnet Community Library',
        type: 'image/jpeg',
      },
      {
        url: 'https://fbcl.org/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'FBCL Logo',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fbclibrary',
    creator: '@fbclibrary',
    title: 'Friern Barnet Community Library',
    description: 'Supporting literacy and community engagement through the Friern Barnet Community Library.',
    images: ['https://fbcl.org/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'application-name': 'FBCL',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'FBCL',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileColor': '#0284c7',
    'msapplication-tap-highlight': 'no',
    'X-UA-Compatible': 'IE=edge',
    'referrer': 'origin-when-cross-origin',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#0284c7' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'FBCL',
  },
  applicationName: 'FBCL',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0c4a6e' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Library",
              "name": "Friern Barnet Community Library",
              "alternateName": "FBCL",
              "description": "A community library serving the Friern Barnet area of London",
              "url": "https://fbcl.org",
              "logo": "https://fbcl.org/logo.png",
              "image": "https://fbcl.org/library-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Friern Barnet Rd",
                "addressLocality": "London",
                "postalCode": "N11 3DS",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.5074,
                "longitude": -0.1278
              },
              "telephone": "+44-20-8361-0174",
              "email": "fbclibrary15@gmail.com",
              "openingHours": [
                "Mo-Fr 12:00-18:00",
                "Sa-Su Closed"
              ],
              "sameAs": [
                "https://www.facebook.com/fbclibrary",
                "https://twitter.com/fbclibrary",
                "https://www.instagram.com/fbclibrary"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Library Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Book Lending",
                      "description": "Borrow books from our extensive collection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Computer Classes",
                      "description": "Learn computer skills and digital literacy"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Children's Programs",
                      "description": "Story time and educational activities for children"
                    }
                  }
                ]
              },
              "parentOrganization": {
                "@type": "Organization",
                "name": "Friends of the Friern Barnet Community Library"
              }
            })
          }}
        />
        
        {/* Performance Meta Tags */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  )
} 