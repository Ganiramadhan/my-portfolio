import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Tone = 'brand' | 'neutral' | 'success'

const tones: Record<Tone, string> = {
  brand:
    'bg-brand-50/70 text-brand-700 border border-white/45 shadow-sm backdrop-blur-xl dark:bg-brand-900/35 dark:text-brand-200 dark:border-white/10',
  neutral:
    'bg-white/40 text-[color:var(--color-ink-muted)] border border-white/35 shadow-sm backdrop-blur-xl dark:bg-white/8 dark:border-white/10',
  success:
    'bg-emerald-50/75 text-emerald-700 border border-white/45 shadow-sm backdrop-blur-xl dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-white/10',
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone
  children: ReactNode
}

export function Badge({ tone = 'neutral', className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold',
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  )
}
