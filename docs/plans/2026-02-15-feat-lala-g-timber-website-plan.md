---
title: "feat: Build Lala G Timber Merchants Website"
type: feat
date: 2026-02-15
---

# feat: Build Lala G Timber Merchants Website

## Overview

Build a 13-page SEO-optimized lead-generation website for **Lala G Timber Merchants**, a 30+ year old timber store in Lahore, Pakistan. The site uses Next.js 14+ App Router with Tailwind CSS, deployed on Vercel. Every page funnels visitors to phone/WhatsApp (+92 303 087 7771). This is NOT e-commerce — it's a contact-based showcase designed to dominate local timber search queries.

**Domain:** lalagtimbermerchant.com
**Stack:** Next.js 14+ (App Router) + Tailwind CSS + TypeScript
**Deploy:** Vercel

## Problem Statement

Lala G Timber Merchants has been in business 30+ years but has zero online presence beyond a basic Google Business Profile. Competitors are capturing search traffic for high-intent keywords like "timber supplier Lahore", "plywood price list", and "shuttering material calculator". The business loses leads daily to competitors who show up in search results.

The website must:
1. Rank for 30+ target keywords across commercial, informational, and local intent
2. Convert visitors into phone calls and WhatsApp inquiries
3. Establish Lala G as the authoritative timber merchant online
4. Provide an interactive material calculator as an SEO magnet

## Proposed Solution

A statically-generated Next.js site with 13 pages, comprehensive JSON-LD schema markup, a warm earth-tone design system, and multiple lead capture touchpoints on every page. Static generation ensures fast load times and excellent Core Web Vitals scores. The material calculator is the primary SEO differentiator — few competitors offer this tool.

## Technical Approach

### Architecture

