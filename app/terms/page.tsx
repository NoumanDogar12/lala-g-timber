import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { BUSINESS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Terms & Conditions',
  description: `Terms and conditions for ${BUSINESS.name}. Terms of sale, delivery, and returns.`,
  path: '/terms',
})

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs />
      <section className="py-12 lg:py-16 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-wood mb-8">
            Terms &amp; Conditions
          </h1>

          <div className="space-y-6 text-text-muted text-sm leading-relaxed">
            <p>
              These terms and conditions apply to all sales and services provided by
              {' '}{BUSINESS.name}, located at {BUSINESS.address.full}.
            </p>

            <h2 className="font-heading text-xl font-semibold text-wood">Pricing</h2>
            <p>
              All prices are subject to change without notice based on market conditions.
              Prices quoted on the phone or WhatsApp are valid for the day of inquiry only.
              Final pricing is confirmed at the time of order placement.
            </p>

            <h2 className="font-heading text-xl font-semibold text-wood">Orders &amp; Payment</h2>
            <p>
              Orders are confirmed upon payment. We accept cash and bank transfer.
              Delivery is arranged after payment confirmation. Large orders may require
              advance payment.
            </p>

            <h2 className="font-heading text-xl font-semibold text-wood">Delivery</h2>
            <p>
              Delivery charges are based on distance and order quantity. Delivery timelines
              are estimates and may vary due to availability and logistics. We are not
              liable for delays beyond our control.
            </p>

            <h2 className="font-heading text-xl font-semibold text-wood">Returns &amp; Quality</h2>
            <p>
              We ensure material quality at the time of sale. For quality concerns, contact
              us within 24 hours of delivery with photos. Custom-cut timber and used
              shuttering material cannot be returned. Resolution is at our discretion.
            </p>

            <h2 className="font-heading text-xl font-semibold text-wood">Calculator Disclaimer</h2>
            <p>
              The material calculator on our website provides approximate estimates only.
              Actual requirements may vary based on project specifications, site conditions,
              and construction methods. Always consult a professional for precise calculations.
            </p>

            <h2 className="font-heading text-xl font-semibold text-wood">Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href={`tel:${BUSINESS.phone}`} className="text-wood font-medium hover:text-gold-dark transition-colors">
                {BUSINESS.phoneDisplay}
              </a>.
            </p>

            <p className="text-xs text-text-muted mt-8">
              Last updated: February 2026
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
