'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS, BUSINESS, getWhatsAppUrl } from '@/lib/constants'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setExpandedItem(null)
  }

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-wood-medium hover:text-wood rounded-full hover:bg-cream/70 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-bark/40 backdrop-blur-sm z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <nav
            className="fixed top-[62px] left-3 right-3 z-50 bg-white rounded-2xl shadow-2xl shadow-black/15 overflow-hidden max-h-[calc(100vh-80px)] overflow-y-auto"
            aria-label="Mobile navigation"
          >
            {/* Nav Links */}
            <ul className="py-2 px-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {'children' in link && link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setExpandedItem(expandedItem === link.href ? null : link.href)
                        }
                        className="w-full flex items-center justify-between px-4 py-3 text-[15px] font-medium text-wood hover:text-gold rounded-xl hover:bg-cream/50 transition-colors"
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 text-wood-medium ${
                            expandedItem === link.href ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                      {expandedItem === link.href && (
                        <ul className="ml-4 border-l-2 border-gold/20 pl-2 mb-1">
                          <li>
                            <Link
                              href={link.href}
                              onClick={closeMenu}
                              className="block px-3 py-2.5 text-sm text-wood-medium hover:text-gold transition-colors rounded-lg"
                            >
                              All {link.label}
                            </Link>
                          </li>
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={closeMenu}
                                className="block px-3 py-2.5 text-sm text-wood-medium hover:text-gold transition-colors rounded-lg"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-[15px] font-medium text-wood hover:text-gold rounded-xl hover:bg-cream/50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="px-3 pb-3 pt-1">
              <div className="border-t border-cream-dark/20 pt-3 flex gap-2">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-gold text-bark font-semibold text-sm rounded-xl hover:bg-gold-dark transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  Call Now
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-wa text-white font-semibold text-sm rounded-xl hover:bg-green-wa/90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  )
}