```
lalagtimbermerchant.com/
├── app/
│   ├── layout.tsx                    # Root layout (fonts, analytics, WhatsApp button)
│   ├── page.tsx                      # Home page
│   ├── not-found.tsx                 # Custom 404
│   ├── sitemap.ts                    # Dynamic XML sitemap
│   ├── robots.ts                     # Robots.txt generation
│   ├── about/
│   │   └── page.tsx                  # About Us
│   ├── contact/
│   │   └── page.tsx                  # Contact page
│   ├── products/
│   │   ├── page.tsx                  # Products Hub
│   │   ├── timber/
│   │   │   └── page.tsx              # Timber products
│   │   ├── plywood/
│   │   │   └── page.tsx              # Plywood products
│   │   └── shuttering-material/
│   │       └── page.tsx              # Shuttering material
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx              # Individual blog post
│   ├── calculator/
│   │   └── page.tsx                  # Material calculator
│   ├── price-list/
│   │   └── page.tsx                  # Price list
│   ├── faqs/
│   │   └── page.tsx                  # FAQs
│   ├── projects/
│   │   └── page.tsx                  # Projects gallery
│   └── delivery/
│       └── page.tsx                  # Delivery areas
├── components/
│   ├── layout/
│   │   ├── Header.tsx                # Site header with nav
│   │   ├── Footer.tsx                # Site footer
│   │   ├── MobileNav.tsx             # Mobile hamburger menu
│   │   ├── Breadcrumbs.tsx           # Breadcrumb navigation
│   │   └── StickyMobileBar.tsx       # Sticky phone/WhatsApp bar (mobile)
│   ├── ui/
│   │   ├── WhatsAppButton.tsx        # Floating WhatsApp CTA
│   │   ├── CallForRatesBadge.tsx     # "Call for Rates" badge
│   │   ├── TrustBadge.tsx            # "30+ Years of Trust" badge
│   │   ├── StatsCounter.tsx          # Animated stats counter
│   │   ├── TestimonialCard.tsx       # Customer testimonial card
│   │   ├── ProductCard.tsx           # Product category card with hover zoom
│   │   ├── BlogCard.tsx              # Blog post preview card
│   │   ├── ProjectCard.tsx           # Project gallery card
│   │   ├── ContactForm.tsx           # 4-field inquiry form
│   │   └── Button.tsx                # Reusable button component
│   ├── sections/
│   │   ├── HeroSection.tsx           # Homepage hero with trust badge
│   │   ├── ProductCategories.tsx     # Product category grid
│   │   ├── WhyChooseUs.tsx           # USP section
│   │   ├── TestimonialsSection.tsx   # Testimonials slider/grid
│   │   └── CTASection.tsx            # Call-to-action banner
│   ├── calculator/
│   │   ├── CalculatorForm.tsx        # Calculator input form (client component)
│   │   ├── CalculatorResults.tsx     # Results display with CTA
│   │   └── calculator-logic.ts       # Calculation formulas
│   └── seo/
│       ├── JsonLd.tsx                # Reusable JSON-LD component
│       ├── LocalBusinessSchema.tsx   # LocalBusiness structured data
│       ├── ProductSchema.tsx         # Product structured data
│       ├── FAQSchema.tsx             # FAQPage structured data
│       ├── ArticleSchema.tsx         # Article structured data
│       ├── BreadcrumbSchema.tsx      # BreadcrumbList structured data
│       └── WebSiteSchema.tsx         # WebSite structured data
├── lib/
│   ├── fonts.ts                      # Font configuration (Playfair + Inter)
│   ├── metadata.ts                   # Shared metadata helpers
│   ├── constants.ts                  # Business details, phone, address
│   └── blog.ts                       # Blog post data/utilities
├── data/
│   ├── products.ts                   # Product data (timber, plywood, shuttering)
│   ├── faqs.ts                       # FAQ questions and answers
│   ├── testimonials.ts              # Customer testimonials
│   ├── blog-posts/                   # MDX or markdown blog content
│   │   ├── plywood-types-guide.mdx
│   │   └── ...
│   └── delivery-areas.ts            # Delivery area data
├── public/
│   ├── images/
│   │   ├── hero/                     # Hero section images
│   │   ├── products/                 # Product category images
│   │   ├── projects/                 # Project gallery photos
│   │   ├── about/                    # About page photos
│   │   └── blog/                     # Blog post images
│   ├── icons/
│   │   └── whatsapp.svg              # WhatsApp icon
│   └── og-image.jpg                  # Default Open Graph image
├── app/globals.css                   # Global styles + Tailwind directives
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind with custom theme
├── tsconfig.json                     # TypeScript config
├── package.json                      # Dependencies
└── .env.local                        # Environment variables (GA ID, etc.)
```

### Implementation Phases

#### Phase 1: Foundation & Setup

Set up the project scaffold, design system, and shared infrastructure.

**Tasks:**

- [ ] Initialize Next.js 14+ project with TypeScript and Tailwind CSS
  - `npx create-next-app@latest . --typescript --tailwind --app --src-dir=no --import-alias="@/*"`
- [ ] Initialize git repository and create `.gitignore`
- [ ] Configure Tailwind CSS with custom design system theme

  ```css
  /* app/globals.css — Tailwind v4 @theme directive */
  @import "tailwindcss";

  @theme {
    --color-wood: #3B2314;
    --color-wood-light: #5C3A1E;
    --color-gold: #8B6914;
    --color-gold-light: #D4A843;
    --color-cream: #F5E6D3;
    --color-bg: #FAFAF5;
    --color-text: #1A1A1A;
    --color-text-muted: #6B6B6B;

    --font-heading: var(--font-playfair);
    --font-body: var(--font-inter);
  }
  ```

- [ ] Set up fonts in `lib/fonts.ts`

  ```tsx
  // lib/fonts.ts
  import { Playfair_Display, Inter } from 'next/font/google'

  export const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
  })

  export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
  })
  ```

- [ ] Create `lib/constants.ts` with business details

  ```tsx
  // lib/constants.ts
  export const BUSINESS = {
    name: 'Lala G Timber Merchants',
    phone: '+923030877771',
    phoneDisplay: '+92 303 087 7771',
    whatsapp: '923030877771',
    address: 'Shop #1, Timber Market, Ravi Road, Lahore, Punjab 54000, Pakistan',
    city: 'Lahore',
    state: 'Punjab',
    postalCode: '54000',
    country: 'PK',
    domain: 'https://lalagtimbermerchant.com',
    yearsInBusiness: 30,
    tagline: 'Your Trusted Timber Partner Since 30+ Years',
  } as const
  ```

