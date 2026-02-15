'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

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
        className="p-2 text-wood rounded-md hover:bg-cream transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <nav
            className="fixed top-16 left-0 right-0 bottom-0 z-50 bg-white overflow-y-auto pb-24"
            aria-label="Mobile navigation"
          >
            <ul className="py-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {'children' in link && link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setExpandedItem(
                            expandedItem === link.href ? null : link.href
                          )
                        }
                        className="w-full flex items-center justify-between px-6 py-3 text-base font-medium text-text hover:bg-cream transition-colors"
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${
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
                        <ul className="bg-cream/50">
                          <li>
                            <Link
                              href={link.href}
                              onClick={closeMenu}
                              className="block px-10 py-2.5 text-sm text-text hover:text-wood transition-colors"
                            >
                              All {link.label}
                            </Link>
                          </li>
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={closeMenu}
                                className="block px-10 py-2.5 text-sm text-text hover:text-wood transition-colors"
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
                      className="block px-6 py-3 text-base font-medium text-text hover:bg-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  )
}
