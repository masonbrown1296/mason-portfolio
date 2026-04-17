import Container from '@/components/Container'
import SectionLabel from '@/components/SectionLabel'
import FadeIn from '@/components/FadeIn'
import ContactBlock from '@/components/ContactBlock'
import CaseHero from '@/components/case/CaseHero'
import StatsStrip from '@/components/case/StatsStrip'
import NextPrev from '@/components/case/NextPrev'
import PullQuote from '@/components/case/PullQuote'
import { getProject, getAdjacentProjects } from '@/data/projects'

const project = getProject('positioning')!
const { prev, next } = getAdjacentProjects('positioning')

export const metadata = {
  title: project.title,
  description: project.hook,
}

const segments = [
  {
    name: 'Developer',
    authority: 'Low',
    titles: ['Software Engineer', 'Systems Engineer'],
    personas: ['Troubleshooter', 'Lurker', 'Knowledge Seeker'],
  },
  {
    name: 'Administrator',
    authority: 'Medium-Low',
    titles: ['Sys Admin', 'Network Admin', 'IT Admin', 'Tech Support'],
    personas: ['Troubleshooter', 'Prepper', 'Lurker', 'Knowledge Seeker'],
  },
  {
    name: 'IT Manager',
    authority: 'Medium-High',
    titles: ['IT Support Manager', 'Technical Project Lead'],
    personas: ['Researcher', 'Prepper', 'Educator', 'Selective'],
  },
  {
    name: 'IT Director',
    authority: 'High',
    titles: ['CIO', 'CISO', 'CTO'],
    personas: ['Researcher', 'Prepper'],
  },
  {
    name: 'Consultant',
    authority: 'High',
    titles: ['Owner', 'IT Specialist', 'CEO'],
    personas: ['Troubleshooter', 'Researcher', 'Prepper', 'Volume', 'Knowledge Seeker'],
  },
]

const personas = [
  {
    name: 'Troubleshooter',
    body: 'Uses EE specifically for asking questions. High monthly activity, constantly bouncing issues off other members.',
  },
  {
    name: 'Researcher',
    body: 'Engages to conduct research for specific IT projects. Gathers information, seeks insights, explores solutions.',
  },
  {
    name: 'Prepper',
    body: 'Maintains membership as insurance for IT emergencies. Keeps access active as a reliable last resort.',
  },
  {
    name: 'Volume Contributor',
    body: 'Answers a high number of questions across topics. Motivated by earning points and recognition.',
  },
  {
    name: 'Educator',
    body: 'Prefers creating longform articles or tutorials. Goal is to educate others or showcase work to potential clients.',
  },
  {
    name: 'Community Builder',
    body: 'Power members who feel ownership of the platform. Moderate forums, organize events, guide other users.',
  },
]

const hierarchy = [
  {
    tier: 'One-liner',
    length: '~15 words',
    text: 'Experts Exchange is a private community-driven platform where industry experts give advice and help solve complex technical problems.',
  },
  {
    tier: 'Elevator',
    length: '~35 words',
    text: 'Experts Exchange is a private community-driven platform where industry experts give advice and help solve complex technical problems. By supporting a private platform and offering incentives for high-quality assistance, EE has created an environment that enables focused, transformative discussions.',
  },
  {
    tier: '100-word description',
    length: '~100 words',
    text: 'Adds the Q&A forum framing, the incentive system (points, awards, recognition), and the environment differentiators: private, troll-free, ad-free, noise-free. Introduces the concept of authentic connections producing real-world results.',
  },
  {
    tier: '500-word description',
    length: '~500 words',
    text: 'Expands into all four value themes: access to private expert community, cost-effective alternative to consulting, career advancement through MVP status, and peace of mind from comprehensive problem resolution. Includes customer segments and competitive differentiation.',
  },
]

