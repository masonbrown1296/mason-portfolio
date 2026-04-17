import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: 'wide' | 'narrow'
  children: React.ReactNode
}

/**
 * Page container. Two widths: wide (1280px) for layout, narrow (720px) for prose.
 * Consistent horizontal gutter at every breakpoint.
 */
export default function Container({
  width = 'wide',
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 sm:px-10 lg:px-16',
        width === 'wide' ? 'max-w-wide' : 'max-w-narrow',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
