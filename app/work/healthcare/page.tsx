import Container from '@/components/Container'
import SectionLabel from '@/components/SectionLabel'
import FadeIn from '@/components/FadeIn'
import ContactBlock from '@/components/ContactBlock'
import CaseHero from '@/components/case/CaseHero'
import StatsStrip from '@/components/case/StatsStrip'
import NextPrev from '@/components/case/NextPrev'
import PullQuote from '@/components/case/PullQuote'
import { getProject, getAdjacentProjects } from '@/data/projects'

const project = getProject('healthcare')!
const { prev, next } = getAdjacentProjects('healthcare')

export const metadata = {
  title: project.title,
  description: project.hook,
}

const methodology = [
  {
    n: '01',
    label: 'Targeted Discovery',
    body: 'Curated 150+ high-impact primary research reports, executive surveys, and industry outlooks spanning 2020 to 2025. Pulled from the stakeholders health system leaders actually read — WittKieffer, HIMSS, HFMA, Bain, KLAS, Deloitte, Chartis.',
  },
  {
    n: '02',
    label: 'Synthesis & Verification',
    body: 'Combined 10-15 distinct source documents per persona to establish baseline trends, then cross-referenced every finding against 10-12 verified job postings per role to validate current market requirements, reporting structures, and hiring criteria.',
  },
  {
    n: '03',
    label: 'Framework Application',
    body: "Structured insights using Gartner's Buyer Persona and Job-Based Buying Journey templates. Mapped job titles, relationships, competencies, goals, barriers, decision criteria, and preferred content types for each role.",
  },
  {
    n: '04',
    label: 'Narrative Integration',
    body: 'Contextualized personas within the broader health system environment using the Four Engines model. Converted static profiles into a full narrative highlighting cross-functional tensions and strategic drivers.',
  },
]

const forces = [
  {
    label: 'Financial Instability',
    body: 'Maintaining financial viability amid high-cost operating models, inflationary pressures, and constrained reimbursement.',
  },
  {
    label: 'Workforce Crisis',
    body: 'Persistent staffing shortages, high levels of clinician burnout, and escalating labor expenses destabilizing care delivery.',
  },
  {
    label: 'Operational Gridlock',
    body: 'Capacity constraints, patient throughput limitations, and the challenge of unifying operations after M&A activity.',
  },
  {
    label: 'Digital & Security Threats',
    body: 'Balancing digital transformation with the mission-critical need to protect patient data from evolving cyber threats.',
  },
  {
    label: 'Landscape Volatility',
    body: 'Growing competition from new entrants (retail, PE) and rapidly evolving regulatory requirements creating uncertainty.',
  },
]

const engines = [
  {
    n: 'Engine 01',
    label: 'Digital & Strategic',
    question: 'Where are we going, and how will we get there safely?',
    roles: ['Strategic Tech Leadership', 'Strategy Executive', 'Info Security Leadership'],
    accent: 'bg-ember/10 border-ember/30 text-ember',
  },
  {
    n: 'Engine 02',
    label: 'Value & Viability',
    question: 'Will we be financially viable tomorrow?',
    roles: ['Chief Financial Officer', 'Revenue Cycle Leadership', 'Population Health Leadership'],
    accent: 'bg-[#2563eb]/10 border-[#2563eb]/30 text-[#1d4ed8]',
  },
  {
    n: 'Engine 03',
    label: 'Operations & Access',
    question: 'Can we run efficiently today?',
    roles: ['Operations Leadership', 'Patient Access Leadership', 'Health System Pharmacy'],
    accent: 'bg-violet/10 border-violet/30 text-violet',
  },
  {
    n: 'Engine 04',
    label: 'Care & Quality',
    question: 'Are we delivering safe, quality care while reducing burnout?',
    roles: ['Chief Clinical Executive', 'Clinical Informatics Leadership', 'Medical School Executive'],
    accent: 'bg-[#047857]/10 border-[#047857]/30 text-[#047857]',
  },
]

const tensions = [
  { left: 'Innovation', right: 'Stability', note: 'Investing in new digital capabilities vs. maintaining legacy infrastructure' },
  { left: 'Agility', right: 'Governance', note: 'Moving quickly on new initiatives vs. ensuring proper oversight and security' },
  { left: 'Growth', right: 'Risk', note: 'Pursuing strategic partnerships vs. managing cybersecurity and integration risks' },
]

