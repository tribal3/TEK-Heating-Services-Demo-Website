import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 650)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-24 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy hover:text-white md:bottom-7 md:right-7 ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  )
}
