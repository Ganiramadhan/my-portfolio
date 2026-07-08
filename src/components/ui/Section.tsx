import type { HTMLAttributes, ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '@/lib/utils'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string
  title?: string
  subtitle?: string
  align?: 'left' | 'center'
  muted?: boolean
  children: ReactNode
}

export function Section({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  muted = false,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(
        'section-divider glass-section relative py-14 sm:py-24 lg:py-28',
        muted && 'glass-section-muted',
        className,
      )}
      {...rest}
    >
      <div className="container-page">
        {(eyebrow || title || subtitle) && (
          <Reveal
            as="header"
            className={cn(
              'mb-8 max-w-3xl sm:mb-16',
              align === 'center' && 'mx-auto text-center',
            )}
          >
            {eyebrow && (
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-700 dark:border-brand-800 dark:bg-brand-900/40 dark:text-brand-200">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_16px_rgba(38,122,245,.5)]" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-bold leading-[1.12] tracking-[-.02em] sm:text-4xl sm:tracking-[-.035em] lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:mt-5 sm:text-lg sm:leading-8">{subtitle}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
