import { notFound } from 'next/navigation'
import Container from '@/components/Container'
import SectionLabel from '@/components/SectionLabel'
import FadeIn from '@/components/FadeIn'
import ContactBlock from '@/components/ContactBlock'
import BuildTile from '@/components/BuildTile'
import CaseHero from '@/components/case/CaseHero'
import { tools, getTool, type ToolSlug } from '@/data/projects'

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = getTool(params.slug as ToolSlug)
  if (!tool) return {}
  return {
    title: tool.title,
    description: tool.hook,
  }
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getTool(params.slug as ToolSlug)
  if (!tool) notFound()

  const other = tools.find((t) => t.slug !== tool.slug)!

  return (
    <>
      <CaseHero
        label={tool.label}
        title={tool.title}
        hook={tool.hook}
        pills={tool.stack}
        gradientClass={tool.gradientClass}
        backHref="/build"
        backLabel="Back to build"
      />

      {/* Placeholder body — bespoke tool pages at /build/{slug} override this */}
      <section className="py-section bg-white">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>In progress</SectionLabel>
            <h2 className="mt-5 text-display-sm-fluid text-ink">
              Full write-up and live demo moment land in Day 2.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-600">
              This page currently shows the problem statement and tech stack.
              The full build story, architecture diagram, and interactive demo
              populate by Sunday evening.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-section-lg bg-off-white border-t border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>See the other tool</SectionLabel>
            <div className="mt-8">
              <BuildTile tool={other} />
            </div>
          </FadeIn>
        </Container>
      </section>

      <ContactBlock />
    </>
  )
}
