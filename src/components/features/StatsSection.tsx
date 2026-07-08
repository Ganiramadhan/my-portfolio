import { useTranslation } from 'react-i18next'
import { FiBriefcase, FiZap, FiLayers, FiUsers } from 'react-icons/fi'
import { Card } from '@/components/ui'

const items = [
  { id: 'exp', value: 3, suffix: '+', icon: <FiBriefcase />, labelKey: 'hero.stats.experience', className: 'glass-tint-blue' },
  { id: 'proj', value: 15, suffix: '+', icon: <FiLayers />, labelKey: 'hero.stats.projects', className: 'glass-tint-lime' },
  { id: 'clients', value: 10, suffix: '+', icon: <FiUsers />, labelKey: 'hero.stats.clients', className: 'glass-tint-amber' },
  { id: 'stack', value: 12, suffix: '+', icon: <FiZap />, labelKey: 'hero.stats.stars', className: 'glass-tint-rose' },
]

function StatItem({
  value,
  suffix,
  icon,
  label,
  className,
}: {
  value: number
  suffix: string
  icon: React.ReactNode
  label: string
  className: string
}) {
  return (
    <Card hover className={`flex h-full flex-col gap-3 p-5 sm:p-6 ${className}`}>
      <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400">
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/35 bg-white/45 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
          {icon}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</span>
      </div>
      <div className="text-3xl font-black font-display text-[color:var(--color-ink)] tabular-nums sm:text-5xl">
        {value}{suffix}
      </div>
    </Card>
  )
}

export function StatsSection() {
  const { t } = useTranslation()
  const capabilities = ['product', 'frontend', 'backend', 'cloud', 'performance', 'architecture']
  return (
    <section id="work" className="glass-section relative z-10 overflow-hidden py-10 sm:py-14">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {items.map((s) => (
            <StatItem key={s.id} value={s.value} suffix={s.suffix} icon={s.icon} label={t(s.labelKey)} className={s.className} />
          ))}
        </div>
      </div>
      <div className="glass-panel mx-auto mt-12 hidden max-w-[min(100vw,88rem)] overflow-hidden rounded-[2rem] px-4 py-3.5 text-[color:var(--color-ink)] sm:block">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {capabilities.map((item) => (
            <span key={item} className="flex items-center whitespace-nowrap text-xs font-black uppercase tracking-[.18em]">
              <span className="mr-2 text-brand-500">✦</span>
              {t(`hero.capabilities.${item}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
