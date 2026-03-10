import { ArrowLeft, ArrowRight, Lock } from 'lucide-react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import SectionLabel from '@/components/SectionLabel'
import CaseStudyContent from '@/components/CaseStudyContent'
import { projects, accentColorMap } from '@/data/work'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-dark)]">
        <p className="text-[var(--text-muted)]">Project not found.</p>
      </div>
    )
  }

  const color = accentColorMap[project.accentColor]
  const currentIndex = projects.findIndex((p) => p.slug === params.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const isCRAM = project.slug === 'cram'
  const isGamification = project.slug === 'gamification-redesign'

  return (
    <>
      <Nav />

      {/* ════════ HERO ════════ */}
      <section className="dot-grid bg-[var(--bg-dark)] pt-32 pb-32 relative z-0">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {/* Back link */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-body text-[var(--text-muted)] hover:text-[var(--red)] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Work
          </Link>

          {/* Category tag */}
          <span
            className="text-[11px] font-semibold tracking-[0.12em] uppercase font-body block mb-4"
            style={{ color }}
          >
            {project.tag}
          </span>

          {/* Title */}
          <h1 className="font-display font-extrabold text-4xl md:text-[56px] leading-[1.1] tracking-[-0.02em] text-[var(--text-dark)] mb-4 flex items-center gap-3">
            {isCRAM && (
              <svg width="32" height="32" viewBox="0 0 22 22" fill="none" className="flex-shrink-0">
                <path d="M17 5A9 9 0 1 0 17 17" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            )}
            {project.title}
          </h1>

          {/* Descriptor */}
          <p className="font-body text-lg text-[var(--text-muted)] max-w-2xl mb-8">
            {project.descriptor}
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-2">
            {project.pills.map((pill) => (
              <span
                key={pill}
                className="text-xs font-body text-[var(--text-muted)] bg-[#0D0C0B] rounded-full px-4 py-2 border"
                style={{ borderColor: `${color}66` }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CASE STUDY BODY ════════ */}
      <CaseStudyContent
        project={project}
        color={color}
        isCRAM={isCRAM}
        isGamification={isGamification}
      />

      {/* ════════ CRAM AVAILABILITY NOTE ════════ */}
      {isCRAM && (
        <section className="bg-[#161513] py-8 relative z-10">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center gap-2 text-[var(--text-muted)]">
            <Lock size={14} />
            <span className="text-xs font-body">This product is currently internal and not publicly accessible.</span>
          </div>
        </section>
      )}

      {/* ════════ NEXT PROJECT ════════ */}
      <section className="dot-grid bg-[var(--bg-dark)] py-16 relative z-0">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center justify-between bg-[#161513] border border-[#252220] rounded-2xl p-8 hover:-translate-y-1 transition-transform"
          >
            <div>
              <span className="text-xs font-body text-[var(--text-muted)] uppercase tracking-wider">Next Project</span>
              <h3 className="font-display font-bold text-2xl text-[var(--text-dark)] mt-1">{nextProject.title}</h3>
            </div>
            <ArrowRight size={24} className="text-[var(--text-muted)] group-hover:text-[var(--text-dark)] transition-colors" />
          </Link>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="bg-[var(--bg-dark)] border-t border-[var(--border-dark)] py-6">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <span className="text-sm font-body text-[var(--text-muted)]">&copy; 2025 Mason Brown</span>
          <span className="text-sm font-body text-[var(--text-muted)]">masonbrown.co</span>
        </div>
      </footer>
    </>
  )
}
