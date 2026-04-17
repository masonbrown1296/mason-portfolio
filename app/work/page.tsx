import Container from '@/components/Container'
import SectionLabel from '@/components/SectionLabel'
import CaseStudyTile from '@/components/CaseStudyTile'
import ContactBlock from '@/components/ContactBlock'
import FadeIn from '@/components/FadeIn'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'Work',
  description:
    'Four case studies. Enterprise buyer intelligence at a Fortune 10 healthtech company, a $1.65M newsletter, a gamification system from PRD to GTM, and a repositioning of a 5M-user community.',
}

export default function WorkIndex() {
  return (
    <>
      <section className="pt-[calc(var(--nav-height)+80px)] pb-section bg-white">
        <Container>
          <FadeIn trigger="mount">
            <SectionLabel>Work</SectionLabel>
            <h1 className="mt-5 text-display-lg-fluid text-ink max-w-[20ch]">
              Four projects. Each one the deepest I&apos;ve gone.
            </h1>
            <p className="mt-6 text-body-lg text-neutral-600 max-w-xl">
              Enterprise buyer intelligence at a Fortune 10 healthtech company.
              A $1.65M newsletter built from zero. A gamification system
              owned end to end. A full repositioning of a 5M-user community.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-section-lg bg-white">
        <Container>
          <div className="flex flex-col gap-6 md:gap-8">
            {projects.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 80}>
                <CaseStudyTile project={p} featured={i === 0} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <ContactBlock />
    </>
  )
}
