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
    default: `${BUSINESS.name} — Best Timber, Plywood & Wood Supplier in Lahore`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    'Best timber, plywood & shuttering material supplier in Lahore. Lakdi, phatta, wali, ply — all construction wood available. 30+ year trusted wood merchant. Marine plywood, Teak, Deodar, Sheesham & more. Call for today\'s rates.',
  keywords: [
    'timber supplier Lahore',
    'wood supplier Lahore',
    'plywood supplier Lahore',
    'best timber merchant Lahore',
    'Lahore timber merchants',
    'construction material Lahore',
    'shuttering material',
    'construction timber',
    'marine plywood',
    'building materials supplier',
    'lakdi supplier Lahore',
    'phatta supplier Lahore',
    'wali Lahore',
    'ply supplier Lahore',
    'wood merchant Lahore',
    'timber market Ravi Road',
    'best wood supplier Lahore',
    'construction wood Lahore',
    'furniture wood Lahore',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BUSINESS.domain,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} — Best Timber, Plywood & Wood Supplier in Lahore`,
    description:
      'Best timber, plywood & shuttering material supplier in Lahore. Lakdi, phatta, wali, ply — all construction wood available. 30+ year trusted wood merchant. Call for rates.',
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
