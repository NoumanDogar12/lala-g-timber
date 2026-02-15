import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-6xl font-bold text-wood mb-4">404</h1>
        <h2 className="font-heading text-2xl font-semibold text-text mb-3">
          Page Not Found
        </h2>
        <p className="text-text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Browse our products or get in
          touch with us directly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-wood text-white rounded-lg font-semibold hover:bg-wood-light transition-colors"
          >
            Go Home
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-wood text-wood rounded-lg font-semibold hover:bg-wood hover:text-white transition-colors"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  )
}
