'use client'

import {
  SiFigma,
  SiHubspot,
  SiSalesforce,
  SiGoogleanalytics,
  SiSemrush,
  SiWebflow,
  SiNotion,
  SiJira,
  SiSlack,
  SiHotjar,
  SiOpenai,
} from 'react-icons/si'
import { BarChart3, Link2, Mail, Palette } from 'lucide-react'
import { type IconType } from 'react-icons'
import { type LucideIcon } from 'lucide-react'

interface Tool {
  name: string
  icon: IconType | LucideIcon
}

const tools: Tool[] = [
  { name: 'Figma', icon: SiFigma },
  { name: 'HubSpot', icon: SiHubspot },
  { name: 'Salesforce', icon: SiSalesforce },
  { name: 'Amplitude', icon: BarChart3 },
  { name: 'Google Analytics', icon: SiGoogleanalytics },
  { name: 'Semrush', icon: SiSemrush },
  { name: 'Ahrefs', icon: Link2 },
  { name: 'Webflow', icon: SiWebflow },
  { name: 'Notion', icon: SiNotion },
  { name: 'Jira', icon: SiJira },
  { name: 'Marketo', icon: Mail },
  { name: 'Slack', icon: SiSlack },
  { name: 'Hotjar', icon: SiHotjar },
  { name: 'Adobe CC', icon: Palette },
  { name: 'OpenAI', icon: SiOpenai },
]

export default function ToolsGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-6">
      {tools.map((tool) => {
        const Icon = tool.icon
        return (
          <div key={tool.name} className="flex flex-col items-center gap-2 group cursor-default">
            <div className="text-[var(--text-muted)] group-hover:text-[var(--text-dark)] transition-colors">
              <Icon size={28} />
            </div>
            <span className="text-[11px] font-body text-[var(--text-muted)] text-center">{tool.name}</span>
          </div>
        )
      })}
    </div>
  )
}
