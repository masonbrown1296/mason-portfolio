import Image from 'next/image'
import Container from '@/components/Container'
import SectionLabel from '@/components/SectionLabel'
import FadeIn from '@/components/FadeIn'
import ContactBlock from '@/components/ContactBlock'
import CaseHero from '@/components/case/CaseHero'
import StatsStrip from '@/components/case/StatsStrip'
import NextPrev from '@/components/case/NextPrev'
import PullQuote from '@/components/case/PullQuote'
import { getProject, getAdjacentProjects } from '@/data/projects'

const project = getProject('bytesize')!
const { prev, next } = getAdjacentProjects('bytesize')

export const metadata = {
  title: project.title,
  description: project.hook,
}

const sections = [
  {
    label: 'News Roundup',
    body: 'Must-know tech headlines and why they matter. From French hackers demanding baguettes as ransom to Microsoft inventing a new state of matter.',
  },
  {
    label: 'Tool Time',
    body: 'Battle-tested tools that enhance productivity. Each recommendation with a personality-driven description that makes enterprise software actually sound interesting.',
  },
  {
    label: 'Job Opportunities',
    body: 'Career moves worth attention, carefully filtered to exclude ghost job postings. Real roles from real companies, not algorithmic spam.',
  },
  {
    label: 'Industry Moves',
    body: 'Weekly pulse check on mergers, acquisitions, product launches, and executive shuffles. The context behind the headlines.',
  },
]

// Subscriber growth in thousands; month label + value.
const growthData = [
  { month: 'M1', value: 15 },
  { month: 'M2', value: 35 },
  { month: 'M3', value: 60 },
  { month: 'M4', value: 85 },
  { month: 'M5', value: 110 },
  { month: 'M6', value: 140 },
  { month: 'M7', value: 170 },
  { month: 'M8', value: 200 },
]

const maxGrowth = Math.max(...growthData.map((g) => g.value))

const revenue = [
  { value: '$80K+', label: 'Initial revenue' },
  { value: '$1.65M', label: 'Projected ARR' },
  { value: '2–3%', label: 'Sponsor CTR' },
  { value: '$10K+', label: 'Early placement deals' },
]

const testimonials = [
  'I actually read this! I never read these kinds of emails. Very informative and entertaining. Just wanted to say thanks.',
  "I don't 'do' IT, but damn, I do enjoy your newsletter. I don't even know how you found your way into my Inbox.",
  "The witty take on big tech stories is the main reason I read this newsletter. It's concise, so not too much cognitive load.",
  "I really enjoy the writing style. It's informative and witty and filled with asides and references that tickle my millennial brain.",
  'The fact is you deliver excellent, compact content with wittiness. Short and sweet so keep it coming.',
  "It's great to get some misc little news from this and that, I don't have time to look it all up myself. Love from Denmark.",
]

