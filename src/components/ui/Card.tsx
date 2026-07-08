import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'article' | 'section'
  hover?: boolean
  glow?: boolean
  children: ReactNode
}

export function Card({
  as: Tag = 'div',
  hover = false,
  glow = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cn(
        'glass-card relative rounded-3xl p-6 card-shadow',
        hover && 'transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-300 hover:shadow-[var(--shadow-lg)]',
        glow && 'glow-ring',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
