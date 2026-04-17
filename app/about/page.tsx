import Image from 'next/image'
import Container from '@/components/Container'
import SectionLabel from '@/components/SectionLabel'
import FadeIn from '@/components/FadeIn'
import ContactBlock from '@/components/ContactBlock'

export const metadata = {
  title: 'About',
  description:
    'Broadcaster turned marketer turned builder. Coach\'s kid, Chicago by way of Tennessee, MBA, running marketing functions end to end with AI as infrastructure.',
}

const chapters = [
  {
    label: 'The beginning',
    heading: 'Coach\'s kid, homeschooled through third grade, comfortable being the youngest in the room.',
    body: [
      `Dad is a college basketball coach. I grew up around older, worldlier
       people from infancy. Athletes, coaches, staff. By the time I was 12
       I\'d been on basketball trips through Germany, Belgium, Holland, the
       Dominican Republic. Saw things a 12-year-old probably shouldn\'t see.
       I\'m glad I did.`,
      `Public school in Cleveland, Tennessee after a stretch at McCallie on
       a basketball scholarship. Basketball team captain. Student section
       leader. PA announcer for the school TV station. Lead anchor on the
       morning news. Voted Mr. CHS senior year. Spoke at graduation.
       Leadership and communication were there before work was.`,
    ],
  },
  {
    label: 'The pivot',
    heading: 'Sports radio at 19, agency at 22, realization that it was all audience work.',
    body: [
      `First job was radio DJ and engineer at Mix 104.1 in Cleveland. At
       MTSU I landed an internship at ESPN Radio Nashville that turned into
       a producer role on weekend NFL and college football coverage. 19 years
       old, running board for a syndicated sports station. Loved it.`,
      `When my parents divorced I moved home, transferred to UT Chattanooga,
       and took a job at a small digital agency on the side. Video guy,
       copywriter, brand maker, across 25+ local clients. Shot TV
       commercials that actually ran on TV. Designed a logo for a pediatric
       clinic that\'s still in use today. By the end of my time there the
       senior people were coming to me for expertise, and I realized: this
       is what I\'d already been doing my whole life. Broadcasting, the
       school TV, the school radio. It was all audience work. "Marketing"
       was just the professional name for it.`,
    ],
  },
  {
    label: 'The run',
    heading: 'Five years at an IT community of 5M, one-way ticket to Chicago, an MBA on the side.',
    body: [
      `Experts Exchange hired me for my podcast production and turned me
       into their marketing lead. Took a dead email list under 10% open
       rate and built ByteSize to 200K subscribers at 60% open in under
       eight months. $1.65M projected ARR. Led an SEO overhaul that upgraded
       71,000 URLs and drove 135% traffic growth. Implemented Amplitude from
       scratch, found the activation moment via A/B test, lifted trial
       signups 30%. Shipped a gamification system end to end, PRD through
       Figma through GTM. Ran positioning on the April Dunford methodology
       and rebuilt the full messaging hierarchy.`,
      `Somewhere in there I bought a one-way ticket to Chicago without
       knowing a single person. Moved into a room in a Wrigleyville house
       and built a life here. My managers at EE were so impressed by the
       boldness they gave me a raise. I finished an MBA from Lee while
       working full time. Four years in, Chicago is home.`,
    ],
  },
  {
    label: 'Now',
    heading: 'Building enterprise buyer intelligence at a Fortune 10 healthtech company. Writing AI tools on the side.',
    body: [
      `Walked in with no healthtech background and built the first-ever
       enterprise buyer intelligence program there. 300+ hours of primary
       audience interviews. A 76-slide persona library across four health
       system verticals. A 39-slide buyer journey architecture mapping the
       5-stage, 7-to-13-month non-linear enterprise buying cycle. A
       proprietary framework called the Four Engines that maps the four
       competing forces every major healthcare purchase has to satisfy.
       All of it is now the GTM foundation for their expansion into a new
       market, and I flew in to lead the in-person sales training that
       rolled it out to the field team.`,
      `I also built two production AI tools while doing it. A competitive
       intelligence aggregator that runs on a schedule, and a content
       recommendation engine grounded in the buyer journey I wrote. The
       tools aren\'t a side project. They\'re the infrastructure that makes
       it possible for one person to run what used to take five. That\'s
       the claim, and the tools are the proof.`,
    ],
  },
]

const principles = [
  {
    title: 'Specificity over vagueness, always.',
    body: 'Numbers before adjectives. $1.65M before "significant." 60% before "industry-leading." If a sentence could live on a stranger\'s portfolio, rewrite it.',
  },
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
    body: 'I don\'t use AI to look clever. I use it to do the work of a team of five while I focus on the strategy no model is going to do for me.',
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
                Broadcaster. Marketer. Builder.
              </h1>
              <p className="mt-8 text-body-lg text-neutral-700 max-w-xl">
                I&apos;ve always been drawn to communication, audience
                understanding, and making things that connect with people.
                The job titles changed. The pattern didn&apos;t.
              </p>
              <p className="mt-4 text-body text-neutral-600 max-w-xl">
                Chicago by way of Cleveland, Tennessee. MBA, Lee University.
                Currently consulting for a Fortune 10 healthtech company and
                actively searching for senior marketing roles.
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
            <SectionLabel>The chapters</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[20ch]">
              The throughline, told straight.
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
              Five things, enforced in my own work.
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
            <h2 className="mt-5 text-display-md-fluid text-ink">
              What I&apos;m looking for.
            </h2>
            <div className="mt-8 space-y-5 text-body-lg text-neutral-700">
              <p>
                Senior PMM, Growth Marketing Manager, Head of Marketing, or
                VP-level roles. Healthtech, B2B SaaS, cybersecurity, growth-stage
                companies. Remote-first. Chicago-based, open to hybrid.
              </p>
              <p>
                I work best at companies where marketing is a real leverage
                point and where shipping is valued over performing. If that
                sounds like you, the contact form is a mailto link at the
                bottom of every page. Send the note.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <ContactBlock />
    </>
  )
}
