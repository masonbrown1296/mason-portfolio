import Container from '@/components/Container'
import SectionLabel from '@/components/SectionLabel'
import FadeIn from '@/components/FadeIn'
import ContactBlock from '@/components/ContactBlock'
import BuildTile from '@/components/BuildTile'
import CaseHero from '@/components/case/CaseHero'
import PullQuote from '@/components/case/PullQuote'
import { tools, getTool } from '@/data/projects'

const tool = getTool('recommendation')!
const other = tools.find((t) => t.slug !== 'recommendation')!

export const metadata = {
  title: tool.title,
  description: tool.hook,
}

const problems = [
  {
    label: 'Libraries grow faster than they\'re organized',
    body: 'Tagging systems rot within a quarter. The asset that was perfect for a CFO objection six months ago is now buried under three rebrands of newer material.',
  },
  {
    label: 'Reps default to what they remember',
    body: 'They don\'t search. They send the last thing that worked. 80% of content never gets used. The 20% that does is often outdated.',
  },
  {
    label: 'The match is multi-dimensional',
    body: 'A one-pager that works for a CIO in shortlist doesn\'t work for a CFO in early problem identification. Most systems solve one axis; the real answer needs all three.',
  },
]

const axes = [
  {
    label: 'Stakeholder',
    body: 'Role, authority, primary success metric, known objections. The person the asset has to convince.',
  },
  {
    label: 'Stage',
    body: 'Where the deal is in the buyer journey. Problem identification, solution exploration, requirements, shortlist, purchase.',
  },
  {
    label: 'Objection',
    body: 'What\'s actually blocking the deal right now. Cost, implementation risk, integration, timing, authority.',
  },
]

const layers = [
  {
    label: 'Data layer',
    sources: [
      { name: 'Content library', detail: 'Titles, descriptions, tags, stakeholder fit, stage fit, objection fit.' },
      { name: 'Buyer journey context', detail: 'Stages, stakeholder power maps, observable signals, common objections.' },
      { name: 'Persona + positioning', detail: 'Stored brand context that scopes the recommendation reasoning.' },
    ],
  },
  {
    label: 'Intelligence layer',
    sources: [
      { name: 'Azure + OpenAI', detail: 'Reasoning engine evaluating match strength across all three axes simultaneously.' },
      { name: 'Confidence scoring', detail: 'Every recommendation comes with a numeric confidence, not just a ranking.' },
      { name: 'Reasoning output', detail: 'Plain-language explanation for why each asset surfaced. Reps can trust or question it.' },
    ],
  },
  {
    label: 'Output layer',
    sources: [
      { name: 'Ranked recommendations', detail: 'Primary list of assets with confidence scores attached.' },
      { name: 'Alternative suggestions', detail: 'Surfaced when top-match confidence is low.' },
      { name: 'Gap flags', detail: 'When the library has no good match for a scenario, the app says so.' },
    ],
  },
]

