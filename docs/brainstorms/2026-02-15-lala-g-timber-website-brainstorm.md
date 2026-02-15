---
date: 2026-02-15
topic: lala-g-timber-website
---

# Lala G Timber Merchants — Website

## What We're Building

A lead-generation website for **Lala G Timber Merchants**, a 30+ year old single-location timber store selling construction timber, plywood, and shuttering materials. The site's primary goal is to generate phone calls, WhatsApp inquiries, and advance-payment orders from contractors, builders, and homeowners through strong organic search presence.

This is NOT an e-commerce site. It's a contact-based showcase designed to dominate local and national timber-related search queries, funnel visitors to call/WhatsApp, and establish Lala G as the authoritative timber merchant online.

## Why This Approach

**Approaches considered:**

1. **Full e-commerce with cart/checkout** — Rejected. Timber pricing fluctuates daily, quantities are large/custom, and the business model is relationship-based. E-commerce adds complexity without matching how this business operates.

2. **Minimal brochure site (5 pages)** — Rejected. Too few pages to compete in SEO. No content depth means no organic traffic growth over time.

3. **Lead-generation showcase with SEO content engine (CHOSEN)** — A 13+ page site with product showcases, an interactive material calculator, blog content targeting high-value keywords, and aggressive local SEO. Every page funnels to phone/WhatsApp. This matches the business model (call for rates, advance payment) while maximizing search visibility.

**Why Next.js:** Server-side rendering gives search engines fully rendered HTML (critical for SEO), excellent Core Web Vitals performance, image optimization built-in, and easy deployment on Vercel with global CDN.

## Key Decisions

