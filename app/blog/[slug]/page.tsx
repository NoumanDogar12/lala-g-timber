import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog-posts'
import { BUSINESS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${BUSINESS.domain}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BUSINESS.domain}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BUSINESS.domain}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BUSINESS.domain}/blog/${post.slug}` },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: BUSINESS.name },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: BUSINESS.domain,
    },
  }

  // Simple markdown-like rendering for paragraphs and headings
  const paragraphs = post.content.split('\n\n').filter(Boolean)

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <Breadcrumbs />

      <article className="py-12 lg:py-16 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-text-muted mb-3">
              <span className="bg-bg text-wood px-2.5 py-0.5 rounded-full text-xs font-medium border border-black/[0.04]">
                {post.category}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-wood leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Content */}
          <div className="space-y-4">
            {paragraphs.map((paragraph, i) => {
              const trimmed = paragraph.trim()

              if (trimmed.startsWith('## ')) {
                return (
                  <h2 key={i} className="font-heading text-2xl font-semibold text-wood mt-8 mb-3">
                    {trimmed.replace('## ', '')}
                  </h2>
                )
              }
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={i} className="font-heading text-xl font-semibold text-wood mt-6 mb-2">
                    {trimmed.replace('### ', '')}
                  </h3>
                )
              }
              if (trimmed.startsWith('| ')) {
                const rows = trimmed.split('\n').filter((r) => !r.startsWith('|--'))
                const headers = rows[0]?.split('|').filter(Boolean).map((h) => h.trim()) || []
                const dataRows = rows.slice(1)

                return (
                  <div key={i} className="overflow-x-auto my-4">
                    <table className="w-full text-sm border-collapse border border-black/[0.06] rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-wood text-white">
                          {headers.map((h) => (
                            <th key={h} className="text-left px-4 py-2 font-medium">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataRows.map((row, ri) => (
                          <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-cream/30'}>
                            {row.split('|').filter(Boolean).map((cell, ci) => (
                              <td key={ci} className="px-4 py-2 text-text-muted">{cell.trim()}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              }
              if (trimmed.startsWith('- **') || trimmed.startsWith('- ')) {
                const items = trimmed.split('\n').filter(Boolean)
                return (
                  <ul key={i} className="space-y-1.5 my-3">
                    {items.map((item, j) => (
                      <li key={j} className="text-text-muted text-sm leading-relaxed flex gap-2">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                        <span dangerouslySetInnerHTML={{
                          __html: item
                            .replace(/^- /, '')
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-wood">$1</strong>')
                        }} />
                      </li>
                    ))}
                  </ul>
                )
              }
              if (/^\d+\./.test(trimmed)) {
                const items = trimmed.split('\n').filter(Boolean)
                return (
                  <ol key={i} className="space-y-1.5 my-3 list-decimal list-inside">
                    {items.map((item, j) => (
                      <li key={j} className="text-text-muted text-sm leading-relaxed">
                        <span dangerouslySetInnerHTML={{
                          __html: item
                            .replace(/^\d+\.\s*/, '')
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-wood">$1</strong>')
                        }} />
                      </li>
                    ))}
                  </ol>
                )
              }

              return (
                <p key={i} className="text-text-muted leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-wood">$1</strong>')
                  }}
                />
              )
            })}
          </div>
        </div>
      </article>

      <CTASection />
    </>
  )
}
