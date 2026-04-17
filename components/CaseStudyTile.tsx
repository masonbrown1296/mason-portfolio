import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/data/projects'

interface CaseStudyTileProps {
  project: Project
  featured?: boolean
  className?: string
}

/**
 * Case study tile. Clickable card linking to /work/[slug].
 * `featured` makes it full-width and taller; used for the lead case study on home.
 */
export default function CaseStudyTile({
  project,
  featured = false,
  className,
}: CaseStudyTileProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        'group gradient-tile block rounded-md relative',
        featured ? 'md:min-h-[560px]' : 'md:min-h-[460px]',
        'transition-[transform,box-shadow] duration-standard ease-soft',
        'hover:-translate-y-1 hover:shadow-feature',
        'shadow-inset-hairline',
        project.gradientClass,
        className
      )}
    >
      {/* Content sits above the grain overlay via gradient-tile z-index */}
      <div
        className={cn(
          'flex flex-col justify-between h-full',
          featured ? 'p-8 md:p-14' : 'p-8 md:p-10',
          'min-h-[460px]'
        )}
      >
        {/* Top: eyebrow + title + hook */}
        <div className="max-w-2xl">
          <p className="text-label uppercase text-white/80">
            {project.label}
          </p>
          <h3
            className={cn(
              'mt-4 text-white',
              featured ? 'text-display-md-fluid' : 'text-display-sm-fluid'
            )}
          >
            {project.title}
          </h3>
          <p className="mt-4 text-body-lg text-white/85 max-w-lg">
            {project.hook}
          </p>
        </div>

        {/* Bottom: stats + arrow */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {project.stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-heading-lg text-white">{s.value}</span>
                <span className="text-label uppercase text-white/70 mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <span
            className="inline-flex items-center gap-1 text-[14px] font-medium text-white/90 group-hover:text-white transition-colors duration-micro"
            aria-hidden
          >
            <span className="link-underline">Read the case study</span>
            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              className="transition-transform duration-standard ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  )
}
