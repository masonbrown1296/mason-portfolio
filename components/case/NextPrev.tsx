import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Container from '@/components/Container'

interface NextPrevProps {
  prev: { href: string; title: string }
  next: { href: string; title: string }
}

export default function NextPrev({ prev, next }: NextPrevProps) {
  return (
    <section className="py-section-lg bg-off-white border-t border-neutral-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href={prev.href}
            className="group flex flex-col rounded-md bg-white border border-neutral-200 p-8 hover:border-neutral-400 hover:-translate-y-1 transition-all duration-standard ease-soft shadow-inset-hairline"
          >
            <span className="inline-flex items-center gap-2 text-label uppercase text-neutral-500">
              <ArrowLeft size={14} strokeWidth={1.75} />
              Previous
            </span>
            <span className="mt-4 text-heading-lg text-ink group-hover:text-ember transition-colors duration-micro">
              {prev.title}
            </span>
          </Link>
          <Link
            href={next.href}
            className="group flex flex-col items-end text-right rounded-md bg-white border border-neutral-200 p-8 hover:border-neutral-400 hover:-translate-y-1 transition-all duration-standard ease-soft shadow-inset-hairline"
          >
            <span className="inline-flex items-center gap-2 text-label uppercase text-neutral-500">
              Next
              <ArrowRight size={14} strokeWidth={1.75} />
            </span>
            <span className="mt-4 text-heading-lg text-ink group-hover:text-ember transition-colors duration-micro">
              {next.title}
            </span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
