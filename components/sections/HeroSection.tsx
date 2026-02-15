import Image from 'next/image'
import { BUSINESS, getWhatsAppUrl } from '@/lib/constants'
import { TrustBadge } from '@/components/ui/TrustBadge'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Stacked timber logs"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-bark/70" />

      {/* Warm gradient overlay — adds color depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-bark/60 via-wood/40 to-bark/80" />

      {/* Warm golden glow orbs */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/[0.08] blur-[120px] animate-float-slow" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-gold-light/[0.06] blur-[100px] animate-float" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          <div className="animate-fade-up">
            <TrustBadge />
          </div>

          <h1 className="animate-fade-up [animation-delay:200ms] font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white mt-8 mb-6 leading-[1.08] tracking-tight">
            Premium Timber &amp;{' '}
            <span className="text-gold-light">Plywood</span>{' '}
            in Lahore
          </h1>

          <p className="animate-fade-up [animation-delay:400ms] text-cream/80 text-lg lg:text-xl max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
            Lahore&apos;s most trusted timber supplier for {BUSINESS.yearsInBusiness}+ years.
            Quality construction wood, marine plywood &amp; shuttering material at
            competitive rates.
          </p>

          <div className="animate-fade-up [animation-delay:600ms] flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <Button href={`tel:${BUSINESS.phone}`} variant="gold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              Call for Today&apos;s Rates
            </Button>
            <Button
              href={getWhatsAppUrl('Hi, I\'m interested in your timber products. Can you share today\'s rates?')}
              variant="outline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </Button>
          </div>

          <div className="animate-fade-up [animation-delay:800ms] mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm">
            <a href={`tel:${BUSINESS.phone}`} className="font-medium text-cream hover:text-gold-light transition-colors">
              {BUSINESS.phoneDisplay}
            </a>
            <span className="w-1 h-1 rounded-full bg-gold-light/40" />
            <span className="text-cream/60">Mon&ndash;Sat, {BUSINESS.hours.opens} &ndash; {BUSINESS.hours.closes}</span>
          </div>
        </div>
      </div>

    </section>
  )
}
