import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronDown, Star, Globe2, FileText, BarChart3, Users, Zap } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'

export const HOME_PAGE_OVERRIDE_ENABLED = true

// ─── helpers ────────────────────────────────────────────────────────────────

function excerpt(text?: string | null, max = 160) {
  const v = (text || '').trim()
  if (!v) return 'Read the full release for the complete announcement.'
  return v.length > max ? v.slice(0, max - 3).trimEnd() + '...' : v
}

function getPostImage(post: any) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((m: any) => typeof m?.url === 'string' && m.url)?.url
  const contentImages =
    post?.content && typeof post.content === 'object' && Array.isArray((post.content as any).images)
      ? (post.content as any).images.find((u: unknown) => typeof u === 'string' && u)
      : null
  return mediaUrl || contentImages || '/placeholder.jpg'
}

function getCategory(post: any) {
  const c = (post?.content as any)?.category
  if (typeof c === 'string' && c.trim()) return c.trim()
  const tag = post?.tags?.find((t: string) => t && t !== 'mediaDistribution' && t !== 'article')
  return typeof tag === 'string' ? tag : 'Press Release'
}

// ─── FAQ data ────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'How quickly will my press release be distributed?',
    a: 'Most press releases are distributed within 1–2 hours of submission and approval. Urgent distributions can be expedited upon request.',
  },
  {
    q: 'Can I target specific industries or regions?',
    a: 'Yes. Our platform lets you target by industry vertical, geographic region, and media type so your news reaches the most relevant journalists.',
  },
  {
    q: 'What formats are accepted for press releases?',
    a: 'We accept plain text, Word documents, and HTML. Our editorial team will format your release to meet industry standards before distribution.',
  },
  {
    q: 'Will my press release appear on Google News?',
    a: 'Releases distributed through our network are eligible for Google News indexing via our partner publications.',
  },
]

// ─── sub-components ──────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-[#e8e0f0] py-5 last:border-b-0">
      <summary
        className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold [&::-webkit-details-marker]:hidden"
        style={{ color: '#1a0533' }}
      >
        {q}
        <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" style={{ color: '#7c3aed' }} />
      </summary>
      <p className="mt-3 text-sm leading-7" style={{ color: '#4b5563' }}>{a}</p>
    </details>
  )
}

