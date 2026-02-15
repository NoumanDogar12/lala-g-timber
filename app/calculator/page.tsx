import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { BUSINESS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CalculatorForm } from '@/components/calculator/CalculatorForm'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = createMetadata({
  title: 'Construction Material Calculator — Wood, Shuttering, Plywood, Timber Lahore',
  description:
    'Free construction material calculator for Lahore builders. Estimate shuttering plywood, steel props, centering plates, room ply & timber framing. Calculate wood requirements instantly. Call for best rates.',
  path: '/calculator',
})

export default function CalculatorPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      { '@type': 'ListItem', position: 2, name: 'Calculator', item: `${BUSINESS.domain}/calculator` },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Construction Material Requirements',
    description: 'Use our free calculator to estimate shuttering material, plywood, and timber needed for your construction project.',
    step: [
      { '@type': 'HowToStep', name: 'Select Project Type', text: 'Choose between Slab Shuttering, Room Plywood, or Timber Framing.' },
      { '@type': 'HowToStep', name: 'Enter Dimensions', text: 'Enter the length, width, and height (if applicable) in feet.' },
      { '@type': 'HowToStep', name: 'Get Results', text: 'Click Calculate to see the estimated material quantities with a 10% waste allowance.' },
      { '@type': 'HowToStep', name: 'Get Rates', text: 'Call or WhatsApp us with your requirements for exact pricing.' },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />
      <Breadcrumbs />

      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Free Tool</p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-wood mb-4">
              Construction Material Calculator
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Estimate how much shuttering plywood, steel props, room plywood, or
              timber framing you need. Enter your dimensions and get instant results.
            </p>
          </div>

          <CalculatorForm />

          {/* How It Works */}
          <div className="mt-12 bg-white rounded-xl border border-black/[0.06] p-6 lg:p-8">
            <h2 className="font-heading text-xl font-semibold text-wood mb-4">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '1', title: 'Select Type', desc: 'Choose your project type' },
                { step: '2', title: 'Enter Size', desc: 'Input dimensions in feet' },
                { step: '3', title: 'Get Estimate', desc: 'See material quantities' },
                { step: '4', title: 'Call for Rates', desc: 'Get exact pricing from us' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-8 h-8 bg-wood text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-semibold text-wood">{item.title}</h3>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
