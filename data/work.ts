export type AccentColor = 'red' | 'teal' | 'lime' | 'gold' | 'white'

export interface Project {
  slug: string
  tag: string
  title: string
  descriptor: string
  accentColor: AccentColor
  pills: string[]
  featured?: boolean
  internal?: boolean
  hasImages?: boolean
}

export const projects: Project[] = [
  {
    slug: 'healthcare-buyer-intelligence',
    tag: 'Enterprise GTM',
    title: 'Mapping the Healthcare Buying Committee',
    descriptor: 'Buyer persona library and company-wide sales training for a Fortune 10 health-tech product launch',
    accentColor: 'red',
    pills: ['Fortune 10 Client', '4-Engine Framework', 'Company-Wide Enablement'],
  },
  {
    slug: 'gamification-redesign',
    tag: 'Product Launch + UX',
    title: 'Redesigning the Reward Loop',
    descriptor: 'Full UX/UI design and GTM execution for a gamification system overhaul, concept to launch',
    accentColor: 'teal',
    pills: ['+25% User Activity', '+20% Reactivations', 'Multi-Phase Rollout'],
    hasImages: true,
  },
  {
    slug: 'bytesize-newsletter',
    tag: 'Growth + Revenue',
    title: '0 to 200K in 8 Months',
    descriptor: 'Turned a dormant email list into a $1.65M ARR revenue channel for a technical B2B audience',
    accentColor: 'lime',
    pills: ['200K Subscribers', '60% Open Rate', '$1.65M ARR'],
  },
  {
    slug: 'company-rebrand',
    tag: 'Positioning + Messaging',
    title: 'Rebranding for Growth',
    descriptor: 'Led a full rebrand unifying messaging and visuals across the product, driving major conversion lifts',
    accentColor: 'gold',
    pills: ['+50% First-Time Signups', '+35% Daily Traffic', '+351% Question Posting'],
  },
  {
    slug: 'cram',
    tag: 'AI Product',
    title: 'CRAM: Buyer Research to Content Engine',
    descriptor: 'A production web app returning ranked, confidence-scored content recommendations from buyer journey inputs. Deployed on Azure, powered by OpenAI.',
    accentColor: 'white',
    pills: ['Deployed on Azure', 'OpenAI-Powered', 'Confidence-Scored Output'],
    featured: true,
    internal: true,
  },
]

export const accentColorMap: Record<AccentColor, string> = {
  red: '#F62624',
  teal: '#73FDFC',
  lime: '#2BFE78',
  gold: '#FAD334',
  white: '#FFFFFF',
}
