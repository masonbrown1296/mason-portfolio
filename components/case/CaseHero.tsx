import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Container from '@/components/Container'

interface CaseHeroProps {
  label: string
  title: string
  hook: string
  pills: string[]
  role?: string
  year?: string
  gradientClass: string
  backHref?: string
  backLabel?: string
}

export default function CaseHero({
  label,
  title,
  hook,
  pills,
  role,
  year,
  gradientClass,
  backHref = '/work',
  backLabel = 'Back to work',
}: CaseHeroProps) {
  return (
    <section
      className={`gradient-tile ${gradientClass} pt-[calc(var(--nav-height)+64px)] pb-section relative`}
    >
      <Container>
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-micro mb-12"
        >
          <ArrowLeft size={16} strokeWidth={1.75} />
          {backLabel}
        </Link>

        <p className="text-label uppercase text-white/80">{label}</p>
        <h1 className="mt-4 text-display-lg-fluid text-white max-w-[22ch]">
          {title}
        </h1>
        <p className="mt-6 text-body-lg text-white/85 max-w-2xl">{hook}</p>

        <div className="mt-10 flex flex-wrap gap-2">
          {pills.map((p) => (
            <span
              key={p}
              className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[13px] font-medium text-white/90"
            >
              {p}
            </span>
          ))}
        </div>

        {(role || year) && (
          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4">
            {role && (
              <div>
                <p className="text-label uppercase text-white/60">Role</p>
                <p className="mt-1 text-body text-white">{role}</p>
              </div>
            )}
            {year && (
              <div>
                <p className="text-label uppercase text-white/60">Year</p>
                <p className="mt-1 text-body text-white">{year}</p>
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  )
}
