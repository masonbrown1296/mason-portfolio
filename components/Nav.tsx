'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import Link from 'next/link'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        animate={{
          backgroundColor: scrolled ? 'rgba(13, 12, 11, 0.9)' : 'rgba(13, 12, 11, 0)',
          borderBottomColor: scrolled ? '#252220' : 'transparent',
        }}
        style={{ borderBottomWidth: '1px', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link href="/" className="font-display font-semibold text-[var(--text-dark)] text-lg">
            Mason Brown
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-body text-[var(--text-muted)] hover:text-[var(--text-dark)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-body border border-[var(--red)] text-[var(--red)] rounded-lg px-4 py-2 hover:bg-[var(--red)] hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[var(--text-dark)]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[var(--bg-dark)] flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-5 right-6 text-[var(--text-dark)]"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-display font-bold text-[var(--text-dark)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-body border border-[var(--red)] text-[var(--red)] rounded-lg px-6 py-3"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
