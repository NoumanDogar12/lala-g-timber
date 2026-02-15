import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { BUSINESS, getWhatsAppUrl } from '@/lib/constants'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = createMetadata({
  title: 'Timber & Plywood Price List in Lahore — Call for Today\'s Rates',
  description:
    'Get today\'s timber, plywood, and shuttering material prices in Lahore. Rates updated daily. Call +92 303 087 7771 or WhatsApp for the latest price list.',
  path: '/price-list',
})

const priceCategories = [
  {
    title: 'Timber',
    items: [
      { name: 'Teak (Sagwan) — A Grade', unit: 'per cubic ft' },
      { name: 'Teak (Sagwan) — B Grade', unit: 'per cubic ft' },
      { name: 'Sal — A Grade', unit: 'per cubic ft' },
      { name: 'Deodar — A Grade', unit: 'per cubic ft' },
      { name: 'Deodar — B Grade', unit: 'per cubic ft' },
      { name: 'Pine (Chir) — A Grade', unit: 'per cubic ft' },
      { name: 'Sheesham — A Grade', unit: 'per cubic ft' },
    ],
  },
  {
    title: 'Plywood',
    items: [
      { name: 'Marine Plywood 18mm (8x4)', unit: 'per sheet' },
      { name: 'Marine Plywood 12mm (8x4)', unit: 'per sheet' },
      { name: 'BWR Plywood 18mm (8x4)', unit: 'per sheet' },
      { name: 'BWR Plywood 12mm (8x4)', unit: 'per sheet' },
      { name: 'Commercial Plywood 18mm (8x4)', unit: 'per sheet' },
      { name: 'MDF Board 18mm (8x4)', unit: 'per sheet' },
      { name: 'Block Board 18mm (8x4)', unit: 'per sheet' },
    ],
  },
  {
    title: 'Shuttering Material',
    items: [
      { name: 'Shuttering Plywood 12mm (8x4)', unit: 'per sheet' },
      { name: 'Shuttering Plywood 18mm (8x4)', unit: 'per sheet' },
      { name: 'Film-Faced Plywood 18mm (8x4)', unit: 'per sheet' },
      { name: 'Steel Props (Adjustable)', unit: 'per piece' },
      { name: 'Centering Plates', unit: 'per piece' },
    ],
  },
]

export default function PriceListPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      { '@type': 'ListItem', position: 2, name: 'Price List', item: `${BUSINESS.domain}/price-list` },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumbs />

      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Rates</p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-wood mb-4">
              Price List
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto mb-6">
              Timber, plywood, and shuttering material prices change daily based on market
              conditions. Call or WhatsApp for today&apos;s exact rates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href={`tel:${BUSINESS.phone}`} variant="primary">
                Call for Today&apos;s Rates
              </Button>
              <Button href={getWhatsAppUrl('Hi, can you share today\'s price list for timber and plywood?')} variant="outline">
                WhatsApp Price List
              </Button>
            </div>
          </div>

          {/* Price Tables */}
          <div className="space-y-8">
            {priceCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-xl border border-black/[0.06] overflow-hidden">
                <div className="bg-gradient-to-r from-wood to-wood-light px-6 py-3">
                  <h2 className="font-heading text-lg font-semibold text-white">
                    {category.title}
                  </h2>
                </div>
                <div className="divide-y divide-black/[0.04]">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between px-6 py-3">
                      <div>
                        <p className="text-sm font-medium text-text">{item.name}</p>
                        <p className="text-xs text-text-muted">{item.unit}</p>
                      </div>
                      <a
                        href={`tel:${BUSINESS.phone}`}
                        className="text-sm font-semibold text-gold-dark hover:text-gold transition-colors"
                      >
                        Call for Rate
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 bg-bg rounded-xl p-6 text-center border border-black/[0.06]">
            <p className="text-sm text-text-muted">
              Prices are subject to change without notice based on market conditions.
              For the most accurate pricing, please contact us directly.
              Bulk order discounts available.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
