import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { plywoodTypes } from '@/data/products'
import { BUSINESS, getWhatsAppUrl } from '@/lib/constants'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = createMetadata({
  title: 'Plywood Supplier in Lahore — Marine, BWR, Commercial, Shuttering',
  description:
    'Buy marine plywood, BWR plywood, commercial plywood, MDF & block board in Lahore. All grades and sizes available. Competitive prices from a trusted 30+ year supplier.',
  path: '/products/plywood',
})

const plywoodFaqs = [
  {
    question: 'What is the difference between marine and BWR plywood?',
    answer:
      'Marine plywood uses BWP (Boiling Water Proof) grade adhesive and can withstand prolonged water exposure — ideal for kitchens and bathrooms. BWR (Boiling Water Resistant) plywood handles moderate moisture but is more affordable, suitable for interior furniture.',
  },
  {
    question: 'Which plywood is best for kitchen cabinets?',
    answer:
      'Marine plywood or BWR plywood are recommended for kitchen cabinets due to moisture resistance. Marine ply is the premium choice, while BWR offers good protection at a lower price point.',
  },
  {
    question: 'What sizes of plywood are available?',
    answer:
      'Standard plywood sizes include 8x4 feet and 7x4 feet, available in thicknesses from 4mm to 25mm. We can also arrange custom cuts for specific project requirements.',
  },
  {
    question: 'How much does plywood cost in Lahore?',
    answer:
      `Plywood prices vary by type, thickness, and brand. Call us at ${BUSINESS.phoneDisplay} for today's rates. We offer competitive prices on all grades of plywood.`,
  },
]

export default function PlywoodPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BUSINESS.domain}/products` },
      { '@type': 'ListItem', position: 3, name: 'Plywood', item: `${BUSINESS.domain}/products/plywood` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: plywoodFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs />

      {/* Hero */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-wood mb-4">
            Plywood Supplier in Lahore
          </h1>
          <p className="text-text-muted text-lg max-w-3xl mb-6">
            Complete range of plywood for every application — Marine, BWR, Commercial,
            Shuttering, MDF, and Block Board. All thicknesses and sizes available.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={`tel:${BUSINESS.phone}`} variant="primary">
              Call for Rates
            </Button>
            <Button href={getWhatsAppUrl('Hi, I need plywood. Can you share types and rates?')} variant="outline">
              WhatsApp for Prices
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 lg:py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-wood mb-8">
            Plywood Types &amp; Comparison
          </h2>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl border border-cream overflow-hidden">
              <thead>
                <tr className="bg-wood text-white">
                  <th className="text-left px-6 py-3 text-sm font-semibold">Type</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold">Water Resistance</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold">Price Range</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold">Best Use</th>
                </tr>
              </thead>
              <tbody>
                {plywoodTypes.map((ply, i) => (
                  <tr key={ply.name} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/30'}>
                    <td className="px-6 py-4 text-sm font-medium text-wood">{ply.name}</td>
                    <td className="px-6 py-4 text-sm text-text-muted">{ply.waterResistance}</td>
                    <td className="px-6 py-4 text-sm text-text-muted">{ply.priceRange}</td>
                    <td className="px-6 py-4 text-sm text-text-muted">{ply.bestUse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {plywoodTypes.map((ply) => (
              <div key={ply.name} className="bg-white rounded-xl border border-cream p-5">
                <h3 className="font-heading text-lg font-semibold text-wood mb-2">{ply.name}</h3>
                <p className="text-text-muted text-sm mb-3">{ply.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-medium text-wood">Water Resistance:</span>
                    <p className="text-text-muted">{ply.waterResistance}</p>
                  </div>
                  <div>
                    <span className="font-medium text-wood">Price Range:</span>
                    <p className="text-text-muted">{ply.priceRange}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="font-medium text-wood">Best Use:</span>
                    <p className="text-text-muted">{ply.bestUse}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-wood mb-8">
            Frequently Asked Questions — Plywood
          </h2>
          <div className="space-y-4">
            {plywoodFaqs.map((faq) => (
              <details key={faq.question} className="group bg-bg rounded-lg border border-cream">
                <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium text-wood">
                  {faq.question}
                  <svg className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="px-4 pb-4 text-sm text-text-muted leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
