import { BUSINESS } from '@/lib/constants'

export function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 bg-white/[0.08] border border-white/[0.12] rounded-full px-5 py-2">
      <div className="w-2 h-2 rounded-full bg-gold animate-pulse-glow" />
      <span className="text-xs font-semibold text-cream/90 tracking-widest uppercase">
        Trusted for {BUSINESS.yearsInBusiness}+ Years
      </span>
    </div>
  )
}
