import Link from 'next/link'
import { ArrowRight, Globe2, Users, FileText, TrendingUp, Zap, Shield, CheckCircle2, Radio, BarChart3 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

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

const stats = [
  { label: 'Press Releases Published',  value: '50,000+',      icon: FileText  },
  { label: 'Media Outlets Reached',     value: '15,000+',      icon: Globe2    },
  { label: 'Businesses Covered',        value: '12,000+',      icon: Users     },
  { label: 'Countries Reached',         value: '150+',         icon: BarChart3 },
]

const values = [
  {
    icon: Zap,
    title: 'Speed & Accuracy',
    desc: 'Rapid distribution with precision targeting ensures your news reaches the right audience at the right time.',
  },
  {
    icon: Globe2,
    title: 'Global Network',
    desc: 'Our extensive media network spans continents, connecting business stories with audiences worldwide.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Impact',
    desc: 'Clear analytics and reporting give you full visibility into how your announcements perform.',
  },
  {
    icon: Shield,
    title: 'Trusted & Reliable',
    desc: 'Built on editorial integrity and security, every release is handled professionally and accurately.',
  },
]

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Editor-in-Chief',
    bio: 'Veteran business journalist with 18+ years covering Indian and global markets.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Head of Distribution',
    bio: 'Expert in media partnerships and multi-channel press release distribution across Asia.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Rahul Verma',
    role: 'Technology Lead',
    bio: 'Builds the infrastructure that powers fast, reliable news delivery at scale.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Client Success',
    bio: 'Helps businesses craft and distribute press releases that get picked up by top outlets.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: C.soft, color: C.dark }}>
      <NavbarShell />

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: '340px' }}
      >
        {/* bg image */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* red/orange overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(26,10,0,0.96) 0%, rgba(196,12,12,0.88) 55%, rgba(204,86,30,0.82) 100%)`,
          }}
        />
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

        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ borderColor: `rgba(246,206,113,0.4)`, background: `rgba(246,206,113,0.12)`, color: C.gold }}
          >
            <Radio className="h-3.5 w-3.5" />
            About Us
          </span>
          <h1
            className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: '#ffffff' }}
          >
            The Newsroom Behind{' '}
            <span style={{ color: C.gold }}>Business Xyntraa</span>
          </h1>
          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg"
            style={{ color: 'rgba(255,255,255,0.78)' }}
          >
            Business Xyntraa is an independent media-distribution newsroom dedicated to delivering
            accurate, timely press releases and business announcements to audiences across India and beyond.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-20" style={{ background: C.white }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1">
              <span
                className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: C.softMid, color: C.orange }}
              >
                Our Story
              </span>
              <h2
                className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
                style={{ color: C.dark }}
              >
                Built to give every business a voice in the media.
              </h2>
              <p className="mt-5 text-sm leading-8" style={{ color: C.muted }}>
                Business Xyntraa was founded with a single purpose — to make professional press release
                distribution accessible to every business, from early-stage startups to established
                enterprises. We saw that quality media coverage was often reserved for those with large
                PR budgets, and we set out to change that.
              </p>
              <p className="mt-4 text-sm leading-8" style={{ color: C.muted }}>
                Today, our platform connects thousands of businesses with journalists, editors, and
                media outlets across 150+ countries. Every announcement published on Business Xyntraa
                is handled with editorial care and distributed through a network built for reach and impact.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Independent editorial standards',
                  'Direct access to verified media contacts',
                  'Fast turnaround — most releases go live within hours',
                  'Coverage across print, digital, and broadcast',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: C.body }}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: C.orange }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full shrink-0 overflow-hidden rounded-3xl shadow-xl lg:w-[45%]" style={{ height: '400px' }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                alt="Business Xyntraa newsroom"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        className="py-16"
        style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.red} 60%, ${C.burnt} 100%)` }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label}>
                <Icon className="mx-auto h-7 w-7 mb-3" style={{ color: C.gold }} />
                <p className="text-4xl font-extrabold" style={{ color: C.gold }}>{value}</p>
                <p className="mt-2 text-sm font-semibold text-white">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-20" style={{ background: C.soft }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ background: C.softMid, color: C.orange }}
            >
              What We Do
            </span>
            <h2
              className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ color: C.dark }}
            >
              A full-service press release platform
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7" style={{ color: C.muted }}>
              From writing and editing to distribution and analytics — we handle every step of getting
              your news in front of the right people.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{ border: `1px solid ${C.border}` }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: C.softMid }}
                >
                  <Icon className="h-6 w-6" style={{ color: C.red }} />
                </div>
                <h3 className="text-base font-bold" style={{ color: C.dark }}>{title}</h3>
                <p className="mt-2 text-sm leading-7" style={{ color: C.muted }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-20" style={{ background: C.white }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="w-full shrink-0 overflow-hidden rounded-3xl shadow-xl lg:w-[45%]" style={{ height: '400px' }}>
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80"
                alt="Our mission"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <div>
                <span
                  className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                  style={{ background: C.softMid, color: C.burnt }}
                >
                  Our Mission
                </span>
              </div>
              <h2
                className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
                style={{ color: C.dark }}
              >
                Democratising media access for every business.
              </h2>
              <p className="mt-5 text-sm leading-8" style={{ color: C.muted }}>
                We believe every business — regardless of size or budget — deserves the opportunity
                to share its story with the world. Business Xyntraa exists to level the playing field,
                giving small businesses the same media reach that was once only available to large corporations.
              </p>
              <p className="mt-4 text-sm leading-8" style={{ color: C.muted }}>
                Our mission is to be the most trusted, accessible, and effective press release platform
                for businesses across India and the global market.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow transition hover:opacity-90"
                  style={{ background: C.red }}
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: C.soft }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ background: C.softMid, color: C.orange }}
            >
              Our Team
            </span>
            <h2
              className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ color: C.dark }}
            >
              The people behind Business Xyntraa
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7" style={{ color: C.muted }}>
              A dedicated team of journalists, media professionals, and technologists working to
              deliver your news to the world.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{ border: `1px solid ${C.border}` }}
              >
                <div
                  className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full"
                  style={{ border: `3px solid ${C.softMid}` }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-base font-bold" style={{ color: C.dark }}>{member.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider" style={{ color: C.red }}>{member.role}</p>
                <p className="mt-3 text-xs leading-6" style={{ color: C.muted }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: C.gold }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ color: C.dark }}
          >
            Ready to share your business story?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7" style={{ color: `rgba(26,10,0,0.65)` }}>
            Submit your press release today and reach thousands of journalists, editors, and
            media outlets through Business Xyntraa.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white shadow transition hover:opacity-90"
              style={{ background: C.red }}
            >
              Submit a Press Release
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-3.5 text-sm font-bold transition hover:bg-black/10"
              style={{ borderColor: C.dark, color: C.dark }}
            >
              Browse Latest News
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
