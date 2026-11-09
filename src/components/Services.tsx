import { ArrowUpRight, MessageSquareText, Phone } from 'lucide-react'
import { additionalServices, services, site } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

interface ServicesProps {
  onEnquire: (serviceTitle: string) => void
}

export function Services({ onEnquire }: ServicesProps) {
  return (
    <section id="services" className="section-pad relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 bg-dots opacity-[0.22] [mask-image:linear-gradient(to_bottom_left,black,transparent)]"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our services"
            title="Heating &amp; Boiler Services You Can Rely On"
            description="From routine boiler maintenance to complete heating system installations, explore how Tek Heating Services can help keep your home comfortable."
          />
          <a
            href={site.phoneHref}
            className="group hidden shrink-0 items-center gap-3 rounded-2xl border border-navy/10 bg-warm px-5 py-4 transition-colors hover:border-orange/40 hover:bg-orange-light/50 lg:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-dark shadow-sm">
              <Phone className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-grey">
                Prefer to talk it through?
              </span>
              <span className="mt-0.5 block text-sm font-bold text-navy">
                {site.phoneDisplay}
              </span>
            </span>
            <ArrowUpRight
              className="ml-1 h-4 w-4 text-grey transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-dark"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delay={(index % 3) * 0.06}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/[0.07] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-navy/10 hover:shadow-lift">
                  <div className="relative aspect-[16/11] overflow-hidden bg-steel">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                      width={1000}
                      height={750}
                      loading="lazy"
                      decoding="async"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent opacity-80"
                      aria-hidden="true"
                    />
                    <span className="absolute right-4 top-4 text-[10px] font-semibold tabular-nums tracking-[0.18em] text-white/70">
                      0{index + 1}
                    </span>
                    <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/50 bg-white/95 text-navy shadow-sm backdrop-blur">
                      <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-6 text-grey">
                      {service.description}
                    </p>
                    <div className="mt-auto pt-6">
                      <button
                        type="button"
                        onClick={() => onEnquire(service.title)}
                        className="group/link inline-flex items-center gap-2 text-[13px] font-bold text-navy transition-colors hover:text-orange-dark"
                        aria-label={`Enquire about ${service.title}`}
                      >
                        Enquire Now
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-warm text-navy transition-all group-hover/link:bg-orange group-hover/link:text-navy">
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-8">
          <div className="rounded-2xl border border-navy/[0.07] bg-warm/70 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-grey">
                Also available
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {additionalServices.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.title}>
                      <button
                        type="button"
                        onClick={() => onEnquire(item.title)}
                        className="flex items-center gap-2 text-[13px] font-medium text-navy transition-colors hover:text-orange-dark"
                        aria-label={`Enquire about ${item.title}`}
                      >
                        <Icon
                          className="h-4 w-4 shrink-0 text-orange-dark"
                          aria-hidden="true"
                          strokeWidth={1.9}
                        />
                        {item.title}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-5">
          <div className="relative overflow-hidden rounded-2xl bg-navy p-6 sm:p-7">
            <div
              className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50"
              aria-hidden="true"
            />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange ring-1 ring-orange/25">
                  <MessageSquareText className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-white sm:text-lg">
                    Not sure which service you need?
                  </h3>
                  <p className="mt-1 text-[13px] leading-6 text-steel/70">
                    Talk it through with Tek Heating Services and get straightforward guidance.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
                <a href={site.phoneHref} className="btn-primary px-5 py-3 text-[13px]">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
                <button
                  type="button"
                  onClick={() => onEnquire('General enquiry')}
                  className="btn-light-outline px-5 py-3 text-[13px]"
                >
                  Send an Enquiry
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
