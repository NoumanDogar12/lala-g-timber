import Link from 'next/link'
import { BUSINESS, NAV_LINKS } from '@/lib/constants'
import { MobileNav } from './MobileNav'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-3 lg:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Desktop: 3 floating pills */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left: Brand Pill */}
          <div className="flex items-center gap-2.5 bg-white rounded-full px-5 py-3 shadow-lg shadow-black/[0.06] shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-glow" />
            <span className="text-sm font-semibold text-wood tracking-wide whitespace-nowrap">
              Lala G Timber Merchant
            </span>
          </div>

          {/* Center: Nav Pill */}
          <div className="flex items-center bg-white rounded-full px-2 py-2 shadow-lg shadow-black/[0.06] mx-6">
            <Link href="/" className="flex items-center gap-2 pl-1.5 pr-3 shrink-0 group">
              <div className="w-9 h-9 rounded-full bg-wood flex items-center justify-center group-hover:bg-wood-warm transition-colors duration-300">
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-white" fill="currentColor">
                  <path d="M12 2L8 8h2.5L7 14h3.5L7 22h10l-3.5-8H17l-3.5-6H16L12 2z" />
                </svg>
              </div>
            </Link>

            <nav className="flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.filter((l) => l.label !== 'Home').map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-wood-medium hover:text-wood rounded-full hover:bg-cream/70 transition-all duration-200 whitespace-nowrap inline-flex items-center"
                  >
                    {link.label}
                    {'children' in link && link.children && (
                      <svg
                        className="ml-0.5 w-3.5 h-3.5 opacity-40 group-hover:opacity-70 transition-opacity"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    )}
                  </Link>

                  {'children' in link && link.children && (
                    <div className="absolute left-0 top-full pt-3 hidden group-hover:block z-50">
                      <div className="bg-white border border-cream-dark/20 rounded-xl shadow-xl shadow-wood/10 py-2 min-w-[210px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-wood-medium hover:text-wood hover:bg-cream/50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right: CTA Pill */}
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-2.5 bg-white rounded-full px-5 py-3 shadow-lg shadow-black/[0.06] hover:shadow-xl hover:shadow-black/[0.08] transition-all duration-300 shrink-0 group"
            aria-label={`Call ${BUSINESS.phoneDisplay}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-wood group-hover:text-gold transition-colors">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-wood whitespace-nowrap">Call Now</span>
          </a>
        </div>

        {/* Mobile: Single full-width pill */}
        <div className="flex lg:hidden items-center justify-between bg-white rounded-full px-2 py-1.5 shadow-lg shadow-black/[0.06]">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2.5 pl-1 shrink-0 group">
            <div className="w-9 h-9 rounded-full bg-wood flex items-center justify-center group-hover:bg-wood-warm transition-colors duration-300">
              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-white" fill="currentColor">
                <path d="M12 2L8 8h2.5L7 14h3.5L7 22h10l-3.5-8H17l-3.5-6H16L12 2z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-wood">Lala G</span>
          </Link>

          {/* Right side: Call + Hamburger */}
          <div className="flex items-center gap-1">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-1.5 bg-wood text-white rounded-full px-3.5 py-2 text-xs font-semibold hover:bg-wood-warm transition-colors"
              aria-label={`Call ${BUSINESS.phoneDisplay}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              Call
            </a>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
