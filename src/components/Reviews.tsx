import { ArrowUpRight } from 'lucide-react'
import { reviewThemes, site } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { Stars } from './Stars'

export function Reviews() {
  return (
    <section id="reviews" className="section-pad relative overflow-hidden bg-warm">
      <div
        className="pointer-events-none absolute inset-0 bg-dots opacity-[0.12]"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Customer feedback"
          title="What Customers Say"
          description="A strong local reputation, built on helpful communication, careful work and a straightforward approach."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="relative h-full overflow-hidden rounded-2xl bg-navy p-7 shadow-card sm:p-8">
              <div
                className="pointer-events-none absolute inset-0 bg-dark-glow"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-orange/20"
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">
                  Google rating
                </p>
                <div className="mt-5 flex items-end gap-3">
                  <span className="font-display text-6xl font-extrabold leading-none tracking-[-0.05em] text-white">
                    5.0
                  </span>
                  <span className="pb-1 text-sm font-medium text-steel/60">/ 5</span>
                </div>
                <div className="mt-4">
                  <Stars className="h-5 w-5" label="5.0 out of 5 stars" />
                </div>
                <p className="mt-4 text-sm text-steel/75">
                  <span className="font-semibold text-white">15 Google reviews</span> from customers
                  in and around Bolton.
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs leading-5 text-steel/50">
                    Rating and review count shown as supplied by the public Google business
                    listing.
                  </p>
                </div>

                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light-outline mt-auto w-full px-5 py-3 text-[13px]"
                >
                  View on Google
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {reviewThemes.map((theme, index) => {
              const Icon = theme.icon
              const isWide = index === reviewThemes.length - 1 && reviewThemes.length % 2 === 1
              return (
                <Reveal
                  key={theme.title}
                  delay={(index % 2) * 0.06}
                  className={isWide ? 'sm:col-span-2' : ''}
                >
                  <article
                    className={`flex h-full gap-4 rounded-2xl border border-navy/[0.07] bg-white p-5 shadow-soft sm:p-6 ${
                      isWide ? 'sm:items-center' : 'items-start'
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-light text-orange-dark">
                      <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-bold text-navy">
                        {theme.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-6 text-grey">{theme.description}</p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-xs leading-5 text-grey/80">
          Feedback themes are summarised from publicly available customer reviews. Direct
          quotations and customer identities are not reproduced here.
        </p>
      </div>
    </section>
  )
}