const personaColumns = [
  {
    name: 'Strategic Tech Leadership',
    subtitle: 'The Architect of Enterprise Value Through Technology',
    titles: ['CIO', 'SVP & CIO', 'CDIO', 'CDO', 'CTO', 'CHIO', 'VP of IT'],
  },
  {
    name: 'Strategy Executive',
    subtitle: 'The Navigator of Future Growth',
    titles: ['CSO', 'SVP/EVP of Strategy', 'VP Strategy & Growth', 'Chief Transformation Officer'],
  },
  {
    name: 'Info Security Leadership',
    subtitle: 'The Shield Against Digital Threats',
    titles: ['CISO', 'Director of Info Security', 'VP of Cybersecurity'],
  },
]

const personaRows: { label: string; cells: string[] }[] = [
  {
    label: 'Core Mandate',
    cells: [
      'Makes sure technology works for the system — deciding what gets bought and how systems fit together.',
      'Focused on where the organization is going in 5+ years, connecting market trends to digital strategy.',
      'Protects patient data and keeps systems running, balancing security, compliance, and usability.',
    ],
  },
  {
    label: 'Top Priority',
    cells: [
      'Ensure IT initiatives deliver measurable clinical, operational, and financial value.',
      'Position the organization for sustained, long-term success.',
      'Protect from evolving cyber threats, particularly cloud and account compromise.',
    ],
  },
  {
    label: 'Biggest Fear',
    cells: [
      'Disparate legacy systems and limited EHR interoperability.',
      'Competition from national insurers, PE, and retail health entrants.',
      'Insufficient cybersecurity expertise and incomplete device inventories.',
    ],
  },
  {
    label: 'Trusted Metric',
    cells: [
      'Demonstrated ROI from IT initiatives.',
      'Revenue growth and market share.',
      'Reduction in major cybersecurity incidents.',
    ],
  },
  {
    label: 'Decision Criteria',
    cells: [
      'Proven EHR integration; standardized, scalable solutions.',
      'Strategic alignment with tangible, defensible ROI.',
      'Effectiveness against ransomware/phishing; minimal workflow disruption.',
    ],
  },
]

