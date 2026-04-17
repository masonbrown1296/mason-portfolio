import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  dotColor?: string
}

/**
 * Eyebrow label. Uppercase, wide-tracked, label-size. Optionally prefixed
 * with a small colored dot for section identity.
 */
export default function SectionLabel({
  children,
  className,
  dotColor,
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2',
        'text-label uppercase text-neutral-500',
        className
      )}
    >
      {dotColor && (
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: dotColor }}
          aria-hidden
        />
      )}
      {children}
    </span>
  )
}
