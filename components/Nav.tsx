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

/**
 * MB wordmark tile used in the nav. Inline SVG so color state swaps
 * without a network hit. When `useWhite` is true (dark hero, pre-scroll),
 * the mark inverts to a light tile with dark interior so it reads against
 * the gradient.
 */
function MasonMark({ useWhite, idSuffix }: { useWhite: boolean; idSuffix: string }) {
  const clipId = `mason-mark-clip-${idSuffix}`
  // Dark variant mirrors the brand asset. Inverted variant preserves the
  // dark variant's dot-vs-letter contrast ratio (subtle texture, bold MB)
  // by dropping dots to a near-bg light gray so the letters still read.
  const bg = useWhite ? '#FAFAF8' : '#2D2D2D'
  const dots = useWhite ? '#E7E5E0' : '#0A0A0A'
  const letters = useWhite ? '#2D2D2D' : '#FAF3E8'
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="124" height="124" rx="16" fill="white" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="124" height="124" fill={bg} />
        <g fill={dots}>
          <path d="M37.098 39.2059H0C-1.10457 39.2059 -2 40.1013 -2 41.2059V57.7549C-2 58.8594 -1.10457 59.7549 0 59.7549H37.098C38.2026 59.7549 39.098 58.8594 39.098 57.7549V41.2059C39.098 40.1013 38.2026 39.2059 37.098 39.2059Z" />
          <path d="M37.098 88.0098H0C-1.10457 88.0098 -2 88.9052 -2 90.0098V106.559C-2 107.663 -1.10457 108.559 0 108.559H37.098C38.2026 108.559 39.098 107.663 39.098 106.559V90.0098C39.098 88.9052 38.2026 88.0098 37.098 88.0098Z" />
          <path d="M37.098 -9.59802H0C-1.10457 -9.59802 -2 -8.70259 -2 -7.59802V8.95098C-2 10.0555 -1.10457 10.951 0 10.951H37.098C38.2026 10.951 39.098 10.0555 39.098 8.95098V-7.59802C39.098 -8.70259 38.2026 -9.59802 37.098 -9.59802Z" />
          <path d="M57.647 112.412H20.549C19.4444 112.412 18.549 113.307 18.549 114.412V130.961C18.549 132.066 19.4444 132.961 20.549 132.961H57.647C58.7516 132.961 59.647 132.066 59.647 130.961V114.412C59.647 113.307 58.7516 112.412 57.647 112.412Z" />
          <path d="M57.647 14.8039H20.549C19.4444 14.8039 18.549 15.6993 18.549 16.8039V33.3529C18.549 34.4575 19.4444 35.3529 20.549 35.3529H57.647C58.7516 35.3529 59.647 34.4575 59.647 33.3529V16.8039C59.647 15.6993 58.7516 14.8039 57.647 14.8039Z" />
          <path d="M69.353 63.6078H106.451C107.556 63.6078 108.451 64.5032 108.451 65.6078V82.1568C108.451 83.2614 107.556 84.1568 106.451 84.1568H69.353C68.2484 84.1568 67.353 83.2614 67.353 82.1568V65.6078C67.353 64.5032 68.2484 63.6078 69.353 63.6078Z" />
          <path d="M82.049 39.2059H44.951C43.8464 39.2059 42.951 40.1013 42.951 41.2059V57.7549C42.951 58.8594 43.8464 59.7549 44.951 59.7549H82.049C83.1536 59.7549 84.049 58.8594 84.049 57.7549V41.2059C84.049 40.1013 83.1536 39.2059 82.049 39.2059Z" />
          <path d="M82.049 88.0098H44.951C43.8464 88.0098 42.951 88.9052 42.951 90.0098V106.559C42.951 107.663 43.8464 108.559 44.951 108.559H82.049C83.1536 108.559 84.049 107.663 84.049 106.559V90.0098C84.049 88.9052 83.1536 88.0098 82.049 88.0098Z" />
          <path d="M82.049 -9.59802H44.951C43.8464 -9.59802 42.951 -8.70259 42.951 -7.59802V8.95098C42.951 10.0555 43.8464 10.951 44.951 10.951H82.049C83.1536 10.951 84.049 10.0555 84.049 8.95098V-7.59802C84.049 -8.70259 83.1536 -9.59802 82.049 -9.59802Z" />
          <path d="M102.598 112.412H65.5C64.3954 112.412 63.5 113.307 63.5 114.412V130.961C63.5 132.066 64.3954 132.961 65.5 132.961H102.598C103.703 132.961 104.598 132.066 104.598 130.961V114.412C104.598 113.307 103.703 112.412 102.598 112.412Z" />
          <path d="M102.598 14.8039H65.5C64.3954 14.8039 63.5 15.6993 63.5 16.8039V33.3529C63.5 34.4575 64.3954 35.3529 65.5 35.3529H102.598C103.703 35.3529 104.598 34.4575 104.598 33.3529V16.8039C104.598 15.6993 103.703 14.8039 102.598 14.8039Z" />
          <path d="M24.402 63.6078H61.5C62.6046 63.6078 63.5 64.5032 63.5 65.6078V82.1568C63.5 83.2614 62.6046 84.1568 61.5 84.1568H24.402C23.2974 84.1568 22.402 83.2614 22.402 82.1568V65.6078C22.402 64.5032 23.2974 63.6078 24.402 63.6078Z" />
          <path d="M127 39.2059H89.9019C88.7973 39.2059 87.9019 40.1013 87.9019 41.2059V57.7549C87.9019 58.8594 88.7973 59.7549 89.9019 59.7549H127C128.104 59.7549 129 58.8594 129 57.7549V41.2059C129 40.1013 128.104 39.2059 127 39.2059Z" />
          <path d="M127 88.0098H89.9019C88.7973 88.0098 87.9019 88.9052 87.9019 90.0098V106.559C87.9019 107.663 88.7973 108.559 89.9019 108.559H127C128.104 108.559 129 107.663 129 106.559V90.0098C129 88.9052 128.104 88.0098 127 88.0098Z" />
          <path d="M127 -9.59802H89.9019C88.7973 -9.59802 87.9019 -8.70259 87.9019 -7.59802V8.95098C87.9019 10.0555 88.7973 10.951 89.9019 10.951H127C128.104 10.951 129 10.0555 129 8.95098V-7.59802C129 -8.70259 128.104 -9.59802 127 -9.59802Z" />
          <path d="M127 112.412H110.451C109.346 112.412 108.451 113.307 108.451 114.412V130.961C108.451 132.066 109.346 132.961 110.451 132.961H127C128.105 132.961 129 132.066 129 130.961V114.412C129 113.307 128.105 112.412 127 112.412Z" />
          <path d="M127 14.8039H110.451C109.346 14.8039 108.451 15.6993 108.451 16.8039V33.3529C108.451 34.4575 109.346 35.3529 110.451 35.3529H127C128.105 35.3529 129 34.4575 129 33.3529V16.8039C129 15.6993 128.105 14.8039 127 14.8039Z" />
          <path d="M0 63.6078H16.549C17.6536 63.6078 18.549 64.5032 18.549 65.6078V82.1568C18.549 83.2614 17.6536 84.1568 16.549 84.1568H0C-1.10457 84.1568 -2 83.2614 -2 82.1568V65.6078C-2 64.5032 -1.10457 63.6078 0 63.6078Z" />
          <path d="M12.6961 112.412H0C-1.10457 112.412 -2 113.307 -2 114.412V130.961C-2 132.066 -1.10457 132.961 0 132.961H12.6961C13.8007 132.961 14.6961 132.066 14.6961 130.961V114.412C14.6961 113.307 13.8007 112.412 12.6961 112.412Z" />
          <path d="M12.6961 14.8039H0C-1.10457 14.8039 -2 15.6993 -2 16.8039V33.3529C-2 34.4575 -1.10457 35.3529 0 35.3529H12.6961C13.8007 35.3529 14.6961 34.4575 14.6961 33.3529V16.8039C14.6961 15.6993 13.8007 14.8039 12.6961 14.8039Z" />
          <path d="M114.304 63.6078H127C128.105 63.6078 129 64.5032 129 65.6078V82.1568C129 83.2614 128.105 84.1568 127 84.1568H114.304C113.199 84.1568 112.304 83.2614 112.304 82.1568V65.6078C112.304 64.5032 113.199 63.6078 114.304 63.6078Z" />
        </g>
        <g fill={letters}>
          <path d="M21 88V36H31.4852L50.9877 61.8255H46.0946L65.0378 36H75.523V88H64.6883V47.9356L69.0222 48.9128L48.9605 74.7383H47.5625L28.1998 48.9128L31.8347 47.9356V88H21Z" />
          <path d="M64.6883 88V36H86.7072C90.2955 36 93.3712 36.6049 95.9342 37.8148C98.4973 39.0246 100.455 40.7696 101.806 43.0497C103.157 45.2832 103.833 48.0054 103.833 51.2161C103.833 53.4962 103.204 55.6832 101.946 57.7772C100.688 59.8246 98.6138 61.5463 95.7245 62.9423V57.6376C98.474 58.7078 100.594 59.9875 102.086 61.4765C103.577 62.9655 104.602 64.5942 105.161 66.3624C105.72 68.0841 106 69.8989 106 71.8067C106 76.9253 104.299 80.9038 100.897 83.7423C97.4953 86.5808 92.7654 88 86.7072 88H64.6883ZM75.523 78.5772H87.9655C90.1557 78.5772 91.9032 77.949 93.2081 76.6926C94.5129 75.4362 95.1653 73.8076 95.1653 71.8067C95.1653 69.7593 94.5129 68.1074 93.2081 66.851C91.9032 65.5946 90.1557 64.9664 87.9655 64.9664H75.523V78.5772ZM75.523 55.5436H87.4762C89.1538 55.5436 90.4819 55.0783 91.4605 54.1477C92.4858 53.1705 92.9984 51.8908 92.9984 50.3087C92.9984 48.7266 92.4858 47.4702 91.4605 46.5396C90.4819 45.5624 89.1538 45.0738 87.4762 45.0738H75.523V55.5436Z" />
        </g>
      </g>
    </svg>
  )
}

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
            <MasonMark useWhite={useWhite} idSuffix="nav" />
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
              <MasonMark useWhite={false} idSuffix="mobile" />
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