- [ ] Create root `app/layout.tsx` with fonts, metadata template, analytics placeholder

  ```tsx
  // app/layout.tsx
  import { playfair, inter } from '@/lib/fonts'
  import { BUSINESS } from '@/lib/constants'

  export const metadata = {
    metadataBase: new URL(BUSINESS.domain),
    title: {
      default: `${BUSINESS.name} — Timber, Plywood & Shuttering Material in Lahore`,
      template: `%s | ${BUSINESS.name}`,
    },
    description: 'Leading timber, plywood & shuttering material supplier in Lahore. 30+ years of trust. Call for today\'s rates.',
  }

  export default function RootLayout({ children }) {
    return (
      <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
        <body className="font-body bg-bg text-text">
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <StickyMobileBar />
        </body>
      </html>
    )
  }
  ```

- [ ] Build `Header.tsx` — logo, navigation, phone number (click-to-call on mobile)
- [ ] Build `Footer.tsx` — business info, quick links, contact details, copyright
- [ ] Build `MobileNav.tsx` — hamburger menu with slide-out navigation
- [ ] Build `WhatsAppButton.tsx` — floating green button, bottom-right, links to `https://wa.me/923030877771`
- [ ] Build `StickyMobileBar.tsx` — fixed bottom bar on mobile with phone + WhatsApp buttons
- [ ] Build `Breadcrumbs.tsx` — dynamic breadcrumb component
- [ ] Build `Button.tsx` — reusable button with primary/secondary/outline variants
- [ ] Create `app/not-found.tsx` — custom 404 page with search/navigation help
- [ ] Create `app/globals.css` with base styles, Tailwind directives, custom utilities

**Estimated deliverables:** Project scaffolded, design system configured, all shared layout components working, site-wide navigation functional.

#### Phase 2: Core Pages (Home, Products, Contact, About)

Build the highest-priority pages that form the site's backbone.

**Tasks:**

- [ ] **Home page** (`app/page.tsx`)
  - Hero section with wood-texture background, trust badge, headline, WhatsApp CTA
  - Product category cards (3 cards: Timber, Plywood, Shuttering Material)
  - Stats counter (30+ years, 10K+ customers, 50+ delivery areas — animated on scroll)
  - Why Choose Us section (quality, experience, delivery, fair pricing)
  - Testimonials section (3-4 customer testimonials)
  - CTA banner ("Need Timber? Call Us Now")
  - LocalBusiness + Organization + WebSite JSON-LD schema

- [ ] **Products Hub** (`app/products/page.tsx`)
  - Visual grid of 3 product categories with large images and descriptions
  - Each card links to the category detail page
  - Breadcrumb navigation
  - BreadcrumbList schema

- [ ] **Timber page** (`app/products/timber/page.tsx`)
  - Sections for each timber type: Teak, Sal, Deodar, Pine, Sheesham
  - Specifications table (dimensions, grades, uses)
  - Photo gallery with `next/image`
  - "Call for Rates" CTA per section
  - FAQ section (3-5 timber-specific questions)
  - Product + FAQPage + BreadcrumbList schema

- [ ] **Plywood page** (`app/products/plywood/page.tsx`)
  - Types: Marine, BWR, Commercial, Shuttering Plywood, MDF, Block Board
  - Comparison table (grade, water resistance, price range, best use)
  - Specifications per type
  - "Call for Rates" CTA
  - FAQ section
  - Product + FAQPage + BreadcrumbList schema

- [ ] **Shuttering Material page** (`app/products/shuttering-material/page.tsx`)
  - Shuttering plywood, props, centering plates, accessories
  - Usage guides: how shuttering works, material selection
  - Specifications table
  - CTA linking to calculator page
  - Product + BreadcrumbList schema

- [ ] **About page** (`app/about/page.tsx`)
  - Founder story and 30+ year history
  - Warehouse/store photos (stock initially)
  - Values/mission section
  - Why Choose Us detailed section
  - Team section (placeholder)
  - BreadcrumbList schema

