import Link from 'next/link'
import type { BlogPost } from '@/data/blog-posts'

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-xl border border-cream overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-40 bg-gradient-to-br from-wood/10 to-cream flex items-center justify-center">
        <span className="text-xs font-semibold text-wood/40 uppercase tracking-wider">
          {post.category}
        </span>
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
          <Link href={`/blog/${post.slug}`} className="hover:text-gold-dark transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-text-muted text-sm line-clamp-2 mb-3">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-wood hover:text-gold-dark transition-colors"
        >
          Read More &rarr;
        </Link>
      </div>
    </article>
  )
}
