import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { timberTypes } from '@/data/products'
import { BUSINESS, getWhatsAppUrl } from '@/lib/constants'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CallForRatesBadge } from '@/components/ui/CallForRatesBadge'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = createMetadata({
  title: 'Timber Supplier in Lahore — Teak, Sal, Deodar, Pine, Sheesham',
  description:
    'Premium timber supplier in Lahore. Buy Teak, Sal, Deodar, Pine & Sheesham wood for construction, furniture & interior work. A-grade timber at competitive rates. Call for prices.',
  path: '/products/timber',
})

const timberFaqs = [
  {
    question: 'What types of timber are available in Lahore?',
    answer:
      'We supply Teak (Sagwan), Sal, Deodar (Cedar), Pine (Chir), and Sheesham (Rosewood) in various grades and dimensions. Each wood type suits different applications from construction to furniture making.',
  },
  {
    question: 'How do I choose the right timber grade?',
    answer:
      'A-grade timber has minimal knots and defects — ideal for furniture and visible work. B-grade is suitable for structural and hidden applications. We can help you select the right grade for your project.',
  },
  {
    question: 'What are today\'s timber prices in Lahore?',
    answer:
      'Timber prices fluctuate based on availability and demand. Call us at ' + BUSINESS.phoneDisplay + ' or WhatsApp for today\'s rates. We offer competitive prices with honest measurements.',
  },
  {
    question: 'Do you deliver timber in Lahore?',
    answer:
      'Yes, we deliver across 50+ areas in Lahore. Same-day delivery available for in-stock items. Delivery charges depend on distance and quantity.',
  },
  {
    question: 'What is the minimum order quantity for timber?',
    answer:
      'There is no strict minimum order. Whether you need timber for a small furniture project or a large construction site, we accommodate all order sizes.',
  },
]

export default function TimberPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BUSINESS.domain}/products` },
      { '@type': 'ListItem', position: 3, name: 'Timber', item: `${BUSINESS.domain}/products/timber` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: timberFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs />

      {/* Hero */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wood via-wood-light to-wood-medium" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.06] blur-[80px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Premium Wood</p>
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-4">
            Premium Timber in Lahore
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mb-6">
            We supply A-grade and B-grade timber for construction, furniture, and interior
            work. Teak, Sal, Deodar, Pine, and Sheesham available in all standard dimensions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={`tel:${BUSINESS.phone}`} variant="gold">
              Call for Rates
            </Button>
            <Button href={getWhatsAppUrl('Hi, I need timber. What types and rates do you have?')} variant="outline">
              WhatsApp for Prices
            </Button>
          </div>
        </div>
      </section>

      {/* Timber Types */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-wood mb-8">
            Timber Types We Supply
          </h2>

          <div className="space-y-8">
            {timberTypes.map((timber) => (
              <div key={timber.name} className="bg-white rounded-2xl border border-cream-dark/30 p-6 lg:p-8 card-hover">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-heading text-xl font-semibold text-wood">
                        {timber.name}
                      </h3>
                      <CallForRatesBadge />
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">
                      {timber.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-wood mb-2">Common Uses</h4>
                        <ul className="space-y-1">
                          {timber.uses.map((use) => (
                            <li key={use} className="text-sm text-text-muted flex items-center gap-2">
                              <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                              {use}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-wood mb-2">Available Grades</h4>
                        <div className="flex flex-wrap gap-2">
                          {timber.grades.map((grade) => (
                            <span key={grade} className="text-xs bg-cream text-wood px-2.5 py-1 rounded-full">
                              {grade}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-wood mb-8">
            Frequently Asked Questions — Timber
          </h2>
          <div className="space-y-4">
            {timberFaqs.map((faq) => (
              <details key={faq.question} className="group bg-bg rounded-lg border border-black/[0.06]">
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
