import Link from 'next/link'
import type { BlogPost } from '@/data/blog-posts'

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-2xl border border-cream-dark/30 overflow-hidden card-hover">
      <div className="relative h-40 bg-gradient-to-br from-wood-warm via-wood-light to-wood flex items-center justify-center overflow-hidden wood-texture">
        <span className="relative z-10 text-xs font-semibold text-cream/60 uppercase tracking-wider">
          {post.category}
        </span>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-50 z-10" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
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
        <h2 className="font-heading text-lg font-semibold text-wood mb-2 line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-gold transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-text-muted text-sm line-clamp-2 mb-3">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-wood hover:text-gold transition-colors inline-flex items-center gap-1.5"
        >
          Read More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
