export const BUSINESS = {
  name: 'Lala G Timber Merchants',
  phone: '+923030877771',
  phoneDisplay: '+92 303 087 7771',
  whatsapp: '923030877771',
  whatsappUrl: 'https://wa.me/923030877771',
  address: {
    street: 'Shop #1, Timber Market, Ravi Road',
    city: 'Lahore',
    state: 'Punjab',
    postalCode: '54000',
    country: 'PK',
    full: 'Shop #1, Timber Market, Ravi Road, Lahore, Punjab 54000, Pakistan',
  },
  geo: {
    latitude: '31.5720',
    longitude: '74.3095',
  },
  domain: 'https://lalagtimbermerchant.com',
  yearsInBusiness: 30,
  tagline: 'Your Trusted Timber Partner Since 30+ Years',
  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products', children: [
    { label: 'Timber', href: '/products/timber' },
    { label: 'Plywood', href: '/products/plywood' },
    { label: 'Shuttering Material', href: '/products/shuttering-material' },
  ]},
  { label: 'Calculator', href: '/calculator' },
  { label: 'Price List', href: '/price-list' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${BUSINESS.whatsapp}`
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`
  }
  return base
}
