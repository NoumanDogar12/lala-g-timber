'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 30, suffix: '+', label: 'Years of Experience' },
  { value: 10000, suffix: '+', label: 'Happy Customers' },
  { value: 50, suffix: '+', label: 'Delivery Areas' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
]

const DURATION_MS = 1400

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`
  return n.toString()
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null)

  // Starts at 1 so the server, no-JS visitors and text-only crawlers all get the
  // real figures in the markup. The count-up is a progressive enhancement that
  // only engages while the band is still below the fold, so numbers are never
  // seen resetting to zero.
  const [progress, setProgress] = useState(1)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top <= window.innerHeight) return

    setProgress(0)

    let raf = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1)
          setProgress(1 - Math.pow(1 - t, 3))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-12"
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={
            'text-center lg:text-left lg:px-8' +
            (i > 0 ? ' lg:border-l lg:border-cream/15' : '')
          }
        >
          <p className="font-heading text-5xl lg:text-6xl font-bold text-gold-light tabular-nums leading-none">
            {formatNumber(Math.round(stat.value * progress))}
            {stat.suffix}
          </p>
          <p className="text-cream-dark/75 text-sm mt-3 tracking-wide">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
