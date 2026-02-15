export interface Testimonial {
  name: string
  role: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: 'Muhammad Asif',
    role: 'Construction Contractor',
    quote:
      'Been buying timber from Lala G for over 15 years. Their quality is unmatched in the Lahore market. Always fair rates and honest measurement.',
    rating: 5,
  },
  {
    name: 'Haji Rasheed Ahmed',
    role: 'Furniture Manufacturer',
    quote:
      'Best plywood supplier in Ravi Road. Their marine plywood has excellent water resistance. Reliable delivery every time.',
    rating: 5,
  },
  {
    name: 'Engr. Farooq Malik',
    role: 'Civil Engineer',
    quote:
      'For shuttering material, Lala G is our first choice. Good quality ply, props, and centering plates. They understand construction needs.',
    rating: 5,
  },
  {
    name: 'Tariq Mehmood',
    role: 'Interior Designer',
    quote:
      'Their range of timber varieties is excellent — from Deodar to Sheesham. Always get the exact grade I need for my projects.',
    rating: 4,
  },
]
