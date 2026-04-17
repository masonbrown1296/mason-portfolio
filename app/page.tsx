'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Linkedin, Lock, FileText, Briefcase, ArrowDown } from 'lucide-react'
import Nav from '@/components/Nav'
import HeroCanvas from '@/components/HeroCanvas'
import SectionLabel from '@/components/SectionLabel'
import FadeIn from '@/components/FadeIn'
import WorkCard from '@/components/WorkCard'
import CRAMReplica from '@/components/CRAMReplica'
import ToolsGrid from '@/components/ToolsGrid'
import { projects } from '@/data/work'

/* ─── Timeline Entries ─── */
const timelineEntries = [
  { dotColor: '#FAD334', years: '2024 - Present', role: 'GTM Consultant', org: 'Fortune 10 Healthcare Technology Organization', desc: 'Building enterprise buyer personas and leading company-wide sales training. Built CRAM on top of the research.' },
  { dotColor: '#73FDFC', years: '2023 - 2024', role: 'Director of Marketing', org: 'Experts Exchange', desc: 'Owned GTM strategy, product launches, UX design, and engineering workflows. Scaled ByteSize newsletter to 200K subscribers and $1.65M ARR.' },
  { dotColor: '#2BFE78', years: '2021 - 2023', role: 'Marketing Manager', org: 'Experts Exchange', desc: 'Led company rebrand, gamification launch, social content strategy, and product analytics implementation.' },
  { dotColor: '#F62624', years: '2020 - 2021', role: 'Marketing Strategist', org: 'Experts Exchange + Conversant Group', desc: 'Built foundational positioning and messaging. Produced content for cybersecurity clients. Increased social engagement 98%.' },
  { dotColor: '#FAD334', years: '2019 - 2020', role: 'Digital Marketing', org: 'Agency + Freelance', desc: 'Multi-client work across video production, web, SEO, and brand. Shot TV commercials. Built sites and logos still in use today.' },
]

/* ─── Skills ─── */
const skills = [
  'Go-to-Market Strategy', 'Product Positioning', 'Messaging Frameworks', 'Value Proposition Development',
  'Market Research', 'Competitive Analysis', 'Buyer Personas', 'Pricing Strategy', 'Product-Led Growth',
  'Win/Loss Analysis', 'Sales Enablement', 'Demand Generation', 'Lifecycle Marketing',
  'Conversion Rate Optimization', 'A/B Testing', 'Funnel Optimization', 'UX/UI Design',
  'Launch Readiness', 'AI-Driven Research', 'Prompt Engineering',
]

/* ─── CRAM Features ─── */
const cramFeatures = [
  'Top 3 ranked content recommendations with confidence scores',
  'Channel, format, and audience alignment per recommendation',
  'Reasoning tied to each buying engine',
  'Full structured outline for the top-ranked asset',
  'Proof requirements across Financial, Operational, Technical, and Risk dimensions',
  'Objection handling responses mapped by engine',
]

