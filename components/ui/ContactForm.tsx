'use client'

import { useState } from 'react'

interface FormData {
  name: string
  phone: string
  material: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    material: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to an API or email service
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-green-wa mx-auto mb-3">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        <h3 className="font-heading text-lg font-semibold text-wood mb-2">
          Thank You!
        </h3>
        <p className="text-text-muted text-sm">
          We&apos;ve received your inquiry. Our team will call you back shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setFormData({ name: '', phone: '', material: '', message: '' })
          }}
          className="mt-4 text-sm text-wood font-medium hover:text-gold-dark transition-colors"
        >
          Send Another Inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-wood mb-1">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-cream bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
          placeholder="Muhammad Ali"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-wood mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-cream bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
          placeholder="0300 1234567"
        />
      </div>

      <div>
        <label htmlFor="material" className="block text-sm font-medium text-wood mb-1">
          Material Needed *
        </label>
        <select
          id="material"
          required
          value={formData.material}
          onChange={(e) => setFormData({ ...formData, material: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-cream bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
        >
          <option value="">Select material type</option>
          <option value="timber">Timber</option>
          <option value="plywood">Plywood</option>
          <option value="shuttering">Shuttering Material</option>
          <option value="multiple">Multiple Materials</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-wood mb-1">
          Message (Optional)
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-cream bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
          placeholder="Tell us about your project requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-wood text-white rounded-lg font-semibold text-sm hover:bg-wood-light transition-colors cursor-pointer min-h-[44px]"
      >
        Send Inquiry
      </button>

      <p className="text-xs text-text-muted text-center">
        We&apos;ll call you back within 30 minutes during business hours.
      </p>
    </form>
  )
}
