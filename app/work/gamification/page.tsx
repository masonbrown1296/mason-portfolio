import Container from '@/components/Container'
import SectionLabel from '@/components/SectionLabel'
import FadeIn from '@/components/FadeIn'
import ContactBlock from '@/components/ContactBlock'
import CaseHero from '@/components/case/CaseHero'
import StatsStrip from '@/components/case/StatsStrip'
import NextPrev from '@/components/case/NextPrev'
import PullQuote from '@/components/case/PullQuote'
import { getProject, getAdjacentProjects } from '@/data/projects'

const project = getProject('gamification')!
const { prev, next } = getAdjacentProjects('gamification')

export const metadata = {
  title: project.title,
  description: project.hook,
}

const phases = [
  {
    n: '01',
    label: 'Points & Rewards',
    body: 'Dashboard, progress bars, level icons, physical rewards, point tracker UI, toast notifications for level-ups. The foundation everyone sees first.',
  },
  {
    n: '02',
    label: 'Achievements & Challenges',
    body: 'Achievement badge system, seasonal challenges with bundled tasks, time-limited rewards, per-achievement progress tracking.',
  },
  {
    n: '03',
    label: 'Certifications & Activity',
    body: 'Topic certification badges with new tiers (Novice through Legend), activity log, overview dashboard, expanded levels page.',
  },
  {
    n: '04',
    label: 'Social & Trophy Room',
    body: 'Two-click social sharing from the dashboard. Standalone trophy room page for external sharing on LinkedIn, X, and resumes.',
  },
  {
    n: '05',
    label: 'Profile Integration',
    body: 'New React profile page showcasing accomplishments. Gamification dashboard replaces the legacy home page as the default entry point.',
  },
]

const tiers = [
  { name: 'Bronze', range: '1-25', icon: '/gamification-icons/level-icons/13.svg' },
  { name: 'Silver', range: '26-50', icon: '/gamification-icons/level-icons/38.svg' },
  { name: 'Gold', range: '51-75', icon: '/gamification-icons/level-icons/63.svg' },
  { name: 'Amber', range: '76-100', icon: '/gamification-icons/level-icons/88.svg' },
  { name: 'Platinum', range: '101-125', icon: '/gamification-icons/level-icons/113.svg' },
  { name: 'Diamond', range: '126-150', icon: '/gamification-icons/level-icons/138.svg' },
  { name: 'Emerald', range: '151-175', icon: '/gamification-icons/level-icons/163.svg' },
]

// Progression strip — shows the tier-reset moments across all 175 levels.
const progression = [1, 25, 50, 75, 100, 125, 150, 175]

const components = [
  {
    t: '175-level progression',
    b: '25 unique icon designs across 7 tiers. Icons reset with each new tier to create recurring milestone moments.',
  },
  {
    t: 'Physical reward ladder',
    b: 'T-shirts, hats, hoodies, mugs, backpacks, portable monitors, Funko Pops, framed 1M-point certificate. 15+ tiers of actual swag.',
  },
  {
    t: 'Overview dashboard',
    b: 'Single page consolidating level progress, global/country rank, Expert Status, activity log, endorsements. Tabbed for depth.',
  },
  {
    t: '90+ achievement badges',
    b: 'Hexagonal pixel-art badges with tiered progression (Advisor → Tutor → Teacher → Mentor). Native to the developer aesthetic.',
  },
  {
    t: 'Seasonal challenges',
    b: '15-day time-limited achievement sets with exclusive completion rewards. Startup challenges permanent, seasonal rotates.',
  },
  {
    t: '20-tier topic certifications',
    b: 'Metallic badges designed for LinkedIn, X, and resumes. Bronze to iridescent gradient as tiers increase.',
  },
  {
    t: 'Trophy room',
    b: 'Dark, cinematic standalone sharing page. Carousel navigation, tabs for Certifications / Levels / Achievements / Awards.',
  },
]

