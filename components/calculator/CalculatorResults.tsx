import { BUSINESS, getWhatsAppUrl } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import type { CalculatorResult } from './calculator-logic'

export function CalculatorResults({ result }: { result: CalculatorResult }) {
  const materialsText = result.materials
    .map((m) => `${m.name}: ${m.quantity} ${m.unit}`)
    .join(', ')

  const whatsappMessage = `Hi, I used your calculator and need: ${materialsText}. Can you share the rates?`

  return (
    <div className="bg-white rounded-xl border border-black/[0.06] p-6 lg:p-8">
      <h3 className="font-heading text-xl font-semibold text-wood mb-4">
        Estimated Materials
      </h3>

      <div className="space-y-3 mb-6">
        {result.materials.map((material) => (
          <div key={material.name} className="flex items-center justify-between py-3 border-b border-black/[0.04] last:border-0">
            <div>
              <p className="text-sm font-medium text-wood">{material.name}</p>
              <p className="text-xs text-text-muted">{material.notes}</p>
            </div>
            <p className="text-lg font-bold text-wood">
              {material.quantity} <span className="text-sm font-normal text-text-muted">{material.unit}</span>
            </p>
          </div>
        ))}
      </div>

      <p className="text-xs text-text-muted bg-bg rounded-lg p-3 mb-6 border border-black/[0.06]">
        {result.disclaimer}
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button href={`tel:${BUSINESS.phone}`} variant="primary">
          Get Exact Rates
        </Button>
        <Button href={getWhatsAppUrl(whatsappMessage)} variant="outline">
          Share on WhatsApp
        </Button>
      </div>
    </div>
  )
}
