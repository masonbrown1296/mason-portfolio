// Project metadata. The case study pages render from /context/04-case-studies
// markdown (to be extracted Day 1 afternoon), but the tiles pull from here.

export type ProjectSlug =
  | 'healthcare'
  | 'bytesize'
  | 'gamification'
  | 'positioning'

export type ToolSlug = 'competitive' | 'recommendation'

export interface Project {
  slug: ProjectSlug
  label: string // eyebrow tag
  title: string // tile + page title
  hook: string // one-line descriptor shown on tile
  pills: string[] // inline methodology/tech tags
  stats: { value: string; label: string }[] // stat callouts on tile
  gradientClass: string // e.g. 'gradient-healthcare'
  year: string
  role: string
}

export interface Tool {
  slug: ToolSlug
  label: string
  title: string
  hook: string
  stack: string[]
  gradientClass: string
}

export const projects: Project[] = [
  {
    slug: 'healthcare',
    label: 'Fortune 10 Healthtech',
    title: 'Building enterprise buyer intelligence from zero.',
    hook: 'Personas, segmentation, and a 5-stage journey architecture now powering a new-market expansion.',
    pills: ['Product Marketing', 'Primary Research', 'Frameworks', 'Enablement'],
    stats: [
      { value: '300+', label: 'Hours of research' },
      { value: '76', label: 'Persona slides' },
      { value: '4', label: 'Health system verticals' },
    ],
    gradientClass: 'gradient-healthcare',
    year: '2025-present',
    role: 'Contract PMM',
  },
  {
    slug: 'bytesize',
    label: 'Experts Exchange',
    title: 'A $1.65M ARR newsletter, built in 8 months.',
    hook: 'Zero to 200K subscribers. 60% open rate. The company\'s top revenue lever.',
    pills: ['Growth', 'Content', 'Revenue', 'SEO'],
    stats: [
      { value: '200K', label: 'Subscribers' },
      { value: '60%', label: 'Open rate' },
      { value: '$1.65M', label: 'Projected ARR' },
    ],
    gradientClass: 'gradient-bytesize',
    year: '2024-2025',
    role: 'Director of Marketing',
  },
  {
    slug: 'gamification',
    label: 'Experts Exchange',
    title: 'A gamification system, PRD to GTM.',
    hook: 'Competitive research, behavioral model, full design system, cross-functional rollout.',
    pills: ['Product Marketing', 'UX/UI', 'GTM', 'Analytics'],
    stats: [
      { value: '25%', label: 'Activity lift' },
      { value: '20%', label: 'Reactivation lift' },
      { value: 'E2E', label: 'Ownership' },
    ],
    gradientClass: 'gradient-gamification',
    year: '2024',
    role: 'Head of Marketing',
  },
  {
    slug: 'positioning',
    label: 'Experts Exchange',
    title: 'Repositioning a 5M-user community.',
    hook: 'April Dunford methodology. Five segments, six personas, a full messaging architecture.',
    pills: ['Positioning', 'Messaging', 'Segmentation', 'Dunford'],
    stats: [
      { value: '50%', label: 'First-time signup lift' },
      { value: '351%', label: 'Question posting lift' },
      { value: '35%', label: 'Daily traffic lift' },
    ],
    gradientClass: 'gradient-positioning',
    year: '2023-2024',
    role: 'Head of Marketing',
  },
]

export const tools: Tool[] = [
  {
    slug: 'competitive',
    label: 'Competitive Intelligence',
    title: 'An aggregator that does the work nobody was going to do.',
    hook: 'Multi-API signal ingestion, Claude-powered synthesis, ready-to-use competitive briefings.',
    stack: ['Next.js', 'Claude API', 'Jina Reader', 'Firecrawl', 'Vercel'],
    gradientClass: 'gradient-competitive',
  },
  {
    slug: 'recommendation',
    label: 'Content Recommendation',
    title: 'A recommendation engine grounded in a buyer journey I built myself.',
    hook: 'Stakeholder, stage, and objection in. Ranked recommendations with reasoning out.',
    stack: ['Azure', 'OpenAI API', 'Next.js'],
    gradientClass: 'gradient-recommendation',
  },
]

export function getProject(slug: ProjectSlug): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getTool(slug: ToolSlug): Tool | undefined {
  return tools.find((t) => t.slug === slug)
}

// Navigation: next/prev case study for case study pages
export function getAdjacentProjects(slug: ProjectSlug): {
  prev: Project
  next: Project
} {
  const i = projects.findIndex((p) => p.slug === slug)
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]
  return { prev, next }
}
