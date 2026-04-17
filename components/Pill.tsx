import { cn } from '@/lib/utils'

interface PillProps {
  children: React.ReactNode
  className?: string
  tone?: 'neutral' | 'ember' | 'ink'
}

/**
 * A small tag/label. Used for tech stack callouts, methodology labels,
 * and framework mentions on case study pages.
 */
export default function Pill({ children, className, tone = 'neutral' }: PillProps) {
  const toneClasses = {
    neutral: 'bg-neutral-100 text-neutral-700 border-neutral-200',
    ember: 'bg-[rgba(217,79,30,0.08)] text-ember border-[rgba(217,79,30,0.15)]',
    ink: 'bg-neutral-900 text-white border-neutral-900',
  }[tone]

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1',
        'text-[13px] font-medium tracking-[-0.005em]',
        toneClasses,
        className
      )}
    >
      {children}
    </span>
  )
}
