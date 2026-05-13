'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

// ── exact same palette as home-page.tsx ──────────────────────────────────────
const C = {
  navy:        '#1a0533',   // dark headings / hero bg
  purple:      '#7c3aed',   // primary accent — badges, active links, CTA
  purpleHover: '#6d28d9',   // CTA hover
  purpleSoft:  '#f3e8ff',   // light badge / active bg
  purpleMid:   '#ede9fe',   // slightly deeper soft bg
  purpleBorder:'#ddd6fe',   // border
  gold:        '#f59e0b',   // hero CTA / highlight
  pageBg:      '#faf5ff',   // section bg (trusted-by, who-is-this-for, reviews)
  bodyText:    '#374151',   // nav link idle
  mutedText:   '#6b7280',   // subtitles
  white:       '#ffffff',
  border:      '#ede9f6',   // navbar bottom border
}

const navLinks = [
  { label: 'Home',        href: '/' },
  { label: 'Latest News', href: '/updates' },
  { label: 'Pricing',     href: '/pricing' },
  { label: 'About Us',    href: '/about' },
  { label: 'Contact',     href: '/contact' },
]

export function NavbarOverride() {
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [searchOpen,  setSearchOpen]  = useState(false)
  const pathname = usePathname()

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: C.white,
        borderBottom: `1px solid ${C.border}`,
        boxShadow: `0 1px 16px rgba(124,58,237,0.07)`,
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        style={{ height: '84px' }}
      >

        {/* ── LOGO ─────────────────────────────────────────────────────── */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="min-w-0">
            <span
              className="block truncate text-[18px] font-extrabold leading-tight tracking-tight"
              style={{ color: C.navy }}
            >
              {SITE_CONFIG.name}
            </span>
            <span
              className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: C.purple }}
            >
              Media Press Release
            </span>
          </div>
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
                  color:      isActive ? C.purple    : C.bodyText,
                  background: isActive ? C.purpleSoft : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color      = C.purple
                    e.currentTarget.style.background = C.pageBg
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color      = C.bodyText
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
              color:      C.mutedText,
              background: searchOpen ? C.purpleSoft : 'transparent',
            }}
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          {/* Submit Release — purple pill, gold shadow accent */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all sm:inline-flex"
            style={{
              background:  C.purple,
              color:       C.white,
              boxShadow:   `0 4px 14px rgba(124,58,237,0.32)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C.purpleHover
              e.currentTarget.style.boxShadow  = `0 6px 20px rgba(124,58,237,0.44)`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = C.purple
              e.currentTarget.style.boxShadow  = `0 4px 14px rgba(124,58,237,0.32)`
            }}
          >
            Submit Release
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden"
            style={{ color: C.navy }}
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
          style={{ borderColor: C.border, background: C.pageBg }}
        >
          <form
            action="/search"
            method="get"
            className="mx-auto flex max-w-2xl items-center gap-3 rounded-full px-5 py-2.5"
            style={{
              background:  C.white,
              border:      `1.5px solid ${C.purpleBorder}`,
              boxShadow:   `0 2px 10px rgba(124,58,237,0.09)`,
            }}
          >
            <Search className="h-4 w-4 shrink-0" style={{ color: C.purple }} />
            <input
              name="q"
              type="text"
              placeholder="Search press releases..."
              autoFocus
              className="flex-1 bg-transparent text-sm outline-none"
              style={{ color: C.navy }}
            />
            <button
              type="submit"
              className="rounded-full px-4 py-1.5 text-xs font-bold transition-colors"
              style={{ background: C.purple, color: C.white }}
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
                    color:      isActive ? C.purple    : C.bodyText,
                    background: isActive ? C.purpleSoft : 'transparent',
                  }}
                >
                  {label}
                </Link>
              )
            })}

            {/* Gold-accented divider */}
            <div
              className="my-2 h-px w-full"
              style={{ background: `linear-gradient(90deg, ${C.purpleBorder}, transparent)` }}
            />

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold"
              style={{ background: C.purple, color: C.white }}
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

