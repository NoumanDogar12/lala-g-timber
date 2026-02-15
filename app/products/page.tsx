import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { productCategories } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = createMetadata({
  title: 'Timber, Plywood & Shuttering Material — Products',
  description:
    'Browse our complete range of timber, plywood, and shuttering material. Premium quality construction wood, marine plywood, BWR plywood, shuttering ply, and accessories in Lahore.',
  path: '/products',
})

export default function ProductsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BUSINESS.domain}/products` },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumbs />

      <section className="py-12 lg:py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-wood mb-4">
              Our Products
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              From premium timber to construction-grade plywood and complete shuttering
              solutions — we supply everything you need for your building project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {productCategories.map((product) => (
              <ProductCard
                key={product.slug}
                title={product.title}
                description={product.description}
                features={product.features}
                href={product.href}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
