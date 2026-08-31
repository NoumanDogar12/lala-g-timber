import Image from 'next/image'
import Link from 'next/link'
import { CallForRatesBadge } from './CallForRatesBadge'

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  href: string
  image: string
  imageAlt: string
  priority?: boolean
}

export function ProductCard({
  title,
  description,
  features,
  href,
  image,
  imageAlt,
  priority = false,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-cream-dark/30 overflow-hidden card-hover flex flex-col">
      {/* Real stock photography — the credibility argument for a timber yard */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          quality={78}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark/85 via-bark/25 to-transparent" />
        <h3 className="absolute bottom-4 left-5 right-5 font-heading text-2xl font-bold text-white drop-shadow-sm">
          {title}
        </h3>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-text-muted text-sm mb-5 leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {features.slice(0, 4).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-cream/70 text-wood-medium px-2.5 py-1 rounded-lg border border-cream-dark/20"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 pt-4 mt-auto border-t border-cream-dark/20">
          <Link
            href={href}
            className="text-sm font-semibold text-wood hover:text-gold transition-colors inline-flex items-center gap-1.5 group-hover:gap-2.5 duration-300 min-h-[44px]"
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
