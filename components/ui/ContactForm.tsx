'use client'

import { useState } from 'react'
import { BUSINESS, getWhatsAppUrl } from '@/lib/constants'

interface FormData {
  name: string
  phone: string
  material: string
  message: string
}

const MATERIAL_LABELS: Record<string, string> = {
  timber: 'Timber',
  plywood: 'Plywood',
  shuttering: 'Shuttering Material',
  multiple: 'Multiple Materials',
  other: 'Other',
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    material: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const buildWhatsAppMessage = (data: FormData): string => {
    const lines = [
      `Hi, I'm ${data.name}.`,
      `Phone: ${data.phone}`,
      `Material needed: ${MATERIAL_LABELS[data.material] || data.material}`,
    ]
    if (data.message.trim()) {
      lines.push(`Details: ${data.message.trim()}`)
    }
    lines.push('', 'Can you share today\'s rates?')
    return lines.join('\n')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

    // Send email via Web3Forms if key is configured
    if (web3formsKey && web3formsKey !== 'YOUR_ACCESS_KEY_HERE') {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `New Inquiry - ${MATERIAL_LABELS[formData.material] || formData.material} | ${BUSINESS.name}`,
            from_name: formData.name,
            name: formData.name,
            phone: formData.phone,
            material: MATERIAL_LABELS[formData.material] || formData.material,
            message: formData.message || 'No additional details provided',
          }),
        })

        if (!res.ok) {
          console.error('Web3Forms submission failed')
        }
      } catch {
        console.error('Email sending failed, continuing with WhatsApp')
      }
    }

    setStatus('sent')

    // Open WhatsApp with pre-filled message after a short delay
    setTimeout(() => {
      const waMessage = buildWhatsAppMessage(formData)
      window.open(getWhatsAppUrl(waMessage), '_blank')
    }, 800)
  }

  if (status === 'sent') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-green-wa mx-auto mb-3">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        <h3 className="font-heading text-lg font-semibold text-wood mb-2">
          Thank You, {formData.name}!
        </h3>
        <p className="text-text-muted text-sm mb-1">
          Your inquiry has been sent. WhatsApp should open shortly.
        </p>
        <p className="text-text-muted text-xs">
          If it didn&apos;t open,{' '}
          <a
            href={getWhatsAppUrl(buildWhatsAppMessage(formData))}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-wa font-semibold hover:underline"
          >
            click here to chat on WhatsApp
          </a>
        </p>
        <button
          onClick={() => {
            setStatus('idle')
            setFormData({ name: '', phone: '', material: '', message: '' })
          }}
          className="mt-4 text-sm text-wood font-medium hover:text-gold transition-colors"
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
          className="w-full px-4 py-2.5 rounded-lg border border-cream-dark/30 bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
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
          className="w-full px-4 py-2.5 rounded-lg border border-cream-dark/30 bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
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
          className="w-full px-4 py-2.5 rounded-lg border border-cream-dark/30 bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
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
          className="w-full px-4 py-2.5 rounded-lg border border-cream-dark/30 bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
          placeholder="Tell us about your project requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3 bg-gold text-bark rounded-xl font-semibold text-sm hover:bg-gold-dark transition-colors cursor-pointer min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
            Send Inquiry
          </>
        )}
      </button>

      <p className="text-xs text-text-muted text-center">
        Your inquiry will be sent via email &amp; WhatsApp for fastest response.
      </p>
    </form>
  )
}
