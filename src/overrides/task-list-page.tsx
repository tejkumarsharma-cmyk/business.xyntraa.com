import Link from 'next/link'
import { Search, ArrowRight, Clock } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

// ── Pressfire palette ─────────────────────────────────────────────────────────
const C = {
  red:     '#C40C0C',
  orange:  '#FF6500',
  burnt:   '#CC561E',
  gold:    '#F6CE71',
  dark:    '#1a0a00',
  soft:    '#fff7f0',
  softMid: '#ffe8d6',
  border:  '#f5c9a0',
  body:    '#3d1a00',
  muted:   '#7a4a2a',
  white:   '#ffffff',
}

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full post for the complete update.'
  return value.length > 220 ? value.slice(0, 217).trimEnd() + '...' : value
}

function getCategory(post: any) {
  const c = (post?.content as any)?.category
  if (typeof c === 'string' && c.trim()) return c.trim()
  const tag = post?.tags?.find((t: string) => t && t !== 'mediaDistribution' && t !== 'article')
  return typeof tag === 'string' ? tag : 'Press Release'
}

export async function TaskListPageOverride(_: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: true })
  const recent = posts.slice(0, 6)

  return (
    <div className="min-h-screen" style={{ background: C.soft, color: C.dark }}>
      <NavbarShell />

      {/* ── PAGE HEADER ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.dark} 0%, ${C.red} 60%, ${C.burnt} 100%)`,
          minHeight: '200px',
        }}
      >
        {/* grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* gold top bar */}
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${C.gold}, ${C.orange}, ${C.red})` }} />

        <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ borderColor: `rgba(246,206,113,0.4)`, background: `rgba(246,206,113,0.12)`, color: C.gold }}
          >
            Press Releases
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: '#ffffff' }}>
            Latest Updates
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Stay informed with the latest press releases and media announcements
          </p>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <main className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">

        {/* ── ARTICLES ── */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              style={{ border: `1px solid ${C.border}` }}
            >
              <div className="p-7">
                {/* category + date row */}
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="rounded-full px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider"
                    style={{ background: C.softMid, color: C.orange }}
                  >
                    {getCategory(post)}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: C.muted }}>
                    <Clock className="h-3 w-3" />
                    {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                      month: 'long', day: 'numeric', year: 'numeric',
                    })}
                  </span>
                  {post.authorName && (
                    <span className="text-xs" style={{ color: C.muted }}>
                      by <span className="font-semibold">{post.authorName}</span>
                    </span>
                  )}
                </div>

                {/* title */}
                <h2
                  className="mt-4 text-xl font-extrabold leading-snug sm:text-2xl"
                  style={{ color: C.dark }}
                >
                  <Link
                    href={`/updates/${post.slug}`}
                    className="transition-colors hover:text-[#C40C0C]"
                    style={{ color: C.dark }}
                  >
                    {post.title}
                  </Link>
                </h2>

                {/* excerpt */}
                <p className="mt-3 text-sm leading-7" style={{ color: C.muted }}>
                  {excerpt(post.summary)}
                </p>

                {/* read more */}
                <div className="mt-5">
                  <Link
                    href={`/updates/${post.slug}`}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
                    style={{ background: C.red }}
                  >
                    Continue Reading
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {posts.length === 0 && (
            <div
              className="rounded-2xl p-12 text-center"
              style={{ background: C.white, border: `1px solid ${C.border}` }}
            >
              <p className="text-sm font-semibold" style={{ color: C.muted }}>No press releases found.</p>
            </div>
          )}
        </div>

        {/* ── SIDEBAR ── */}
        <aside className="space-y-6">

          {/* search */}
          <form
            action="/search"
            method="get"
            className="flex overflow-hidden rounded-xl"
            style={{ border: `1.5px solid ${C.border}`, background: C.white }}
          >
            <input
              name="q"
              type="text"
              placeholder="Search press releases..."
              className="flex-1 bg-transparent px-4 py-3 text-sm outline-none"
              style={{ color: C.dark }}
            />
            <button
              type="submit"
              className="flex items-center justify-center px-4 transition-opacity hover:opacity-80"
              style={{ background: C.red, color: C.white }}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          {/* recent releases */}
          <div
            className="rounded-2xl p-5"
            style={{ background: C.white, border: `1px solid ${C.border}` }}
          >
            <h2
              className="mb-4 text-xs font-extrabold uppercase tracking-widest"
              style={{ color: C.orange }}
            >
              Recent Releases
            </h2>
            <div className="space-y-4">
              {recent.map((post) => (
                <Link
                  key={post.id}
                  href={`/updates/${post.slug}`}
                  className="group flex items-start gap-3 border-b pb-4 last:border-b-0 last:pb-0"
                  style={{ borderColor: C.border }}
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: C.red }}
                  />
                  <p
                    className="line-clamp-2 text-sm leading-6 transition-colors group-hover:underline"
                    style={{ color: C.body }}
                  >
                    {post.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.red} 100%)` }}
          >
            <h3 className="text-base font-extrabold" style={{ color: '#ffffff' }}>Share Your News</h3>
            <p className="mt-2 text-xs leading-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Reach 15,000+ media outlets with your press release.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-opacity hover:opacity-90"
              style={{ background: C.gold, color: C.dark }}
            >
              Submit Release
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* categories */}
          <div
            className="rounded-2xl p-5"
            style={{ background: C.white, border: `1px solid ${C.border}` }}
          >
            <h2
              className="mb-4 text-xs font-extrabold uppercase tracking-widest"
              style={{ color: C.orange }}
            >
              Categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Business', 'Technology', 'Finance', 'Healthcare', 'Media', 'Startups'].map((cat) => (
                <span
                  key={cat}
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: C.softMid, color: C.burnt }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  )
}