- [ ] **Contact page** (`app/contact/page.tsx`)
  - Contact form component (name, phone, material needed, quantity)
  - Google Maps embed (Timber Market, Ravi Road, Lahore)
  - Phone number (click-to-call)
  - WhatsApp direct link
  - Business hours
  - Directions from major landmarks
  - LocalBusiness + BreadcrumbList schema

- [ ] Build all shared components needed:
  - `ProductCard.tsx` — image, title, description, "Call for Rates" badge, hover zoom
  - `CallForRatesBadge.tsx` — gold badge with phone icon
  - `TrustBadge.tsx` — "30+ Years" circular badge
  - `StatsCounter.tsx` — animated number counter (client component with IntersectionObserver)
  - `TestimonialCard.tsx` — name, role, quote, rating stars
  - `ContactForm.tsx` — client component with form validation
  - `CTASection.tsx` — full-width CTA banner with wood texture background

**Estimated deliverables:** 7 pages live with full content, all product categories populated, contact form working.

#### Phase 3: SEO & Content Pages

Build the pages that drive organic traffic growth.

**Tasks:**

- [ ] **Material Calculator** (`app/calculator/page.tsx`)
  - `CalculatorForm.tsx` (client component — `'use client'`)
    - Project type selector: Slab Shuttering / Room Plywood / Timber Framing
    - Dimension inputs: Length (ft) x Width (ft) x Height (ft)
    - Input validation (positive numbers, reasonable ranges)
  - `calculator-logic.ts` — calculation formulas:
    - **Slab shuttering**: plywood sheets = (L x W) / (8x4 sheet area) + 10% waste; props = area / 16 sq ft per prop; plates = perimeter-based
    - **Room plywood**: sheets = wall area / sheet area + 10% waste for each wall
    - **Timber framing**: cubic feet based on standard joist/beam spacing
  - `CalculatorResults.tsx` — results display with material breakdown + "Get Exact Rates" CTA with phone/WhatsApp
  - HowTo schema markup
  - BreadcrumbList schema

- [ ] **Blog listing** (`app/blog/page.tsx`)
  - Blog post card grid with featured image, title, excerpt, date
  - Category filter (if applicable)
  - BreadcrumbList schema

- [ ] **Blog post template** (`app/blog/[slug]/page.tsx`)
  - MDX or markdown rendering
  - `generateStaticParams` for static generation of all blog posts
  - `generateMetadata` for dynamic title/description per post
  - Related posts section
  - CTA banner within/after article content
  - Author info section
  - Article + BreadcrumbList schema
  - Social sharing links

- [ ] **Write first 3 blog posts** (content in `data/blog-posts/`)
  1. "Complete Guide to Plywood Types, Grades & Uses"
  2. "Marine Plywood vs Commercial Plywood: Which Do You Need?"
  3. "Shuttering Material Calculator: How Much Do You Need for Your Slab?"

- [ ] **Price List page** (`app/price-list/page.tsx`)
  - Product table organized by category (Timber, Plywood, Shuttering)
  - Each row: product name, size, grade, "Call for Rates" (no prices)
  - "Rates change daily — call for live pricing" banner
  - Prominent phone/WhatsApp CTAs
  - `dateModified` meta tag updated frequently
  - BreadcrumbList schema

- [ ] **FAQs page** (`app/faqs/page.tsx`)
  - 20+ questions organized by category (General, Timber, Plywood, Shuttering, Delivery, Pricing)
  - Accordion/expandable answers
  - FAQPage + BreadcrumbList schema (critical for Google rich results)

- [ ] **Projects Gallery** (`app/projects/page.tsx`)
  - Photo grid of completed projects / material deliveries
  - Lightbox for full-size viewing
  - Project descriptions (location, materials supplied, scale)
  - BreadcrumbList schema

- [ ] **Delivery Areas** (`app/delivery/page.tsx`)
  - Map of service areas (Lahore + surrounding cities/towns)
  - Area list with delivery availability
  - Minimum order details
  - Delivery process explanation
  - BreadcrumbList schema

