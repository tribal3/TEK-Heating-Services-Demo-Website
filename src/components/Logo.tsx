interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isLight = variant === 'light'

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] bg-navy shadow-[0_8px_20px_-8px_rgba(16,29,43,0.7)] ${
          isLight ? 'ring-1 ring-white/15' : ''
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 48 48" className="h-11 w-11">
          <path
            d="M25.1 9.5c.9 5.2-4.8 6.9-4.8 12.6a6.1 6.1 0 0 0 12.2 0c0-3.3-2.1-5.4-4-7.7-.5 2-1.5 3.1-3 3.7.9-3.1.5-5.8-.4-8.6Z"
            fill="#F28C28"
          />
          <path
            d="M24.5 25.8c-.2 2.1-2.2 3-2.2 5.2a3.5 3.5 0 0 0 7 0c0-1.9-1.2-3-2.5-4.5-.3 1.2-.9 1.9-1.7 2.3.3-1.1.1-2.1-.6-3Z"
            fill="#F8FAFC"
          />
          <path
            d="M15.5 39h17"
            stroke="#F8FAFC"
            strokeOpacity=".65"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] font-extrabold tracking-[-0.04em] ${
            isLight ? 'text-white' : 'text-navy'
          }`}
        >
          TEK
        </span>
        <span
          className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.24em] ${
            isLight ? 'text-steel/80' : 'text-grey'
          }`}
        >
          Heating Services
        </span>
      </span>
    </span>
  )
}
