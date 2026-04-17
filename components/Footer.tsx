'use client'
import Link from 'next/link'
import Container from './Container'
import { EMAIL_ADDRESS, copyEmail } from '@/lib/copyEmail'

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Build', href: '/build' },
  { label: 'About', href: '/about' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/masonbrown1296' },
  { label: 'GitHub', href: 'https://github.com/masonbrown1296' },
]

export default function Footer() {
  return (
    <footer className="bg-off-white border-t border-neutral-200 py-20 mt-section-lg">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Left: identity */}
          <div className="md:col-span-5">
            <p className="text-display-sm-fluid text-ink">
              Mason Brown
            </p>
            <p className="mt-3 text-body text-neutral-600 max-w-sm">
              Marketing leader. Builder of AI tools. Chicago, remote-first.
            </p>
            <button
              type="button"
              onClick={() => copyEmail()}
              className="mt-6 inline-block text-body text-ink link-underline text-left"
            >
              {EMAIL_ADDRESS}
            </button>
          </div>

          {/* Middle: site nav */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-label uppercase text-neutral-500">Site</p>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-body text-neutral-700 hover:text-ink transition-colors duration-micro"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: social */}
          <div className="md:col-span-3">
            <p className="text-label uppercase text-neutral-500">Elsewhere</p>
            <ul className="mt-4 flex flex-col gap-3">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-neutral-700 hover:text-ink transition-colors duration-micro"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => copyEmail()}
                  className="text-body text-neutral-700 hover:text-ink transition-colors duration-micro text-left"
                >
                  Email
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom hairline row */}
        <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-body-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Mason Brown. Built in Claude Code.
          </p>
          <p className="text-body-sm text-neutral-500">
            masonbrown.co
          </p>
        </div>
      </Container>
    </footer>
  )
}
