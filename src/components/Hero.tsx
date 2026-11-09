import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { site } from '../data/site'
import { Stars } from './Stars'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="home" className="relative overflow-hidden bg-hero-glow">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-subtle [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-16 h-[34rem] w-[34rem] rounded-full border border-orange/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-32 h-[26rem] w-[26rem] rounded-full border border-navy/5"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-14 lg:pb-24 lg:pt-20">
        <motion.div
          className="lg:col-span-7"
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
          }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.55 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
              </span>
              Bolton &amp; Greater Manchester
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mt-6 font-display text-[2.55rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-navy sm:text-6xl lg:text-[4.4rem]"
          >
            Reliable Heating.
            <br />
            <span className="text-orange">Expert Service.</span>
            <br />
            Peace of Mind.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mt-6 max-w-xl text-[15px] leading-7 text-grey sm:text-[17px] sm:leading-8"
          >
            Professional boiler and central heating services for homes across Bolton and Greater
            Manchester. From boiler repairs to complete heating installations, get straightforward
            advice and dependable workmanship.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href={site.phoneHref} className="btn-primary w-full sm:w-auto">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Tek Heating
            </a>
            <a href="#services" className="btn-outline w-full sm:w-auto">
              Explore Our Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-navy/10 pt-6"
          >
            <span className="flex items-center gap-2.5">
              <Stars />
              <span className="text-sm font-bold text-navy">5.0</span>
              <span className="text-sm text-grey">Google Rating</span>
            </span>
            <span className="hidden h-4 w-px bg-navy/15 sm:block" aria-hidden="true" />
            <span className="text-sm text-grey">
              <span className="font-semibold text-navy">15</span> reviews
            </span>
            <span className="hidden h-4 w-px bg-navy/15 sm:block" aria-hidden="true" />
            <span className="flex items-center gap-1.5 text-sm text-grey">
              <ShieldCheck className="h-4 w-4 text-orange" aria-hidden="true" />
              Local, independent business
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative lg:col-span-5"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute -left-3 bottom-10 top-10 hidden w-24 rounded-[28px] bg-orange sm:block"
            aria-hidden="true"
          />
          <div className="relative mx-auto w-full max-w-[30rem] overflow-hidden rounded-[26px] bg-navy shadow-lift lg:max-w-none">
            <div className="relative aspect-[4/5] w-full">
              <img
                src="/images/hero-boiler-engineer.jpg"
                alt="Heating engineer servicing an open wall-mounted boiler"
                className="h-full w-full object-cover object-[58%_center]"
                width={1800}
                height={1350}
                loading="eager"
                decoding="async"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
                Boiler servicing &amp; repair
              </div>
              <div className="absolute inset-x-5 bottom-5 flex justify-end">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-orange backdrop-blur">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-6 left-0 hidden w-[15.5rem] items-center gap-3 rounded-2xl border border-navy/[0.06] bg-white p-4 shadow-card sm:flex lg:-left-8"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-light text-orange-dark">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-grey">
                Based locally in
              </p>
              <p className="mt-0.5 font-display text-sm font-bold text-navy">Bolton, BL3</p>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-2 top-8 hidden items-center gap-2 rounded-xl border border-navy/[0.06] bg-white px-3.5 py-2.5 shadow-soft md:flex lg:-right-4"
          >
            <Stars className="h-3.5 w-3.5" />
            <span className="text-xs font-bold text-navy">5.0</span>
            <span className="text-[11px] text-grey">/ 15 reviews</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
