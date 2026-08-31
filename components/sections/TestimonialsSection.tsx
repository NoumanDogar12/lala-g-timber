import { testimonials } from '@/data/testimonials'
import { TestimonialCard } from '@/components/ui/TestimonialCard'

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream/45 border-y border-cream-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned header + tinted band: a third distinct section rhythm. */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 pb-8 border-b border-cream-dark/50">
          <div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
              Testimonials
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-wood leading-[1.1]">
              What Our Customers Say
            </h2>
          </div>
          <p className="text-text-muted text-lg md:max-w-sm md:text-right">
            Trusted by thousands of builders, contractors, and designers in Lahore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
