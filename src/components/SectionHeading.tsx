import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}: SectionHeadingProps) {
  const isDark = theme === 'dark'
  const isCentered = align === 'center'

  return (
    <div
      className={`${isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}
    >
      <p className={`eyebrow ${isDark ? 'text-orange' : ''}`}>{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08] ${
          isDark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-[15px] leading-7 sm:text-base ${
            isDark ? 'text-steel/75' : 'text-grey'
          } ${isCentered ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
