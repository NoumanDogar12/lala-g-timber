import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { BUSINESS, getWhatsAppUrl } from '@/lib/constants'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { Button } from '@/components/ui/Button'
import { CallForRatesBadge } from '@/components/ui/CallForRatesBadge'

export const metadata: Metadata = createMetadata({
  title: 'Shuttering Material in Lahore — Plywood, Props, Centering Plates',
  description:
    'Complete shuttering solutions in Lahore — shuttering plywood, steel props, centering plates & accessories. Bulk supply for construction sites. Call for best rates.',
  path: '/products/shuttering-material',
})

const shutteringProducts = [
  {
    name: 'Shuttering Plywood',
    description:
      'Heavy-duty plywood designed for concrete formwork. Available in standard 8x4 feet sheets, 12mm and 18mm thickness. Film-faced option available for smooth concrete finish.',
    specs: ['8x4 feet sheets', '12mm & 18mm thickness', 'Film-faced available', 'Reusable 8-12 times'],
  },
  {
    name: 'Steel Props (Adjustable)',
    description:
      'Heavy-duty adjustable steel props for supporting shuttering formwork. Available in various sizes from 1.6m to 4.0m extension. Hot-dip galvanized options available.',
    specs: ['1.6m to 4.0m range', 'Load capacity: 2-3 tons', 'Adjustable height', 'Galvanized option'],
  },
  {
    name: 'Centering Plates',
    description:
      'Steel centering plates for beam and slab shuttering support. Standard sizes available with proper load distribution design.',
    specs: ['Standard sizes', 'Steel construction', 'Load distribution design', 'Reusable'],
  },
  {
    name: 'Shuttering Accessories',
    description:
      'Complete range of shuttering accessories including tie rods, wing nuts, clamps, nails, and release oil for efficient formwork assembly.',
    specs: ['Tie rods & wing nuts', 'Clamps & fasteners', 'Shuttering nails', 'Release oil'],
  },
]

export default function ShutteringMaterialPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BUSINESS.domain}/products` },
      { '@type': 'ListItem', position: 3, name: 'Shuttering Material', item: `${BUSINESS.domain}/products/shuttering-material` },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumbs />

      {/* Hero */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-wood mb-4">
            Shuttering Material in Lahore
          </h1>
          <p className="text-text-muted text-lg max-w-3xl mb-6">
            Complete shuttering solutions for construction projects — plywood sheets,
            steel props, centering plates, and all accessories. Bulk supply with site delivery.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={`tel:${BUSINESS.phone}`} variant="primary">
              Call for Bulk Rates
            </Button>
            <Button href={getWhatsAppUrl('Hi, I need shuttering material for a construction project. Can you share rates?')} variant="outline">
              WhatsApp for Prices
            </Button>
            <Button href="/calculator" variant="secondary">
              Material Calculator
            </Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 lg:py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-wood mb-8">
            Shuttering Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shutteringProducts.map((product) => (
              <div key={product.name} className="bg-white rounded-xl border border-cream p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-heading text-lg font-semibold text-wood">
                    {product.name}
                  </h3>
                  <CallForRatesBadge />
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div>
                  <h4 className="text-xs font-semibold text-wood mb-2 uppercase tracking-wide">Specifications</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {product.specs.map((spec) => (
                      <li key={spec} className="text-xs text-text-muted flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Shuttering Works */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-wood mb-6">
            How Shuttering Works
          </h2>
          <div className="prose prose-sm text-text-muted max-w-none">
            <p className="leading-relaxed mb-4">
              Shuttering (also called formwork) is a temporary structure used to hold wet
              concrete in place until it hardens. The quality of shuttering material directly
              affects the finish and structural integrity of concrete work.
            </p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-wood text-white rounded-full text-xs font-bold shrink-0">1</span>
                <span><strong className="text-wood">Planning</strong> — Calculate material requirements based on slab/beam dimensions. Use our <a href="/calculator" className="text-gold-dark hover:underline font-medium">calculator</a> for quick estimates.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-wood text-white rounded-full text-xs font-bold shrink-0">2</span>
                <span><strong className="text-wood">Assembly</strong> — Set up steel props at proper spacing, place centering plates, and lay shuttering plywood sheets.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-wood text-white rounded-full text-xs font-bold shrink-0">3</span>
                <span><strong className="text-wood">Pouring</strong> — Pour concrete onto the shuttering. Ensure even distribution and proper vibration.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-wood text-white rounded-full text-xs font-bold shrink-0">4</span>
                <span><strong className="text-wood">Curing &amp; Removal</strong> — After adequate curing time (typically 7-28 days), carefully remove the shuttering for reuse.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
