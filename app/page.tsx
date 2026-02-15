import { BUSINESS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export default function Home() {
  return (
    <>
      {/* Hero Section - placeholder for full implementation */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-dark font-semibold mb-3">
            {BUSINESS.tagline}
          </p>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-wood mb-6">
            Premium Timber, Plywood &amp; Shuttering Material in Lahore
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-8">
            Lahore&apos;s most trusted timber supplier for 30+ years. Quality construction wood,
            marine plywood, shuttering plywood &amp; more. Call for today&apos;s best rates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={`tel:${BUSINESS.phone}`} variant="primary">
              Call for Rates
            </Button>
            <Button href="/products" variant="outline">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
