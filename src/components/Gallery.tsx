import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand, Info, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { galleryImages } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const lastFocusedRef = useRef<HTMLElement | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const close = useCallback(() => {
    setActiveIndex(null)
    window.setTimeout(() => lastFocusedRef.current?.focus(), 0)
  }, [])

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current - 1 + galleryImages.length) % galleryImages.length
    })
  }, [])

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current + 1) % galleryImages.length
    })
  }, [])

  useEffect(() => {
    if (activeIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
        return
      }
      if (event.key === 'ArrowLeft') {
        showPrevious()
        return
      }
      if (event.key === 'ArrowRight') {
        showNext()
        return
      }
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href]',
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
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, close, showNext, showPrevious])

  const activeImage = activeIndex === null ? null : galleryImages[activeIndex]

  return (
    <section id="work" className="section-pad relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -right-28 top-24 h-80 w-80 rounded-full bg-steel/60 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our work"
            title="Heating Services &amp; Workmanship"
            description="A closer look at the kind of boiler, heating and gas work involved in keeping a home warm, comfortable and well maintained."
          />
          <p className="flex max-w-xs items-start gap-2 text-xs leading-5 text-grey lg:pb-1">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
            Illustrative photography. Images do not depict completed Tek Heating Services
            projects.
          </p>
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} className="mb-5 break-inside-avoid" delay={(index % 3) * 0.05}>
              <button
                type="button"
                onClick={(event) => {
                  lastFocusedRef.current = event.currentTarget
                  setActiveIndex(index)
                }}
                className="group relative block w-full overflow-hidden rounded-2xl bg-steel text-left shadow-soft transition duration-300 hover:shadow-card focus-visible:outline-offset-4"
                aria-label={`Open image ${index + 1}: ${image.caption}`}
              >
                <div className={`${image.aspect} w-full overflow-hidden`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/0 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <span className="translate-y-1 text-[13px] font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {image.caption}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition-colors group-hover:bg-orange group-hover:text-navy">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-2 text-xs leading-5 text-grey/80">
          Photography is illustrative of the heating industry and is not presented as Tek Heating
          Services&apos; own project history.
        </p>
      </div>

      <AnimatePresence>
        {activeImage && activeIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur-sm sm:p-8"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label={`Image ${activeIndex + 1} of ${galleryImages.length}: ${activeImage.caption}`}
              className="relative flex w-full max-w-6xl flex-col"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">
                    Image {activeIndex + 1} of {galleryImages.length}
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-white sm:text-base">
                    {activeImage.caption}
                  </p>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={close}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15"
                  aria-label="Close image viewer"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="relative flex items-center justify-center">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-navy-deep/70 text-white backdrop-blur transition-colors hover:bg-orange hover:text-navy sm:-left-14"
                  aria-label="View previous image"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>

                <motion.img
                  key={activeImage.src}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="max-h-[72vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                />

                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-navy-deep/70 text-white backdrop-blur transition-colors hover:bg-orange hover:text-navy sm:-right-14"
                  aria-label="View next image"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 text-[11px] text-steel/50">
                <p className="max-w-2xl">{activeImage.alt}</p>
                <p className="hidden shrink-0 sm:block">Use ← → to browse · Esc to close</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
