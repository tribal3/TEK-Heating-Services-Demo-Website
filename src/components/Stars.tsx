import { Star } from 'lucide-react'

interface StarsProps {
  className?: string
  label?: string
}

export function Stars({ className = 'h-4 w-4', label = '5 out of 5 stars' }: StarsProps) {
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`${className} fill-orange text-orange`}
          aria-hidden="true"
          strokeWidth={1.5}
        />
      ))}
    </span>
  )
}
