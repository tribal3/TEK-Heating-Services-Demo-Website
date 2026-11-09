import { ArrowRight, Check, MapPin, Phone } from 'lucide-react'
import { site } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const priorities = [
  'Practical heating solutions for your home',
  'Clear communication from start to finish',
  'Attention to detail and tidy workmanship',
  'A customer-focused, personal approach',
]

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-warm">
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-steel/70 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-[33rem] pb-12 pr-6 sm:pb-14 sm:pr-10 lg:mr-0">
            <div
              className="absolute -left-4 bottom-0 top-10 w-3/4 rounded-[28px] bg-orange sm:-left-6"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-2 top-0 h-32 w-32 bg-dots opacity-40"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[24px] border border-white/60 shadow-lift">
              <div className="aspect-[4/5] w-full">
                <img
                  src="/images/gallery-engineer-radiator.jpg"
                  alt="Heating engineer measuring and fitting a white radiator in a customer's home"
                  className="h-full w-full object-cover object-[50%_center]"
                  width={1100}
                  height={1648}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/15 bg-navy/70 p-4 backdrop-blur-md">
                <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-steel/75">
                  <MapPin className="h-3.5 w-3.5 text-orange" aria-hidden="true" />
                  Bolton based
                </p>
                <p className="mt-1.5 font-display text-sm font-bold text-white">
                  Domestic heating &amp; gas services
                </p>
              </div>
            </div>

            <div className="absolute -bottom-2 right-0 hidden w-40 overflow-hidden rounded-2xl border-4 border-white shadow-card sm:block lg:-right-5 lg:w-44">
              <img
                src="/images/service-boiler-repair.jpg"
                alt="Close-up of boiler controls during a heating service"
                className="aspect-square w-full object-cover"
                width={1000}
                height={667}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading
              eyebrow="About Tek Heating"
              title="Local Heating Expertise. A Personal Approach."
              description={
                <>
                  Tek Heating Services is a Bolton-based domestic heating and gas business serving
                  homeowners across Bolton and Greater Manchester. Led by local engineer Stuart
                  Kershaw, the focus is on practical solutions, clear communication and doing the
                  job properly.
                </>
              }
            />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-grey">
              From a straightforward boiler repair to a new heating installation, you can expect
              the work to be explained clearly, your home to be treated with respect and the
              finish to be neat and considered.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {priorities.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange-dark">
                    <Check className="h-3 w-3" aria-hidden="true" strokeWidth={3} />
                  </span>
                  <span className="text-[13.5px] leading-6 text-navy">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4 rounded-r-xl border-l-2 border-orange bg-white/70 px-5 py-4">
              <span className="font-display text-2xl font-extrabold tracking-[-0.04em] text-navy">
                15+
              </span>
              <p className="text-[13px] leading-5 text-grey">
                <span className="font-semibold text-navy">Years&apos; experience</span> in gas,
                heating and plumbing, as described in public business listings.
              </p>
            </div>

            <div className="mt-5 rounded-r-xl border-l-2 border-navy/10 bg-white/70 px-5 py-4">
              <p className="font-display text-base font-bold text-navy sm:text-lg">
                A straightforward approach: quality work, clear advice and a fair price.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={site.phoneHref} className="btn-dark w-full sm:w-auto">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Speak with Tek Heating
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-semibold text-navy transition-colors hover:text-orange-dark"
              >
                Explore our services
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