export default function HealthcareCaseStudy() {
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
          { value: '12', label: 'Personas' },
          { value: '4', label: 'Engines' },
          { value: '150+', label: 'Source reports' },
          { value: '120+', label: 'Job postings analyzed' },
        ]}
      />

      {/* ════════ THE PROMPT ════════ */}
      <section className="py-section bg-white">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>The prompt</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              Build enterprise buyer intelligence from zero.
            </h2>
            <div className="mt-8 space-y-5 text-body-lg text-neutral-700">
              <p>
                A Fortune 10 healthtech company was expanding into a new segment
                of the health system market. They had no persona library, no
                segmentation, no shared language for who they were selling to or
                how those buyers actually made decisions.
              </p>
              <p>
                I walked in with zero healthtech background and was asked to
                build the foundation that would power their GTM for the new
                market. 300+ hours of research later, this is what the system
                became.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ METHODOLOGY ════════ */}
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>The approach</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              A four-step intelligence process, not a single interview round.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-700 max-w-2xl">
              Research that would hold up in an executive briefing had to
              triangulate across three kinds of source: primary market
              intelligence, real-world job data, and established Gartner
              frameworks. One source on its own is a guess. Three, cross-checked,
              is an argument.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {methodology.map((m, i) => (
              <FadeIn key={m.n} delay={i * 60}>
                <div className="rounded-md border border-neutral-200 bg-white p-8 h-full shadow-inset-hairline">
                  <span className="text-label uppercase text-neutral-400">
                    {m.n}
                  </span>
                  <h3 className="mt-3 text-heading-md text-ink">{m.label}</h3>
                  <p className="mt-4 text-body text-neutral-600">{m.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ MARKET CONTEXT / FIVE FORCES ════════ */}
      <section className="py-section-lg bg-white">
        <Container>
          <FadeIn>
            <SectionLabel>Market context</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[22ch]">
              Every leader operates in a crucible of unprecedented pressure.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-700 max-w-2xl">
              Understanding the five forces shaping every enterprise decision is
              table stakes. No persona makes sense in isolation from these.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {forces.map((f, i) => (
              <FadeIn key={f.label} delay={i * 40}>
                <div className="h-full rounded-md border border-neutral-200 bg-off-white p-6 shadow-inset-hairline">
                  <p className="text-label uppercase text-ember">
                    Force 0{i + 1}
                  </p>
                  <h3 className="mt-3 text-heading-sm text-ink">{f.label}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-neutral-600">
                    {f.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ FOUR ENGINES ════════ */}
      <section className="py-section-lg bg-off-white border-y border-neutral-200">
        <Container>
          <FadeIn>
            <SectionLabel>The Four Engines</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[24ch]">
              A command center, not a hierarchy.
            </h2>
            <p className="mt-6 text-body-lg text-neutral-700 max-w-2xl">
              Every major health system decision requires alignment across
              leaders with fundamentally incompatible success metrics. The Four
              Engines model maps the competing forces every major healthcare
              purchase has to satisfy — and shows sellers which tensions they
              have to resolve to win the room.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {engines.map((e, i) => (
              <FadeIn key={e.label} delay={i * 60}>
                <div className="rounded-md border border-neutral-200 bg-white p-8 h-full shadow-inset-hairline">
                  <div className="flex items-baseline justify-between gap-4">
                    <p
                      className={`text-label uppercase inline-flex items-center rounded-full border px-2.5 py-0.5 ${e.accent}`}
                    >
                      {e.n}
                    </p>
                  </div>
                  <h3 className="mt-4 text-heading-lg text-ink">{e.label}</h3>
                  <p className="mt-3 text-body italic text-neutral-600">
                    {e.question}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {e.roles.map((r) => (
                      <span
                        key={r}
                        className="inline-flex items-center rounded-full border border-neutral-200 bg-off-white px-3 py-1 text-[12px] font-medium text-neutral-600"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ DEEP DIVE: DIGITAL & STRATEGIC ════════ */}
      <section className="py-section-lg bg-white">
        <Container>
          <FadeIn>
            <SectionLabel dotColor="#D94F1E">Deep dive — Engine 01</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink max-w-[26ch]">
              Inside the Digital &amp; Strategic Engine.
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-7 space-y-5 text-body-lg text-neutral-700">
                <p>
                  This engine shapes the future and protects the organization as
                  it evolves. Its leaders connect market trends, technology, and
                  security into a single direction. They are responsible for the
                  platforms that enable scale, the strategy that guides growth,
                  and the defenses that protect the system from digital threats.
                </p>
                <p>
                  A seller walking into this engine is walking into a room where
                  every participant has a different definition of success. Miss
                  one, and the deal dies in committee.
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="text-label uppercase text-neutral-500">
                  Key tensions
                </p>
                <ul className="mt-4 space-y-4">
                  {tensions.map((t) => (
                    <li
                      key={t.left}
                      className="rounded-md border border-neutral-200 bg-off-white p-5 shadow-inset-hairline"
                    >
                      <div className="flex items-center gap-3 text-[14px] font-semibold text-ink">
                        <span>{t.left}</span>
                        <span className="flex-1 border-t border-dashed border-neutral-300" />
                        <span>{t.right}</span>
                      </div>
                      <p className="mt-2 text-[13px] text-neutral-600">
                        {t.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ PERSONA COMPARISON TABLE ════════ */}
      <section className="pb-section-lg bg-white">
        <Container>
          <FadeIn>
            <p className="text-label uppercase text-neutral-500">
              The three leaders inside Engine 01
            </p>
            <h3 className="mt-3 text-display-sm-fluid text-ink max-w-[24ch]">
              Same room. Same deal. Three incompatible scorecards.
            </h3>

            {/* Desktop: grid table */}
            <div className="mt-12 hidden md:grid md:grid-cols-[180px_1fr_1fr_1fr] border-t border-neutral-200">
              {/* Header row */}
              <div className="border-b border-neutral-200 py-5" />
              {personaColumns.map((c) => (
                <div
                  key={c.name}
                  className="border-b border-l border-neutral-200 py-5 px-6"
                >
                  <p className="text-heading-sm text-ink">{c.name}</p>
                  <p className="mt-1 text-[13px] italic text-neutral-500">
                    {c.subtitle}
                  </p>
                </div>
              ))}

              {/* Body rows */}
              {personaRows.map((row) => (
                <div key={row.label} className="contents">
                  <div className="border-b border-neutral-200 py-6 pr-6">
                    <p className="text-label uppercase text-ember">
                      {row.label}
                    </p>
                  </div>
                  {row.cells.map((cell, i) => (
                    <div
                      key={i}
                      className="border-b border-l border-neutral-200 py-6 px-6 text-body text-neutral-700"
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}

              {/* Title chips row */}
              <div className="py-6 pr-6">
                <p className="text-label uppercase text-ember">Common titles</p>
              </div>
              {personaColumns.map((c) => (
                <div
                  key={`titles-${c.name}`}
                  className="border-l border-neutral-200 py-6 px-6"
                >
                  <div className="flex flex-wrap gap-2">
                    {c.titles.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-neutral-200 bg-off-white px-2.5 py-0.5 text-[12px] font-medium text-neutral-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: stacked cards */}
            <div className="mt-10 md:hidden space-y-8">
              {personaColumns.map((c, colIdx) => (
                <div
                  key={c.name}
                  className="rounded-md border border-neutral-200 bg-off-white p-6 shadow-inset-hairline"
                >
                  <p className="text-heading-sm text-ink">{c.name}</p>
                  <p className="mt-1 text-[13px] italic text-neutral-500">
                    {c.subtitle}
                  </p>
                  <dl className="mt-5 space-y-4">
                    {personaRows.map((row) => (
                      <div key={row.label}>
                        <dt className="text-label uppercase text-ember">
                          {row.label}
                        </dt>
                        <dd className="mt-1 text-body text-neutral-700">
                          {row.cells[colIdx]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.titles.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-2.5 py-0.5 text-[12px] font-medium text-neutral-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ PULL QUOTE ════════ */}
      <section className="py-section bg-off-white border-y border-neutral-200">
        <Container width="narrow">
          <FadeIn>
            <PullQuote tone="ember" attribution="The claim">
              A seller walking in without this map pitches features to three
              people who score features differently, then loses to whoever
              pitched the trade-offs.
            </PullQuote>
          </FadeIn>
        </Container>
      </section>

      {/* ════════ ARTIFACTS ════════ */}
      <section className="py-section-lg bg-white">
        <Container width="narrow">
          <FadeIn>
            <SectionLabel>What shipped</SectionLabel>
            <h2 className="mt-5 text-display-md-fluid text-ink">
              Artifacts, now the GTM foundation.
            </h2>
            <ul className="mt-10 space-y-6">
              {[
                {
                  n: '01',
                  t: '76-slide persona library',
                  b: 'Complete executive-facing deck covering all 12 personas across the four engines. Sales, product marketing, and executive teams work from the same document.',
                },
                {
                  n: '02',
                  t: '39-slide buyer journey architecture',
                  b: 'The 5-stage, 7-to-13-month non-linear enterprise buying cycle mapped end to end. Every stage tied to stakeholder involvement, evaluation criteria, and content needs.',
                },
                {
                  n: '03',
                  t: 'Four Engines framework',
                  b: 'Proprietary model mapping the four competing forces every major healthcare purchase has to satisfy. Now used as the shared frame for all cross-functional buyer conversations.',
                },
                {
                  n: '04',
                  t: 'Field enablement',
                  b: 'Flew in to lead the in-person sales training that rolled the framework out to the field team during the new-market launch.',
                },
              ].map((item) => (
                <li
                  key={item.n}
                  className="grid grid-cols-[48px_1fr] gap-6 border-b border-neutral-200 pb-6"
                >
                  <span className="text-label uppercase text-neutral-400 pt-1">
                    {item.n}
                  </span>
                  <div>
                    <p className="text-heading-sm text-ink">{item.t}</p>
                    <p className="mt-2 text-body text-neutral-600">{item.b}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-body text-neutral-600">
              The full decks are under NDA. Happy to walk through them in
              conversation — the contact form is a mailto at the bottom of every
              page.
            </p>
          </FadeIn>
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