export default function Home() {
  return (
    <>
      <Nav />

      {/* ════════ HERO ════════ */}
      <section className="dot-grid bg-[var(--bg-dark)] min-h-screen flex items-center justify-center relative overflow-hidden">
        <HeroCanvas />

        <div className="relative z-10 text-center max-w-[800px] mx-auto px-6 pt-20">
          <div className="flex justify-center">
            <SectionLabel text="Mason Brown" dotColor="#2BFE78" />
          </div>

          <motion.h1
            className="font-display font-extrabold text-[44px] md:text-[80px] leading-[1.05] tracking-[-0.03em] text-[var(--text-dark)] mb-6"
          >
            {['GTM strategy and buyer intelligence', 'for complex B2B products.'].map((line, i) => (
              <motion.span
                key={i}
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="font-body text-lg text-[var(--text-muted)] max-w-[520px] mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Currently contracted with a Fortune 10 healthcare technology organization. Previously Director of Marketing at Experts Exchange.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <a
              href="#work"
              className="flex items-center gap-2 bg-[var(--red)] text-white font-body font-semibold px-8 py-3 rounded-lg hover:glow-red transition-shadow"
            >
              <ArrowDown size={16} />
              View My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[var(--red)] text-white font-body font-semibold px-8 py-3 rounded-lg hover:glow-red transition-shadow"
            >
              <FileText size={16} />
              Download Resume
            </a>
            <a
              href="/case-studies/mason-brown-growth-portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[var(--border-dark)] text-[var(--text-muted)] font-body font-medium px-8 py-3 rounded-lg hover:border-[var(--text-muted)] transition-colors"
            >
              <Briefcase size={16} />
              Download Portfolio
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════════ ABOUT ════════ */}
      <section id="about" className="dot-grid bg-[var(--bg-dark)] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {/* Floating light card */}
          <div className="bg-[#F0EAE2] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 md:items-center">
              {/* Left */}
              <FadeIn>
                <SectionLabel text="About" dotColor="#73FDFC" light />
                <h2 className="font-display font-extrabold text-3xl md:text-[48px] leading-[1.1] tracking-[-0.02em] text-[var(--text-black)] mb-6">
                  I work at the intersection of product, market, and revenue.
                </h2>
                <div className="space-y-4 font-body text-[17px] leading-[1.8] text-[#3D3A37]">
                  <p>
                    Currently contracted by a Fortune 10 healthcare technology organization building enterprise buyer personas and leading company-wide sales training for a major product launch. On top of that research, I built CRAM, an AI tool that turns buyer intelligence into ranked content recommendations and auto-generated sales decks.
                  </p>
                  <p>
                    Previously Director of Marketing at Experts Exchange. Scaled a newsletter from zero to 200K subscribers and $1.65M ARR in under 8 months. Redesigned the full gamification system from research to launch. Led the company rebrand that lifted first-time signups 50%. MBA from Lee University.
                  </p>
                  <p>
                    I tend to work on projects that sit between functions — part positioning, part product, part enablement. The kind of work that falls through the cracks if nobody owns it.
                  </p>
                </div>
              </FadeIn>

              {/* Right */}
              <FadeIn delay={150}>
                <img
                  src="/headshot.jpeg"
                  alt="Mason Brown"
                  className="w-full max-w-[420px] rounded-2xl shadow-lg"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CREDENTIAL STRIP ════════ */}
      <section className="bg-[#161513] border-t border-b border-[#252220] py-5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
            <span className="font-body font-medium text-[15px] text-[var(--text-muted)] sm:px-10">MBA, Lee University</span>
            <span className="hidden sm:block w-px h-4 bg-[#252220]" />
            <span className="font-body font-medium text-[15px] text-[var(--text-muted)] sm:px-10">Fortune 10 Healthcare Client</span>
            <span className="hidden sm:block w-px h-4 bg-[#252220]" />
            <span className="font-body font-medium text-[15px] text-[var(--text-muted)] sm:px-10">200K+ Audience Built</span>
          </div>
        </div>
      </section>

      {/* ════════ PHILOSOPHY ════════ */}
      <section className="dot-grid bg-[var(--bg-dark)] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionLabel text="How I Work" dotColor="#FAD334" />
            <h2 className="font-display font-extrabold text-3xl md:text-[48px] leading-[1.1] tracking-[-0.02em] text-[var(--text-dark)] mb-10">
              How I approach the work.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { dot: '#2BFE78', title: 'Pattern First', body: "Before I write a word of strategy or spin up a campaign, I figure out what's actually happening. The pattern is always there, you just have to look for it before you move." },
              { dot: '#F62624', title: 'Say It Out Loud', body: 'If I see a problem nobody is naming, I name it. Respectfully, with a solution ready, but I say it. That reflex has driven most of the best work of my career.' },
              { dot: '#73FDFC', title: 'Stay In It', body: 'Strategy without execution is just a deck. I stay involved from the first insight through the last deliverable, because that is the only way to know if it actually worked.' },
              { dot: '#FAD334', title: 'Build, Do Not Just Advise', body: 'I make things. Tools, frameworks, newsletters, apps, campaigns, things that exist in the world and keep working after I have moved on to the next problem.' },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-[#161513] border border-[#252220] rounded-xl p-8">
                  <div
                    className="w-2.5 h-2.5 rounded-full mb-4"
                    style={{
                      backgroundColor: card.dot,
                      boxShadow: `0 0 8px 2px ${card.dot}88, 0 0 20px 4px ${card.dot}33`
                    }}
                  />
                  <h3 className="font-display font-bold text-xl text-[var(--text-dark)] mb-2">{card.title}</h3>
                  <p className="font-body text-[15px] text-[var(--text-muted)] leading-relaxed">{card.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WORK ════════ */}
      <section id="work" className="dot-grid bg-[var(--bg-dark)] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionLabel text="Selected Work" dotColor="#F62624" />
            <h2 className="font-display font-extrabold text-4xl md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[var(--text-dark)] mb-12">
              Selected work.
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-6">
            {projects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 80}>
                <WorkCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CAREER TIMELINE ════════ */}
      <section id="timeline" className="dot-grid bg-[var(--bg-dark)] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionLabel text="Career" dotColor="#2BFE78" />
            <h2 className="font-display font-extrabold text-4xl md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[var(--text-dark)] mb-16">
              Where I&apos;ve Been.
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border-dark)] md:-translate-x-px" />

            {timelineEntries.map((entry, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="text-xs font-body font-semibold text-[var(--text-muted)] tracking-wider uppercase">
                      {entry.years}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[var(--text-dark)] mt-1">{entry.role}</h3>
                    <p className="font-body text-sm text-[var(--text-muted)] font-medium mt-0.5">{entry.org}</p>
                    <p className="font-body text-sm text-[var(--text-muted)] mt-2 leading-relaxed">{entry.desc}</p>
                  </div>

                  {/* Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 w-3.5 h-3.5 rounded-full -translate-x-1/2 mt-1 z-10"
                    style={{
                      backgroundColor: entry.dotColor,
                      boxShadow: `0 0 8px 2px ${entry.dotColor}88, 0 0 20px 4px ${entry.dotColor}33`
                    }}
                  />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ AI PRODUCT (CRAM) ════════ */}
      <section className="dot-grid bg-[var(--bg-dark)] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionLabel text="AI Product" dotColor="#FFFFFF" />
            <h2 className="font-display font-extrabold text-3xl md:text-[48px] leading-[1.1] tracking-[-0.02em] text-[var(--text-dark)] mb-6">
              From buyer research to content brief, in seconds.
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="font-body text-[17px] text-[var(--text-muted)] leading-[1.8] space-y-4 max-w-2xl mb-12">
              <p>
                Persona research loses its value the moment it sits in a slide deck. I built CRAM so the research stays alive and keeps working.
              </p>
              <p>
                CRAM is a buyer-journey content recommender, a production web app deployed on Azure, powered by the OpenAI API, built to integrate with the Microsoft ecosystem my client uses.
              </p>
            </div>
          </FadeIn>

          {/* CRAM Replica - full width, centered */}
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <CRAMReplica />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════ CRAM FEATURES (elevated dark panel) ════════ */}
      <section className="bg-[#161513] py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <SectionLabel text="How It Works" dotColor="#FFFFFF" />
              <p className="font-body text-[15px] text-[var(--text-muted)] leading-relaxed mb-4">
                Input the initiative, buying job, buying engines (Finance, Technology, Care Delivery, Risk and Compliance), strategic priority, audience type, and trigger context. CRAM returns:
              </p>
              <ul className="space-y-2.5">
                {cramFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0 glow-white" />
                    <span className="font-body text-[14px] text-[var(--text-dark)] leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={100}>
              <SectionLabel text="Coming Next: CRAM Sales" dotColor="#FFFFFF" />
              <p className="font-body text-[15px] text-[var(--text-muted)] leading-relaxed mb-6">
                Same input model, built for field sales. Output: a curated PPTX deck for that specific buyer at that deal stage.
              </p>
              <div className="flex items-center gap-2 text-[var(--text-muted)]">
                <Lock size={14} />
                <span className="text-xs font-body">This product is currently internal and not publicly accessible.</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════ SKILLS + TOOLS ════════ */}
      <section className="bg-[#161513] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionLabel text="Skills" dotColor="#73FDFC" />
            <div className="flex flex-wrap gap-2 mb-16">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#161513] border border-[#252220] rounded-full px-4 py-2 text-[13px] font-body font-medium text-[var(--text-muted)] hover:border-[var(--teal)] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <SectionLabel text="Tools" dotColor="#FAD334" />
            <ToolsGrid />
          </FadeIn>
        </div>
      </section>

      {/* ════════ CONTACT CTA ════════ */}
      <section id="contact" className="dot-grid bg-[var(--bg-dark)] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <div className="flex justify-center">
              <SectionLabel text="Let's Work Together" dotColor="#F62624" />
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[var(--text-dark)] mb-6">
              Open to the right opportunity.
            </h2>
            <p className="font-body text-[17px] text-[var(--text-muted)] max-w-xl mx-auto mb-10">
              Based in Chicago. Available for senior roles and contract work in GTM strategy, product marketing, sales enablement, and solutions consulting.
            </p>
            <div className="flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/masonbrown1296/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[var(--red)] text-white font-body font-semibold px-8 py-3 rounded-lg hover:glow-red transition-shadow"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="bg-[var(--bg-dark)] border-t border-[var(--border-dark)] py-6">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <span className="text-sm font-body text-[var(--text-muted)]">&copy; 2025 Mason Brown</span>
          <span className="text-sm font-body text-[var(--text-muted)]">masonbrown.co</span>
        </div>
      </footer>
    </>
  )
}