- [ ] Set up blog data layer in `lib/blog.ts` and `data/blog-posts/`

**Estimated deliverables:** All 13 pages live, calculator functional, 3 blog posts published, FAQ rich results active.

#### Phase 4: SEO, Performance & Deployment

Finalize SEO implementation, optimize performance, and deploy.

**Tasks:**

- [ ] **Sitemap generation** (`app/sitemap.ts`)
  ```tsx
  // app/sitemap.ts
  import { MetadataRoute } from 'next'
  export default function sitemap(): MetadataRoute.Sitemap {
    return [
      { url: 'https://lalagtimbermerchant.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
      { url: 'https://lalagtimbermerchant.com/products', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
      // ... all pages
    ]
  }
  ```

- [ ] **Robots.txt** (`app/robots.ts`)
  ```tsx
  // app/robots.ts
  import { MetadataRoute } from 'next'
  export default function robots(): MetadataRoute.Robots {
    return {
      rules: { userAgent: '*', allow: '/' },
      sitemap: 'https://lalagtimbermerchant.com/sitemap.xml',
    }
  }
  ```

- [ ] **Open Graph images** — create default OG image (1200x630) for social sharing
- [ ] **Per-page metadata** — ensure every page has unique title, description, and OG tags via `generateMetadata` or static `metadata` exports
- [ ] **Schema markup audit** — validate all JSON-LD with Google Rich Results Test
- [ ] **Performance optimization**
  - All hero/above-fold images use `priority` prop
  - All below-fold images lazy-loaded (default)
  - Responsive `sizes` attribute on all `next/image` components
  - Minimize client components (only: calculator form, stats counter, mobile nav toggle, contact form)
  - No unnecessary third-party scripts
- [ ] **Core Web Vitals audit**
  - LCP < 2.5s — ensure hero image is optimized and prioritized
  - CLS < 0.1 — all images have explicit dimensions, fonts use `display: swap`
  - INP < 200ms — minimal JS, no heavy event handlers
- [ ] **Accessibility check**
  - All images have descriptive `alt` text
  - Color contrast minimum 4.5:1 (verify dark wood text on cream background)
  - Touch targets minimum 44x44px
  - Keyboard navigation for all interactive elements
  - ARIA labels on icon-only buttons (WhatsApp, phone)
  - `prefers-reduced-motion` respected for animations
- [ ] **Google Analytics 4 setup** using `@next/third-parties/google`
  ```tsx
  // In app/layout.tsx
  import { GoogleAnalytics } from '@next/third-parties/google'
  // Add <GoogleAnalytics gaId="G-XXXXXXXX" /> in body
  ```
- [ ] **Deploy to Vercel**
  - Connect GitHub repository
  - Set custom domain: lalagtimbermerchant.com
  - Configure SSL
  - Verify build succeeds
- [ ] **Post-deployment**
  - Submit sitemap to Google Search Console
  - Submit sitemap to Bing Webmaster Tools
  - Verify all pages indexed
  - Test all schema markup in production
  - Test all phone/WhatsApp links on mobile

**Estimated deliverables:** Site fully deployed, all SEO elements in place, analytics tracking, schema validated.

### Component Architecture

| Component | Server/Client | Reason |
|-----------|--------------|--------|
| Header | Server | Static content, no interactivity |
| MobileNav | Client | Hamburger toggle state |
| Footer | Server | Static content |
| Breadcrumbs | Server | Generated from URL path |
| WhatsAppButton | Server | Static link, CSS animation only |
| StickyMobileBar | Server | Static links, CSS-only show/hide |
| StatsCounter | Client | IntersectionObserver for animation |
| ContactForm | Client | Form state + validation |
| CalculatorForm | Client | Form state + calculations |
| CalculatorResults | Server | Receives results as props |
| ProductCard | Server | Static content with CSS hover |
| TestimonialCard | Server | Static content |
| BlogCard | Server | Static content |
| All Schema components | Server | JSON-LD rendered server-side |

### JSON-LD Schema Implementation Pattern

All schema components follow this pattern (rendered in Server Components):

