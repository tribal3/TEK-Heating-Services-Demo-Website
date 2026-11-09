import { ArrowUpRight, Phone } from 'lucide-react'
import { site } from '../data/site'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img
        src="/images/gallery-pipe-fittings.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15"
        width={1100}
        height={733}
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-dark-glow mix-blend-screen"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-orange/20"
        aria-hidden="true"
      />

      <div className="container-page relative py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow text-orange">Ready when you are</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.9rem]">
              Let&apos;s Get Your Heating Working at Its Best.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-steel/70">
              Get in touch with Tek Heating Services to discuss your heating or boiler
              requirements. Clear advice, practical solutions and a straightforward service.
            </p>
          </div>

          <div className="w-full shrink-0 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm sm:p-6 lg:w-[22rem]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-steel/55">
              Call direct
            </p>
            <a
              href={site.phoneHref}
              className="mt-2 flex items-center gap-2 font-display text-xl font-extrabold tracking-[-0.03em] text-white transition-colors hover:text-orange sm:text-2xl"
            >
              <Phone className="h-5 w-5 text-orange" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a href={site.phoneHref} className="btn-primary mt-5 w-full">
              Call {site.phoneDisplay}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="mt-3 inline-flex w-full items-center justify-center gap-1.5 py-2 text-xs font-semibold text-steel/60 transition-colors hover:text-white"
            >
              Or send an enquiry
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