const outcomes = [
  {
    t: 'Clearer participation path',
    b: 'Users could see where they stood, what they had achieved, and what they could work toward next. Passive scorekeeping became visible progression.',
  },
  {
    t: 'Reduced complaints to near-zero',
    b: 'The old system generated consistent complaints about lack of recognition. After launch, those complaints effectively disappeared.',
  },
  {
    t: 'System remains live',
    b: 'The gamification system continues to drive engagement on the platform today, long after the initial launch.',
  },
]

export default function GamificationCaseStudy() {
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
          { value: '5', label: 'Phases' },
          { value: '7', label: 'System components' },
          { value: '+25%', label: 'User activity' },
          { value: '+20%', label: 'Reactivations' },
        ]}
      />

      {/* ════════ THE PROMPT ════════ */}
      <section className="py-section bg-white">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>The prompt</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              A community that forgot how to reward its people.
            </h2>
            <div className="mt-8 space-y-5 text-body-lg text-neutral-700">
              <p>
                Experts Exchange had a 25-year history of rewarding contributors.
                Then it stopped. In 2016, the company shifted to a
                &ldquo;professional&rdquo; strategy, stripped visibility from
                the points system, and eliminated physical rewards entirely.
                Engagement cratered.
              </p>
              <p>
                Legacy users were vocal:{' '}
                <span className="italic text-ink">
                  &ldquo;I used to love EE when they gave out T-shirts, now I
                  don&apos;t see the point in using it anymore.&rdquo;
                </span>{' '}
                New users arriving from organic search had no hook to keep them
                engaged beyond their initial question.
              </p>
              <p className="text-ink font-medium">
                This project wasn&apos;t assigned to me. I identified the gap,
                built the business case internally, and led the entire
                initiative from concept through launch.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ APPROACH — 5 PHASE TIMELINE ════════ */}
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>The approach</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              Five phases. Zero downtime. No big-bang launch.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-700 max-w-2xl">
              Each phase introduced new functionality while preserving
              stability. The PRD I wrote sequenced the work so every release
              layered cleanly on the last, and the team could show internal
              wins at every step.
            </p>
          </FadeIn>

          {/* Timeline */}
          <FadeIn delay={40}>
            <div className="mt-16 relative">
              {/* Connecting line */}
              <div
                className="hidden lg:block absolute left-0 right-0 top-5 h-[2px] bg-neutral-300"
                aria-hidden
              />
              <ol className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-3">
                {phases.map((p) => (
                  <li
                    key={p.n}
                    className="relative rounded-md border border-neutral-200 bg-white p-6 shadow-inset-hairline"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white text-[14px] font-semibold"
                        aria-hidden
                      >
                        {p.n}
                      </span>
                      <span className="text-label uppercase text-neutral-500">
                        Phase
                      </span>
                    </div>
                    <h3 className="mt-4 text-heading-sm text-ink">{p.label}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-neutral-600">
                      {p.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ TIER LADDER ════════ */}
      <section className="py-section-lg bg-white">
        <Container>
          <FadeIn>
            <SectionLabel>The tier ladder</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              175 levels. 7 tiers. 25 unique icons per tier.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-700 max-w-2xl">
              Icons reset every tier so milestone moments happen 7 times, not
              once. Physical rewards attach at every tier. The only technical
              community offering real swag to all contributors, not just top
              performers.
            </p>
          </FadeIn>

          <FadeIn delay={40}>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
              {tiers.map((t, i) => (
                <div
                  key={t.name}
                  className="rounded-md border border-neutral-200 bg-off-white p-5 shadow-inset-hairline"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.icon}
                    alt=""
                    className="h-20 w-20 object-contain mb-4"
                    aria-hidden
                  />
                  <p className="text-label uppercase text-neutral-400">
                    Tier 0{i + 1}
                  </p>
                  <p className="mt-1 text-heading-sm text-ink">{t.name}</p>
                  <p className="mt-1 text-[13px] text-neutral-500 tabular-nums">
                    Levels {t.range}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Progression strip — tier-reset moments at levels 1/25/50/75/100/125/150/175. */}
          <FadeIn delay={60}>
            <div className="mt-16 rounded-md border border-neutral-200 bg-off-white p-8 shadow-inset-hairline">
              <p className="text-label uppercase text-ember">
                Milestone moments
              </p>
              <h3 className="mt-3 text-heading-sm text-ink">
                Every 25 levels, the visual resets.
              </h3>
              <p className="mt-3 text-body text-neutral-600 max-w-2xl">
                Seven recurring celebrations across the full 175-level arc,
                instead of one terminal finish line. Each reset hands users a
                fresh icon vocabulary and a new physical reward.
              </p>
              <div className="mt-8 grid grid-cols-4 sm:grid-cols-8 gap-4">
                {progression.map((lvl) => (
                  <div
                    key={lvl}
                    className="flex flex-col items-center text-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/gamification-icons/level-icons/${lvl}.svg`}
                      alt=""
                      className="h-16 w-16 object-contain"
                      aria-hidden
                    />
                    <p className="mt-3 text-label uppercase text-neutral-400">
                      Level
                    </p>
                    <p className="text-[14px] font-semibold text-ink tabular-nums">
                      {lvl}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ CERTIFICATION BADGES ════════ */}
      <section className="py-section-lg bg-white border-t border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>Certification badges</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              Twenty topic credentials, built to travel.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-700 max-w-2xl">
              Each topic gets a 20-tier climb from bronze through iridescent.
              Designed for LinkedIn, X, and resume use so every earned badge
              keeps working outside the platform.
            </p>
          </FadeIn>

          <FadeIn delay={40}>
            <div className="mt-14 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-4">
              {Array.from({ length: 20 }, (_, i) => {
                const num = String(i + 1).padStart(2, '0')
                return (
                  <div
                    key={num}
                    className="flex flex-col items-center text-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/gamification-icons/certification-badges/badge-${num}.svg`}
                      alt=""
                      className="h-20 w-20 object-contain"
                      aria-hidden
                    />
                    <p className="mt-2 text-[11px] uppercase tracking-wider text-neutral-400 tabular-nums">
                      Tier {num}
                    </p>
                  </div>
                )
              })}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ COMPONENTS ════════ */}
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>What I built</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              Seven interconnected components, all in Figma.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-700 max-w-2xl">
              Wrote the PRD, led the competitive research, designed every screen
              in Figma, coordinated with engineering through dev, and owned the
              phased GTM rollout.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((c, i) => (
              <FadeIn key={c.t} delay={i * 30}>
                <div className="h-full rounded-md border border-neutral-200 bg-white p-6 shadow-inset-hairline">
                  <span className="text-label uppercase text-ember">
                    Component 0{i + 1}
                  </span>
                  <h3 className="mt-3 text-heading-sm text-ink">{c.t}</h3>
                  <p className="mt-3 text-body text-neutral-600">{c.b}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ PULL QUOTE ════════ */}
      <section className="py-section bg-white border-b border-neutral-200">
        <Container width="narrow">
          <FadeIn>
            <PullQuote tone="ember" attribution="Target user story, from PRD">
              I already need an answer, I might as well get something out of it
              if I can. After asking my two questions, I realize that not only
              am I getting a free shirt, but this is also a pretty solid
              resource.
            </PullQuote>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ RESULTS ════════ */}
      <section className="py-section-lg bg-off-white border-b border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>Results</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              What it delivered after rollout.
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { v: '+25%', l: 'Overall user activity' },
              { v: '+20%', l: 'Account reactivations' },
              { v: '5', l: 'Phases, zero downtime' },
            ].map((r) => (
              <div
                key={r.l}
                className="rounded-md border border-neutral-200 bg-white p-8 shadow-inset-hairline"
              >
                <p className="text-display-md-fluid text-ink">{r.v}</p>
                <p className="mt-2 text-label uppercase text-neutral-500">
                  {r.l}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((o, i) => (
              <FadeIn key={o.t} delay={i * 40}>
                <div>
                  <p className="text-label uppercase text-ember">
                    Outcome 0{i + 1}
                  </p>
                  <h3 className="mt-3 text-heading-sm text-ink">{o.t}</h3>
                  <p className="mt-3 text-body text-neutral-600">{o.b}</p>
                </div>
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
