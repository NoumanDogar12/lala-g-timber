import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { BUSINESS, getWhatsAppUrl } from '@/lib/constants'
import { deliveryAreas } from '@/data/delivery-areas'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = createMetadata({
  title: 'Delivery Areas in Lahore — Timber & Plywood Delivery',
  description:
    'We deliver timber, plywood, and shuttering material across 50+ areas in Lahore including DHA, Gulberg, Model Town, Johar Town, and more. Same-day delivery available.',
  path: '/delivery',
})

export default function DeliveryPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      { '@type': 'ListItem', position: 2, name: 'Delivery Areas', item: `${BUSINESS.domain}/delivery` },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumbs />

      {/* Hero */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wood via-wood-light to-wood-medium" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.06] blur-[80px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Logistics</p>
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-4">
            Delivery Areas in Lahore
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mb-6">
            We deliver timber, plywood, and shuttering material across 50+ areas in Lahore.
            Same-day delivery available for in-stock items. Bulk orders qualify for
            free delivery.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={`tel:${BUSINESS.phone}`} variant="gold">
              Call for Delivery Info
            </Button>
            <Button href={getWhatsAppUrl('Hi, I need delivery to [area]. Can you share delivery charges?')} variant="outline">
              WhatsApp for Delivery
            </Button>
          </div>
        </div>
      </section>

      {/* Delivery Areas Grid */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-wood mb-8">
            Areas We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryAreas.map((area) => (
              <div key={area.name} className="bg-white rounded-xl border border-black/[0.06] p-5">
                <h3 className="font-heading text-lg font-semibold text-wood mb-3">
                  {area.name}
                </h3>
                <ul className="space-y-1.5">
                  {area.zones.map((zone) => (
                    <li key={zone} className="text-sm text-text-muted flex items-center gap-2">
                      <svg className="w-3 h-3 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {zone}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Delivery Info */}
          <div className="mt-10 bg-white rounded-xl border border-black/[0.06] p-6 lg:p-8">
            <h2 className="font-heading text-xl font-semibold text-wood mb-4">
              Delivery Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-text-muted">
              <div>
                <h3 className="font-medium text-wood mb-2">Delivery Times</h3>
                <ul className="space-y-1">
                  <li>Same-day delivery for in-stock items</li>
                  <li>Next-day delivery for special orders</li>
                  <li>Delivery hours: 9 AM – 6 PM (Mon-Sat)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-wood mb-2">Delivery Notes</h3>
                <ul className="space-y-1">
                  <li>Charges depend on distance and quantity</li>
                  <li>Bulk orders may qualify for free delivery</li>
                  <li>Direct-to-site delivery for construction projects</li>
                  <li>Area not listed? Call us — we can often accommodate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
