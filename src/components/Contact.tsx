import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Copy,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
} from 'lucide-react'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { additionalServices, services, site } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

interface ContactProps {
  selectedService: string
  onSelectedServiceChange: (service: string) => void
}

interface FormValues {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const serviceOptions = [
  'General enquiry',
  ...services.map((service) => service.title),
  ...additionalServices.map((service) => service.title),
  'Other',
]

const emptyForm: FormValues = {
  name: '',
  phone: '',
  email: '',
  service: 'General enquiry',
  message: '',
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.'
  }

  const digits = values.phone.replace(/\D/g, '')
  if (!/^[+\d][\d\s().-]{7,}$/.test(values.phone.trim()) || digits.length < 10 || digits.length > 15) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.service) {
    errors.service = 'Please select a service.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Please add a little more detail (at least 10 characters).'
  }

  return errors
}

export function Contact({ selectedService, onSelectedServiceChange }: ContactProps) {
  const [values, setValues] = useState<FormValues>({
    ...emptyForm,
    service: selectedService,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [copied, setCopied] = useState(false)
  const successRef = useRef<HTMLHeadingElement>(null)
  const copiedTimer = useRef<number | null>(null)

  useEffect(() => {
    setValues((current) => ({ ...current, service: selectedService }))
  }, [selectedService])

  useEffect(() => {
    return () => {
      if (copiedTimer.current) window.clearTimeout(copiedTimer.current)
    }
  }, [])

  useEffect(() => {
    if (isComplete) {
      successRef.current?.focus()
    }
  }, [isComplete])

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (hasSubmitted) {
      setErrors((current) => {
        const next = { ...current }
        delete next[field]
        return next
      })
    }
    if (field === 'service') {
      onSelectedServiceChange(value)
    }
  }

  const handleBlur = (field: keyof FormValues) => {
    const fieldErrors = validate(values)
    setErrors((current) => {
      const next = { ...current }
      if (fieldErrors[field]) {
        next[field] = fieldErrors[field]
      } else {
        delete next[field]
      }
      return next
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setHasSubmitted(true)
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstError = Object.keys(nextErrors)[0]
      document.getElementById(`field-${firstError}`)?.focus()
      return
    }

    setIsComplete(true)
  }

  const resetForm = () => {
    setValues({ ...emptyForm, service: 'General enquiry' })
    setErrors({})
    setHasSubmitted(false)
    setIsComplete(false)
    setCopied(false)
    onSelectedServiceChange('General enquiry')
  }

  const copyEnquiry = async () => {
    const text = [
      `Enquiry for Tek Heating Services`,
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Service: ${values.service}`,
      `Message: ${values.message}`,
    ].join('\n')

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      if (copiedTimer.current) window.clearTimeout(copiedTimer.current)
      copiedTimer.current = window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-steel-light blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Get in touch"
          title="Need Help With Your Heating?"
          description="Speak with Tek Heating Services about your boiler, heating system or gas appliance requirements."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl bg-navy p-6 shadow-card sm:p-7">
                <div
                  className="pointer-events-none absolute inset-0 bg-dark-glow"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-orange/20"
                  aria-hidden="true"
                />
                <div className="relative">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">
                    Call Tek Heating
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-3 flex items-center gap-3 font-display text-[1.6rem] font-extrabold tracking-[-0.03em] text-white transition-colors hover:text-orange sm:text-[1.75rem]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange text-navy">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {site.phoneDisplay}
                  </a>
                  <p className="mt-4 text-[13px] leading-6 text-steel/65">
                    For the quickest response, call to discuss your boiler, heating or gas
                    requirements.
                  </p>
                  <a href={site.phoneHref} className="btn-primary mt-5 w-full px-5 py-3 text-[13px]">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Now
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="rounded-2xl border border-navy/[0.07] bg-warm p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-orange-dark shadow-sm">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-grey">
                      Address
                    </p>
                    <address className="mt-1.5 not-italic text-[13.5px] leading-6 text-navy">
                      {site.address.street}, {site.address.city}, {site.address.postcode},
                      United Kingdom
                    </address>
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-navy transition-colors hover:text-orange-dark"
                    >
                      Open in Google Maps
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-navy/[0.07] bg-white p-6 shadow-soft">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-light text-orange-dark">
                    <MessageSquareText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-navy">Prefer to write it down?</p>
                    <p className="mt-1.5 text-[13px] leading-6 text-grey">
                      Use the enquiry form to outline what you need. This demo does not send
                      messages, but you can copy your enquiry and call to discuss it.
                    </p>
                    <button
                      type="button"
                      onClick={() => document.getElementById('field-name')?.focus()}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-navy transition-colors hover:text-orange-dark"
                    >
                      Send an Enquiry
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={0.05}>
            <div className="overflow-hidden rounded-2xl border border-navy/[0.08] bg-white shadow-card">
              <div className="border-b border-navy/[0.07] bg-warm/60 px-6 py-5 sm:px-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-dark">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
                      Service enquiry
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-navy">
                      Tell us how we can help
                    </h3>
                  </div>
                  <span className="rounded-full border border-navy/10 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-grey">
                    Demo form
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                {isComplete ? (
                  <div role="status" aria-live="polite">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
                      <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h4
                      ref={successRef}
                      tabIndex={-1}
                      className="mt-4 font-display text-xl font-bold text-navy outline-none"
                    >
                      Your enquiry is ready, {values.name.trim().split(' ')[0]}.
                    </h4>
                    <p className="mt-2 text-[13.5px] leading-6 text-grey">
                      This is a demo website, so your enquiry has{' '}
                      <strong className="font-semibold text-navy">not been sent</strong> or stored.
                      To speak with Tek Heating Services, call{' '}
                      <a
                        href={site.phoneHref}
                        className="font-semibold text-orange-dark underline decoration-orange/40 underline-offset-2"
                      >
                        {site.phoneDisplay}
                      </a>
                      .
                    </p>

                    <div className="mt-5 rounded-xl border border-navy/10 bg-warm p-4">
                      <dl className="grid gap-2 text-[13px] sm:grid-cols-2">
                        <div>
                          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-grey">
                            Name
                          </dt>
                          <dd className="mt-0.5 font-medium text-navy">{values.name}</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-grey">
                            Service
                          </dt>
                          <dd className="mt-0.5 font-medium text-navy">{values.service}</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-grey">
                            Phone
                          </dt>
                          <dd className="mt-0.5 font-medium text-navy">{values.phone}</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-grey">
                            Email
                          </dt>
                          <dd className="mt-0.5 break-words font-medium text-navy">
                            {values.email}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                      <a href={site.phoneHref} className="btn-primary flex-1">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        Call {site.phoneDisplay}
                      </a>
                      <button type="button" onClick={copyEnquiry} className="btn-outline flex-1">
                        {copied ? (
                          <>
                            <ClipboardCheck className="h-4 w-4 text-green-600" aria-hidden="true" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" aria-hidden="true" />
                            Copy details
                          </>
                        )}
                      </button>
                    </div>
                    <p className="sr-only" aria-live="polite">
                      {copied ? 'Enquiry details copied to clipboard.' : ''}
                    </p>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-4 text-xs font-semibold text-grey underline decoration-navy/20 underline-offset-4 transition-colors hover:text-navy"
                    >
                      Start another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <p className="mb-5 flex items-start gap-2 rounded-xl border border-orange/20 bg-orange-light/45 px-4 py-3 text-[12px] leading-5 text-navy">
                      <AlertCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-orange-dark"
                        aria-hidden="true"
                      />
                      This demo form validates your details but does not send messages. For a real
                      enquiry, please call {site.phoneDisplay}.
                    </p>

                    {hasSubmitted && Object.keys(errors).length > 0 ? (
                      <p
                        role="alert"
                        className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-700"
                      >
                        Please check the highlighted fields below.
                      </p>
                    ) : null}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="field-name" className="field-label">
                          Full name <span className="text-orange-dark">*</span>
                        </label>
                        <input
                          id="field-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={values.name}
                          onChange={(event) => updateField('name', event.target.value)}
                          onBlur={() => handleBlur('name')}
                          className="field-input"
                          placeholder="Your full name"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'error-name' : undefined}
                        />
                        {errors.name ? (
                          <p id="error-name" className="field-error">
                            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                            {errors.name}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="field-phone" className="field-label">
                          Phone number <span className="text-orange-dark">*</span>
                        </label>
                        <input
                          id="field-phone"
                          name="phone"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          value={values.phone}
                          onChange={(event) => updateField('phone', event.target.value)}
                          onBlur={() => handleBlur('phone')}
                          className="field-input"
                          placeholder="e.g. 07743 889314"
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? 'error-phone' : undefined}
                        />
                        {errors.phone ? (
                          <p id="error-phone" className="field-error">
                            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                            {errors.phone}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="field-email" className="field-label">
                          Email address <span className="text-orange-dark">*</span>
                        </label>
                        <input
                          id="field-email"
                          name="email"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          value={values.email}
                          onChange={(event) => updateField('email', event.target.value)}
                          onBlur={() => handleBlur('email')}
                          className="field-input"
                          placeholder="you@example.com"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'error-email' : undefined}
                        />
                        {errors.email ? (
                          <p id="error-email" className="field-error">
                            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                            {errors.email}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="field-service" className="field-label">
                          Service required <span className="text-orange-dark">*</span>
                        </label>
                        <select
                          id="field-service"
                          name="service"
                          value={values.service}
                          onChange={(event) => updateField('service', event.target.value)}
                          onBlur={() => handleBlur('service')}
                          className="field-input appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10"
                          style={{
                            backgroundImage:
                              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                          }}
                          aria-invalid={Boolean(errors.service)}
                          aria-describedby={errors.service ? 'error-service' : undefined}
                        >
                          {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors.service ? (
                          <p id="error-service" className="field-error">
                            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                            {errors.service}
                          </p>
                        ) : null}
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="field-message" className="field-label">
                          Message <span className="text-orange-dark">*</span>
                        </label>
                        <textarea
                          id="field-message"
                          name="message"
                          rows={5}
                          value={values.message}
                          onChange={(event) => updateField('message', event.target.value)}
                          onBlur={() => handleBlur('message')}
                          className="field-input resize-y"
                          placeholder="Tell us a little about the boiler, heating system or gas appliance you need help with."
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? 'error-message' : undefined}
                        />
                        {errors.message ? (
                          <p id="error-message" className="field-error">
                            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                            {errors.message}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <button type="submit" className="btn-primary mt-5 w-full">
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Submit Enquiry
                    </button>
                    <p className="mt-3 text-center text-[11px] leading-5 text-grey/75">
                      Demo only — no data is sent or stored. Call {site.phoneDisplay} for a real
                      enquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
