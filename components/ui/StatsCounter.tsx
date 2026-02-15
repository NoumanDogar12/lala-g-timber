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

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`
  return n.toString()
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="font-heading text-3xl lg:text-4xl font-bold text-wood">
            {visible ? (
              <>
                {formatNumber(stat.value)}
                {stat.suffix}
              </>
            ) : (
              '0'
            )}
          </p>
          <p className="text-text-muted text-sm mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
