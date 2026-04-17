import { notFound } from 'next/navigation'
import Container from '@/components/Container'
import SectionLabel from '@/components/SectionLabel'
import FadeIn from '@/components/FadeIn'
import ContactBlock from '@/components/ContactBlock'
import CaseHero from '@/components/case/CaseHero'
import StatsStrip from '@/components/case/StatsStrip'
import NextPrev from '@/components/case/NextPrev'
import {
  projects,
  getProject,
  getAdjacentProjects,
  type ProjectSlug,
} from '@/data/projects'

// Static routes (e.g. /work/healthcare) take precedence over this dynamic
// route when present, so bespoke case study pages override this shell.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug as ProjectSlug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.hook,
  }
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = getProject(params.slug as ProjectSlug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(project.slug)

  return (
    <>
      <CaseHero
        label={project.label}
        title={project.title}
        hook={project.hook}
        pills={project.pills}
        role={project.role}
        year={project.year}
        gradientClass={project.gradientClass}
      />

      <StatsStrip stats={project.stats} />

      {/* ════════ BODY PLACEHOLDER ════════ */}
      <section className="py-section bg-white">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>In Progress</SectionLabel>
            <h2 className="mt-5 text-display-sm-fluid text-ink">
              The full case study lands in Day 2 of the build sprint.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-600">
              This page is a hero-only shell while I extract the full editorial
              content from the working magazines into native components. Context,
              role, approach, build, results, and pull quotes will populate here
              by Sunday evening.
            </p>
          </FadeIn>
        </Container>
      </section>

      <NextPrev
        prev={{ href: `/work/${prev.slug}`, title: prev.title }}
        next={{ href: `/work/${next.slug}`, title: next.title }}
      />

      <ContactBlock />
    </>
  )
}