```tsx
// components/seo/JsonLd.tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Usage in page.tsx
<JsonLd data={{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": BUSINESS.name,
  "telephone": BUSINESS.phone,
  // ...
}} />
```

### Homepage Schema (Combined @graph)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://lalagtimbermerchant.com/#business",
      "name": "Lala G Timber Merchants",
      "url": "https://lalagtimbermerchant.com",
      "telephone": "+923030877771",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop #1, Timber Market, Ravi Road",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "postalCode": "54000",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "31.5720",
        "longitude": "74.3095"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "priceRange": "$$"
    },
    {
      "@type": "Organization",
      "@id": "https://lalagtimbermerchant.com/#organization",
      "name": "Lala G Timber Merchants",
      "url": "https://lalagtimbermerchant.com",
      "logo": "https://lalagtimbermerchant.com/images/logo.png"
    },
    {
      "@type": "WebSite",
      "@id": "https://lalagtimbermerchant.com/#website",
      "url": "https://lalagtimbermerchant.com",
      "name": "Lala G Timber Merchants",
      "publisher": { "@id": "https://lalagtimbermerchant.com/#organization" }
    }
  ]
}
```

## SpecFlow Analysis: Gaps & Resolutions

The following gaps were identified through specification flow analysis and have been incorporated into the plan:

### Critical Resolutions (Built into acceptance criteria)

| Gap | Resolution |
|-----|-----------|
| **Contact form post-submission** | Show "Thank you" confirmation message. Form data sent via email (or Next.js API route → Google Sheets). Communicate "We'll contact you within 24 hours." |
| **Mobile CTA overlap** | Hide floating WhatsApp on mobile (`hidden md:block`). Sticky bar shows on mobile only (`md:hidden`). No overlap. |
| **Calculator units** | Default to feet (standard in Pakistan construction). Add unit toggle for meters. |
| **Calculator validation** | Min 1 ft, max 500 ft per dimension. Number-only inputs. Show error messages for invalid input. |
| **Calculator disclaimer** | Add "These are approximate estimates. Call for exact quantities and pricing." below results. |
| **Calculator wastage** | Use 10% wastage factor for all calculations. Show wastage separately in results breakdown. |
| **WhatsApp pre-filled messages** | Each page sends a context-specific pre-filled message. E.g., Plywood page: `?text=Hi, I need plywood pricing. Can you share today's rates?` |
| **Blog article #7 geography** | Change "Best Wood for Construction in India" → "Best Wood for Construction in Pakistan" |
| **Gold accent contrast** | Use `#8B6914` only for large text/decorative elements. For small text/CTAs, darken to `#6B5310` or use white text on gold background. Verify 4.5:1 ratio. |
| **MDF/block board coverage** | Add as sub-sections within Plywood product page with dedicated H2 headings and anchor links |

### Additional Pages (Added to sitemap)

| Page | URL | Reason |
|------|-----|--------|
| Privacy Policy | `/privacy-policy` | Legally required for contact form data collection |
| Terms of Service | `/terms` | Standard legal page, Google trust signal |

These are simple static pages and will be built in Phase 4.

### Conversion Tracking Events (Built into Phase 4)

Track these GA4 events from day one:
- `whatsapp_click` (with page context)
- `phone_click` (with page context)
- `form_submit` (contact form)
- `calculator_use` (project type selected)
- `calculator_result_cta_click` (CTA after results)
- `blog_cta_click` (in-article CTAs)

### Internal Linking Strategy

| From Page | Links To |
|-----------|----------|
| Blog articles | Related product pages + other related articles |
| Product pages | Calculator page + related blog articles + other product pages |
| Calculator | Relevant product page based on calculation type |
| FAQ answers | Product pages + blog articles where relevant |
| Price list rows | Individual product pages |
| Home page | All product categories + calculator + blog |

## Alternative Approaches Considered

