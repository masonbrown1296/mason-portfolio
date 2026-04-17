import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'tertiary'
type Size = 'sm' | 'md' | 'lg'

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

type AnchorProps = CommonProps & {
  href: string
  external?: boolean
  onClick?: never
  type?: never
  disabled?: never
}

type ButtonProps = CommonProps & {
  href?: undefined
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

type Props = AnchorProps | ButtonProps

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-[13px] font-medium',
  md: 'h-11 px-5 text-[15px] font-medium',
  lg: 'h-12 px-6 text-[16px] font-medium',
}

const variantClasses: Record<Variant, string> = {
  primary: [
    'bg-ink text-white rounded-sm',
    'hover:bg-ember',
    'active:scale-[0.98]',
    'transition-[background-color,transform] duration-micro ease-natural',
    // Larger hit target via invisible padding
    'relative before:absolute before:inset-[-6px] before:content-[""]',
  ].join(' '),
  secondary: [
    'bg-transparent text-ink rounded-sm',
    'border border-neutral-300',
    'hover:bg-neutral-50 hover:border-neutral-500',
    'active:scale-[0.98]',
    'transition-[background-color,border-color,transform] duration-micro ease-natural',
    'relative before:absolute before:inset-[-6px] before:content-[""]',
  ].join(' '),
  tertiary: [
    'bg-transparent text-ink link-underline',
    'hover:text-ember',
    'transition-colors duration-micro ease-natural',
    'inline-flex items-center gap-1.5',
    // Tertiary doesn't use the h-* size classes
  ].join(' '),
}

export default function Button(props: Props) {
  const {
    variant = 'primary',
    size = 'md',
    className,
    children,
    icon,
    iconPosition = 'right',
  } = props

  const classes = cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    variant !== 'tertiary' && sizeClasses[size],
    variantClasses[variant],
    className
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex">{icon}</span>}
    </>
  )

  if ('href' in props && props.href !== undefined) {
    const { href, external } = props
    // External or mailto: use native anchor; internal: Next Link
    if (external || href.startsWith('mailto:') || href.startsWith('http')) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  const { onClick, type = 'button', disabled } = props
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  )
}
