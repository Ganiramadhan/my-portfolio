import type { ReactNode } from 'react'
import { Card } from './Card'

interface StatCardProps {
  value: string
  label: string
  icon?: ReactNode
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <Card className="flex flex-col gap-2 p-5">
      <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-3xl sm:text-4xl font-bold font-display text-[color:var(--color-ink)]">
        {value}
      </div>
    </Card>
  )
}
