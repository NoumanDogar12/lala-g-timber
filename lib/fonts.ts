import { Inter, Inter_Tight } from 'next/font/google'

// Headings: a tighter, plainer grotesque. Replaces Playfair Display, whose
// high-contrast display serif read as decorative rather than premium.
export const display = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700'],
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})
