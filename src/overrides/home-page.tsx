import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronDown, Star, Globe2, FileText, BarChart3, Users, Zap, Radio, TrendingUp, Award } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'

export const HOME_PAGE_OVERRIDE_ENABLED = true

// ─── Color palette ───────────────────────────────────────────────────────────
const C = {
  red:        '#C40C0C',
  orange:     '#FF6500',
  burnt:      '#CC561E',
  gold:       '#F6CE71',
  dark:       '#1a0a00',
  darkMid:    '#2d1200',
  soft:       '#fff7f0',
  softMid:    '#ffe8d6',
  softDeep:   '#ffd4b0',
  border:     '#f5c9a0',
  body:       '#3d1a00',
  muted:      '#7a4a2a',
  white:      '#ffffff',
}

// ─── helpers ─────────────────────────────────────────────────────────────────

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
    <details className="group border-b py-5 last:border-b-0" style={{ borderColor: C.border }}>
      <summary
        className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold [&::-webkit-details-marker]:hidden"
        style={{ color: C.dark }}
      >
        {q}
        <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" style={{ color: C.orange }} />
      </summary>
      <p className="mt-3 text-sm leading-7" style={{ color: C.muted }}>{a}</p>
    </details>
  )
}

function StarRating({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < n ? '' : 'opacity-20'}`}
          style={{ fill: i < n ? C.gold : '#ccc', color: i < n ? C.gold : '#ccc' }}
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
    <div className="min-h-screen bg-white" style={{ color: C.dark }}>
      <style>{`
        .hp-light h1,.hp-light h2,.hp-light h3,.hp-light h4 { color: ${C.dark} !important; }
        .hp-dark  h1,.hp-dark  h2,.hp-dark  h3,.hp-dark  h4 { color: #ffffff !important; }
        .hp-gold  h1,.hp-gold  h2,.hp-gold  h3,.hp-gold  h4 { color: ${C.dark} !important; }
      `}</style>

      <NavbarShell />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hp-dark relative overflow-hidden" style={{ minHeight: '540px' }}>
        {/* bg image */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* dark red/orange gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(26,10,0,0.96) 0%, rgba(196,12,12,0.88) 55%, rgba(204,86,30,0.82) 100%)`,
          }}
        />
        {/* subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* gold accent bar at top */}
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${C.gold}, ${C.orange}, ${C.red})` }} />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* left */}
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ borderColor: `rgba(246,206,113,0.45)`, background: `rgba(246,206,113,0.12)`, color: C.gold }}
              >
                <Radio className="h-3.5 w-3.5" />
                #1 Press Release Distribution
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl" style={{ color: '#ffffff' }}>
                Get your story in front of{' '}
                <span style={{ color: C.gold }}>millions</span> — instantly.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-8" style={{ color: 'rgba(255,255,255,0.78)' }}>
                {SITE_CONFIG.description} Reach thousands of journalists, bloggers, and media outlets with one click.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition hover:opacity-90"
                  style={{ background: C.gold, color: C.dark }}
                >
                  Submit Press Release
                  <ArrowRight className="h-4 w-4" />
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
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <Icon className="h-6 w-6" style={{ color: C.gold }} />
                  <p className="mt-3 text-2xl font-extrabold" style={{ color: '#ffffff' }}>{value}</p>
                  <p className="mt-1 text-xs font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ───────────────────────────────────────────────────── */}
      <section className="hp-light border-b py-10" style={{ background: C.soft, borderColor: C.border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
            Trusted by leading brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale">
            {['Forbes', 'Reuters', 'AP News', 'Bloomberg', 'TechCrunch', 'Business Wire'].map((name) => (
              <span key={name} className="text-lg font-black tracking-tight" style={{ color: C.dark }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ────────────────────────────────────────────────── */}
      <section className="hp-light py-20" style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ background: C.softMid, color: C.orange }}
            >
              Why choose us
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: C.dark }}>
              Everything you need to get noticed
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
                color: C.red,
                title: 'Instant Global Distribution',
                desc: 'Your press release reaches 15,000+ media outlets, news wires, and journalists across 100+ countries within hours.',
              },
              {
                img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
                color: C.orange,
                title: 'AI-Powered Targeting',
                desc: 'Our smart targeting engine matches your release to the most relevant journalists and publications for maximum pickup.',
              },
              {
                img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
                color: C.burnt,
                title: 'Real-Time Analytics',
                desc: 'Track views, pickups, and media mentions in real time with our comprehensive analytics dashboard.',
              },
            ].map(({ img, color, title, desc }) => (
              <div
                key={title}
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: C.border }}
              >
                <div className="relative h-48 overflow-hidden">
                  <ContentImage src={img} alt={title} fill className="object-cover transition group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: `${color}22` }} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold" style={{ color }}>{title}</h3>
                  <p className="mt-2 text-sm leading-7" style={{ color: C.muted }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ──────────────────────────────────────────────── */}
      <section className="hp-light py-20" style={{ background: C.soft }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span
                className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: C.softDeep, color: C.red }}
              >
                Who is this for?
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: C.dark }}>
                Built for every voice that deserves to be heard.
              </h2>
              <p className="mt-4 text-sm leading-8" style={{ color: C.muted }}>
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
                  <li key={item} className="flex items-center gap-3 text-sm font-medium" style={{ color: C.dark }}>
                    <CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: C.orange }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow transition hover:opacity-90"
                style={{ background: C.red }}
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-80 overflow-hidden rounded-3xl shadow-xl lg:h-[420px]">
              <ContentImage src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80" alt="Who is this for" fill className="object-cover" />
              <div className="absolute inset-0 rounded-3xl" style={{ background: `linear-gradient(to top right, rgba(196,12,12,0.25), transparent)` }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="hp-light py-20" style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-3xl shadow-xl lg:h-[420px]">
              <ContentImage src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80" alt="How it works" fill className="object-cover" />
              <div className="absolute inset-0 rounded-3xl" style={{ background: `linear-gradient(to bottom left, rgba(255,101,0,0.18), transparent)` }} />
            </div>
            <div>
              <span
                className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: C.softMid, color: C.burnt }}
              >
                Simple process
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: C.dark }}>
                Pick. Publish. Be Seen.
              </h2>
              <p className="mt-4 text-sm leading-8" style={{ color: C.muted }}>
                Three simple steps stand between you and global media coverage.
              </p>
              <ol className="mt-8 space-y-6">
                {[
                  { step: '01', color: C.red,    title: 'Write your release',    desc: 'Use our guided editor or paste your existing press release. Our AI checks for clarity and SEO.' },
                  { step: '02', color: C.orange,  title: 'Choose your audience',  desc: 'Select industries, regions, and outlet types. Preview your estimated reach before publishing.' },
                  { step: '03', color: C.burnt,   title: 'Publish & track',       desc: 'Hit publish and watch your story spread. Monitor pickups and impressions in real time.' },
                ].map(({ step, color, title, desc }) => (
                  <li key={step} className="flex gap-5">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white"
                      style={{ background: color }}
                    >
                      {step}
                    </span>
                    <div>
                      <h3 className="text-base font-bold" style={{ color: C.dark }}>{title}</h3>
                      <p className="mt-1 text-sm leading-7" style={{ color: C.muted }}>{desc}</p>
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
        style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.red} 60%, ${C.burnt} 100%)` }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              { value: '15,000+', label: 'Media Outlets Reached',   sub: 'Across 100+ countries' },
              { value: '250K+',   label: 'Releases Published',      sub: 'And counting' },
              { value: '98%',     label: 'Client Satisfaction',     sub: 'Verified feedback' },
            ].map(({ value, label, sub }) => (
              <div key={label}>
                <p className="text-4xl font-extrabold" style={{ color: C.gold }}>{value}</p>
                <p className="mt-2 text-base font-bold text-white">{label}</p>
                <p className="mt-1 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT RELEASES ──────────────────────────────────────────────── */}
      <section className="hp-light py-20" style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span
                className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: C.softMid, color: C.orange }}
              >
                Latest
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl" style={{ color: C.dark }}>
                Recent press releases
              </h2>
            </div>
            <Link href="/updates" className="flex items-center gap-1 text-sm font-bold hover:underline" style={{ color: C.red }}>
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {recentPosts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/updates/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: C.border }}
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
                    <span
                      className="inline-block rounded-full px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider"
                      style={{ background: C.softMid, color: C.orange }}
                    >
                      {getCategory(post)}
                    </span>
                    <h3 className="mt-2 line-clamp-2 text-base font-bold leading-snug group-hover:opacity-80" style={{ color: C.dark }}>
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm" style={{ color: C.muted }}>{excerpt(post.summary, 120)}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold" style={{ color: C.red }}>
                      Read more <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border bg-white shadow-sm" style={{ borderColor: C.border }}>
                  <div className="h-44" style={{ background: C.softMid }} />
                  <div className="p-5">
                    <div className="h-3 w-20 rounded" style={{ background: C.softDeep }} />
                    <div className="mt-3 h-4 w-full rounded" style={{ background: C.softMid }} />
                    <div className="mt-2 h-4 w-3/4 rounded" style={{ background: C.softMid }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ─────────────────────────────────────────────── */}
      <section className="hp-light py-20" style={{ background: C.soft }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ background: C.softDeep, color: C.red }}
            >
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: C.dark }}>
              What our clients say
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map(({ name, role, rating, text }) => (
              <div
                key={name}
                className="rounded-2xl border bg-white p-6 shadow-sm"
                style={{ borderColor: C.border }}
              >
                <StarRating n={rating} />
                <p className="mt-4 text-sm leading-7" style={{ color: C.muted }}>"{text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: C.red }}
                  >
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: C.dark }}>{name}</p>
                    <p className="text-xs" style={{ color: C.muted }}>{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="hp-light py-20" style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ background: C.softMid, color: C.orange }}
            >
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: C.dark }}>
              Frequently asked questions
            </h2>
          </div>
          <div className="rounded-2xl border bg-white px-6 shadow-sm" style={{ borderColor: C.border }}>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="hp-gold overflow-hidden" style={{ background: C.gold }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 py-16 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" style={{ color: C.dark }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: `rgba(26,10,0,0.6)` }}>
                  Be the First to Know
                </span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: C.dark }}>
                Ready to share your story with the world?
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7" style={{ color: `rgba(26,10,0,0.65)` }}>
                Join thousands of companies that trust {SITE_CONFIG.name} for professional press release distribution. Start for free today.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow transition hover:opacity-90"
                  style={{ background: C.red }}
                >
                  Submit a Press Release
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-bold transition hover:bg-black/10"
                  style={{ borderColor: C.dark, color: C.dark }}
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

      <Footer />
    </div>
  )
}
