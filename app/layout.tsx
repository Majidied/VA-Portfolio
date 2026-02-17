import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LoadingProvider } from '@/components/loading-provider'
import { LoadingOverlay } from '@/components/loading-overlay'
import { PageContent } from '@/components/page-content'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const _geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mohammedmajidi.engineer'),
  title: {
    default: 'Mohammed Majidi | Systems-First Virtual Assistant',
    template: '%s | Mohammed Majidi',
  },
  description:
    'High-Level Executive Support — Powered by Custom Systems. Precision administrative support and custom-built automation to help founders and executives scale their impact, not their task list.',
  keywords: [
    'virtual assistant',
    'executive support',
    'automation',
    'systems',
    'workflow',
    'administrative support',
    'business automation',
    'process optimization',
  ],
  authors: [{ name: 'Mohammed Majidi', url: 'https://mohammedmajidi.engineer' }],
  creator: 'Mohammed Majidi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohammedmajidi.engineer',
    title: 'Mohammed Majidi | Systems-First Virtual Assistant',
    description:
      'High-Level Executive Support — Powered by Custom Systems. Precision administrative support and custom-built automation to help founders and executives scale their impact.',
    siteName: 'Mohammed Majidi',
    images: [
      {
        url: '/hero-illustration.png',
        width: 1200,
        height: 630,
        alt: 'Mohammed Majidi - Systems-First Virtual Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Majidi | Systems-First Virtual Assistant',
    description:
      'High-Level Executive Support — Powered by Custom Systems. Precision administrative support and custom-built automation.',
    images: ['/hero-illustration.png'],
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
    google: 'google-site-verification=idlrpkGmWch1uMgig3SChTaxgmQGYo-Xg4W6QioaqhU',
  },
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00d4ff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0e1a' },
  ],
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Mohammed Majidi - Virtual Assistant Services',
    description:
      'High-Level Executive Support powered by custom systems. Precision administrative support and custom-built automation.',
    url: 'https://mohammedmajidi.engineer',
    logo: 'https://mohammedmajidi.engineer/logo.png',
    image: 'https://mohammedmajidi.engineer/hero-illustration.png',
    email: 'mohammedmajidi321@gmail.com',
    founder: {
      '@type': 'Person',
      name: 'Mohammed Majidi',
      url: 'https://mohammedmajidi.engineer',
      jobTitle: 'Systems-First Virtual Assistant',
      sameAs: [
        'https://linkedin.com/in/mohammed-majidi',
        'https://github.com/majidied',
      ],
    },
    serviceType: [
      'Virtual Assistant Services',
      'Executive Support',
      'Business Automation',
      'Administrative Support',
    ],
    areaServed: 'Worldwide',
    priceRange: '$$',
  }

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${_inter.variable} ${_geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <LoadingProvider>
          <LoadingOverlay />
          <PageContent>{children}</PageContent>
          <Analytics />
        </LoadingProvider>
      </body>
    </html>
  )
}
