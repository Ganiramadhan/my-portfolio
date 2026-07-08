import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
  y?: number
  /** Disable animation entirely (e.g. respect prefers-reduced-motion) */
  once?: boolean
}

export function Reveal({
  children,
  as: Tag = 'div',
  className,
}: RevealProps) {
  return (
    <Tag
      className={cn(className)}
    >
      {children}
    </Tag>
  )
}
