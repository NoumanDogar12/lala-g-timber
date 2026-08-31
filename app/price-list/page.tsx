import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { BUSINESS, getWhatsAppUrl } from '@/lib/constants'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = createMetadata({
  title: 'Timber, Wood & Plywood Price List Lahore — Today\'s Best Rates',
  description:
    'Get today\'s timber, wood, plywood, ply, phatta & shuttering material prices in Lahore. Lakdi rates updated daily. Best construction material prices. Call +92 303 087 7771 or WhatsApp.',
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
      { name: 'Sufaida (Poplar)', unit: 'per cubic ft' },
      { name: 'Kikkar (Keekar) — Seasoned', unit: 'per cubic ft' },
      { name: 'Partal / Kail — 8\u2032 Baala or Reep', unit: 'per piece' },
      { name: 'Partal / Kail — 12\u2032 Baala or Reep', unit: 'per piece' },
      { name: 'Yellow Pine', unit: 'per cubic ft' },
      { name: 'Ash Wood', unit: 'per cubic ft' },
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
      { name: 'Simbal Plywood 8mm', unit: 'per sheet' },
      { name: 'Solar Plywood 14mm', unit: 'per sheet' },
      { name: 'Commercial Plywood 16mm', unit: 'per sheet' },
      { name: 'High Pressure Plywood 16mm', unit: 'per sheet' },
      { name: 'High Pressure Plywood 18mm', unit: 'per sheet' },
      { name: 'Imported Plywood', unit: 'priced by weight' },
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
  {
    title: 'Shuttering Wood',
    items: [
      { name: 'Phatta \u2014 6\u2032, 5 Sooter', unit: 'per piece' },
      { name: 'Phatta \u2014 6\u2032, 7 Sooter', unit: 'per piece' },
      { name: 'Phatta \u2014 6\u2032, 7\u00bd Sooter', unit: 'per piece' },
      { name: 'Baala \u2014 5\u2032 \u00d7 2\u00bd\u2033 \u00d7 2\u00be\u2033', unit: 'per piece' },
      { name: 'Baala \u2014 8\u2032 \u00d7 2\u00bd\u2033 \u00d7 3\u00bd\u2033', unit: 'per piece' },
      { name: 'Wali \u2014 10\u2032, 11\u2032, 12\u2032', unit: 'per piece' },
      { name: 'Gola \u2014 2\u2032, 3\u2032, 6\u2032', unit: 'per piece' },
      { name: 'Naala Shuttering \u2014 1\u2032, 1.5\u2032, 2\u2032', unit: 'per running ft' },
    ],
  },
  {
    title: 'Kikkar Wood & Bundles',
    items: [
      { name: '32 Lar Bundle', unit: 'per bundle' },
      { name: '24 Lar Bundle', unit: 'per bundle' },
      { name: '20 Lar Bundle', unit: 'per bundle' },
      { name: 'Kikkar Phatta \u2014 3\u2032\u00d78\u2033 to 6\u2032\u00d78\u2033', unit: 'per piece' },
      { name: 'Bed Lar', unit: 'per piece' },
      { name: 'Packing Wood', unit: 'per size' },
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
              <Button href={getWhatsAppUrl('Hi, can you share today\'s price list for timber and plywood?')} variant="secondary">
                WhatsApp Price List
              </Button>
            </div>
          </div>

          {/* Price Tables — one rate CTA per category rather than a
              "Call for Rate" link repeated on all 20+ rows, which turned the
              call-to-action into wallpaper and made the list hard to scan. */}
          <div className="space-y-8">
            {priceCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-2xl border border-cream-dark/30 overflow-hidden">
                <div className="bg-gradient-to-r from-wood to-wood-light px-5 sm:px-6 py-3 flex items-center justify-between gap-4">
                  <h2 className="font-heading text-lg font-semibold text-white">
                    {category.title}
                  </h2>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="shrink-0 inline-flex items-center gap-1.5 min-h-[44px] px-4 rounded-full bg-gold-light/95 hover:bg-white text-wood text-xs font-bold tracking-wide transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                    Today&apos;s rate
                  </a>
                </div>
                <ul className="divide-y divide-cream-dark/40">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 px-5 sm:px-6 py-3.5"
                    >
                      <span className="text-sm font-medium text-text">{item.name}</span>
                      <span className="text-xs text-text-muted whitespace-nowrap">
                        {item.unit}
                      </span>
                    </li>
                  ))}
                </ul>
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
