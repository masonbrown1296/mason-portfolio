import Container from '@/components/Container'
import FadeIn from '@/components/FadeIn'

interface StatsStripProps {
  stats: { value: string; label: string }[]
}

export default function StatsStrip({ stats }: StatsStripProps) {
  const cols =
    stats.length === 4
      ? 'sm:grid-cols-4'
      : stats.length === 2
        ? 'sm:grid-cols-2'
        : 'sm:grid-cols-3'
  return (
    <section className="bg-white border-b border-neutral-200 py-12">
      <Container>
        <FadeIn>
          <div className={`grid grid-cols-1 ${cols} gap-8`}>
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-display-md-fluid text-ink">
                  {s.value}
                </span>
                <span className="text-label uppercase text-neutral-500 mt-2">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
