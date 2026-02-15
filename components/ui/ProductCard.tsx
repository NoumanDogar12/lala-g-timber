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
    <div className="group bg-white rounded-xl border border-cream overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Placeholder image area */}
      <div className="h-48 bg-gradient-to-br from-wood/10 to-cream flex items-center justify-center">
        <span className="font-heading text-3xl font-bold text-wood/30">{title}</span>
      </div>

      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-wood mb-2">
          {title}
        </h3>
        <p className="text-text-muted text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {features.slice(0, 4).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-cream text-wood px-2.5 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Link
            href={href}
            className="text-sm font-semibold text-wood hover:text-gold-dark transition-colors"
          >
            View Details &rarr;
          </Link>
          <CallForRatesBadge />
        </div>
      </div>
    </div>
  )
}
