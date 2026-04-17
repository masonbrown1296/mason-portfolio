import Image from 'next/image'
import Container from '@/components/Container'
import SectionLabel from '@/components/SectionLabel'
import FadeIn from '@/components/FadeIn'
import ContactBlock from '@/components/ContactBlock'

export const metadata = {
  title: 'About',
  description:
    'Marketer and builder. Chicago, remote-first. Running marketing functions end to end with AI tooling as infrastructure.',
}

const chapters = [
  {
    label: '2020-2025',
    heading: 'Five years running marketing at an IT community of 5 million developers.',
    body: [
      `Experts Exchange hired me to lead marketing for a community product in
       a crowded developer tools market. I inherited a dead email list under
       10% open rate. In eight months I built ByteSize to 200K subscribers at
       60% open. $1.65M projected ARR.`,
      `From there the scope kept widening. I led an SEO overhaul that upgraded
       71,000 URLs and drove 135% traffic growth. Implemented Amplitude from
       scratch, found the activation moment via A/B test, lifted trial signups
       30%. Shipped a gamification system end to end, PRD through Figma
       through GTM. Ran positioning on the April Dunford methodology and
       rebuilt the full messaging hierarchy.`,
      `Somewhere in there I bought a one-way ticket to Chicago without knowing
       a single person and built a life here. Finished an MBA from Lee while
       working full time. Four years in, Chicago is home.`,
    ],
  },
  {
    label: '2025-present',
    heading: 'Built the first-ever enterprise buyer intelligence program at a Fortune 10 healthtech company. Shipped the AI tools that made it possible.',
    body: [
      `Walked in with no healthtech background. 300+ hours of primary audience
       interviews. A 76-slide persona library across four health system
       verticals. A 39-slide buyer journey architecture mapping the 5-stage,
       7-to-13-month non-linear enterprise buying cycle. A proprietary
       framework called the Four Engines that maps the four competing forces
       every major healthcare purchase has to satisfy. All of it is now the
       GTM foundation for their expansion into a new market. I flew in to
       lead the in-person sales training that rolled it out to the field
       team.`,
      `I also shipped two production AI tools while the program was taking
       shape. A competitive intelligence aggregator that runs on a schedule,
       and a content recommendation engine grounded in the buyer journey I
       wrote. The tools are not a side project. They are the infrastructure
       that makes it possible for one person to run what used to take five.
       That is the claim. The tools are the proof.`,
    ],
  },
]

const principles = [
  {
    title: 'Say the obvious thing nobody\'s saying.',
    body: 'Every job I\'ve had, I walked in and noticed a thing that was broken that nobody was naming. Then I fixed it. That\'s been the whole career, compressed.',
  },
  {
    title: 'Ship, then refine.',
    body: 'The best plan that never ships loses to a mediocre plan in market. The best thinking I\'ve done happened after launch, not before.',
  },
  {
    title: 'AI is infrastructure, not novelty.',
    body: 'I don\'t use AI to look clever. I use it to do the work of a team of five while I focus on the strategy. No model is doing that part for me.',
  },
  {
    title: 'Range is real or it\'s nothing.',
    body: 'Newsletter growth, SEO, gamification, rebrand, positioning, enterprise buyer intelligence, AI tooling, sales training. Not a specialist pretending to have range. An operator who has done the work across the funnel.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="pt-[calc(var(--nav-height)+64px)] pb-section-lg bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <FadeIn trigger="mount" className="md:col-span-7">
              <SectionLabel>About</SectionLabel>
              <h1 className="mt-5 text-display-lg-fluid text-ink max-w-[18ch]">
                Marketer. Builder.
              </h1>
              <p className="mt-8 text-body-lg text-neutral-700 max-w-xl">
                I run marketing functions end to end and build the AI tools
                that make the work possible. Range is real or it&apos;s
                nothing.
              </p>
              <p className="mt-4 text-body text-neutral-600 max-w-xl">
                Chicago-based. MBA, Lee University. Currently consulting for
                a Fortune 10 healthtech company and looking for the next seat
                where the function is mine to own.
              </p>
            </FadeIn>

            <FadeIn trigger="mount" delay={120} className="md:col-span-5">
              <div className="gradient-tile gradient-about rounded-md overflow-hidden shadow-inset-hairline">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/headshot.jpeg"
                    alt="Portrait of Mason Brown"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    priority
                    className="object-cover mix-blend-multiply"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ════════ CHAPTERS ════════ */}
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>The work, in order</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              Two chapters. Same operator.
            </h2>
          </FadeIn>

          <div className="mt-16 space-y-20">
            {chapters.map((c, i) => (
              <FadeIn key={c.label} delay={i * 40}>
                <article>
                  <p className="text-label uppercase text-ember">{c.label}</p>
                  <h3 className="mt-4 text-heading-lg md:text-display-sm-fluid text-ink">
                    {c.heading}
                  </h3>
                  <div className="mt-6 space-y-4 text-body-lg text-neutral-700">
                    {c.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ PRINCIPLES ════════ */}
      <section className="py-section-lg bg-white">
        <Container>
          <FadeIn>
            <SectionLabel>What I believe</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              Four things, enforced in my own work.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {principles.map((p, i) => (
              <FadeIn key={p.title} delay={i * 60}>
                <div className="flex gap-6">
                  <span className="text-label text-neutral-400 min-w-[32px] pt-2">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-heading-md text-ink">{p.title}</h3>
                    <p className="mt-3 text-body text-neutral-600 max-w-md">
                      {p.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ LOOKING FOR ════════ */}
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>Right now</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              A seat where the outcome is mine.
            </h2>
            <div className="mt-8 space-y-5 text-body-lg text-neutral-700">
              <p>
                Senior PMM, Growth Marketing Manager, Head of Marketing, or
                VP-level. Healthtech, B2B SaaS, cybersecurity, growth-stage
                companies. Remote-first. Chicago-based, open to hybrid.
              </p>
              <p>
                What I want is ownership. A function that is mine to build or
                rebuild, a number on the line that I am accountable for, and
                a team or a solo seat where shipping is how we keep score. My
                best work has always come when the weight of the outcome sat
                on my desk. I want more of that, not less.
              </p>
              <p>
                If that is the seat you are filling, the contact button lives
                at the bottom of every page. Send the note.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <ContactBlock />
    </>
  )
}