| Approach | Why Rejected |
|----------|-------------|
| WordPress + Elementor | Slower performance, harder to achieve perfect Core Web Vitals, plugin bloat, security concerns |
| Gatsby.js | Build times grow with content, GraphQL overhead unnecessary for this site, smaller ecosystem than Next.js |
| Astro | Good option but less mature ecosystem, fewer deployment options, team less familiar |
| Static HTML/CSS | No component reuse, no image optimization, manual sitemap management, harder to maintain |
| Full e-commerce (Shopify/WooCommerce) | Overkill — no cart/checkout needed, pricing is "call for rates", adds unnecessary complexity |

**Chosen: Next.js 14+ App Router** — Best balance of SEO (SSG/SSR), developer experience, image optimization, Vercel deployment, and ecosystem support.

## Acceptance Criteria

### Functional Requirements

- [ ] All 13 pages render correctly on desktop and mobile
- [ ] Material calculator produces accurate estimates for all 3 project types
- [ ] Contact form validates inputs and shows success/error states
- [ ] Floating WhatsApp button visible on all pages, links to `wa.me/923030877771`
- [ ] Sticky mobile bar visible only on mobile, with working phone and WhatsApp links
- [ ] Click-to-call works on mobile for all phone number instances
- [ ] Blog listing shows all published posts with pagination (if needed)
- [ ] Individual blog posts render from MDX/markdown with proper formatting
- [ ] FAQ accordion expands/collapses smoothly
- [ ] Projects gallery images load lazily and can be viewed full-size
- [ ] Breadcrumb navigation shows on all inner pages
- [ ] 404 page displays for unknown routes with helpful navigation

### Non-Functional Requirements

- [ ] **LCP < 2.5s** on all pages (measured via PageSpeed Insights)
- [ ] **CLS < 0.1** on all pages (no layout shifts)
- [ ] **INP < 200ms** on all pages (smooth interactions)
- [ ] **Lighthouse Performance score > 90** on all pages
- [ ] **Lighthouse SEO score = 100** on all pages
- [ ] **Lighthouse Accessibility score > 90** on all pages
- [ ] All pages server-rendered (no client-side only content for SEO)
- [ ] All images served as WebP/AVIF via Next.js Image optimization
- [ ] Site works without JavaScript (content readable, links work)
- [ ] Mobile responsive from 320px to 1920px+ widths
- [ ] Color contrast ratio meets WCAG AA (4.5:1 minimum)

### SEO Requirements

- [ ] Every page has unique `<title>` tag (50-60 characters, keyword near beginning)
- [ ] Every page has unique `<meta description>` (150-160 characters)
- [ ] Every page has Open Graph and Twitter Card meta tags
- [ ] `sitemap.xml` accessible at `/sitemap.xml` and lists all pages
- [ ] `robots.txt` accessible at `/robots.txt` with sitemap reference
- [ ] Canonical tags on every page
- [ ] JSON-LD schema markup validated on:
  - Homepage: LocalBusiness + Organization + WebSite
  - Product pages: Product + FAQPage + BreadcrumbList
  - Blog posts: Article + BreadcrumbList
  - FAQ page: FAQPage + BreadcrumbList
  - Calculator: HowTo + BreadcrumbList
  - All inner pages: BreadcrumbList
- [ ] All images have descriptive `alt` text with relevant keywords
- [ ] H1 tag on every page containing primary keyword
- [ ] Internal linking between related pages (products ↔ blog, calculator → products)

### Quality Gates

- [ ] TypeScript strict mode — no `any` types
- [ ] All pages tested on Chrome, Safari, Firefox (desktop + mobile)
- [ ] All phone/WhatsApp links tested on actual mobile device
- [ ] Google Rich Results Test passes for all schema markup
- [ ] PageSpeed Insights scores meet targets for both mobile and desktop
- [ ] No console errors or warnings in production build
- [ ] `next build` completes without errors or warnings

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Google indexation | All 13 pages indexed within 2 weeks | Google Search Console |
| Organic impressions | 1,000+ impressions/month within 3 months | Search Console |
| Organic clicks | 100+ clicks/month within 3 months | Search Console |
| Phone/WhatsApp leads | 10+ inquiries/week from website | Call tracking |
| Page load time (LCP) | < 2.5s on mobile | PageSpeed Insights |
| Core Web Vitals | All "Good" | Search Console CWV report |
| FAQ rich results | Appearing for FAQ-targeted queries | SERP check |
| Calculator traffic | 50+ monthly users within 3 months | GA4 |

