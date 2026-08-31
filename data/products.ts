export interface ProductCategory {
  title: string
  slug: string
  description: string
  features: string[]
  href: string
  image: string
  imageAlt: string
}

export const productCategories: ProductCategory[] = [
  {
    title: 'Timber',
    slug: 'timber',
    description:
      'Premium construction and furniture timber including Deodar, Pine, Sheesham, Kikkar and Partal in all grades and dimensions.',
    features: ['Deodar', 'Sheesham', 'Kikkar', 'Partal / Kail', 'Sufaida', 'Pine'],
    href: '/products/timber',
    image: '/images/timber-sawn-lahore.jpg',
    imageAlt: 'Sawn timber planks stacked at Lala G Timber Merchant in Lahore',
  },
  {
    title: 'Plywood',
    slug: 'plywood',
    description:
      'Full range of plywood for every application — Marine, Commercial, Simbal, Solar and branded 16mm/18mm shuttering boards.',
    features: ['Duraplex', 'Korenplex', 'Greenplex', 'Marine', 'Simbal', 'Solar'],
    href: '/products/plywood',
    image: '/images/ply-solar.jpg',
    imageAlt: 'Yard stacks of plywood sheets at Lala G Timber Merchant, Lahore',
  },
  {
    title: 'Shuttering Material',
    slug: 'shuttering-material',
    description:
      'Complete shuttering solutions — plywood sheets, steel props, centering plates, and accessories for construction projects.',
    features: ['Shuttering Ply', 'Phatta', 'Baala', 'Wali', 'Gola', 'Naala'],
    href: '/products/shuttering-material',
    image: '/images/shuttering-plywood-lahore.jpg',
    imageAlt: 'Film-coated shuttering plywood sheet in stock in Lahore',
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
  {
    name: 'Kikkar (Keekar)',
    description:
      'Local acacia and the densest wood in regular trade. Takes nails without splitting, carries load without complaint, and handles Lahore\u2019s humidity swings better than imported softwood \u2014 the default for battens, supports and bed frames.',
    uses: ['Battens & supports', 'Bed frames', 'Shuttering props', 'Packing wood'],
    grades: ['32 Lar Bundle', '24 Lar Bundle', '20 Lar Bundle', 'Bed Lar'],
  },
  {
    name: 'Partal / Kail',
    description:
      'Light, straight-grained softwood stocked as baala and reep for roofing and shuttering support. Easy to work and economical for temporary structures.',
    uses: ['Roofing support', 'Shuttering framing', 'Temporary structures', 'Pallets'],
    grades: ['8\u2032 Baala / Reep', '12\u2032 Baala / Reep'],
  },
  {
    name: 'Sufaida (Poplar)',
    description:
      'Fast-growing local poplar, light in weight and colour. Widely used for packing wood, bundles and general-purpose work where cost matters more than hardness.',
    uses: ['Packing wood', 'Bundles', 'Light framing', 'General joinery'],
    grades: ['Baala', 'Bundle', 'Phatta', 'Packing Wood'],
  },
  {
    name: 'Yellow Pine',
    description:
      'Imported softwood with a clean, even grain. Stable and straightforward to machine, suited to interior joinery and furniture carcassing.',
    uses: ['Interior joinery', 'Furniture carcassing', 'Panelling', 'Mouldings'],
    grades: ['A Grade', 'B Grade'],
  },
  {
    name: 'Ash Wood',
    description:
      'Tough, pale hardwood with pronounced grain and excellent shock resistance. Favoured for furniture frames and components that take repeated stress.',
    uses: ['Furniture frames', 'Tool handles', 'Interior fittings', 'Turned components'],
    grades: ['A Grade'],
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
    name: 'Simbal Plywood',
    description:
      'Light 8mm board for short jobs, lining work and low-load applications.',
    waterResistance: 'Basic',
    priceRange: '$',
    bestUse: 'Lining, short jobs, light partitions',
  },
  {
    name: 'Solar Plywood',
    description:
      '14mm residential workhorse \u2014 the common choice for house construction shuttering.',
    waterResistance: 'Moderate',
    priceRange: '$$',
    bestUse: 'Residential slabs and columns',
  },
  {
    name: 'High Pressure Plywood',
    description:
      'Monsoon-rated board in 16mm and 18mm, built for repeated wet pours and heavy commercial casting.',
    waterResistance: 'High (WBP)',
    priceRange: '$$$',
    bestUse: 'Heavy pours, monsoon casting, high reuse cycles',
  },
  {
    name: 'Imported Plywood',
    description:
      'Imported boards held in stock and priced according to weight rather than per sheet.',
    waterResistance: 'Varies by grade',
    priceRange: 'By weight',
    bestUse: 'Specification-driven and specialist projects',
  },
  {
    name: 'Duraplex Shuttering Plywood',
    description:
      'Film-faced shuttering plywood stocked in 16mm and 18mm for slab, column and beam formwork.',
    waterResistance: 'Film-faced',
    priceRange: 'Call for rate',
    bestUse: '16mm for columns and lighter formwork, 18mm for slabs and repeated pours',
  },
  {
    name: 'Korenplex Shuttering Plywood',
    description:
      'Film-faced shuttering plywood stocked in 16mm and 18mm for slab, column and beam formwork.',
    waterResistance: 'Film-faced',
    priceRange: 'Call for rate',
    bestUse: '16mm for columns and lighter formwork, 18mm for slabs and repeated pours',
  },
  {
    name: 'Smart Shuttering Plywood',
    description:
      'Film-faced shuttering plywood stocked in 16mm and 18mm for slab, column and beam formwork.',
    waterResistance: 'Film-faced',
    priceRange: 'Call for rate',
    bestUse: '16mm for columns and lighter formwork, 18mm for slabs and repeated pours',
  },
  {
    name: 'Greenplex Shuttering Plywood',
    description:
      'Film-faced shuttering plywood stocked in 16mm and 18mm for slab, column and beam formwork.',
    waterResistance: 'Film-faced',
    priceRange: 'Call for rate',
    bestUse: '16mm for columns and lighter formwork, 18mm for slabs and repeated pours',
  },
  {
    name: 'Kite Shuttering Plywood',
    description:
      'Film-faced shuttering plywood stocked in 16mm and 18mm for slab, column and beam formwork.',
    waterResistance: 'Film-faced',
    priceRange: 'Call for rate',
    bestUse: '16mm for columns and lighter formwork, 18mm for slabs and repeated pours',
  },
  {
    name: 'Royalplex Shuttering Plywood',
    description:
      'Film-faced shuttering plywood stocked in 16mm and 18mm for slab, column and beam formwork.',
    waterResistance: 'Film-faced',
    priceRange: 'Call for rate',
    bestUse: '16mm for columns and lighter formwork, 18mm for slabs and repeated pours',
  },
]
