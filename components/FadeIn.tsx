'use client'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  /** Milliseconds to delay the fade after entry. */
  delay?: number
  /** `viewport` fires when the element enters the viewport.
   *  `mount` fires immediately once mounted.                */
  trigger?: 'viewport' | 'mount'
  /** How far up to translate before fading in. Defaults to 12px. */
  offset?: number
}

/**
 * Gentle reveal. Fades and translates in.
 * Scroll-triggered by default, but respects prefers-reduced-motion
 * (set by globals.css) and can be switched to mount-triggered.
 */
export default function FadeIn({
  children,
  className,
  delay = 0,
  trigger = 'viewport',
  offset = 12,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(trigger === 'mount')

  useEffect(() => {
    if (trigger === 'mount') {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [trigger])

  return (
    <div
      ref={ref}
      className={cn('transition-all duration-choreo ease-soft', className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${offset}px)`,
        transitionDelay: visible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
