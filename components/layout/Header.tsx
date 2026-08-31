'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BUSINESS, NAV_LINKS } from '@/lib/constants'
import { MobileNav } from './MobileNav'

function WoodMark() {
  return (
    <Image
      src="/images/logo-log.png"
      alt=""
      width={144}
      height={144}
      className="w-7 h-7 object-contain"
      priority
    />
  )
}

function PhoneIcon({ className }: { className: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  )
}

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  // Close any open submenu on navigation. A CSS-only hover/focus-within menu
  // stayed pinned open after clicking a child link, because focus remains on
  // that link inside the group.
  useEffect(() => {
    setOpenMenu(null)
  }, [pathname])

  // Escape has to be bound at the document: when the menu was opened by hover
  // rather than focus, the key event never reaches the wrapper.
  useEffect(() => {
    if (!openMenu) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [openMenu])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

  const shadow = scrolled
    ? 'shadow-xl shadow-black/[0.10]'
    : 'shadow-lg shadow-black/[0.06]'

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-3 lg:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Brand — carries the only logo mark and is a link home, so the
              business name is clickable and the mark is not duplicated. */}
          <Link
            href="/"
            className={`group flex items-center gap-2.5 bg-white rounded-full pl-2 pr-5 py-2 shrink-0 transition-shadow duration-300 ${shadow}`}
          >
            <span className="w-9 h-9 rounded-full bg-cream ring-1 ring-cream-dark/50 flex items-center justify-center group-hover:bg-cream-dark/60 transition-colors duration-300">
              <WoodMark />
            </span>
            <span className="text-sm font-semibold text-wood tracking-wide whitespace-nowrap">
              {BUSINESS.name}
            </span>
          </Link>

          <div className={`flex items-center bg-white rounded-full px-2 py-2 mx-6 transition-shadow duration-300 ${shadow}`}>
            <nav className="flex items-center gap-0.5" aria-label="Main navigation">
              {NAV_LINKS.filter((l) => l.label !== 'Home').map((link) => {
                const active = isActive(link.href)
                const hasChildren = 'children' in link && link.children
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={hasChildren ? () => setOpenMenu(link.href) : undefined}
                    onMouseLeave={hasChildren ? () => setOpenMenu(null) : undefined}
                    onFocus={hasChildren ? () => setOpenMenu(link.href) : undefined}
                    onBlur={
                      hasChildren
                        ? (e) => {
                            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                              setOpenMenu(null)
                            }
                          }
                        : undefined
                    }
                    onKeyDown={
                      hasChildren
                        ? (e) => {
                            if (e.key === 'Escape') setOpenMenu(null)
                          }
                        : undefined
                    }
                  >
                    <Link
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      aria-haspopup={hasChildren ? 'true' : undefined}
                      aria-expanded={hasChildren ? openMenu === link.href : undefined}
                      className={`px-3.5 min-h-[40px] text-sm rounded-full transition-all duration-200 whitespace-nowrap inline-flex items-center ${
                        active
                          ? 'bg-cream text-wood font-semibold'
                          : 'font-medium text-wood-medium hover:text-wood hover:bg-cream/70'
                      }`}
                    >
                      {link.label}
                      {hasChildren && (
                        <svg
                          className="ml-0.5 w-3.5 h-3.5 opacity-40 group-hover:opacity-70 transition-opacity"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      )}
                    </Link>

                    {/* Reachable by both pointer and keyboard, and explicitly
                        closed on navigation. */}
                    {hasChildren && openMenu === link.href && (
                      <div className="absolute left-0 top-full pt-3 z-50">
                        <div className="bg-white border border-cream-dark/20 rounded-xl shadow-xl shadow-wood/10 py-2 min-w-[210px]">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              aria-current={isActive(child.href) ? 'page' : undefined}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                isActive(child.href)
                                  ? 'text-wood font-semibold bg-cream/60'
                                  : 'text-wood-medium hover:text-wood hover:bg-cream/50'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>
          </div>

          <a
            href={`tel:${BUSINESS.phone}`}
            className={`flex items-center gap-2.5 bg-wood text-white rounded-full px-5 py-3 hover:bg-wood-warm transition-all duration-300 shrink-0 group ${shadow}`}
            aria-label={`Call ${BUSINESS.phoneDisplay}`}
          >
            <PhoneIcon className="w-4 h-4 text-gold-light" />
            <span className="text-sm font-semibold whitespace-nowrap">Call Now</span>
          </a>
        </div>

        {/* Mobile */}
        <div className={`flex lg:hidden items-center justify-between bg-white rounded-full px-2 py-1.5 transition-shadow duration-300 ${shadow}`}>
          <Link href="/" className="flex items-center gap-2.5 pl-1 shrink-0 group min-h-[44px]">
            <span className="w-9 h-9 rounded-full bg-cream ring-1 ring-cream-dark/50 flex items-center justify-center group-hover:bg-cream-dark/60 transition-colors duration-300">
              <WoodMark />
            </span>
            <span className="text-sm font-semibold text-wood">Lala G</span>
          </Link>

          <div className="flex items-center gap-1">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-1.5 bg-wood text-white rounded-full px-3.5 text-xs font-semibold hover:bg-wood-warm transition-colors min-h-[44px]"
              aria-label={`Call ${BUSINESS.phoneDisplay}`}
            >
              <PhoneIcon className="w-3.5 h-3.5 text-gold-light" />
              Call
            </a>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
