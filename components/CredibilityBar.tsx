import Container from './Container'

const credits = [
  { label: 'Most recent', value: 'Fortune 10 healthtech' },
  { label: 'Prior', value: 'Experts Exchange (5M+ IT community)' },
  { label: 'MBA', value: 'Lee University' },
  { label: 'Based', value: 'Chicago, remote-first' },
]

/**
 * Quiet line of credits. Not a logo marquee, not a "seen at" brag wall.
 * Just specific, scannable positioning under the hero.
 */
export default function CredibilityBar() {
  return (
    <section
      className="border-y border-neutral-200 bg-white"
      aria-label="Positioning"
    >
      <Container>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 py-8 md:py-10">
          {credits.map((c) => (
            <li key={c.label} className="flex flex-col gap-1">
              <span className="text-label uppercase text-neutral-500">
                {c.label}
              </span>
              <span className="text-body text-ink">{c.value}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
