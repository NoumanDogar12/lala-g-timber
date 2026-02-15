'use client'

import { useState } from 'react'
import { calculateMaterials, type ProjectType, type CalculatorResult } from './calculator-logic'
import { CalculatorResults } from './CalculatorResults'

const projectTypes: { value: ProjectType; label: string; description: string }[] = [
  { value: 'slab-shuttering', label: 'Slab Shuttering', description: 'Calculate plywood, props & plates for concrete slab' },
  { value: 'room-plywood', label: 'Room Plywood', description: 'Calculate plywood sheets for walls & ceiling' },
  { value: 'timber-framing', label: 'Timber Framing', description: 'Calculate timber joists & beams for floor framing' },
]

export function CalculatorForm() {
  const [projectType, setProjectType] = useState<ProjectType>('slab-shuttering')
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState<CalculatorResult | null>(null)
  const [error, setError] = useState('')

  const needsHeight = projectType === 'room-plywood'

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const l = parseFloat(length)
    const w = parseFloat(width)
    const h = needsHeight ? parseFloat(height) : 0

    if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) {
      setError('Please enter valid positive numbers for dimensions.')
      return
    }
    if (l > 500 || w > 500) {
      setError('Dimensions seem too large. Please enter values in feet (max 500 ft).')
      return
    }
    if (needsHeight && (isNaN(h) || h <= 0)) {
      setError('Please enter a valid height.')
      return
    }
    if (needsHeight && h > 50) {
      setError('Height seems too large. Please enter value in feet (max 50 ft).')
      return
    }

    setResult(calculateMaterials({ projectType, length: l, width: w, height: h }))
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleCalculate} className="bg-white rounded-xl border border-cream p-6 lg:p-8">
        {/* Project Type */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-wood mb-3">
            Project Type
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {projectTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => {
                  setProjectType(type.value)
                  setResult(null)
                }}
                className={`text-left p-3 rounded-lg border-2 transition-colors cursor-pointer ${
                  projectType === type.value
                    ? 'border-gold bg-gold/5'
                    : 'border-cream hover:border-gold-light'
                }`}
              >
                <span className="block text-sm font-medium text-wood">{type.label}</span>
                <span className="block text-xs text-text-muted mt-0.5">{type.description}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dimensions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="length" className="block text-sm font-medium text-wood mb-1">
              Length (ft)
            </label>
            <input
              type="number"
              id="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              min="0.1"
              step="0.1"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-cream bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
              placeholder="e.g., 20"
            />
          </div>
          <div>
            <label htmlFor="width" className="block text-sm font-medium text-wood mb-1">
              Width (ft)
            </label>
            <input
              type="number"
              id="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              min="0.1"
              step="0.1"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-cream bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
              placeholder="e.g., 15"
            />
          </div>
          {needsHeight && (
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-wood mb-1">
                Height (ft)
              </label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                min="0.1"
                step="0.1"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-cream bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                placeholder="e.g., 10"
              />
            </div>
          )}
        </div>

        {error && (
          <p className="text-red-600 text-sm mb-4">{error}</p>
        )}

        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 bg-wood text-white rounded-lg font-semibold text-sm hover:bg-wood-light transition-colors cursor-pointer min-h-[44px]"
        >
          Calculate Materials
        </button>
      </form>

      {result && <CalculatorResults result={result} />}
    </div>
  )
}
