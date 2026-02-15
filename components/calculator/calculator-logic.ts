export type ProjectType = 'slab-shuttering' | 'room-plywood' | 'timber-framing'

export interface CalculatorInput {
  projectType: ProjectType
  length: number
  width: number
  height: number
}

export interface MaterialItem {
  name: string
  quantity: number
  unit: string
  notes: string
}

export interface CalculatorResult {
  materials: MaterialItem[]
  disclaimer: string
}

const SHEET_AREA = 8 * 4 // 32 sq ft (standard 8x4 sheet)
const WASTE_FACTOR = 1.1 // 10% waste allowance

export function calculateMaterials(input: CalculatorInput): CalculatorResult {
  const { projectType, length, width, height } = input

  switch (projectType) {
    case 'slab-shuttering': {
      const slabArea = length * width
      const plywoodSheets = Math.ceil((slabArea / SHEET_AREA) * WASTE_FACTOR)
      const propsCount = Math.ceil(slabArea / 16) // 1 prop per 16 sq ft
      const perimeter = 2 * (length + width)
      const centeringPlates = Math.ceil(perimeter / 4) // 1 plate per 4 ft

      return {
        materials: [
          { name: 'Shuttering Plywood (8x4 ft)', quantity: plywoodSheets, unit: 'sheets', notes: 'Includes 10% waste allowance' },
          { name: 'Steel Props', quantity: propsCount, unit: 'pieces', notes: '1 prop per 16 sq ft of slab' },
          { name: 'Centering Plates', quantity: centeringPlates, unit: 'pieces', notes: 'Based on perimeter' },
        ],
        disclaimer: 'Estimates are approximate. Actual requirements may vary based on slab thickness, beam layout, and site conditions. Contact us for an exact quote.',
      }
    }

    case 'room-plywood': {
      const wallArea = 2 * (length + width) * height
      const plywoodSheets = Math.ceil((wallArea / SHEET_AREA) * WASTE_FACTOR)
      const ceilingSheets = Math.ceil(((length * width) / SHEET_AREA) * WASTE_FACTOR)

      return {
        materials: [
          { name: 'Wall Plywood (8x4 ft)', quantity: plywoodSheets, unit: 'sheets', notes: 'All four walls, 10% waste' },
          { name: 'Ceiling Plywood (8x4 ft)', quantity: ceilingSheets, unit: 'sheets', notes: 'Ceiling coverage, 10% waste' },
        ],
        disclaimer: 'Estimates exclude door/window openings. Actual requirement may be lower. Contact us for precise measurements.',
      }
    }

    case 'timber-framing': {
      const floorArea = length * width
      const joistCount = Math.ceil(length / 1.33) // joist every 16 inches (1.33 ft)
      const cubicFeet = joistCount * width * (4 / 12) * (2 / 12) // 2x4 joists
      const beamCubicFeet = Math.ceil(floorArea / 100) * 2 // main beams

      return {
        materials: [
          { name: 'Timber Joists (2x4)', quantity: joistCount, unit: 'pieces', notes: `Each ${width} ft long, spaced 16" apart` },
          { name: 'Timber Volume', quantity: Math.ceil(cubicFeet + beamCubicFeet), unit: 'cubic ft', notes: 'Including main beams' },
        ],
        disclaimer: 'Framing estimates depend on load requirements and local building standards. Consult a structural engineer and contact us for material pricing.',
      }
    }
  }
}
