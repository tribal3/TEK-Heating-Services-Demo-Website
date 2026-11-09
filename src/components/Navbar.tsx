import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Menu, Phone, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navLinks, site } from '../data/site'
import { Logo } from './Logo'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || !mobileMenuRef.current) return

      const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    mobileMenuRef.current?.querySelector<HTMLElement>('a, button')?.focus()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-navy/10 bg-white/95 shadow-[0_10px_35px_-25px_rgba(16,29,43,0.55)] backdrop-blur-md'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="container-page">
        <div
          className={`flex items-center justify-between gap-6 transition-all duration-300 ${
            isScrolled ? 'h-[72px]' : 'h-20'
          }`}
        >
          <a
            href="#home"
            className="rounded-lg focus-visible:outline-offset-4"
            aria-label="Tek Heating Services — home"
            onClick={() => setIsOpen(false)}
          >
            <Logo />
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors ${
                    isActive ? 'text-navy' : 'text-grey hover:text-navy'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-orange transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              )
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <a
              href={site.phoneHref}
              className="group hidden items-center gap-3 xl:flex"
              aria-label={`Call Tek Heating Services on ${site.phoneDisplay}`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-steel-light text-navy transition-colors group-hover:bg-steel">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-grey">
                  Call us today
                </span>
                <span className="text-sm font-bold text-navy transition-colors group-hover:text-orange-dark">
                  {site.phoneDisplay}
                </span>
              </span>
            </a>

            <a href={site.phoneHref} className="btn-primary px-5 py-3 text-[13px]">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-white text-navy transition-colors hover:bg-warm lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-navy/10 bg-white shadow-card lg:hidden"
          >
            <div className="container-page py-6">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between border-b border-navy/[0.06] py-4 text-lg font-semibold transition-colors ${
                      activeHref === link.href ? 'text-orange-dark' : 'text-navy'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-medium tabular-nums text-grey/60">
                      0{index + 1}
                    </span>
                  </a>
                ))}
              </nav>

              <div className="mt-6 rounded-2xl bg-warm p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-grey">
                  Speak with Tek Heating
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-2 flex items-center gap-2 font-display text-xl font-bold tracking-tight text-navy"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-5 w-5 text-orange" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
                <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-grey">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                  {site.addressLine}
                </p>
              </div>

              <a
                href={site.phoneHref}
                className="btn-primary mt-4 w-full"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
