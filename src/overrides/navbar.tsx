'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

// ── Pressfire palette — matches home-page.tsx ────────────────────────────────
const C = {
  red:         '#C40C0C',
  orange:      '#FF6500',
  burnt:       '#CC561E',
  gold:        '#F6CE71',
  dark:        '#1a0a00',
  soft:        '#fff7f0',
  softMid:     '#ffe8d6',
  border:      '#f5c9a0',
  body:        '#3d1a00',
  muted:       '#7a4a2a',
  white:       '#ffffff',
}

const navLinks = [
  { label: 'Home',        href: '/' },
  { label: 'Latest News', href: '/updates' },
  { label: 'About Us',    href: '/about' },
  { label: 'Contact',     href: '/contact' },
]

export function NavbarOverride() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: C.white,
        borderBottom: `1px solid ${C.border}`,
        boxShadow: `0 1px 16px rgba(196,12,12,0.07)`,
      }}
    >
      {/* top accent bar */}
      <div
        className="h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, ${C.red}, ${C.orange}, ${C.gold})` }}
      />

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        style={{ height: '80px' }}
      >
        {/* ── LOGO ─────────────────────────────────────────────────────── */}
        <Link href="/" className="flex shrink-0 items-center">
          <img
            src="/logo.png"
            alt={SITE_CONFIG.name}
            width={160}
            height={48}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* ── DESKTOP NAV ──────────────────────────────────────────────── */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ label, href }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className="rounded-full px-4 py-2.5 text-sm font-semibold transition-all"
                style={{
                  color:      isActive ? C.red      : C.body,
                  background: isActive ? C.softMid  : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color      = C.red
                    e.currentTarget.style.background = C.soft
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color      = C.body
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* ── RIGHT ACTIONS ─────────────────────────────────────────────── */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Search icon */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            style={{
              color:      C.muted,
              background: searchOpen ? C.softMid : 'transparent',
            }}
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          {/* Submit Release CTA */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all sm:inline-flex"
            style={{
              background: C.red,
              color:      C.white,
              boxShadow:  `0 4px 14px rgba(196,12,12,0.30)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C.burnt
              e.currentTarget.style.boxShadow  = `0 6px 20px rgba(196,12,12,0.42)`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = C.red
              e.currentTarget.style.boxShadow  = `0 4px 14px rgba(196,12,12,0.30)`
            }}
          >
            Submit Release
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden"
            style={{ color: C.dark }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* ── SEARCH BAR ───────────────────────────────────────────────────── */}
      {searchOpen && (
        <div
          className="border-t px-4 py-3 sm:px-6 lg:px-8"
          style={{ borderColor: C.border, background: C.soft }}
        >
          <form
            action="/search"
            method="get"
            className="mx-auto flex max-w-2xl items-center gap-3 rounded-full px-5 py-2.5"
            style={{
              background: C.white,
              border:     `1.5px solid ${C.border}`,
              boxShadow:  `0 2px 10px rgba(196,12,12,0.08)`,
            }}
          >
            <Search className="h-4 w-4 shrink-0" style={{ color: C.orange }} />
            <input
              name="q"
              type="text"
              placeholder="Search press releases..."
              autoFocus
              className="flex-1 bg-transparent text-sm outline-none"
              style={{ color: C.dark }}
            />
            <button
              type="submit"
              className="rounded-full px-4 py-1.5 text-xs font-bold"
              style={{ background: C.red, color: C.white }}
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* ── MOBILE MENU ──────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="border-t lg:hidden"
          style={{ borderColor: C.border, background: C.white }}
        >
          <div className="space-y-1 px-4 py-4">
            {navLinks.map(({ label, href }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors"
                  style={{
                    color:      isActive ? C.red     : C.body,
                    background: isActive ? C.softMid : 'transparent',
                  }}
                >
                  {label}
                </Link>
              )
            })}

            {/* gradient divider */}
            <div
              className="my-2 h-px w-full"
              style={{ background: `linear-gradient(90deg, ${C.border}, transparent)` }}
            />

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white"
              style={{ background: C.red }}
            >
              Submit Release
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

