import Image from 'next/image'
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
        priceRange: '$$',
        description:
          'Best timber, wood, plywood & shuttering material supplier in Lahore. 30+ years trusted wood merchant. Lakdi, phatta, ply, wali — all construction material. Teak, Deodar, Sheesham, marine plywood & more.',
        keywords:
          'timber, wood, plywood, ply, phatta, lakdi, wali, shuttering, construction material, best wood supplier, Lahore timber merchants, timber market Ravi Road',
      },
      {
        '@type': 'Organization',
        '@id': `${BUSINESS.domain}/#organization`,
        name: BUSINESS.name,
        url: BUSINESS.domain,
        logo: {
          '@type': 'ImageObject',
          url: `${BUSINESS.domain}/icon.png`,
          width: 512,
          height: 512,
        },
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
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-bark/75" />
        <div className="absolute inset-0 bg-gradient-to-br from-wood-warm/20 via-transparent to-wood/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.06] blur-[100px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter />
        </div>
      </section>

      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
