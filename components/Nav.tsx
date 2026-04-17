'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from './Button'
import CopyEmailButton from './CopyEmailButton'

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
              'inline-flex items-center gap-2 text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-micro',
              useWhite
                ? 'text-white hover:text-white/80'
                : 'text-ink hover:text-ember'
            )}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 124 124"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0"
            >
              <rect
                width="124"
                height="124"
                rx="16"
                fill={useWhite ? '#FAFAF8' : '#0A0A0A'}
              />
              <g fill={useWhite ? '#1A1A1A' : '#F6CBB5'}>
                <path d="M16 93.8125C14.8954 93.8125 14 94.7079 14 95.8125V108C14 109.105 14.8954 110 16 110H42.5682C43.6727 110 44.5682 109.105 44.5682 108V95.8125C44.5682 94.7079 43.6727 93.8125 42.5682 93.8125H16Z" />
                <path d="M75.2833 72.1875C76.3879 72.1875 77.2833 71.2921 77.2833 70.1875V58C77.2833 56.8954 76.3879 56 75.2833 56H48.7152C47.6106 56 46.7152 56.8954 46.7152 58V70.1875C46.7152 71.2921 47.6106 72.1875 48.7152 72.1875H75.2833Z" />
                <path d="M81.4318 93.8125C80.3273 93.8125 79.4318 94.7079 79.4318 95.8125V108C79.4318 109.105 80.3273 110 81.4318 110H108C109.105 110 110 109.105 110 108V95.8125C110 94.7079 109.105 93.8125 108 93.8125H81.4318Z" />
                <path d="M58.9257 91.0928C60.0303 91.0928 60.9257 90.1974 60.9257 89.0928V76.9071C60.9257 75.8026 60.0303 74.9071 58.9257 74.9071H32.359C31.2544 74.9071 30.359 75.8026 30.359 76.9071V89.0928C30.359 90.1974 31.2544 91.0928 32.359 91.0928H58.9257Z" />
                <path d="M48.7152 93.8125C47.6106 93.8125 46.7152 94.7079 46.7152 95.8125V108C46.7152 109.105 47.6106 110 48.7152 110H75.2848C76.3893 110 77.2848 109.105 77.2848 108V95.8125C77.2848 94.7079 76.3893 93.8125 75.2848 93.8125H48.7152Z" />
                <path d="M91.6424 91.0928C92.7469 91.0928 93.6424 90.1974 93.6424 89.0928V76.9071C93.6424 75.8026 92.7469 74.9071 91.6424 74.9071H65.0728C63.9682 74.9071 63.0728 75.8026 63.0728 76.9071V89.0928C63.0728 90.1974 63.9682 91.0928 65.0728 91.0928H91.6424Z" />
              </g>
              <path
                d="M48.244 48V22.67H53.344L62.83 35.25H60.45L69.664 22.67H74.764V48H69.494V28.484L71.602 28.96L61.844 41.54H61.164L51.746 28.96L53.514 28.484V48H48.244Z"
                fill={useWhite ? '#1A1A1A' : '#FAEEE1'}
              />
            </svg>
            <span>Mason Brown</span>
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
            <CopyEmailButton
              variant={useWhite ? 'inverted' : 'primary'}
              size="sm"
              showIcon={false}
            >
              Get in touch
            </CopyEmailButton>
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
              className="inline-flex items-center gap-2 text-[15px] font-semibold tracking-[-0.01em] text-ink"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 124 124"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect width="124" height="124" rx="16" fill="#0A0A0A" />
                <g fill="#F6CBB5">
                  <path d="M16 93.8125C14.8954 93.8125 14 94.7079 14 95.8125V108C14 109.105 14.8954 110 16 110H42.5682C43.6727 110 44.5682 109.105 44.5682 108V95.8125C44.5682 94.7079 43.6727 93.8125 42.5682 93.8125H16Z" />
                  <path d="M75.2833 72.1875C76.3879 72.1875 77.2833 71.2921 77.2833 70.1875V58C77.2833 56.8954 76.3879 56 75.2833 56H48.7152C47.6106 56 46.7152 56.8954 46.7152 58V70.1875C46.7152 71.2921 47.6106 72.1875 48.7152 72.1875H75.2833Z" />
                  <path d="M81.4318 93.8125C80.3273 93.8125 79.4318 94.7079 79.4318 95.8125V108C79.4318 109.105 80.3273 110 81.4318 110H108C109.105 110 110 109.105 110 108V95.8125C110 94.7079 109.105 93.8125 108 93.8125H81.4318Z" />
                  <path d="M58.9257 91.0928C60.0303 91.0928 60.9257 90.1974 60.9257 89.0928V76.9071C60.9257 75.8026 60.0303 74.9071 58.9257 74.9071H32.359C31.2544 74.9071 30.359 75.8026 30.359 76.9071V89.0928C30.359 90.1974 31.2544 91.0928 32.359 91.0928H58.9257Z" />
                  <path d="M48.7152 93.8125C47.6106 93.8125 46.7152 94.7079 46.7152 95.8125V108C46.7152 109.105 47.6106 110 48.7152 110H75.2848C76.3893 110 77.2848 109.105 77.2848 108V95.8125C77.2848 94.7079 76.3893 93.8125 75.2848 93.8125H48.7152Z" />
                  <path d="M91.6424 91.0928C92.7469 91.0928 93.6424 90.1974 93.6424 89.0928V76.9071C93.6424 75.8026 92.7469 74.9071 91.6424 74.9071H65.0728C63.9682 74.9071 63.0728 75.8026 63.0728 76.9071V89.0928C63.0728 90.1974 63.9682 91.0928 65.0728 91.0928H91.6424Z" />
                </g>
                <path
                  d="M48.244 48V22.67H53.344L62.83 35.25H60.45L69.664 22.67H74.764V48H69.494V28.484L71.602 28.96L61.844 41.54H61.164L51.746 28.96L53.514 28.484V48H48.244Z"
                  fill="#FAEEE1"
                />
              </svg>
              <span>Mason Brown</span>
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
              <CopyEmailButton
                variant="primary"
                size="lg"
                className="w-full"
              >
                Get in touch
              </CopyEmailButton>
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
