import Link from 'next/link'
import { ArrowRight, ArrowUpRight, LineChart, Compass, Cpu } from 'lucide-react'
import Container from '@/components/Container'
import Button from '@/components/Button'
import CopyEmailButton from '@/components/CopyEmailButton'
import SectionLabel from '@/components/SectionLabel'
import FadeIn from '@/components/FadeIn'
import CredibilityBar from '@/components/CredibilityBar'
import CaseStudyTile from '@/components/CaseStudyTile'
import BuildTile from '@/components/BuildTile'
import AboutTeaser from '@/components/AboutTeaser'
import ContactBlock from '@/components/ContactBlock'
import { projects, tools, getProject } from '@/data/projects'

const chapters = [
  {
    icon: LineChart,
    years: '2020 – 2025',
    where: 'Experts Exchange',
    title: 'Five years running marketing at a 5M-user community.',
    body:
      'Inherited a dead list under 10% open rate. Eight months later, ByteSize sat at 200K subscribers, 60% open, $1.65M projected ARR. SEO overhaul across 71K URLs drove 135% traffic growth. Gamification system shipped end to end, PRD through GTM.',
  },
  {
    icon: Compass,
    years: '2025 – present',
    where: 'Fortune 10 Healthtech',
    title: 'The first enterprise buyer intelligence program at a Fortune 10 healthtech company.',
    body:
      '300+ hours of primary audience interviews. A 76-slide persona library across four health system verticals. A 5-stage buyer journey architecture now powering their new-market expansion. Flew in to lead the sales training that rolled it out.',
  },
  {
    icon: Cpu,
    years: '2024 – present',
    where: 'On the side',
    title: 'Two production AI tools that make the solo claim credible.',
    body:
      'A competitive intelligence aggregator that runs on a schedule. A content recommendation engine grounded in a buyer journey I wrote. Real infrastructure, not prompt templates. The proof that one operator can run what used to take a team of five.',
  },
]

export default function Home() {
  const healthcare = getProject('healthcare')!
  const bytesize = getProject('bytesize')!
  const positioning = getProject('positioning')!

  return (
    <>
      {/* ════════ HERO ════════ */}
      <section
        className="gradient-tile gradient-home-hero relative flex items-end min-h-[min(92vh,900px)] pt-[var(--nav-height)]"
      >
        <Container>
          <div className="py-section-sm lg:py-section-lg">
            <FadeIn trigger="mount" delay={80}>
              <SectionLabel className="text-neutral-700">
                Marketing leader. Chicago, remote-first.
              </SectionLabel>
            </FadeIn>

            <FadeIn trigger="mount" delay={200}>
              <h1 className="mt-6 text-display-xl-fluid text-ink max-w-[14ch]">
                A marketer who ships.
              </h1>
            </FadeIn>

            <FadeIn trigger="mount" delay={380}>
              <p className="mt-8 text-body-lg text-neutral-700 max-w-xl">
                I build marketing functions end to end, from brand through
                growth through enablement. I also build the AI tools that make
                the work possible.
              </p>
            </FadeIn>

            <FadeIn trigger="mount" delay={520}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <CopyEmailButton variant="primary" size="lg" showIcon>
                  Get in touch
                </CopyEmailButton>
                <Button
                  href="#work"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight size={16} strokeWidth={1.75} />}
                >
                  See the work
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ════════ CREDIBILITY BAR ════════ */}
      <CredibilityBar />

      {/* ════════ FEATURED WORK ════════ */}
      <section id="work" className="py-section-lg bg-white">
        <Container>
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
              <div>
                <SectionLabel>Selected Work</SectionLabel>
                <h2 className="mt-5 text-display-md-fluid text-ink max-w-[20ch]">
                  Four of my favorite projects.
                </h2>
              </div>
              <Link
                href="/work"
                className="inline-flex items-center gap-1 text-body font-medium text-ink hover:text-ember transition-colors duration-micro group shrink-0"
              >
                <span className="link-underline">All case studies</span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.75}
                  className="transition-transform duration-standard ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-6 md:gap-8">
            {/* Featured — Healthcare */}
            <FadeIn>
              <CaseStudyTile project={healthcare} featured />
            </FadeIn>

            {/* Row of two */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <FadeIn delay={60}>
                <CaseStudyTile project={bytesize} />
              </FadeIn>
              <FadeIn delay={140}>
                <CaseStudyTile project={positioning} />
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════ BUILD BAND ════════ */}
      <section id="build" className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container>
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
              <div>
                <SectionLabel>Build</SectionLabel>
                <h2 className="mt-5 text-display-md-fluid text-ink max-w-[20ch]">
                  Tools I built to run marketing alone.
                </h2>
                <p className="mt-5 text-body-lg text-neutral-600 max-w-xl">
                  Two production web apps. Real infrastructure. The reason I
                  can credibly say I run a marketing function alone.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <FadeIn>
              <BuildTile tool={tools[0]} />
            </FadeIn>
            <FadeIn delay={100}>
              <BuildTile tool={tools[1]} />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ════════ THE WORK, IN ORDER ════════ */}
      <section className="py-section-lg bg-white border-t border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>The work, in order</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              Three chapters. Same operator.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-600 max-w-xl">
              Scope widens, seat changes, the operator doesn&apos;t. Each
              chapter below is a number on a line I was accountable for.
            </p>
          </FadeIn>

          <ol className="mt-16 relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Connecting line on desktop — shows the career as a progression. */}
            <div
              className="hidden md:block absolute left-0 right-0 top-7 h-[2px] bg-neutral-200"
              aria-hidden
            />
            {chapters.map((c, i) => {
              const Icon = c.icon
              return (
                <FadeIn key={c.years} delay={i * 60}>
                  <li className="relative rounded-md border border-neutral-200 bg-off-white p-7 shadow-inset-hairline h-full flex flex-col">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-ink text-white shrink-0">
                        <Icon size={22} strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="text-label uppercase text-ember">
                          Chapter 0{i + 1}
                        </p>
                        <p className="mt-1 text-[13px] text-neutral-500 tabular-nums">
                          {c.years}
                        </p>
                      </div>
                    </div>
                    <p className="mt-6 text-label uppercase text-neutral-400">
                      {c.where}
                    </p>
                    <h3 className="mt-2 text-heading-sm text-ink">{c.title}</h3>
                    <p className="mt-4 text-body text-neutral-600">{c.body}</p>
                  </li>
                </FadeIn>
              )
            })}
          </ol>
        </Container>
      </section>

      {/* ════════ ABOUT TEASER ════════ */}
      <AboutTeaser />

      {/* ════════ CONTACT ════════ */}
      <ContactBlock />
    </>
  )
}
