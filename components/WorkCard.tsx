import Link from 'next/link'
import { type ReactNode } from 'react'
import { type Project, accentColorMap } from '@/data/work'

interface WorkCardProps {
  project: Project
  className?: string
}

/* Decorative SVG shapes per accent color */
function AccentGraphic({ color, slug }: { color: string; slug: string }) {
  // CRAM gets the C logo, enlarged
  if (slug === 'cram') {
    return (
      <svg width="80" height="80" viewBox="0 0 22 22" fill="none" className="opacity-40 group-hover:opacity-70 transition-opacity">
        <path d="M17 5A9 9 0 1 0 17 17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  }

  // Different abstract shapes per project for variety
  const shapes: Record<string, ReactNode> = {
    'healthcare-buyer-intelligence': (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-30 group-hover:opacity-60 transition-opacity">
        <circle cx="40" cy="40" r="30" stroke={color} strokeWidth="1.5" strokeDasharray="4 6"/>
        <circle cx="40" cy="40" r="16" stroke={color} strokeWidth="1" opacity="0.6"/>
        <circle cx="40" cy="40" r="4" fill={color} opacity="0.8"/>
      </svg>
    ),
    'gamification-redesign': (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-30 group-hover:opacity-60 transition-opacity">
        <polygon points="40,8 72,60 8,60" stroke={color} strokeWidth="1.5" fill="none"/>
        <polygon points="40,24 58,52 22,52" stroke={color} strokeWidth="1" opacity="0.5" fill="none"/>
        <circle cx="40" cy="44" r="3" fill={color} opacity="0.8"/>
      </svg>
    ),
    'bytesize-newsletter': (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-30 group-hover:opacity-60 transition-opacity">
        <rect x="12" y="12" width="56" height="56" rx="8" stroke={color} strokeWidth="1.5"/>
        <line x1="12" y1="32" x2="68" y2="32" stroke={color} strokeWidth="1" opacity="0.5"/>
        <line x1="12" y1="48" x2="52" y2="48" stroke={color} strokeWidth="1" opacity="0.3"/>
        <circle cx="24" cy="22" r="3" fill={color} opacity="0.6"/>
      </svg>
    ),
    'company-rebrand': (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-30 group-hover:opacity-60 transition-opacity">
        <path d="M20 60 L40 12 L60 60" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="28" y1="44" x2="52" y2="44" stroke={color} strokeWidth="1" opacity="0.6"/>
        <circle cx="40" cy="12" r="3" fill={color} opacity="0.8"/>
      </svg>
    ),
  }

  return shapes[slug] || (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-30 group-hover:opacity-60 transition-opacity">
      <circle cx="40" cy="40" r="28" stroke={color} strokeWidth="1.5"/>
      <circle cx="40" cy="40" r="4" fill={color} opacity="0.8"/>
    </svg>
  )
}

export default function WorkCard({ project, className = '' }: WorkCardProps) {
  const color = accentColorMap[project.accentColor]
  const glowClass = `glow-${project.accentColor}`

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group block bg-[#161513] border border-[#252220] rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-[var(--text-muted)] ${className}`}
    >
      {/* Top accent line */}
      <div
        className={`h-[2px] ${glowClass}`}
        style={{ backgroundColor: color }}
      />

      <div className="flex items-center p-8 md:p-10 gap-8">
        {/* Left: text content */}
        <div className="flex-1 min-w-0">
          {/* Category tag */}
          <span
            className="text-[11px] font-semibold tracking-[0.12em] uppercase font-body"
            style={{ color }}
          >
            {project.tag}
          </span>

          {/* Title */}
          <h3 className="font-display font-bold text-xl md:text-2xl text-[var(--text-dark)] mt-3 mb-2 flex items-center gap-2">
            {project.slug === 'cram' && (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="flex-shrink-0">
                <path d="M17 5A9 9 0 1 0 17 17" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            )}
            {project.title}
          </h3>

          {/* Descriptor */}
          <p className="text-[15px] font-body text-[var(--text-muted)] leading-relaxed mb-6 max-w-2xl">
            {project.descriptor}
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-2">
            {project.pills.map((pill) => (
              <span
                key={pill}
                className="text-xs font-body text-[var(--text-muted)] bg-[#0D0C0B] rounded-full px-3 py-1.5 border"
                style={{ borderColor: `${color}66` }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Right: decorative accent graphic */}
        <div className="hidden md:flex items-center justify-center flex-shrink-0 w-24 h-24">
          <AccentGraphic color={color} slug={project.slug} />
        </div>
      </div>
    </Link>
  )
}
