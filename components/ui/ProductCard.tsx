import Link from 'next/link'
import { CallForRatesBadge } from './CallForRatesBadge'

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  href: string
}

export function ProductCard({ title, description, features, href }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-cream-dark/30 overflow-hidden card-hover">
      {/* Warm gradient header with wood grain */}
      <div className="relative h-48 bg-gradient-to-br from-wood-warm via-wood-light to-wood overflow-hidden wood-texture">
        <div className="relative z-10 h-full flex items-center justify-center">
          <span className="font-heading text-3xl font-bold text-white/20 group-hover:text-white/35 transition-colors duration-500">
            {title}
          </span>
        </div>
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      </div>

      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-wood mb-2">
          {title}
        </h3>
        <p className="text-text-muted text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {features.slice(0, 4).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-cream/70 text-wood-medium px-2.5 py-1 rounded-lg border border-cream-dark/20"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-cream-dark/20">
          <Link
            href={href}
            className="text-sm font-semibold text-wood hover:text-gold transition-colors inline-flex items-center gap-1.5 group-hover:gap-2.5 duration-300"
          >
            View Details
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <CallForRatesBadge />
        </div>
      </div>
    </div>
  )
}
