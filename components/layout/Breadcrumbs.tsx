'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const labelMap: Record<string, string> = {
  products: 'Products',
  timber: 'Timber',
  plywood: 'Plywood',
  'shuttering-material': 'Shuttering Material',
  calculator: 'Calculator',
  'price-list': 'Price List',
  projects: 'Projects',
  blog: 'Blog',
  faqs: 'FAQs',
  about: 'About Us',
  contact: 'Contact',
  delivery: 'Delivery Areas',
  privacy: 'Privacy Policy',
  terms: 'Terms',
}

export function Breadcrumbs() {
  const pathname = usePathname()

  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)

  const crumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const label = labelMap[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    return { href, label }
  })

  return (
    <nav aria-label="Breadcrumb" className="border-b border-black/[0.04] bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-wood transition-colors">
              Home
            </Link>
          </li>
          {crumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              <svg className="w-3 h-3 opacity-30" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              {index === crumbs.length - 1 ? (
                <span className="text-wood font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:text-wood transition-colors">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
