import { ArrowUpRight, Check, MapPin, Phone } from 'lucide-react'
import { site } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function ServiceArea() {
  return (
    <section id="area" className="section-pad relative overflow-hidden bg-steel-light">
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full border border-navy/[0.06]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 top-1/2 h-[22rem] w-[22rem] -translate-y-1/2 rounded-full border border-orange/20"
        aria-hidden="true"
      />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Service area"
              title="Serving Bolton &amp; Greater Manchester"
              description="Tek Heating Services is based in Bolton and works with homeowners across the local area, including Bury, Wigan, Manchester and wider Greater Manchester. If you are nearby but not sure whether your address is covered, simply ask when you call."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              {['Bolton', 'Bury', 'Wigan', 'Manchester'].map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-[13px] font-semibold text-navy shadow-sm"
                >
                  <Check
                    className="h-3.5 w-3.5 text-orange-dark"
                    aria-hidden="true"
                    strokeWidth={3}
                  />
                  {area}
                </span>
              ))}
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-navy/15 px-4 py-2 text-[13px] font-medium text-grey">
                Surrounding areas by arrangement
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn-dark w-full sm:w-auto">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Check Your Area
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-semibold text-navy transition-colors hover:text-orange-dark"
              >
                Send an enquiry
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="relative mx-auto max-w-lg lg:mr-0">
            <div
              className="absolute -left-3 bottom-6 top-6 w-20 rounded-[24px] bg-orange"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-orange">
                    <MapPin className="h-6 w-6" aria-hidden="true" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-grey">
                      Based in Bolton
                    </p>
                    <p className="mt-0.5 font-display text-base font-bold text-navy">
                      {site.legalName}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-orange-light px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-orange-dark">
                  Local
                </span>
              </div>

              <div className="mt-7 rounded-xl bg-warm p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-grey">
                  Address
                </p>
                <address className="mt-2 not-italic">
                  <span className="block text-[15px] font-semibold text-navy">{site.address.street}</span>
                  <span className="mt-0.5 block text-[15px] text-grey">
                    {site.address.city}, {site.address.postcode}
                  </span>
                  <span className="mt-0.5 block text-[13px] text-grey/80">
                    {site.address.region}, United Kingdom
                  </span>
                </address>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-navy/10 px-5 py-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-grey">
                    Phone
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block text-[15px] font-bold text-navy transition-colors hover:text-orange-dark"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
                <a
                  href={site.phoneHref}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-orange text-navy transition-transform hover:-translate-y-0.5"
                  aria-label={`Call ${site.phoneDisplay}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-navy/10 bg-white px-5 py-3 text-[13px] font-semibold text-navy transition-colors hover:border-navy/20 hover:bg-warm"
              >
                Open in Google Maps
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              <p className="mt-4 text-[11px] leading-5 text-grey/70">
                Coverage may vary by location. Please confirm availability when you enquire.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