## Dependencies & Prerequisites

| Dependency | Status | Notes |
|------------|--------|-------|
| Domain (lalagtimbermerchant.com) | Needed | Must be registered and DNS pointed to Vercel |
| Vercel account | Needed | Free tier sufficient for launch |
| Google Search Console | Needed | Set up post-deployment |
| Google Analytics 4 | Needed | Create property, get measurement ID |
| Stock images | Needed | Wood/timber themed stock photos for initial launch |
| Business hours | Confirmed | Need exact opening/closing times for schema |
| Logo | Needed | Design or provide existing logo for header/schema |
| Google Maps embed | Confirmed | Timber Market, Ravi Road, Lahore coordinates available |

## Risk Analysis & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Stock images look generic | Medium | High | Use high-quality wood/timber stock photos; replace with real photos ASAP |
| Slow indexing by Google | Medium | Medium | Submit sitemap to Search Console immediately; use Google's URL Inspection tool |
| Calculator estimates inaccurate | Medium | Medium | Add disclaimer "estimates only"; use standard construction industry formulas |
| Domain not available/configured | High | Low | Register domain before development begins |
| Content too thin for SEO | High | Medium | Ensure each page has 500+ words of unique, keyword-rich content |
| WhatsApp link not working | High | Low | Test on real mobile devices; use standard `wa.me/` URL format |

## Resource Requirements

- **Developer:** 1 (building with Claude Code)
- **Content:** Stock images initially; real photos needed within 1 month of launch
- **Domain:** lalagtimbermerchant.com registration
- **Hosting:** Vercel (free tier)
- **Analytics:** Google Analytics 4 (free)
- **Search Console:** Google Search Console (free)

## Future Considerations

Items explicitly deferred from initial launch:

1. **Hindi/Urdu language version** — can add with Next.js i18n routing later
2. **Real customer photos** — replace stock images when available
3. **Google Business Profile optimization** — update description, photos, posts
4. **Additional blog posts** — publish weekly to grow organic traffic (10 planned articles)
5. **WhatsApp Business API** — upgrade from simple `wa.me` link to automated responses
6. **Online payment** — if business model evolves to accept advance payments online
7. **Customer reviews integration** — pull Google reviews to display on site
8. **Chat widget** — consider Tawk.to or similar for live chat
9. **Multi-location** — if business expands, add location pages
10. **Video content** — warehouse tours, product demos for YouTube + embedded on site

## Documentation Plan

- [ ] Create `CLAUDE.md` at project root with coding conventions
- [ ] Create `README.md` with setup instructions, deployment guide
- [ ] Document environment variables in `.env.example`

## References & Research

### Internal References
- Brainstorm document: `docs/brainstorms/2026-02-15-lala-g-timber-website-brainstorm.md`
- Next.js best practices skill: `.agents/skills/next-best-practices/SKILL.md`
- Schema markup skill: `.agents/skills/schema-markup/SKILL.md`
- SEO audit skill: `.agents/skills/seo-audit/SKILL.md`
- Page CRO skill: `.agents/skills/page-cro/SKILL.md`
- UI/UX design skill: `.agents/skills/ui-ux-pro-max/SKILL.md`

### External References
- Next.js App Router documentation: https://nextjs.org/docs/app
- Tailwind CSS v4 documentation: https://tailwindcss.com/docs
- Schema.org structured data: https://schema.org
- Google Rich Results Test: https://search.google.com/test/rich-results
- Google PageSpeed Insights: https://pagespeed.web.dev
- WhatsApp Click to Chat: https://faq.whatsapp.com/5913398998672934

### Competitor Research
- 84 Lumber, Dunn Lumber, TimberTown, Travis Perkins analyzed for page structure and SEO patterns
- Material calculators are rare in this niche — significant competitive advantage
- Local SEO (Google Business Profile + LocalBusiness schema) is the primary ranking factor for timber suppliers
