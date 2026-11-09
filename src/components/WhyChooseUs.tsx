import { ArrowUpRight, Phone } from 'lucide-react'
import { reasons, site } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function WhyChooseUs() {
  return (
    <section id="why-tek" className="relative overflow-hidden bg-navy">
      <div
        className="pointer-events-none absolute inset-0 bg-dark-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40"
        aria-hidden="true"
      />
      <div className="container-page section-pad relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionHeading
                theme="dark"
                eyebrow="Why choose Tek"
                title="Reassurance at Every Step"
                description="Heating work is about more than parts and pipework. It is about feeling confident in who you invite into your home, understanding what is happening and knowing the job has been done with care."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange">
                  Prefer a conversation?
                </p>
                <a
                  href={site.phoneHref}
                  className="group mt-3 flex items-center justify-between gap-4"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange text-navy">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-steel/55">
                        Call Tek Heating
                      </span>
                      <span className="mt-0.5 block text-sm font-bold text-white">
                        {site.phoneDisplay}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-steel/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <p className="mt-5 max-w-sm text-xs leading-5 text-steel/45">
                These points reflect themes highlighted in publicly available customer feedback.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Reveal key={reason.number} delay={(index % 2) * 0.07}>
                  <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-orange/30 hover:bg-white/[0.06]">
                    <div className="flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-orange transition-colors group-hover:border-orange/30 group-hover:bg-orange/10">
                        <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
                      </span>
                      <span className="font-display text-xs font-semibold tabular-nums tracking-[0.16em] text-steel/35">
                        {reason.number}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-lg font-bold tracking-[-0.02em] text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-6 text-steel/65">
                      {reason.description}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
