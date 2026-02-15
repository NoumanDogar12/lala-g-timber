import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { BUSINESS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy',
  description: `Privacy policy for ${BUSINESS.name}. How we collect, use, and protect your information.`,
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs />
      <section className="py-12 lg:py-16 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-wood mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-text-muted text-sm leading-relaxed">
            <p>
              {BUSINESS.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates
              the website at {BUSINESS.domain}. This page explains how we collect, use, and
              protect your personal information.
            </p>

            <h2 className="font-heading text-xl font-semibold text-wood">Information We Collect</h2>
            <p>
              When you use our contact form, we collect your name, phone number, material
              preference, and optional message. When you call or WhatsApp us, your phone
              number is visible to us.
            </p>

            <h2 className="font-heading text-xl font-semibold text-wood">How We Use Your Information</h2>
            <p>
              We use your information solely to respond to your inquiries, provide price
              quotes, and arrange deliveries. We do not sell or share your personal
              information with third parties.
            </p>

            <h2 className="font-heading text-xl font-semibold text-wood">Analytics</h2>
            <p>
              We may use Google Analytics to understand website traffic patterns. This
              service collects anonymous usage data and does not personally identify you.
            </p>

            <h2 className="font-heading text-xl font-semibold text-wood">Contact</h2>
            <p>
              If you have questions about this privacy policy, contact us at{' '}
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
