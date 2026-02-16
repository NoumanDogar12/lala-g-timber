import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { BUSINESS, getWhatsAppUrl } from '@/lib/constants'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ContactForm } from '@/components/ui/ContactForm'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = createMetadata({
  title: 'Contact Best Timber & Wood Supplier in Lahore — Phone, WhatsApp, Location',
  description:
    'Contact Lala G Timber Merchants in Lahore for timber, wood, plywood, ply & shuttering material rates. Call +92 303 087 7771 or WhatsApp. Best wood supplier at Timber Market, Ravi Road.',
  path: '/contact',
})

export default function ContactPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BUSINESS.domain}/contact` },
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS.domain}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.domain,
    image: `${BUSINESS.domain}/icon.png`,
    logo: {
      '@type': 'ImageObject',
      url: `${BUSINESS.domain}/icon.png`,
      width: 512,
      height: 512,
    },
    telephone: BUSINESS.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...BUSINESS.hours.days],
        opens: BUSINESS.hours.opens,
        closes: BUSINESS.hours.closes,
      },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />
      <Breadcrumbs />

      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-wood mb-4">
              Contact Us
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Get in touch for timber, plywood &amp; shuttering material rates.
              Call, WhatsApp, or fill the form — we respond within 30 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl border border-black/[0.06] p-6 lg:p-8">
              <h2 className="font-heading text-xl font-semibold text-wood mb-6">
                Send Us an Inquiry
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-xl border border-black/[0.06] p-6">
                <h3 className="font-heading text-lg font-semibold text-wood mb-3">
                  Call Us
                </h3>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="text-2xl font-bold text-wood hover:text-gold-dark transition-colors"
                >
                  {BUSINESS.phoneDisplay}
                </a>
                <p className="text-text-muted text-sm mt-1">
                  Mon–Sat, {BUSINESS.hours.opens} – {BUSINESS.hours.closes}
                </p>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-xl border border-black/[0.06] p-6">
                <h3 className="font-heading text-lg font-semibold text-wood mb-3">
                  WhatsApp
                </h3>
                <a
                  href={getWhatsAppUrl('Hi, I\'d like to inquire about your products and rates.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-wa font-semibold hover:opacity-80 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <p className="text-text-muted text-sm mt-1">
                  Quick responses during business hours
                </p>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl border border-black/[0.06] p-6">
                <h3 className="font-heading text-lg font-semibold text-wood mb-3">
                  Visit Our Store
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {BUSINESS.address.full}
                </p>
                <div className="mt-3 text-sm text-text-muted">
                  <p className="font-medium text-wood">Nearby Landmarks:</p>
                  <ul className="mt-1 space-y-1">
                    <li>Near Ravi Road Timber Market</li>
                    <li>Close to Lahore Railway Station</li>
                    <li>Accessible from Data Darbar area</li>
                  </ul>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-white rounded-xl border border-black/[0.06] overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.5!2d${BUSINESS.geo.longitude}!3d${BUSINESS.geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM0JzE5LjIiTiA3NMKwMTgnMzQuMiJF!5e0!3m2!1sen!2spk!4v1234567890`}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lala G Timber Merchants Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
