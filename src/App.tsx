import { useState } from 'react'
import { About } from './components/About'
import { AnnouncementBar } from './components/AnnouncementBar'
import { BackToTop } from './components/BackToTop'
import { Contact } from './components/Contact'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { MobileCallBar } from './components/MobileCallBar'
import { Navbar } from './components/Navbar'
import { Reviews } from './components/Reviews'
import { ServiceArea } from './components/ServiceArea'
import { Services } from './components/Services'
import { TrustBar } from './components/TrustBar'
import { WhyChooseUs } from './components/WhyChooseUs'

export default function App() {
  const [selectedService, setSelectedService] = useState('General enquiry')

  const handleEnquire = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    const contactSection = document.getElementById('contact')
    if (!contactSection) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    contactSection.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })

    window.setTimeout(
      () => document.getElementById('field-service')?.focus({ preventScroll: true }),
      prefersReducedMotion ? 0 : 500,
    )
  }

  return (
    <div className="min-h-screen bg-warm pb-20 md:pb-0">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <AnnouncementBar />
      <Navbar />

      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services onEnquire={handleEnquire} />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <ServiceArea />
        <Contact
          selectedService={selectedService}
          onSelectedServiceChange={setSelectedService}
        />
        <FinalCTA />
      </main>

      <Footer />
      <BackToTop />
      <MobileCallBar />
    </div>
  )
}
