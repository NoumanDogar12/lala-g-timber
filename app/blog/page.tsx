import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { BUSINESS } from '@/lib/constants'
import { blogPosts } from '@/data/blog-posts'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { BlogCard } from '@/components/ui/BlogCard'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = createMetadata({
  title: 'Blog — Timber, Plywood & Construction Guides',
  description:
    'Expert guides on timber types, plywood selection, shuttering material, construction tips, and building material pricing in Lahore.',
  path: '/blog',
})

export default function BlogPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BUSINESS.domain}/blog` },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumbs />

      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Insights</p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-wood mb-4">
              Timber &amp; Construction Blog
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Expert guides on timber selection, plywood types, shuttering material,
              and construction best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
