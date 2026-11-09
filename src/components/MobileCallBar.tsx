import { ArrowUpRight, Phone } from 'lucide-react'
import { site } from '../data/site'

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_30px_-20px_rgba(16,29,43,0.5)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2.5">
        <a href={site.phoneHref} className="btn-primary flex-1 px-4 py-3 text-[13px]">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <a href="#contact" className="btn-outline flex-1 px-4 py-3 text-[13px]">
          Enquire
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
