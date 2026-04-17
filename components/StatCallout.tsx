import { cn } from '@/lib/utils'

interface StatCalloutProps {
  value: string
  label: string
  qualifier?: string
  className?: string
  align?: 'left' | 'center'
}

/**
 * A single big-number stat callout. The number is display type; the label
 * is a quiet eyebrow beneath it. Used in case studies for headline metrics.
 */
export default function StatCallout({
  value,
  label,
  qualifier,
  className,
  align = 'left',
}: StatCalloutProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className
      )}
    >
      <span className="text-display-sm-fluid text-ink">{value}</span>
      <span className="text-label uppercase text-neutral-500">{label}</span>
      {qualifier && (
        <span className="text-body-sm text-neutral-600 max-w-[30ch]">
          {qualifier}
        </span>
      )}
    </div>
  )
}
