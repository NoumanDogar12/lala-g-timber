import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { BUSINESS } from '@/lib/constants'
import { faqs } from '@/data/faqs'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = createMetadata({
  title: 'FAQs — Timber, Plywood & Shuttering Material Questions',
  description:
    'Frequently asked questions about timber, plywood, shuttering material, prices, delivery, and more. Get answers about building materials in Lahore.',
  path: '/faqs',
})

export default function FAQsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      { '@type': 'ListItem', position: 2, name: 'FAQs', item: `${BUSINESS.domain}/faqs` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const categories = [...new Set(faqs.map((f) => f.category))]

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs />

      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Support</p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-wood mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-text-muted text-lg">
              Common questions about our timber, plywood, shuttering material, pricing, and delivery.
            </p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h2 className="font-heading text-xl font-semibold text-wood mb-4">
                {category}
              </h2>
              <div className="space-y-3">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq) => (
                    <details key={faq.question} className="group bg-white rounded-lg border border-black/[0.06]">
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
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
