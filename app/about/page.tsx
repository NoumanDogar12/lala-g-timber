import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { BUSINESS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = createMetadata({
  title: 'About Lala G Timber Merchants — Best Wood & Timber Supplier Since 30+ Years',
  description:
    'Lala G Timber Merchants — Lahore\'s most trusted timber and wood supplier since 30+ years. Best lakdi, plywood, phatta & construction material merchant in Timber Market, Ravi Road. Quality wood, honest dealings.',
  path: '/about',
})

const values = [
  {
    title: 'Quality First',
    description: 'Every piece of timber and plywood is inspected before it reaches our yard. We maintain strict grading standards.',
  },
  {
    title: 'Honest Dealings',
    description: 'Fair measurements, transparent pricing, and no hidden charges. Our reputation is built on trust.',
  },
  {
    title: 'Customer Service',
    description: 'Expert advice on material selection, prompt delivery, and after-sale support for every customer.',
  },
  {
    title: 'Wide Selection',
    description: 'From premium Teak to construction Pine, marine plywood to shuttering material — everything under one roof.',
  },
]

export default function AboutPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BUSINESS.domain}/about` },
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
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Our Story</p>
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-4">
            About Lala G Timber Merchants
          </h1>
          <p className="text-white/60 text-lg max-w-3xl">
            Lahore&apos;s trusted timber and plywood supplier for over three decades.
            Quality materials, fair prices, and reliable service since day one.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-wood mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Lala G Timber Merchants was founded over {BUSINESS.yearsInBusiness} years ago
              in the heart of Lahore&apos;s Timber Market on Ravi Road. What started as a
              small timber shop has grown into one of the most trusted names in the building
              materials business.
            </p>
            <p>
              Through decades of honest dealings, quality materials, and dedicated customer
              service, we have built lasting relationships with contractors, builders,
              furniture manufacturers, and interior designers across Lahore and beyond.
            </p>
            <p>
              Today, we supply a comprehensive range of timber, plywood, and shuttering
              material for projects of all sizes — from small home renovations to major
              commercial construction sites.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 text-center">What We Stand For</p>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-wood mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl border border-cream-dark/30 p-6 text-center card-hover">
                <h3 className="font-heading text-lg font-semibold text-wood mb-2">
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-wood mb-4">
            Visit Our Store
          </h2>
          <p className="text-text-muted mb-2">{BUSINESS.address.full}</p>
          <p className="text-text-muted text-sm">
            Mon–Sat, {BUSINESS.hours.opens} – {BUSINESS.hours.closes}
          </p>
          <p className="mt-4">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="text-wood font-semibold hover:text-gold-dark transition-colors"
            >
              {BUSINESS.phoneDisplay}
            </a>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