export default function ByteSizeCaseStudy() {
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

      <StatsStrip
        stats={[
          { value: '200K', label: 'Subscribers' },
          { value: '60%', label: 'Open rate' },
          { value: '$1.65M', label: 'Projected ARR' },
          { value: '8', label: 'Months' },
        ]}
      />

      {/* ════════ THE PROMPT ════════ */}
      <section className="py-section bg-white">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>The prompt</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              A 5-million-person audience with nothing to read.
            </h2>
            <div className="mt-8 space-y-5 text-body-lg text-neutral-700">
              <p>
                Experts Exchange had tens of thousands of email contacts. Almost
                none of them were engaged. Open rates hovered around 10%. Sends
                were transactional or promotional with no consistent editorial
                identity. The list existed on paper. Nobody relied on it.
              </p>
              <p>
                The audience was 5M+ IT professionals and developers. People
                who follow industry news closely, care about technical depth,
                and have zero tolerance for marketing fluff. If the content
                respected their time and intelligence, the channel could become
                far more valuable than anyone expected.
              </p>
              <p className="text-ink font-medium">
                I created ByteSize from scratch. Concept, brand, voice,
                production, revenue model. All of it.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ THE BRAND ════════ */}
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>The brand</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              Made by people who actually understand tech culture.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <FadeIn className="md:col-span-7">
              <p className="text-body-lg text-neutral-700">
                Every element was designed to signal inside-the-community, not
                marketing-department-reaching-into-it. Dot-matrix typography for
                the wordmark, nodding to early computing. Chip, the 8-bit
                mascot. Retro hardware imagery grounding the brand in IT
                heritage. Tone that balanced genuine expertise with irreverent
                humor.
              </p>
              <p className="mt-5 text-body-lg text-neutral-700">
                Tagline:{' '}
                <span className="text-ink font-medium">
                  Your Weekly Dose of IT Intelligence.
                </span>
              </p>
              <p className="mt-8 text-label uppercase text-neutral-500">
                A sample of the voice
              </p>
              <blockquote className="mt-4 border-l-[3px] border-ember pl-6 text-heading-md text-ink">
                &ldquo;We respectfully decline to use the phrase &lsquo;digital
                transformation journey.&rsquo;&rdquo;
              </blockquote>
            </FadeIn>

            <FadeIn delay={80} className="md:col-span-5">
              <figure className="rounded-md overflow-hidden border border-neutral-200 shadow-inset-hairline bg-white">
                <div className="relative aspect-[800/418]">
                  <Image
                    src="/work/bytesize/hero-brand.png"
                    alt="ByteSize hero brand artwork: dot-matrix wordmark with the Experts Exchange co-brand and the tagline The IT Newsletter That People Actually Read."
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="border-t border-neutral-200 px-6 py-4 text-label uppercase text-neutral-500">
                  The opening spread, issue one
                </figcaption>
              </figure>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ════════ CONTENT ARCHITECTURE ════════ */}
      <section className="py-section-lg bg-white">
        <Container>
          <FadeIn>
            <SectionLabel>Content architecture</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              Every section earns its place.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-700 max-w-2xl">
              Each issue follows a repeatable structure designed for
              scannability, value density, and personality. Every Tuesday,
              five-minute read maximum.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((s, i) => (
              <FadeIn key={s.label} delay={i * 40}>
                <div className="h-full rounded-md border border-neutral-200 bg-off-white p-6 shadow-inset-hairline">
                  <p className="text-label uppercase text-ember">
                    Section 0{i + 1}
                  </p>
                  <h3 className="mt-3 text-heading-md text-ink">{s.label}</h3>
                  <p className="mt-3 text-body text-neutral-600">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ GROWTH CURVE ════════ */}
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>Growth</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[20ch]">
              From dormant list to top revenue channel.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            {/* Open rate transform */}
            <FadeIn className="md:col-span-4">
              <p className="text-label uppercase text-neutral-500">
                Open rate
              </p>
              <div className="mt-4 rounded-md border border-neutral-200 bg-white p-6 shadow-inset-hairline">
                <div className="flex items-end gap-6 h-56">
                  <div className="flex-1 h-full flex flex-col items-center">
                    <span className="text-heading-md text-neutral-500 mb-2">
                      ~10%
                    </span>
                    <div className="flex-1 w-full flex items-end">
                      <div
                        className="w-full rounded-t-sm bg-neutral-300"
                        style={{ height: '16.7%' }}
                      />
                    </div>
                    <span className="mt-3 text-label uppercase text-neutral-500">
                      Before
                    </span>
                  </div>
                  <div className="flex-1 h-full flex flex-col items-center">
                    <span className="text-heading-md text-ember mb-2">
                      60%
                    </span>
                    <div className="flex-1 w-full flex items-end">
                      <div
                        className="w-full rounded-t-sm bg-ember"
                        style={{ height: '100%' }}
                      />
                    </div>
                    <span className="mt-3 text-label uppercase text-ember">
                      After
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-[13px] text-neutral-600">
                  Six-fold lift, stabilized. Not a spike.
                </p>
              </div>
            </FadeIn>

            {/* Subscriber curve */}
            <FadeIn delay={80} className="md:col-span-8">
              <p className="text-label uppercase text-neutral-500">
                Subscribers
              </p>
              <div className="mt-4 rounded-md border border-neutral-200 bg-white p-6 shadow-inset-hairline">
                <div className="flex items-end justify-between gap-2 h-56">
                  {growthData.map((d) => (
                    <div
                      key={d.month}
                      className="flex-1 h-full flex flex-col items-center"
                    >
                      <span className="text-[12px] font-semibold text-ink mb-1 h-4">
                        {d.month === 'M8' ? '200K' : ''}
                      </span>
                      <div className="flex-1 w-full flex items-end">
                        <div
                          className={`w-full rounded-t-sm ${
                            d.month === 'M8' ? 'bg-ember' : 'bg-neutral-300'
                          }`}
                          style={{
                            height: `${(d.value / maxGrowth) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="mt-2 text-[11px] uppercase tracking-wider text-neutral-500">
                        {d.month}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[13px] text-neutral-600">
                  15K &rarr; 60K &rarr; 110K &rarr; 200K. Eight months, no paid
                  acquisition.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="mt-16 max-w-2xl">
            <FadeIn>
              <p className="text-body-lg text-neutral-700">
                Reactivation of dormant contacts through genuinely valuable
                content. Organic referrals from readers who forwarded issues to
                colleagues. Consistent quality that kept unsubscribe rates near
                zero. Voice and tone that stood out from every other tech
                newsletter.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ════════ REVENUE ════════ */}
      <section className="py-section-lg bg-white">
        <Container>
          <FadeIn>
            <SectionLabel>Revenue</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              From content channel to revenue engine.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-700 max-w-2xl">
              I developed the sponsorship model from scratch: packages, pricing,
              sales materials, and the pitch. A highly engaged niche audience
              that advertisers couldn&apos;t reach at this engagement level
              anywhere else. 52 slots per year at 60% open and 2-3% CTR.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {revenue.map((r, i) => (
              <FadeIn key={r.label} delay={i * 40}>
                <div className="rounded-md border border-neutral-200 bg-off-white p-6 shadow-inset-hairline">
                  <p className="text-display-sm-fluid text-ink">{r.value}</p>
                  <p className="mt-2 text-label uppercase text-neutral-500">
                    {r.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ PULL QUOTE ════════ */}
      <section className="py-section bg-off-white border-y border-neutral-200">
        <Container width="narrow">
          <FadeIn>
            <PullQuote
              tone="ember"
              attribution="The thesis, proven"
            >
              Revenue follows engagement, not the other way around.
            </PullQuote>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section className="py-section-lg bg-white">
        <Container>
          <FadeIn>
            <SectionLabel>In the wild</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              Unsolicited, from readers.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 30}>
                <figure className="h-full rounded-md border border-neutral-200 bg-off-white p-6 shadow-inset-hairline">
                  <blockquote className="text-body text-ink leading-relaxed">
                    &ldquo;{t}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-label uppercase text-neutral-500">
                    ByteSize reader
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
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
