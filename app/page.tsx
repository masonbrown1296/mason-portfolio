import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Mic, Megaphone, Terminal } from 'lucide-react'
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

const throughline = [
  {
    icon: Mic,
    chapter: 'Broadcaster',
    years: '2015 – 2017',
    title: 'Sports radio at 19.',
    body:
      'State-championship broadcasting senior year. Learned to read a room in real time, find the story, and deliver it clean on the first take.',
  },
  {
    icon: Megaphone,
    chapter: 'Marketer',
    years: '2017 – present',
    title: 'Audience work, different tools.',
    body:
      'Local agency, then five years running marketing for a 5M-user IT community, now building enterprise buyer intelligence at a Fortune 10 healthtech company.',
  },
  {
    icon: Terminal,
    chapter: 'Builder',
    years: '2024 – present',
    title: 'The tools that make it scale.',
    body:
      'Two production AI web apps running on real infrastructure. The reason I can credibly say I run an entire marketing function alone.',
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
                  Four projects. Each one the deepest I&apos;ve gone.
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

      {/* ════════ THROUGHLINE ════════ */}
      <section className="py-section-lg bg-white border-t border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>The throughline</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              Broadcaster turned marketer turned builder.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-600 max-w-xl">
              Same instinct across three chapters: figure out who&apos;s in the
              room, figure out what they need, and deliver it without performing.
            </p>
          </FadeIn>

          <ol className="mt-16 relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Connecting line on desktop — shows the career as a progression. */}
            <div
              className="hidden md:block absolute left-0 right-0 top-7 h-[2px] bg-neutral-200"
              aria-hidden
            />
            {throughline.map((t, i) => {
              const Icon = t.icon
              return (
                <FadeIn key={t.chapter} delay={i * 60}>
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
                          {t.years}
                        </p>
                      </div>
                    </div>
                    <h3 className="mt-6 text-heading-md text-ink">
                      {t.chapter}
                    </h3>
                    <p className="mt-1 text-[15px] font-medium text-ink">
                      {t.title}
                    </p>
                    <p className="mt-4 text-body text-neutral-600">{t.body}</p>
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