const competitive = [
  {
    name: 'Stack Overflow',
    claim: 'Largest developer community with millions of questions and answers.',
    response:
      'EE provides a private, curated environment where verified experts deliver personalized solutions. Stack Overflow offers volume; we offer quality, focus, and direct expert engagement tailored to your specific environment.',
  },
  {
    name: 'AI Tools',
    claim: 'Instant answers to technical questions, 24/7.',
    response:
      'AI excels at general information. Our human experts provide nuanced insights, real-world experience, and solutions adapted to specific business contexts that AI cannot replicate. Complex problems require human judgment.',
  },
  {
    name: 'Consulting Firms',
    claim: 'Enterprise-grade expertise with dedicated support.',
    response:
      'Same level of expertise at a fraction of the cost with faster response times. Subscription model provides unlimited access to hundreds of experts, eliminating the delays and expense of traditional consulting.',
  },
  {
    name: 'Quora',
    claim: 'Access to experts across all industries.',
    response:
      'EE focuses specifically on technology professionals with verified expertise. Quora covers broad topics; we provide deep, specialized technical knowledge from practitioners who work with these technologies daily.',
  },
]

export default function PositioningCaseStudy() {
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
          { value: '+50%', label: 'First-time signups' },
          { value: '+35%', label: 'Daily traffic' },
          { value: '+351%', label: 'Question posting' },
          { value: '5', label: 'Segments' },
        ]}
      />

      {/* ════════ THE PROMPT ════════ */}
      <section className="py-section bg-white">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>The prompt</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              A platform that forgot what it was for.
            </h2>
            <div className="mt-8 space-y-5 text-body-lg text-neutral-700">
              <p>
                Experts Exchange had drifted into vague
                &ldquo;community&rdquo; messaging when the actual value was
                expert Q&amp;A. A previous initiative reframed the product as a
                &ldquo;community of tech professionals&rdquo; rather than what
                it was: a premium Q&amp;A platform where you could get niche
                technical problems solved by verified experts.
              </p>
              <p>
                Meanwhile, AI tools were entering the market offering instant
                answers. The competitive landscape was shifting fast, and EE&apos;s
                messaging gave users no reason to choose it over ChatGPT, Stack
                Overflow, or just Googling harder.
              </p>
              <p className="text-ink font-medium">
                I applied the April Dunford positioning methodology to rebuild
                the strategic foundation from scratch.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ BEFORE / AFTER ════════ */}
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>Diagnosis</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[26ch]">
              What the messaging said vs. what users valued.
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <FadeIn>
              <div className="h-full rounded-md border border-neutral-200 bg-white p-8 shadow-inset-hairline">
                <p className="text-label uppercase text-[#b8302d]">
                  What the messaging said
                </p>
                <p className="mt-5 text-heading-md text-ink italic border-l-[3px] border-[#b8302d] pl-5">
                  &ldquo;Contribute to the community of tech professionals.&rdquo;
                </p>
                <ul className="mt-8 space-y-3 text-body text-neutral-600">
                  <li>• Positioned as community-driven with no clear value proposition</li>
                  <li>• CTA asked users to contribute, not to get value</li>
                  <li>• Messaging was inward-facing, about the community&apos;s identity</li>
                  <li>• Zero mention of what you actually get by joining</li>
                  <li>• Indistinguishable from a dozen other tech forums</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={60}>
              <div className="h-full rounded-md border border-neutral-200 bg-white p-8 shadow-inset-hairline">
                <p className="text-label uppercase text-[#0d6e4a]">
                  What users actually valued
                </p>
                <p className="mt-5 text-heading-md text-ink italic border-l-[3px] border-[#0d6e4a] pl-5">
                  &ldquo;Get a real answer from a real expert.&rdquo;
                </p>
                <ul className="mt-8 space-y-3 text-body text-neutral-600">
                  <li>• Solving complex, niche problems that Google and AI couldn&apos;t</li>
                  <li>• Access to verified human experts with real-world context</li>
                  <li>• Private, noise-free environment (no trolls, no ads, no fluff)</li>
                  <li>• Earning recognition and rewards for sharing expertise</li>
                  <li>• Cost savings vs. consulting firms and vendor support contracts</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ════════ SEGMENTS ════════ */}
      <section className="py-section-lg bg-white">
        <Container>
          <FadeIn>
            <SectionLabel>Segmentation</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              Five segments, sorted by role and authority.
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {segments.map((s, i) => (
              <FadeIn key={s.name} delay={i * 30}>
                <div className="h-full rounded-md border border-neutral-200 bg-off-white p-5 shadow-inset-hairline">
                  <p className="text-label uppercase text-ember">
                    Segment 0{i + 1}
                  </p>
                  <h3 className="mt-3 text-heading-sm text-ink">{s.name}</h3>
                  <p className="mt-2 text-[12px] uppercase tracking-wider text-neutral-500">
                    Authority: {s.authority}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.titles.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[11px] font-medium text-neutral-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-neutral-200">
                    <p className="text-[11px] uppercase tracking-wider text-neutral-400">
                      Personas
                    </p>
                    <p className="mt-2 text-[13px] text-neutral-600">
                      {s.personas.join(', ')}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ PERSONAS ════════ */}
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>Behavioral personas</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              Six ways people actually use the platform.
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((p, i) => (
              <FadeIn key={p.name} delay={i * 30}>
                <div className="h-full rounded-md border border-neutral-200 bg-white p-6 shadow-inset-hairline">
                  <p className="text-label uppercase text-ember">
                    Persona 0{i + 1}
                  </p>
                  <h3 className="mt-3 text-heading-sm text-ink">{p.name}</h3>
                  <p className="mt-3 text-body text-neutral-600">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ MESSAGING HIERARCHY ════════ */}
      <section className="py-section-lg bg-white">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>Messaging hierarchy</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              One sentence to 500 words. Everyone speaks from the same
              foundation.
            </h2>
          </FadeIn>

          <ol className="mt-14 space-y-5">
            {hierarchy.map((h, i) => (
              <FadeIn key={h.tier} delay={i * 40}>
                <li className="rounded-md border border-neutral-200 bg-off-white p-8 shadow-inset-hairline">
                  <div className="flex items-baseline justify-between flex-wrap gap-3">
                    <div className="flex items-baseline gap-4">
                      <span className="text-label uppercase text-ember font-mono">
                        T{i + 1}
                      </span>
                      <h3 className="text-heading-sm text-ink">{h.tier}</h3>
                    </div>
                    <span className="text-label uppercase text-neutral-400">
                      {h.length}
                    </span>
                  </div>
                  <p className="mt-5 text-body-lg text-neutral-700 leading-relaxed">
                    {h.text}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </section>

      {/* ════════ COMPETITIVE MESSAGING ════════ */}
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>Competitive messaging</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              Acknowledge the alternative. Redirect to the difference.
            </h2>
          </FadeIn>

          <div className="mt-14 space-y-5">
            {competitive.map((c, i) => (
              <FadeIn key={c.name} delay={i * 40}>
                <div className="rounded-md border border-neutral-200 bg-white p-6 md:p-8 shadow-inset-hairline">
                  <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] gap-5 md:gap-8 items-start">
                    <div>
                      <p className="text-label uppercase text-neutral-400">
                        Vs.
                      </p>
                      <h3 className="mt-2 text-heading-sm text-ink">
                        {c.name}
                      </h3>
                    </div>
                    <div>
                      <p className="text-label uppercase text-neutral-500">
                        Their claim
                      </p>
                      <p className="mt-2 text-body text-neutral-600 italic">
                        {c.claim}
                      </p>
                    </div>
                    <div>
                      <p className="text-label uppercase text-ember">
                        Our response
                      </p>
                      <p className="mt-2 text-body text-neutral-700">
                        {c.response}
                      </p>
                    </div>
                  </div>
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
            <PullQuote tone="ember" attribution="The lesson">
              Positioning drift happens slowly, then all at once. When internal
              ideology replaces user value, the metrics follow.
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
              What it delivered after deployment.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-700 max-w-2xl">
              Metrics measured after the repositioned messaging was deployed
              across acquisition, product, and marketing surfaces.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { v: '+50%', l: 'First-time signups' },
              { v: '+35%', l: 'Daily traffic' },
              { v: '+351%', l: 'Question posting' },
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
