import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { BUSINESS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = createMetadata({
  title: 'Our Projects — Timber & Construction Work in Lahore',
  description:
    'View projects completed using timber, plywood, and shuttering material from Lala G Timber Merchants. Residential, commercial, and industrial projects in Lahore.',
  path: '/projects',
})

const projects = [
  {
    title: 'Residential Villa — DHA Phase 6',
    description: 'Complete timber supply for a 10-marla villa including Deodar roof framing, Teak door frames, and marine plywood for kitchen and bathrooms.',
    materials: ['Deodar Timber', 'Teak Wood', 'Marine Plywood'],
    type: 'Residential',
  },
  {
    title: 'Commercial Plaza — Gulberg',
    description: 'Shuttering material supply for a 5-story commercial building. Shuttering plywood, steel props, and centering plates for all floors.',
    materials: ['Shuttering Plywood', 'Steel Props', 'Centering Plates'],
    type: 'Commercial',
  },
  {
    title: 'Furniture Workshop — Johar Town',
    description: 'Bulk supply of Sheesham and Teak timber for a premium furniture workshop. Regular monthly deliveries of A-grade furniture timber.',
    materials: ['Sheesham', 'Teak', 'BWR Plywood'],
    type: 'Furniture',
  },
  {
    title: 'School Building — Model Town',
    description: 'Complete timber and plywood package for a new school wing. Pine timber framing, commercial plywood for classrooms, and shuttering for the foundation.',
    materials: ['Pine Timber', 'Commercial Plywood', 'Shuttering Material'],
    type: 'Institutional',
  },
  {
    title: 'Warehouse Construction — Kot Lakhpat',
    description: 'Heavy-duty Sal timber beams and Deodar trusses for an industrial warehouse. Including all shuttering material for the concrete base.',
    materials: ['Sal Timber', 'Deodar', 'Shuttering Plywood'],
    type: 'Industrial',
  },
  {
    title: 'Interior Renovation — Cantt',
    description: 'Premium Teak paneling, marine plywood cabinets, and Block Board partitions for a home renovation project in Lahore Cantt.',
    materials: ['Teak', 'Marine Plywood', 'Block Board'],
    type: 'Residential',
  },
]

export default function ProjectsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${BUSINESS.domain}/projects` },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumbs />

      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-wood mb-4">
              Our Projects
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              A selection of projects we&apos;ve supplied materials for across Lahore — from
              residential homes to commercial plazas and industrial warehouses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-xl border border-black/[0.06] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-40 bg-gradient-to-br from-wood via-wood-light to-wood-medium flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 200 200" className="w-full h-full text-cream">
                      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
                      <circle cx="100" cy="100" r="35" fill="none" stroke="currentColor" strokeWidth="0.75" />
                    </svg>
                  </div>
                  <span className="relative text-xs font-semibold text-cream/50 uppercase tracking-wider">
                    {project.type}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-light to-transparent opacity-50" />
                </div>
                <div className="p-5">
                  <h2 className="font-heading text-lg font-semibold text-wood mb-2">
                    {project.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.map((material) => (
                      <span key={material} className="text-xs bg-bg text-text-muted px-2 py-0.5 rounded-full border border-black/[0.04]">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
