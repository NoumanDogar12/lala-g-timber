import { productCategories } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'

export function ProductCategories() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-wood mb-4">
            Our Products
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Quality timber, plywood &amp; shuttering material for every construction
            and furniture need.
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
  )
}
