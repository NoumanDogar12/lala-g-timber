import Link from 'next/link'
import { BUSINESS, NAV_LINKS } from '@/lib/constants'
import { MobileNav } from './MobileNav'

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-cream shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-heading text-xl lg:text-2xl font-bold text-wood">
              Lala G
            </span>
            <span className="text-xs text-text-muted tracking-wide">
              Timber Merchants
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-text hover:text-wood transition-colors rounded-md"
                >
                  {link.label}
                  {'children' in link && link.children && (
                    <svg
                      className="inline-block ml-1 w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown for Products */}
                {'children' in link && link.children && (
                  <div className="absolute left-0 top-full pt-1 hidden group-hover:block">
                    <div className="bg-white border border-cream rounded-lg shadow-lg py-2 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-text hover:bg-cream hover:text-wood transition-colors"
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

          {/* Desktop CTA + Mobile Nav */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-wood text-white rounded-lg text-sm font-semibold hover:bg-wood-light transition-colors"
              aria-label={`Call ${BUSINESS.phoneDisplay}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              Call Now
            </a>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
