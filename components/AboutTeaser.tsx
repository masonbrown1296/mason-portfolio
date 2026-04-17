import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Container from './Container'
import SectionLabel from './SectionLabel'
import FadeIn from './FadeIn'

export default function AboutTeaser() {
  return (
    <section className="py-section bg-white">
      <Container>
        <FadeIn>
          <SectionLabel>About</SectionLabel>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <FadeIn className="md:col-span-5">
            <div className="gradient-tile gradient-about rounded-md overflow-hidden shadow-inset-hairline">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/headshot.jpeg"
                  alt="Portrait of Mason Brown"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  priority={false}
                  className="object-cover mix-blend-multiply"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120} className="md:col-span-7 md:pt-4">
            <h2 className="text-display-md-fluid text-ink max-w-[18ch]">
              Broadcaster turned marketer turned builder.
            </h2>
            <div className="mt-6 space-y-5 text-body-lg text-neutral-700 max-w-xl">
              <p>
                Started in sports radio at 19. Pivoted into marketing at a
                local agency and noticed it was all the same muscle: audience
                work. Ran a marketing function for five years at an IT
                community of five million. Now building enterprise buyer
                intelligence at a Fortune 10 healthtech company, and writing
                my own AI tools on the side.
              </p>
              <p>
                MBA from Lee. Chicago by way of Tennessee. Coach&apos;s kid.
                The same instinct that made me a state-championship
                broadcaster makes me a decent marketer: figure out who&apos;s
                in the room, figure out what they need, deliver it without
                performing.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1 text-body font-medium text-ink hover:text-ember transition-colors duration-micro group"
            >
              <span className="link-underline">More about me</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.75}
                className="transition-transform duration-standard ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
