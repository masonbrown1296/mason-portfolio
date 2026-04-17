interface PullQuoteProps {
  children: React.ReactNode
  attribution?: string
  tone?: 'ember' | 'ink'
}

export default function PullQuote({
  children,
  attribution,
  tone = 'ink',
}: PullQuoteProps) {
  const accent = tone === 'ember' ? 'border-ember' : 'border-ink'
  return (
    <figure className={`border-l-[3px] ${accent} pl-6 md:pl-8 my-12`}>
      <blockquote className="text-display-sm-fluid text-ink font-medium leading-[1.15] max-w-[28ch]">
        &ldquo;{children}&rdquo;
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 text-label uppercase text-neutral-500">
          {attribution}
        </figcaption>
      )}
    </figure>
  )
}
