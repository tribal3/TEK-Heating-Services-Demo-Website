import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import { navLinks, services, site } from '../data/site'
import { Logo } from './Logo'
import { Stars } from './Stars'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-steel/65">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-4">
            <a href="#home" aria-label="Tek Heating Services — back to top" className="inline-block">
              <Logo variant="light" />
            </a>
            <p className="mt-5 max-w-sm text-[13px] leading-6 text-steel/55">
              A Bolton-based domestic heating and gas business providing boiler installation,
              repairs, servicing and central heating services across Bolton and Greater
              Manchester.
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-steel/70 transition-colors hover:border-white/20 hover:text-white"
            >
              <Stars className="h-3 w-3" label="5.0 out of 5 stars" />
              <span className="font-semibold text-white">5.0</span>
              <span className="text-steel/40">·</span>
              <span>{site.reviewCount} Google reviews</span>
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-steel/55 transition-colors hover:text-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-[13px] text-steel/55 transition-colors hover:text-orange"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="group flex items-start gap-2.5 text-[13px] text-steel/70 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                  <span className="font-semibold text-white">{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-[13px] leading-6 text-steel/55 transition-colors hover:text-white"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.postcode}
                    <br />
                    United Kingdom
                  </span>
                </a>
              </li>
            </ul>
            <a href="#contact" className="btn-primary mt-5 w-full px-5 py-3 text-[13px]">
              Send an Enquiry
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-start justify-between gap-4 text-[11px] leading-5 text-steel/40 sm:flex-row sm:items-center">
            <p>
              © {year} {site.legalName}. All rights reserved.
            </p>
            <p className="max-w-md sm:text-right">
              Demo website. Photography is illustrative and does not depict completed Tek Heating
              Services projects.
            </p>
          </div>
          <div className="mt-5 flex flex-col items-start justify-between gap-2 border-t border-white/[0.06] pt-4 text-[11px] sm:flex-row sm:items-center">
            <p className="text-steel/30">Bolton · Greater Manchester · United Kingdom</p>
            <a
              href="https://tribal3.bond"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-steel/35 transition-colors hover:text-steel/70"
            >
              Website concept by{' '}
              <span className="font-semibold text-steel/60 transition-colors group-hover:text-orange">
                TRIBAL³
              </span>{' '}
              — Built for Growth
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
