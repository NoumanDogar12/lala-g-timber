import type { Metadata } from 'next'
import { playfair, inter } from '@/lib/fonts'
import { BUSINESS } from '@/lib/constants'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { StickyMobileBar } from '@/components/layout/StickyMobileBar'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.domain),
  title: {
    default: `${BUSINESS.name} — Timber, Plywood & Shuttering Material in Lahore`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    'Leading timber, plywood & shuttering material supplier in Lahore. 30+ years of trust. Construction wood, marine plywood, shuttering plywood & more. Call for today\'s rates.',
  keywords: [
    'timber supplier Lahore',
    'plywood supplier Lahore',
    'shuttering material',
    'construction timber',
    'marine plywood',
    'building materials supplier',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BUSINESS.domain,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} — Timber, Plywood & Shuttering Material in Lahore`,
    description:
      'Leading timber, plywood & shuttering material supplier in Lahore. 30+ years of trust. Call for today\'s rates.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileBar />
      </body>
    </html>
  )
}
