'use client'
import { useState } from 'react'
import { Copy, Check, ArrowUpRight } from 'lucide-react'
import Container from './Container'
import SectionLabel from './SectionLabel'
import FadeIn from './FadeIn'
import { cn } from '@/lib/utils'

const EMAIL = 'masonbrown1296@gmail.com'

const links = [
  {
    label: 'LinkedIn',
    handle: '/in/masonbrown1296',
    href: 'https://linkedin.com/in/masonbrown1296',
  },
  {
    label: 'GitHub',
    handle: '@masonbrown1296',
    href: 'https://github.com/masonbrown1296',
  },
]

interface ContactBlockProps {
  className?: string
  /** When true, renders a dense header variant for the dedicated contact section on home.
   *  When false, renders a more compact layout for reuse on About or case study tails. */
  variant?: 'section' | 'compact'
}

export default function ContactBlock({ className, variant = 'section' }: ContactBlockProps) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable; the mailto link still works.
    }
  }

  return (
    <section id="contact" className={cn('py-section', className)}>
      <Container>
        <FadeIn>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-5 text-display-md-fluid text-ink max-w-[18ch]">
            I&apos;m looking for senior PMM, growth, or head of marketing roles.
          </h2>
          {variant === 'section' && (
            <p className="mt-6 text-body-lg text-neutral-600 max-w-xl">
              Available immediately. Remote-first, open to Chicago onsite.
              Targeting healthtech, B2B SaaS, and cybersecurity.
            </p>
          )}
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Email + copy */}
            <div className="md:col-span-7 flex flex-col gap-3">
              <p className="text-label uppercase text-neutral-500">Email</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-display-sm-fluid text-ink link-underline"
                >
                  {EMAIL}
                </a>
                <button
                  type="button"
                  onClick={onCopy}
                  aria-label={copied ? 'Copied' : 'Copy email to clipboard'}
                  className={cn(
                    'inline-flex items-center justify-center',
                    'h-10 w-10 rounded-sm border transition-all duration-micro',
                    copied
                      ? 'bg-ink text-white border-ink'
                      : 'bg-transparent text-neutral-600 border-neutral-300 hover:text-ink hover:border-neutral-500'
                  )}
                >
                  {copied ? (
                    <Check size={16} strokeWidth={2} />
                  ) : (
                    <Copy size={16} strokeWidth={1.75} />
                  )}
                </button>
              </div>
            </div>

            {/* Elsewhere */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <p className="text-label uppercase text-neutral-500">Elsewhere</p>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-body-lg text-ink hover:text-ember transition-colors duration-micro group"
                    >
                      <span className="text-neutral-500 mr-2 min-w-[80px]">
                        {l.label}
                      </span>
                      <span className="link-underline">{l.handle}</span>
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.75}
                        className="transition-transform duration-standard ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
