'use client'
import { Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { copyEmail } from '@/lib/copyEmail'

type Size = 'sm' | 'md' | 'lg'
type Variant = 'primary' | 'inverted' | 'ghost'

interface Props {
  variant?: Variant
  size?: Size
  showIcon?: boolean
  children?: React.ReactNode
  className?: string
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-[13px] font-medium',
  md: 'h-11 px-5 text-[15px] font-medium',
  lg: 'h-12 px-6 text-[16px] font-medium',
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-ink text-white rounded-sm hover:bg-ember',
  inverted: 'bg-white text-ink rounded-sm hover:bg-white/90',
  ghost:
    'bg-transparent text-ink rounded-sm border border-neutral-300 hover:bg-neutral-50 hover:border-neutral-500',
}

export default function CopyEmailButton({
  variant = 'primary',
  size = 'md',
  showIcon = true,
  children = 'Get in touch',
  className,
}: Props) {
  return (
    <button
      type="button"
      onClick={() => copyEmail()}
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap',
        'active:scale-[0.98] transition-[background-color,transform,border-color] duration-micro ease-natural',
        'relative before:absolute before:inset-[-6px] before:content-[""]',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {showIcon && <Mail size={16} strokeWidth={1.75} />}
      <span>{children}</span>
    </button>
  )
}
