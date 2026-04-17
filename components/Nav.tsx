'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from './Button'

const links = [
  { label: 'Work', href: '/work' },
  { label: 'Build', href: '/build' },
  { label: 'About', href: '/about' },
]

// Sub-pages of /work and /build render over dark gradient heroes.
// Flip nav text to white until it frosts on scroll.
const DARK_HERO_RE = /^\/(work|build)\/[^/]+$/

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const onDarkHero = DARK_HERO_RE.test(pathname || '')
  const useWhite = onDarkHero && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Close mobile menu on escape
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <>
      {/* Skip to main — accessibility floor */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-white focus:px-4 focus:py-2 focus:rounded-sm"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-standard ease-natural',
          scrolled
            ? 'bg-white/75 backdrop-blur-md border-b border-neutral-200'
            : 'bg-transparent border-b border-transparent'
        )}
        style={{ height: 'var(--nav-height)' }}
      >
        <div className="mx-auto max-w-wide px-6 sm:px-10 lg:px-16 h-full flex items-center justify-between gap-8">
          {/* Wordmark */}
          <Link
            href="/"
            className={cn(
              'text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-micro',
              useWhite
                ? 'text-white hover:text-white/80'
                : 'text-ink hover:text-ember'
            )}
          >
            Mason Brown
          </Link>

          {/* Desktop links */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-1"
          >
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={cn(
                  'text-[14px] font-medium transition-colors duration-micro px-3 py-2 rounded-sm',
                  useWhite
                    ? 'text-white/80 hover:text-white'
                    : 'text-neutral-600 hover:text-ink'
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'text-[14px] font-medium transition-colors duration-micro px-3 py-2 link-underline',
                useWhite
                  ? 'text-white/80 hover:text-white'
                  : 'text-neutral-600 hover:text-ink'
              )}
            >
              Resume
            </a>
            {useWhite ? (
              <a
                href="mailto:masonbrown1296@gmail.com"
                className="inline-flex items-center justify-center h-9 px-4 text-[13px] font-medium rounded-sm bg-white text-ink hover:bg-white/90 transition-[background-color] duration-micro ease-natural"
              >
                Get in touch
              </a>
            ) : (
              <Button
                href="mailto:masonbrown1296@gmail.com"
                variant="primary"
                size="sm"
              >
                Get in touch
              </Button>
            )}
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            className={cn(
              'md:hidden p-2 -mr-2',
              useWhite ? 'text-white' : 'text-ink'
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-white flex flex-col animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between h-[var(--nav-height)] px-6 border-b border-neutral-200">
            <Link
              href="/"
              className="text-[15px] font-semibold tracking-[-0.01em] text-ink"
              onClick={() => setMobileOpen(false)}
            >
              Mason Brown
            </Link>
            <button
              type="button"
              className="text-ink p-2 -mr-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.75} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-between px-6 py-10">
            <nav aria-label="Mobile primary" className="flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-display-sm-fluid text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <Button
                href="mailto:masonbrown1296@gmail.com"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Get in touch
              </Button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-[15px] font-medium text-neutral-600 py-3"
              >
                Download resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
