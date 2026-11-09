import { Flame, Phone } from 'lucide-react'
import { site } from '../data/site'

export function AnnouncementBar() {
  return (
    <div className="bg-navy text-white">
      <div className="container-page flex h-10 items-center justify-between gap-4 text-[11px] font-medium tracking-wide sm:text-xs">
        <p className="flex min-w-0 items-center gap-2 text-steel/85">
          <Flame className="h-3.5 w-3.5 shrink-0 text-orange" aria-hidden="true" />
          <span className="truncate">Professional Heating &amp; Gas Services in Bolton</span>
        </p>
        <a
          href={site.phoneHref}
          className="group flex shrink-0 items-center gap-1.5 text-white transition-colors hover:text-orange"
        >
          <Phone className="h-3.5 w-3.5 text-orange" aria-hidden="true" />
          <span className="hidden sm:inline">Speak to us:</span>
          <span className="font-semibold">{site.phoneDisplay}</span>
        </a>
      </div>
    </div>
  )
}