export default function RecommendationToolPage() {
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

      {/* ════════ PITCH ════════ */}
      <section className="py-section bg-white">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>The pitch</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              Sales doesn&apos;t have a content problem. They have a content
              retrieval problem.
            </h2>
            <div className="mt-8 space-y-5 text-body-lg text-neutral-700">
              <p>
                Marketing produces hundreds of assets, organizes them in a
                drive nobody opens, and reps end up sending the same three
                PDFs they always send.
              </p>
              <p>
                I built this to close the gap between the buyer intelligence
                work I was doing (personas, stages, objections, stakeholder
                maps) and the content that should show up at each moment.
                You tell the app which stakeholder you&apos;re selling to,
                what stage the deal is in, and what objection is blocking
                you. It returns ranked assets with reasoning.
              </p>
              <p className="text-ink font-medium">
                Production web app. Not a prompt template.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ THE PROBLEM ════════ */}
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>The problem</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              Content recommendation is an unsolved problem in B2B.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <FadeIn key={p.label} delay={i * 40}>
                <div className="h-full rounded-md border border-neutral-200 bg-white p-6 shadow-inset-hairline">
                  <span className="text-label uppercase text-neutral-400 font-mono">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-heading-md text-ink">{p.label}</h3>
                  <p className="mt-3 text-body text-neutral-600">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ THREE AXES ════════ */}
      <section className="py-section-lg bg-white">
        <Container>
          <FadeIn>
            <SectionLabel>The insight</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              The answer is three axes at once, not one.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-700 max-w-2xl">
              The buyer journey architecture I wrote is the scaffold. The app
              reasons across all three axes simultaneously, not in sequence.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {axes.map((a, i) => (
              <FadeIn key={a.label} delay={i * 40}>
                <div className="h-full rounded-md border border-neutral-200 bg-off-white p-8 shadow-inset-hairline">
                  <span className="text-label uppercase text-ember font-mono">
                    Axis {i + 1}
                  </span>
                  <h3 className="mt-3 text-heading-lg text-ink">{a.label}</h3>
                  <p className="mt-4 text-body text-neutral-600">{a.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ ARCHITECTURE ════════ */}
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>Architecture</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              Inputs in, ranked recommendations out.
            </h2>
          </FadeIn>

          <div className="mt-16 space-y-6">
            {layers.map((layer, li) => (
              <FadeIn key={layer.label} delay={li * 60}>
                <div className="rounded-md border border-neutral-200 bg-white p-8 shadow-inset-hairline">
                  <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8">
                    <div className="flex items-baseline gap-4">
                      <span className="text-label uppercase text-ember font-mono">
                        L{li + 1}
                      </span>
                      <h3 className="text-heading-lg text-ink">
                        {layer.label}
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {layer.sources.map((s) => (
                      <div
                        key={s.name}
                        className="rounded-md border border-neutral-200 bg-off-white p-5"
                      >
                        <p className="text-heading-sm text-ink">{s.name}</p>
                        <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                          {s.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ DEMO PLACEHOLDER ════════ */}
      <section className="py-section-lg bg-white">
        <Container>
          <FadeIn>
            <SectionLabel>The app</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              Live demo is wired up next.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-700 max-w-2xl">
              The app runs in production against a real content library. An
              interactive walkthrough lands here next. Happy to demo it live
              before then.
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="mt-12 rounded-md border border-dashed border-neutral-300 bg-off-white aspect-[16/9] flex items-center justify-center">
              <div className="text-center">
                <p className="text-label uppercase text-neutral-400">
                  Demo placeholder
                </p>
                <p className="mt-3 text-body text-neutral-500">
                  Interactive walkthrough coming soon
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ PULL QUOTE ════════ */}
      <section className="py-section bg-off-white border-y border-neutral-200">
        <Container width="narrow">
          <FadeIn>
            <PullQuote tone="ember" attribution="The claim">
              Hire me and within 90 days I&apos;ll have a version of this
              running against your content library and your buyer journey.
            </PullQuote>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ THE IP ════════ */}
      <section className="py-section-lg bg-white">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>What this is really about</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              The architecture is the IP. The app makes it usable.
            </h2>
            <div className="mt-8 space-y-5 text-body-lg text-neutral-700">
              <p>
                The recommendations are grounded in the buyer journey
                architecture, not in keywords. If a rep tells me they&apos;re
                in a shortlist evaluation with a CFO worried about
                implementation risk, the app doesn&apos;t hand them whatever
                has &ldquo;CFO&rdquo; in the metadata. It reasons across the
                stage, the stakeholder, and the specific objection, and ranks
                the assets that map to all three.
              </p>
              <p>
                I built this after I built the buyer journey. The architecture
                is the intellectual property. The app is what you build when
                you&apos;re serious about making the IP usable.
              </p>
              <p className="text-ink font-medium">
                A lot of PMMs produce personas and journeys. Few close the
                loop to the content layer. That&apos;s where deals actually
                get won or lost.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ OTHER TOOL ════════ */}
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
