import Link from 'next/link'
import { ArrowUpRight, Radar, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Tool, ToolIcon } from '@/data/projects'

const ICON_MAP: Record<ToolIcon, typeof Radar> = {
  radar: Radar,
  sparkles: Sparkles,
}

interface BuildTileProps {
  tool: Tool
  className?: string
}

/**
 * AI tool tile. Pulls the CI and content recommendation apps onto the home page.
 */
export default function BuildTile({ tool, className }: BuildTileProps) {
  const Icon = ICON_MAP[tool.icon]
  return (
    <Link
      href={`/build/${tool.slug}`}
      className={cn(
        'group gradient-tile block rounded-md relative',
        'md:min-h-[420px]',
        'transition-[transform,box-shadow] duration-standard ease-soft',
        'hover:-translate-y-1 hover:shadow-feature',
        'shadow-inset-hairline',
        tool.gradientClass,
        className
      )}
    >
      <div className="flex flex-col justify-between h-full p-8 md:p-10 min-h-[420px]">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-label uppercase text-white/80">{tool.label}</p>
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/10 border border-white/20 text-white/90 transition-[background-color,transform] duration-standard ease-soft group-hover:bg-white/15 group-hover:-translate-y-0.5"
              aria-hidden
            >
              <Icon size={20} strokeWidth={1.75} />
            </span>
          </div>
          <h3 className="mt-4 text-heading-lg md:text-display-sm-fluid text-white">
            {tool.title}
          </h3>
          <p className="mt-4 text-body text-white/85 max-w-md">{tool.hook}</p>
        </div>

        <div className="mt-10 flex items-end justify-between gap-4 flex-wrap">
          <div className="flex flex-wrap gap-2">
            {tool.stack.map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[12px] font-medium text-white/90"
              >
                {s}
              </span>
            ))}
          </div>
          <span
            className="inline-flex items-center gap-1 text-[14px] font-medium text-white/90 group-hover:text-white transition-colors duration-micro"
            aria-hidden
          >
            <span className="link-underline">See how it works</span>
            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              className="transition-transform duration-standard ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  )
}
