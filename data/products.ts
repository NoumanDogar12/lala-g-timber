export interface ProductCategory {
  title: string
  slug: string
  description: string
  features: string[]
  href: string
}

export const productCategories: ProductCategory[] = [
  {
    title: 'Timber',
    slug: 'timber',
    description:
      'Premium construction and furniture timber including Teak, Sal, Deodar, Pine, and Sheesham in all grades and dimensions.',
    features: ['Teak', 'Sal', 'Deodar', 'Pine', 'Sheesham'],
    href: '/products/timber',
  },
  {
    title: 'Plywood',
    slug: 'plywood',
    description:
      'Full range of plywood for every application — Marine, BWR, Commercial, Shuttering Plywood, MDF, and Block Board.',
    features: ['Marine Plywood', 'BWR Grade', 'Commercial', 'MDF', 'Block Board'],
    href: '/products/plywood',
  },
  {
    title: 'Shuttering Material',
    slug: 'shuttering-material',
    description:
      'Complete shuttering solutions — plywood sheets, steel props, centering plates, and accessories for construction projects.',
    features: ['Shuttering Ply', 'Steel Props', 'Centering Plates', 'Accessories'],
    href: '/products/shuttering-material',
  },
]

export interface TimberType {
  name: string
  description: string
  uses: string[]
  grades: string[]
}

export const timberTypes: TimberType[] = [
  {
    name: 'Teak (Sagwan)',
    description:
      'Premium hardwood known for exceptional durability and natural resistance to moisture, termites, and rot. The gold standard for high-end furniture and outdoor applications.',
    uses: ['Premium furniture', 'Outdoor decking', 'Door & window frames', 'Boat building'],
    grades: ['A Grade', 'B Grade'],
  },
  {
    name: 'Sal',
    description:
      'Heavy-duty hardwood ideal for structural applications. Extremely dense and strong, making it perfect for load-bearing construction work.',
    uses: ['Structural beams', 'Railway sleepers', 'Heavy construction', 'Flooring'],
    grades: ['A Grade', 'B Grade'],
  },
  {
    name: 'Deodar (Cedar)',
    description:
      'Aromatic softwood from the Himalayas. Light yet strong with excellent workability. Popular for construction timber and decorative woodwork.',
    uses: ['Construction frames', 'Ceiling work', 'Paneling', 'Decorative woodwork'],
    grades: ['A Grade', 'B Grade', 'C Grade'],
  },
  {
    name: 'Pine (Chir)',
    description:
      'Cost-effective softwood suitable for general construction, packaging, and temporary structures. Easy to work with and widely available.',
    uses: ['Shuttering', 'Packaging', 'Temporary structures', 'General construction'],
    grades: ['A Grade', 'B Grade'],
  },
  {
    name: 'Sheesham (Rosewood)',
    description:
      'Beautiful hardwood with distinctive grain patterns. Highly valued for premium furniture making and decorative applications.',
    uses: ['Fine furniture', 'Decorative items', 'Musical instruments', 'Carving'],
    grades: ['A Grade', 'B Grade'],
  },
]

export interface PlywoodType {
  name: string
  description: string
  waterResistance: string
  priceRange: string
  bestUse: string
}

export const plywoodTypes: PlywoodType[] = [
  {
    name: 'Marine Plywood',
    description:
      'Highest grade plywood with BWP (Boiling Water Proof) treatment. Ideal for areas with heavy moisture exposure.',
    waterResistance: 'Excellent (BWP)',
    priceRange: '$$$$',
    bestUse: 'Kitchens, bathrooms, exterior use',
  },
  {
    name: 'BWR Plywood',
    description:
      'Boiling Water Resistant plywood suitable for areas with moderate moisture. A cost-effective alternative to marine ply.',
    waterResistance: 'Good (BWR)',
    priceRange: '$$$',
    bestUse: 'Interior furniture, shelving, partitions',
  },
  {
    name: 'Commercial Plywood',
    description:
      'Standard grade plywood for interior applications. Best for dry conditions where moisture exposure is minimal.',
    waterResistance: 'Basic (MR)',
    priceRange: '$$',
    bestUse: 'Interior furniture, false ceilings, paneling',
  },
  {
    name: 'Shuttering Plywood',
    description:
      'Heavy-duty plywood designed for concrete formwork. Can withstand multiple uses and construction site conditions.',
    waterResistance: 'Good',
    priceRange: '$$$',
    bestUse: 'Concrete shuttering, formwork',
  },
  {
    name: 'MDF Board',
    description:
      'Medium Density Fiberboard with smooth, uniform surface. Perfect for painting, laminating, and precision cutting.',
    waterResistance: 'Low',
    priceRange: '$$',
    bestUse: 'Modular furniture, cabinets, CNC cutting',
  },
  {
    name: 'Block Board',
    description:
      'Core made of softwood strips with veneer facing. Lightweight yet strong, ideal for large panel applications.',
    waterResistance: 'Moderate',
    priceRange: '$$',
    bestUse: 'Large doors, tables, long shelves, partitions',
  },
]
