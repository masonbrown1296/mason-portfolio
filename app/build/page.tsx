import Container from '@/components/Container'
import SectionLabel from '@/components/SectionLabel'
import BuildTile from '@/components/BuildTile'
import ContactBlock from '@/components/ContactBlock'
import FadeIn from '@/components/FadeIn'
import { tools } from '@/data/projects'

export const metadata = {
  title: 'Build',
  description:
    'Two production AI tools. A competitive intelligence aggregator and a content recommendation engine grounded in a buyer journey I built myself.',
}

export default function BuildIndex() {
  return (
    <>
      <section className="pt-[calc(var(--nav-height)+80px)] pb-section bg-white">
        <Container>
          <FadeIn trigger="mount">
            <SectionLabel>Build</SectionLabel>
            <h1 className="mt-5 text-display-lg-fluid text-ink max-w-[22ch]">
              Tools I built to run marketing alone.
            </h1>
            <p className="mt-6 text-body-lg text-neutral-600 max-w-xl">
              Two production web apps. Real infrastructure. I built them because
              the manual version of the work was eating hours and still missing
              things. They&apos;re the reason I can credibly say I run a marketing
              function alone.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-section-lg bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {tools.map((t, i) => (
              <FadeIn key={t.slug} delay={i * 80}>
                <BuildTile tool={t} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <ContactBlock />
    </>
  )
}