function StarRating({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < n ? 'fill-[#f59e0b] text-[#f59e0b]' : 'fill-gray-200 text-gray-200'}`}
        />
      ))}
    </div>
  )
}

// ─── main export ─────────────────────────────────────────────────────────────

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 16, { fresh: true })
  const recentPosts = posts.slice(0, 6)

  const reviews = [
    { name: 'Sarah M.', role: 'PR Manager', rating: 5, text: 'Our press release reached over 200 outlets within hours. The targeting options are exceptional.' },
    { name: 'James T.', role: 'Startup Founder', rating: 5, text: 'Best PR distribution platform I have used. Simple, fast, and the results speak for themselves.' },
    { name: 'Priya K.', role: 'Communications Lead', rating: 4, text: 'Great reach and solid analytics. The editorial team helped polish our release before sending.' },
    { name: 'Carlos R.', role: 'Marketing Director', rating: 5, text: 'We saw a 3× increase in media pickups compared to our previous provider. Highly recommended.' },
    { name: 'Aisha N.', role: 'Brand Strategist', rating: 5, text: 'The dashboard is intuitive and the distribution network is genuinely impressive.' },
    { name: 'Tom W.', role: 'Agency Owner', rating: 4, text: 'Reliable, affordable, and the customer support team is always responsive. A solid choice.' },
  ]

  return (
    <div className="min-h-screen bg-white" style={{ color: '#1a0533' }}>
      {/* Scoped CSS: only reset headings that are NOT in the hero dark section */}
      <style>{`
        .hp-override .hp-light h1,
        .hp-override .hp-light h2,
        .hp-override .hp-light h3,
        .hp-override .hp-light h4 {
          color: #1a0533 !important;
          font-family: inherit !important;
        }
        .hp-override .hp-dark h1,
        .hp-override .hp-dark h2,
        .hp-override .hp-dark h3,
        .hp-override .hp-dark h4 {
          color: #ffffff !important;
          font-family: inherit !important;
        }
        .hp-override .hp-amber h1,
        .hp-override .hp-amber h2,
        .hp-override .hp-amber h3,
        .hp-override .hp-amber h4 {
          color: #1a0533 !important;
          font-family: inherit !important;
        }
      `}</style>
      <div className="hp-override">
      <NavbarShell />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="hp-dark relative overflow-hidden"
        style={{ minHeight: '520px' }}
      >
        {/* Background image */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark purple gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(26,5,51,0.93) 0%, rgba(59,7,100,0.88) 50%, rgba(76,29,149,0.85) 100%)',
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* left */}
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
                style={{ borderColor: 'rgba(245,158,11,0.4)', background: 'rgba(245,158,11,0.12)', color: '#fcd34d' }}
              >
                #1 Press Release Distribution
              </span>
              <h1
                className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              >
                Get your story in front of{' '}
                <span style={{ color: '#f59e0b' }}>millions</span> — instantly.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-8" style={{ color: 'rgba(255,255,255,0.78)' }}>
                {SITE_CONFIG.description} Reach thousands of journalists, bloggers, and media outlets with one click.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition hover:opacity-90"
                  style={{ background: '#f59e0b', color: '#1a0533' }}
                >
                  Submit Press Release
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition"
                  style={{ border: '1.5px solid rgba(255,255,255,0.35)', color: '#ffffff', background: 'transparent' }}
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* right — stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Media Outlets', value: '15,000+', icon: Globe2 },
                { label: 'Press Releases Sent', value: '250,000+', icon: FileText },
                { label: 'Avg. Impressions', value: '2.5M', icon: BarChart3 },
                { label: 'Happy Clients', value: '8,500+', icon: Users },
              ].map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl p-5 backdrop-blur-sm"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <Icon className="h-6 w-6" style={{ color: '#f59e0b' }} />
                  <p className="mt-3 text-2xl font-extrabold" style={{ color: '#ffffff' }}>{value}</p>
                  <p className="mt-1 text-xs font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ───────────────────────────────────────────────────── */}
      <section className="hp-light border-b border-[#f3e8ff] bg-[#faf5ff] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
            Trusted by leading brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale">
            {['Forbes', 'Reuters', 'AP News', 'Bloomberg', 'TechCrunch', 'Business Wire'].map((name) => (
              <span key={name} className="text-lg font-black tracking-tight text-[#1a0533]">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ────────────────────────────────────────────────── */}
      <section className="hp-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-[#f3e8ff] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
              Why choose us
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: '#1a0533' }}>
              Everything you need to get noticed
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
                color: '#7c3aed',
                title: 'Instant Global Distribution',
                desc: 'Your press release reaches 15,000+ media outlets, news wires, and journalists across 100+ countries within hours.',
              },
              {
                img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
                color: '#0ea5e9',
                title: 'AI-Powered Targeting',
                desc: 'Our smart targeting engine matches your release to the most relevant journalists and publications for maximum pickup.',
              },
              {
                img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
                color: '#10b981',
                title: 'Real-Time Analytics',
                desc: 'Track views, pickups, and media mentions in real time with our comprehensive analytics dashboard.',
              },
            ].map(({ img, color, title, desc }) => (
              <div
                key={title}
                className="group overflow-hidden rounded-2xl border border-[#f3e8ff] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <ContentImage src={img} alt={title} fill className="object-cover transition group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: `${color}22` }} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold" style={{ color }}>
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#4b5563]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ──────────────────────────────────────────────── */}
      <section className="hp-light bg-[#faf5ff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-[#ede9fe] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
                Who is this for?
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: '#1a0533' }}>
                Built for every voice that deserves to be heard.
              </h2>
              <p className="mt-4 text-sm leading-8 text-[#4b5563]">
                Whether you are a startup announcing your first product, an enterprise managing global communications, or a PR agency handling multiple clients — our platform scales with you.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Startups & entrepreneurs',
                  'PR agencies & consultants',
                  'Enterprise communications teams',
                  'Non-profits & NGOs',
                  'Government & public sector',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-[#1a0533]">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#7c3aed]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7c3aed] px-7 py-3.5 text-sm font-bold text-white shadow transition hover:bg-[#6d28d9]"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-80 overflow-hidden rounded-3xl shadow-xl lg:h-[420px]">
              <ContentImage src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80" alt="Who is this for" fill className="object-cover" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#4c1d95]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="hp-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-3xl shadow-xl lg:h-[420px]">
              <ContentImage src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80" alt="How it works" fill className="object-cover" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-bl from-[#0ea5e9]/20 to-transparent" />
            </div>
            <div>
              <span className="inline-block rounded-full bg-[#e0f2fe] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0284c7]">
                Simple process
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: '#1a0533' }}>
                Pick. Publish. Be Seen.
              </h2>
              <p className="mt-4 text-sm leading-8 text-[#4b5563]">
                Three simple steps stand between you and global media coverage.
              </p>
              <ol className="mt-8 space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Write your release',
                    desc: 'Use our guided editor or paste your existing press release. Our AI checks for clarity and SEO.',
                  },
                  {
                    step: '02',
                    title: 'Choose your audience',
                    desc: 'Select industries, regions, and outlet types. Preview your estimated reach before publishing.',
                  },
                  {
                    step: '03',
                    title: 'Publish & track',
                    desc: 'Hit publish and watch your story spread. Monitor pickups and impressions in real time.',
                  },
                ].map(({ step, title, desc }) => (
                  <li key={step} className="flex gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7c3aed] text-sm font-extrabold text-white">
                      {step}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#1a0533]">{title}</h3>
                      <p className="mt-1 text-sm leading-7 text-[#4b5563]">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section
        className="hp-dark py-14"
        style={{ background: 'linear-gradient(135deg, #1a0533 0%, #3b0764 100%)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              { value: '15,000+', label: 'A/PR Coverage', sub: 'Media outlets reached' },
              { value: '250K+', label: 'Releases Published', sub: 'And counting' },
              { value: '98%', label: 'Verified Feedback', sub: 'Client satisfaction rate' },
            ].map(({ value, label, sub }) => (
              <div key={label}>
                <p className="text-4xl font-extrabold" style={{ color: '#f59e0b' }}>{value}</p>
                <p className="mt-2 text-base font-bold" style={{ color: '#ffffff' }}>{label}</p>
                <p className="mt-1 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT RELEASES ──────────────────────────────────────────────── */}
      <section className="hp-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-[#f3e8ff] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
                Latest
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl" style={{ color: '#1a0533' }}>
                Insights from recent releases
              </h2>
            </div>
            <Link href="/updates" className="flex items-center gap-1 text-sm font-semibold text-[#7c3aed] hover:underline">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {recentPosts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/updates/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border border-[#f3e8ff] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-44 overflow-hidden">
                    <ContentImage
                      src={getPostImage(post)}
                      alt={post.title}
                      fill
                      className="object-cover transition group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block rounded-full bg-[#f3e8ff] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#7c3aed]">
                      {getCategory(post)}
                    </span>
                    <h3 className="mt-2 line-clamp-2 text-base font-bold text-[#1a0533] group-hover:text-[#7c3aed]">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-[#6b7280]">{excerpt(post.summary, 120)}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#7c3aed]">
                      Read more <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-[#f3e8ff] bg-white shadow-sm">
                  <div className="h-44 bg-[#f3e8ff]" />
                  <div className="p-5">
                    <div className="h-3 w-20 rounded bg-[#ede9fe]" />
                    <div className="mt-3 h-4 w-full rounded bg-[#f3e8ff]" />
                    <div className="mt-2 h-4 w-3/4 rounded bg-[#f3e8ff]" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ─────────────────────────────────────────────── */}
      <section className="hp-light bg-[#faf5ff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-[#ede9fe] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: '#1a0533' }}>
              Customer Reviews
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map(({ name, role, rating, text }) => (
              <div
                key={name}
                className="rounded-2xl border border-[#f3e8ff] bg-white p-6 shadow-sm"
              >
                <StarRating n={rating} />
                <p className="mt-4 text-sm leading-7 text-[#4b5563]">"{text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7c3aed] text-sm font-bold text-white">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1a0533]">{name}</p>
                    <p className="text-xs text-[#6b7280]">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="hp-light py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-[#f3e8ff] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: '#1a0533' }}>
              Frequently asked questions
            </h2>
          </div>
          <div className="divide-y divide-[#f3e8ff] rounded-2xl border border-[#f3e8ff] bg-white px-6 shadow-sm">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="hp-amber overflow-hidden bg-[#f59e0b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 py-16 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" style={{ color: '#1a0533' }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(26,5,51,0.65)' }}>
                  Be the First to Know
                </span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: '#1a0533' }}>
                Ready to share your story with the world?
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7" style={{ color: 'rgba(26,5,51,0.65)' }}>
                Join thousands of companies that trust {SITE_CONFIG.name} for professional press release distribution. Start for free today.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1a0533] px-7 py-3.5 text-sm font-bold text-white shadow transition hover:bg-[#3b0764]"
                >
                  Submit a Press Release
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#1a0533] px-7 py-3.5 text-sm font-bold text-[#1a0533] transition hover:bg-[#1a0533] hover:text-white"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
            <div className="relative hidden h-64 w-72 overflow-hidden rounded-3xl shadow-2xl lg:block">
              <ContentImage src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=700&q=80" alt="Get started" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      </div>{/* end hp-override */}
      <Footer />
    </div>
  )
}

