import { trustItems } from '../data/site'

export function TrustBar() {
  return (
    <section aria-label="Why customers choose Tek Heating Services" className="relative bg-navy">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <ul className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.title}
                className="flex items-start gap-4 py-7 lg:px-7 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange/25 bg-orange/10 text-orange">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-steel/65">{item.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
