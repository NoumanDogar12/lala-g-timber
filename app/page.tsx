import { BUSINESS } from '@/lib/constants'
import { JsonLd } from '@/components/seo/JsonLd'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProductCategories } from '@/components/sections/ProductCategories'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { StatsCounter } from '@/components/ui/StatsCounter'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${BUSINESS.domain}/#business`,
        name: BUSINESS.name,
        url: BUSINESS.domain,
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
        priceRange: '$$',
        description:
          'Leading timber, plywood & shuttering material supplier in Lahore. 30+ years of trust. Construction wood, marine plywood, shuttering plywood & more.',
      },
      {
        '@type': 'Organization',
        '@id': `${BUSINESS.domain}/#organization`,
        name: BUSINESS.name,
        url: BUSINESS.domain,
      },
      {
        '@type': 'WebSite',
        '@id': `${BUSINESS.domain}/#website`,
        url: BUSINESS.domain,
        name: BUSINESS.name,
        publisher: { '@id': `${BUSINESS.domain}/#organization` },
      },
    ],
  }

  return (
    <>
      <JsonLd data={homepageSchema} />
      <HeroSection />
      <ProductCategories />

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter />
        </div>
      </section>

      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
