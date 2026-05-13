import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Calendar, User, Tag, Search } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()

  const recent = (await fetchTaskPosts('mediaDistribution', 8, { fresh: true }))
    .filter((item) => item.slug !== slug)
    .slice(0, 5)

  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml(
    (content.body as string) || post.summary || '',
    'Post body will appear here.'
  )

  const category = (content.category as string) || 'Press Release'
  const author   = post.authorName || 'Editorial Desk'
  const dateStr  = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : ''

  return (
    <div className="min-h-screen bg-white text-[#1a0533]">
      {/* scoped styles — no event handlers needed */}
      <style>{`
        .tdp-nav-link:hover { color: #7c3aed !important; }
        .tdp-recent-link:hover p { color: #7c3aed !important; }
        .tdp-prev-next:hover { background: #faf5ff !important; }
        .tdp-prose h1,.tdp-prose h2,.tdp-prose h3,.tdp-prose h4 { color: #1a0533 !important; }
        .tdp-prose a { color: #7c3aed !important; }
        .tdp-prose p,.tdp-prose li { color: #374151 !important; }
      `}</style>

      <NavbarShell />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '260px' }}>
        {/* bg image */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* dark purple overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(26,5,51,0.94) 0%, rgba(59,7,100,0.89) 50%, rgba(76,29,149,0.86) 100%)',
          }}
        />
        {/* grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20">
          {/* category badge */}
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest"
            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.35)', color: '#f59e0b' }}
          >
            <Tag className="h-3 w-3" />
            {category}
          </span>

          {/* title */}
          <h1
            className="mx-auto mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: '#ffffff' }}
          >
            {post.title}
          </h1>

          {/* meta */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {dateStr && (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {dateStr}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              {author}
            </span>
          </div>

          {/* breadcrumb */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <Link href="/" className="tdp-nav-link transition" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</Link>
            <span>›</span>
            <Link href="/updates" className="tdp-nav-link transition" style={{ color: 'rgba(255,255,255,0.6)' }}>Updates</Link>
            <span>›</span>
            <span className="max-w-[260px] truncate" style={{ color: 'rgba(255,255,255,0.45)' }}>{post.title}</span>
          </div>
        </div>
      </section>

      {/* ── MAIN ── */}
      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px]">

        {/* ── ARTICLE ── */}
        <article>
          {/* summary callout */}
          {post.summary && (
            <div
              className="mb-8 rounded-2xl p-5 text-sm leading-7"
              style={{ background: '#f3e8ff', border: '1px solid #ddd6fe', color: '#374151' }}
            >
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-widest" style={{ color: '#7c3aed' }}>
                Summary
              </span>
              {post.summary}
            </div>
          )}

          {/* body */}
          <div className="tdp-prose prose prose-lg max-w-none">
            <RichContent html={html} />
          </div>

          {/* prev / next */}
          {recent.length >= 2 && (
            <div
              className="mt-12 grid overflow-hidden rounded-2xl md:grid-cols-2"
              style={{ border: '1px solid #ede9f6' }}
            >
              {recent.slice(0, 2).map((item, i) => (
                <Link
                  key={item.id}
                  href={`/updates/${item.slug}`}
                  className="tdp-prev-next block p-6 transition-colors"
                  style={{
                    background: '#ffffff',
                    borderRight: i === 0 ? '1px solid #ede9f6' : undefined,
                  }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#7c3aed' }}>
                    {i === 0 ? '← Previous' : 'Next →'}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6" style={{ color: '#1a0533' }}>
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </article>

        {/* ── SIDEBAR ── */}
        <aside className="space-y-6">
          {/* search */}
          <form
            action="/search"
            method="get"
            className="flex overflow-hidden rounded-xl"
            style={{ border: '1.5px solid #ddd6fe' }}
          >
            <input
              name="q"
              type="text"
              placeholder="Search press releases..."
              className="flex-1 bg-transparent px-4 py-3 text-sm outline-none"
              style={{ color: '#1a0533' }}
            />
            <button
              type="submit"
              className="flex items-center justify-center px-4 transition-opacity hover:opacity-80"
              style={{ background: '#7c3aed', color: '#ffffff' }}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          {/* recent releases */}
          <div className="rounded-2xl p-5" style={{ background: '#faf5ff', border: '1px solid #ede9f6' }}>
            <h2 className="mb-4 text-sm font-extrabold uppercase tracking-widest" style={{ color: '#1a0533' }}>
              Recent Releases
            </h2>
            <div className="space-y-4">
              {recent.map((item) => (
                <Link
                  key={item.id}
                  href={`/updates/${item.slug}`}
                  className="tdp-recent-link group flex items-start gap-3 border-b pb-4 last:border-b-0 last:pb-0"
                  style={{ borderColor: '#ddd6fe' }}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#7c3aed' }} />
                  <p className="line-clamp-2 text-sm leading-6 transition-colors" style={{ color: '#374151' }}>
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: 'linear-gradient(135deg, #1a0533 0%, #3b0764 100%)' }}
          >
            <h3 className="text-base font-extrabold" style={{ color: '#ffffff' }}>
              Share Your News
            </h3>
            <p className="mt-2 text-xs leading-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Reach 15,000+ media outlets with your press release.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-opacity hover:opacity-90"
              style={{ background: '#f59e0b', color: '#1a0533' }}
            >
              Submit Release
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  )
}