- **Tech stack**: Next.js 14+ (App Router) with Tailwind CSS, deployed on Vercel
- **Pricing model**: No public prices — "Call for Today's Rates" with prominent phone/WhatsApp CTAs
- **Design direction**: Warm earth tones (#3B2314 dark wood, #8B6914 gold accent, #F5E6D3 cream), wood grain textures, professional typography — inspired by the Archi Carpenter reference design
- **Lead capture**: Floating WhatsApp button (all pages), sticky mobile call bar, inquiry forms on product pages, contact page with map
- **SEO-first architecture**: Every page built around target keywords, full schema markup, blog content strategy, material calculator as link magnet
- **Language**: English primary (Hindi content can be added later for broader reach)
- **No user accounts**: No login, no cart, no checkout — pure showcase + contact

## Site Map (13 Pages)

### Core Pages

| # | Page | URL | Primary Keywords | Purpose |
|---|------|-----|-----------------|---------|
| 1 | **Home** | `/` | timber merchant, building materials supplier, Lahore timber | Hero with 30-year trust badge, product category cards, stats counter, testimonials, WhatsApp CTA |
| 2 | **About Us** | `/about` | about lala g timber, timber merchant since 2026 | 30-year story, founder photo, warehouse photos, certifications, why choose us |
| 3 | **Contact** | `/contact` | timber supplier contact, Lahore timber store | Phone, WhatsApp, Google Maps embed, inquiry form, business hours, directions |

### Product Pages

| # | Page | URL | Primary Keywords | Purpose |
|---|------|-----|-----------------|---------|
| 4 | **Products Hub** | `/products` | construction materials, timber products | Visual category grid linking to each product category |
| 5 | **Timber** | `/products/timber` | construction timber, hardwood timber, softwood | Types of timber (teak, sal, deodar, pine), specs, uses, photo gallery |
| 6 | **Plywood** | `/products/plywood` | plywood supplier, marine plywood, BWR plywood, commercial plywood | All plywood types with grades, sizes, uses, comparison table |
| 7 | **Shuttering Material** | `/products/shuttering-material` | shuttering plywood, formwork material, centering plates | Shuttering ply, props, plates, accessories with specs |

### SEO & Content Pages

| # | Page | URL | Primary Keywords | Purpose |
|---|------|-----|-----------------|---------|
| 8 | **Blog** | `/blog` | timber guides, plywood tips, construction material guides | Content hub — article listing with categories |
| 9 | **Material Calculator** | `/calculator` | shuttering material calculator, plywood calculator, timber calculator | Interactive tool: input slab area/room size, get material estimates. Massive SEO magnet |
| 10 | **Price List** | `/price-list` | plywood price list, timber rates, shuttering material price | Product table with "Call for Today's Rates" — ranks for price-intent searches |
| 11 | **FAQs** | `/faqs` | plywood FAQ, timber buying guide, construction material questions | 20+ questions with FAQ schema markup for Google rich results |

### Trust & Service Pages

| # | Page | URL | Primary Keywords | Purpose |
|---|------|-----|-----------------|---------|
| 12 | **Projects Gallery** | `/projects` | timber supply projects, construction material delivery | Photos of material supplied to real sites — social proof |
| 13 | **Delivery Areas** | `/delivery` | timber delivery Lahore, plywood delivery, building material delivery | Map of service areas, delivery info, minimum order details |

## Design System

### Color Palette
- **Primary (Dark Wood)**: `#3B2314` — headers, navigation, footer
- **Primary Light**: `#5C3A1E` — hover states, secondary sections
- **Accent (Gold)**: `#8B6914` — CTAs, highlights, badges
- **Accent Light**: `#D4A843` — secondary accents, icons
- **Background**: `#FAFAF5` — main page background
- **Cream**: `#F5E6D3` — alternate section backgrounds
- **Text**: `#1A1A1A` — body copy
- **Text Muted**: `#6B6B6B` — secondary text

### Typography
- **Headings**: Playfair Display (serif) — classic, authoritative
- **Body**: Inter or DM Sans (sans-serif) — clean, readable
- **Accents**: Font weight and size variation, no decorative fonts

### UI Components
- Floating WhatsApp button (bottom-right, all pages)
- Sticky mobile bar (phone + WhatsApp, bottom of screen)
- "30+ Years of Trust" badge on homepage hero
- Wood grain texture overlays on dark sections
- Product cards with hover zoom effect
- Breadcrumb navigation on all inner pages
- "Call for Rates" badge on product cards instead of price

## SEO Architecture

### Schema Markup (on every relevant page)
- `LocalBusiness` — homepage (name, address, phone, hours, geo coordinates)
- `Organization` — homepage (logo, social profiles, founding date)
- `Product` — each product page (name, description, image, availability)
- `FAQPage` — FAQ page and product pages with Q&A sections
- `BreadcrumbList` — all inner pages
- `Article` — blog posts
- `HowTo` — tutorial blog posts
- `WebSite` — site-level with SearchAction for sitelinks search box

### Technical SEO
- Server-side rendered pages (Next.js SSR/SSG)
- Auto-generated XML sitemap (`next-sitemap`)
- Optimized `robots.txt`
- Canonical tags on all pages
- Open Graph + Twitter Card meta tags
- WebP/AVIF image optimization via Next.js Image component
- Lazy loading for below-fold images
- Preloaded critical fonts
- Core Web Vitals targets: LCP < 2.5s, INP < 200ms, CLS < 0.1

### Target Keywords by Page (Top 30)

**Commercial Intent (Product Pages):**
1. timber supplier Lahore
2. plywood supplier Lahore
3. construction timber
4. marine plywood
5. shuttering plywood
6. BWR plywood
7. commercial plywood
8. timber merchant near me
9. building materials supplier
10. shuttering material supplier
11. hardwood timber
12. softwood timber
13. MDF board
14. block board
15. plywood sheets 8x4

**Informational Intent (Blog Targets):**
16. types of plywood
17. marine vs commercial plywood
18. how to check plywood quality
19. shuttering material for slab
20. hardwood vs softwood
21. best wood for construction
22. plywood grades explained
23. how to calculate timber for house
24. BWR vs MR grade plywood
25. plywood thickness guide

**Local + Price Intent:**
26. plywood price list 2026
27. timber rates Lahore
28. plywood dealer Lahore
29. construction material shop near me
30. timber delivery Lahore

### Blog Content Plan (First 10 Articles)
1. "Complete Guide to Plywood Types, Grades & Uses"
2. "Marine Plywood vs Commercial Plywood: Which Do You Need?"
3. "Shuttering Material Calculator: How Much Do You Need for Your Slab?"
4. "How to Check Plywood Quality: 7 Tests Before You Buy"
5. "Hardwood vs Softwood: A Builder's Complete Guide"
6. "MDF vs Plywood vs Particle Board: Pros, Cons & Best Uses"
7. "Best Wood for Construction in India: Species Comparison"
8. "How to Calculate Wood Required for House Construction"
9. "BWR vs MR Grade Plywood: Understanding the Difference"
10. "Timber Storage Guide: How to Store Wood Without Damage"

## Material Calculator Spec

The interactive calculator is the single highest-value SEO feature. It will:

- **Input**: Project type (slab shuttering / room plywood / timber framing), dimensions (length x width x height)
- **Output**: Estimated quantities of materials needed (sheets of plywood, cubic feet of timber, number of props/plates)
- **CTA**: "Get exact rates — call us now" with phone/WhatsApp buttons below results
- **SEO value**: Targets "shuttering material calculator", "plywood calculator", "timber calculator" — high-intent keywords with few good tools ranking for them

## Lead Capture Touchpoints

Every page will have multiple conversion paths:

1. **Floating WhatsApp button** — always visible, bottom-right
2. **Sticky mobile bar** — phone + WhatsApp at screen bottom (mobile only)
3. **Header phone number** — click-to-call on mobile
4. **Product page CTAs** — "Call for Today's Rates" buttons on every product
5. **Calculator results** — "Get exact pricing" CTA after calculation
6. **Contact form** — name, phone, material needed, quantity (simple 4-field form)
7. **Price list page** — "Rates change daily — call for live pricing" with prominent phone/WhatsApp

## Business Details (Confirmed)

- **Store Name**: Lala G Timber Merchants
- **Address**: Shop #1, Timber Market, Ravi Road, Lahore, Punjab 54000, Pakistan
- **Phone / WhatsApp**: +92 303 087 7771
- **Domain**: lalagtimbermerchant.com
- **Photos**: Stock images initially (wood/timber themed), replaced with real photos later
- **Country**: Pakistan (local SEO targeting Lahore and surrounding areas)

## Resolved

- **Google Business Profile**: Exists — listed as "Lala G Timber Merchant" (optimize description, photos, and posts as part of SEO rollout)
- **Brands**: No specific brands — locally sourced / unbranded materials. No brand pages needed.

## Next Steps

1. **Run `/workflows:plan`** to create the detailed implementation plan with file structure, component breakdown, and build order
2. Set up Next.js project with Tailwind CSS
3. Build pages in order: Home > Products > Contact > About > Calculator > Blog > remaining pages
4. Deploy to Vercel
5. Set up Google Search Console + Analytics
6. Optimize Google Business Profile
7. Begin publishing blog content weekly
