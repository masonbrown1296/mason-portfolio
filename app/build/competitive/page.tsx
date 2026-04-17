import Container from '@/components/Container'
import SectionLabel from '@/components/SectionLabel'
import FadeIn from '@/components/FadeIn'
import ContactBlock from '@/components/ContactBlock'
import BuildTile from '@/components/BuildTile'
import CaseHero from '@/components/case/CaseHero'
import PullQuote from '@/components/case/PullQuote'
import { tools, getTool } from '@/data/projects'

const tool = getTool('competitive')!
const other = tools.find((t) => t.slug !== 'competitive')!

export const metadata = {
  title: tool.title,
  description: tool.hook,
}

const problems = [
  {
    label: 'High-effort, low-frequency',
    body: 'Nobody has time for weekly CI, so it happens right before conferences or launches — when it\'s most stressful and least rigorous.',
  },
  {
    label: 'Fragmented sources',
    body: 'Website scrapes, LinkedIn, X, Reddit, review sites, earnings transcripts. Each one lives in a different tool. Synthesis is manual.',
  },
  {
    label: 'Output nobody reads',
    body: 'Good CI ends up as a PDF that dies in a Slack channel. Sales never finds it at the moment they need it.',
  },
]

const layers = [
  {
    label: 'Data layer',
    sources: [
      { name: 'Jina Reader', detail: 'Structured web scraping for competitor blogs, product, pricing.' },
      { name: 'Firecrawl', detail: 'Deeper site crawls and content discovery.' },
      { name: 'X API', detail: 'Competitor handle activity and industry chatter.' },
      { name: 'Reddit API', detail: 'Practitioner sentiment in target subreddits.' },
    ],
  },
  {
    label: 'Intelligence layer',
    sources: [
      { name: 'Claude API', detail: 'Synthesis engine. Structured outputs feed against stored brand and positioning context.' },
      { name: 'Prompt schema', detail: 'Few-shot examples from real briefings. Tight output schema for battlecards.' },
      { name: 'Feedback loop', detail: 'Sales reps flag useless output. Schema tightens. Output improves.' },
    ],
  },
  {
    label: 'Output layer',
    sources: [
      { name: 'Battlecards', detail: 'Per-competitor, ready for the rep in a live call.' },
      { name: 'Conference briefings', detail: 'Bundle of intel timed to a specific event.' },
      { name: 'Weekly digests', detail: 'Scheduled synthesis. Signal up, noise down.' },
      { name: 'Ad-hoc deep dives', detail: 'One-off investigation when a new competitor surfaces.' },
    ],
  },
]

export default function CompetitiveToolPage() {
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

      {/* ════════ ONE-PARAGRAPH PITCH ════════ */}
      <section className="py-section bg-white">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>The pitch</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              Competitive intel that runs on a schedule.
            </h2>
            <div className="mt-8 space-y-5 text-body-lg text-neutral-700">
              <p>
                I built this because the manual version was eating hours and
                still missing things. Every product marketer knows the ritual:
                check competitor sites, comb LinkedIn, scan Reddit, scroll X,
                pull Gartner, try to synthesize it into something a sales team
                can use before the next conference.
              </p>
              <p>
                This is a web app that does the scanning, pulls the signals,
                and uses Claude to synthesize everything into competitive
                briefings. The team uses it leading into conferences and sales
                cycles.
              </p>
              <p className="text-ink font-medium">
                Production tool. Not a prompt template.
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
              Competitive intelligence has three structural problems.
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

          <FadeIn delay={160}>
            <p className="mt-12 max-w-2xl text-body-lg text-neutral-700">
              The app solves all three by making{' '}
              <span className="text-ink font-medium">ingestion automated</span>,{' '}
              <span className="text-ink font-medium">synthesis instant</span>,
              and{' '}
              <span className="text-ink font-medium">output modular</span>.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ ARCHITECTURE ════════ */}
      <section className="py-section-lg bg-white">
        <Container>
          <FadeIn>
            <SectionLabel>Architecture</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              Three layers. Signal in, briefing out.
            </h2>
          </FadeIn>

          <div className="mt-16 space-y-6">
            {layers.map((layer, li) => (
              <FadeIn key={layer.label} delay={li * 60}>
                <div className="rounded-md border border-neutral-200 bg-off-white p-8 shadow-inset-hairline">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {layer.sources.map((s) => (
                      <div
                        key={s.name}
                        className="rounded-md border border-neutral-200 bg-white p-5"
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
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>The app</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              Live demo is wired up next.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-700 max-w-2xl">
              The app runs in production. An interactive demo or walkthrough
              lands here next — happy to walk through it live before then.
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="mt-12 rounded-md border border-dashed border-neutral-300 bg-white aspect-[16/9] flex items-center justify-center">
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
      <section className="py-section bg-white border-b border-neutral-200">
        <Container width="narrow">
          <FadeIn>
            <PullQuote tone="ember" attribution="The claim">
              Hire me into a PMM or growth role, and within the first 60 days
              I&apos;ll have a version of this running against your
              competitors.
            </PullQuote>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ WHY IT MATTERS ════════ */}
      <section className="py-section-lg bg-white">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>What this is really about</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink">
              I didn&apos;t build this to prove I can use AI.
            </h2>
            <div className="mt-8 space-y-5 text-body-lg text-neutral-700">
              <p>
                The competitive intel function at most companies is a
                spreadsheet, a Google Doc, and a person&apos;s memory. I
                replaced all three with something that runs on a schedule.
              </p>
              <p>
                The hardest part wasn&apos;t the APIs — it was the prompt
                engineering for synthesis. Raw competitor data is noise.
                Getting Claude to output a battlecard a rep can actually use
                in a call required tight schema design, few-shot examples from
                real briefings, and an iteration loop where sales reps told me
                when the output was useless.
              </p>
              <p className="text-ink font-medium">
                That feedback loop is the product.
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
