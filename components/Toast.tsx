'use client'
import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import type { ToastEventDetail } from '@/lib/copyEmail'

interface ToastState {
  id: number
  message: string
}

export default function Toast() {
  const [toast, setToast] = useState<ToastState | null>(null)

  useEffect(() => {
    const onToast = (e: Event) => {
      const event = e as CustomEvent<ToastEventDetail>
      const id = Date.now()
      const ttl = event.detail.ttl ?? 3200
      setToast({ id, message: event.detail.message })
      window.setTimeout(() => {
        setToast((current) => (current?.id === id ? null : current))
      }, ttl)
    }
    window.addEventListener('mason-toast', onToast as EventListener)
    return () =>
      window.removeEventListener('mason-toast', onToast as EventListener)
  }, [])

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed inset-x-0 top-[calc(var(--nav-height)+16px)] z-[100] flex justify-center px-4 pointer-events-none"
    >
      {toast && (
        <div
          key={toast.id}
          className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full bg-ink text-white pl-4 pr-5 py-3 text-[14px] font-medium shadow-[0_10px_40px_-10px_rgba(10,10,10,0.5)] animate-fade-in max-w-[calc(100vw-32px)]"
        >
          <span className="inline-flex shrink-0 items-center justify-center h-5 w-5 rounded-full bg-ember">
            <Check size={12} strokeWidth={2.5} />
          </span>
          <span className="truncate">{toast.message}</span>
        </div>
      )}
    </div>
  )
}
