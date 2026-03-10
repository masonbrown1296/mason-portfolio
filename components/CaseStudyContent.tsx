'use client'

import SectionLabel from '@/components/SectionLabel'
import FadeIn from '@/components/FadeIn'
import { type Project } from '@/data/work'
import { caseStudies, type ContentBlock } from '@/data/caseStudies'

interface CaseStudyContentProps {
  project: Project
  color: string
  isCRAM: boolean
  isGamification: boolean
}

const gamificationImages = [
  '/work/gamification/overview.png',
  '/work/gamification/badges.png',
  '/work/gamification/levels.png',
  '/work/gamification/rewards.png',
]

function renderBlocks(blocks: ContentBlock[]) {
  return blocks.map((block, i) => {
    if (block.type === 'paragraph') {
      return <p key={i}>{block.text}</p>
    }
    if (block.type === 'bullets') {
      return (
        <ul key={i} className="space-y-2 pl-1">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    }
  })
}

export default function CaseStudyContent({ project, color, isCRAM, isGamification }: CaseStudyContentProps) {
  const data = caseStudies[project.slug]

  const context  = data?.context  ?? { heading: 'The situation',    blocks: [] }
  const role     = data?.role     ?? { heading: 'What I owned',     blocks: [] }
  const approach = data?.approach ?? { heading: 'How I built it',   blocks: [] }
  const build    = data?.build
  const results  = data?.results  ?? { heading: 'What it delivered', blocks: [] }

  return (
    <>
      {/* ─── THE CONTEXT ─── */}
      <section className="dot-grid bg-[var(--bg-dark)] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="bg-[#161513] border border-[#252220] rounded-2xl p-8 md:p-12">
            <FadeIn>
              <SectionLabel text="The Context" dotColor={color} />
              <h2 className="font-display font-extrabold text-3xl md:text-[40px] leading-[1.1] tracking-[-0.02em] text-[var(--text-dark)] mb-6">
                {context.heading}
              </h2>
              <div className="font-body text-[17px] leading-[1.8] text-[var(--text-muted)] space-y-4 max-w-3xl">
                {renderBlocks(context.blocks)}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── MY ROLE ─── */}
      <section className="dot-grid bg-[var(--bg-dark)] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionLabel text="My Role" dotColor={color} />
            <h2 className="font-display font-extrabold text-3xl md:text-[40px] leading-[1.1] tracking-[-0.02em] text-[var(--text-dark)] mb-6">
              {role.heading}
            </h2>
            <div className="font-body text-[17px] leading-[1.8] text-[var(--text-muted)] space-y-4 max-w-3xl">
              {renderBlocks(role.blocks)}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── THE APPROACH ─── */}
      <section className="dot-grid bg-[var(--bg-dark)] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="bg-[#161513] border border-[#252220] rounded-2xl p-8 md:p-12">
            <FadeIn>
              <SectionLabel text="The Approach" dotColor={color} />
              <h2 className="font-display font-extrabold text-3xl md:text-[40px] leading-[1.1] tracking-[-0.02em] text-[var(--text-dark)] mb-6">
                {approach.heading}
              </h2>
              <div className="font-body text-[17px] leading-[1.8] text-[var(--text-muted)] space-y-4 max-w-3xl">
                {renderBlocks(approach.blocks)}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── GAMIFICATION: Image Gallery ─── */}
      {isGamification && (
        <section className="dot-grid bg-[var(--bg-dark)] py-12">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory">
              {gamificationImages.map((src, i) => (
                <div key={i} className="flex-shrink-0 snap-center">
                  <img
                    src={src}
                    alt={`Gamification design ${i + 1}`}
                    className="h-[300px] md:h-[400px] w-auto rounded-xl border border-[#252220]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CRAM ONLY: THE BUILD ─── */}
      {isCRAM && build && (
        <section className="dot-grid bg-[var(--bg-dark)] py-24">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <FadeIn>
              <SectionLabel text="The Build" dotColor={color} />
              <h2 className="font-display font-extrabold text-3xl md:text-[40px] leading-[1.1] tracking-[-0.02em] text-[var(--text-dark)] mb-6">
                {build.heading}
              </h2>
              <div className="font-body text-[17px] leading-[1.8] text-[var(--text-muted)] space-y-4 max-w-3xl">
                {renderBlocks(build.blocks)}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ─── THE RESULTS ─── */}
      <section className="dot-grid bg-[var(--bg-dark)] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionLabel text="The Results" dotColor={color} />
            <h2 className="font-display font-extrabold text-3xl md:text-[40px] leading-[1.1] tracking-[-0.02em] text-[var(--text-dark)] mb-6">
              {results.heading}
            </h2>
            <div className="font-body text-[17px] leading-[1.8] text-[var(--text-muted)] space-y-4 max-w-3xl">
              {renderBlocks(results.blocks)}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
