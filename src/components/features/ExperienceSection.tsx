import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiExternalLink, FiMapPin, FiBriefcase, FiCheckCircle, FiClock, FiTarget } from 'react-icons/fi'
import { Section, Badge, Reveal, OrbitDoodle } from '@/components/ui'
import { EXPERIENCES } from '@/data/dummy'
import { formatDateRange } from '@/lib/utils'
import { useLanguage } from '@/hooks'

export function ExperienceSection() {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const [expandedStacks, setExpandedStacks] = useState<Record<string, boolean>>({})
  const [expandedResponsibilities, setExpandedResponsibilities] = useState<Record<string, boolean>>({})
  const stackLimit = 5

  return (
    <Section eyebrow={t('experience.eyebrow')} title={t('experience.title')} subtitle={t('experience.subtitle')} muted className="overflow-hidden">
      <OrbitDoodle className="absolute -right-20 top-16 hidden w-80 text-brand-300/40 lg:block" />
      <ol className="experience-timeline relative space-y-6 pl-6 sm:pl-10">
        {EXPERIENCES.map((exp, i) => {
          const isStackExpanded = Boolean(expandedStacks[exp.id])
          const isResponsibilitiesExpanded = Boolean(expandedResponsibilities[exp.id])
          const visibleStack = isStackExpanded ? exp.stack : exp.stack.slice(0, stackLimit)
          const visibleResponsibilities = isResponsibilitiesExpanded ? exp.bulletKeys : exp.bulletKeys.slice(0, 3)

          return (
          <Reveal as="li" key={exp.id} delay={i * 100} className="relative">
            <span className="experience-node absolute -left-[40px] top-6 grid h-8 w-8 place-items-center overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-app)] text-brand-600 shadow-sm dark:text-brand-300 sm:-left-[56px]">
              {exp.logo ? (
                <img src={exp.logo} alt="" className="h-full w-full object-contain p-1.5" loading="lazy" />
              ) : (
                <FiBriefcase className="h-4 w-4" />
              )}
            </span>

            <div className="experience-item rounded-2xl border border-[color:var(--color-line)] bg-white/78 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 dark:bg-white/[0.04] sm:p-7">
              <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
                <div className="flex min-w-0 gap-3">
                  {exp.logo && (
                    <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-white/75 p-2 shadow-sm dark:bg-white/8">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="h-full w-full object-contain" loading="lazy" />
                    </span>
                  )}
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold sm:text-2xl">{t(exp.roleKey)}</h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${exp.company} website`}
                          className="inline-flex items-center gap-1 font-medium text-brand-600 hover:underline dark:text-brand-400"
                        >
                          {exp.company} <FiExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span className="font-medium text-[color:var(--color-ink)]">{exp.company}</span>
                      )}
                      <span aria-hidden>•</span>
                      <span className="inline-flex items-center gap-1">
                        <FiMapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-white/65 px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[.12em] text-muted dark:bg-white/[0.04]">
                  <FiClock className="h-3.5 w-3.5 text-brand-500" />
                  {formatDateRange(exp.startDate, exp.endDate, language)}
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-[color:var(--color-line)] bg-white/54 p-4 dark:bg-white/[0.03]">
                <p className="mb-2 text-[10px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">
                  {t('experience.focusLabel')}
                </p>
                <div className="flex gap-3">
                  <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                    <FiTarget className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-7 text-[color:var(--color-ink-muted)]">
                    {t(exp.summaryKey)}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[.16em] text-muted">
                  {t('experience.responsibilitiesLabel')}
                </p>
                <ul className="grid gap-2.5 text-sm leading-7 text-muted">
                  {visibleResponsibilities.map((b) => (
                    <li key={b} className="experience-responsibility flex gap-3 rounded-xl border border-[color:var(--color-line)] bg-white/52 px-4 py-3 dark:bg-white/[0.03]">
                      <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{t(b)}</span>
                    </li>
                  ))}
                </ul>
                {exp.bulletKeys.length > 3 && (
                  <button
                    type="button"
                    onClick={() => setExpandedResponsibilities((current) => ({ ...current, [exp.id]: !current[exp.id] }))}
                    aria-expanded={isResponsibilitiesExpanded}
                    className="mt-3 rounded-full border border-[color:var(--color-line)] bg-white/55 px-3 py-1.5 text-xs font-bold text-muted transition hover:border-brand-300 hover:text-brand-600 dark:bg-white/[0.04] dark:hover:text-brand-300"
                  >
                    {isResponsibilitiesExpanded ? t('experience.hideResponsibilities') : `${t('experience.showResponsibilities')} +${exp.bulletKeys.length - 3}`}
                  </button>
                )}
              </div>

              <div className="mt-5 border-t border-[color:var(--color-line)] pt-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  {visibleStack.map((s) => (
                    <Badge key={s} className="px-2.5 py-1 text-[11px]">{s}</Badge>
                  ))}
                  {!isStackExpanded && exp.stack.length > stackLimit && (
                    <Badge className="px-2.5 py-1 text-[11px]">+{exp.stack.length - stackLimit}</Badge>
                  )}
                </div>
                {exp.stack.length > 6 && (
                  <button
                    type="button"
                    onClick={() => setExpandedStacks((current) => ({ ...current, [exp.id]: current[exp.id] ? false : true }))}
                    aria-expanded={isStackExpanded}
                    className="mt-3 inline-flex rounded-full border border-[color:var(--color-line)] bg-white/55 px-3 py-1.5 text-xs font-bold text-muted transition hover:border-brand-300 hover:text-brand-600 dark:bg-white/[0.04] dark:hover:text-brand-300"
                  >
                    {isStackExpanded ? t('experience.hideStack') : t('experience.showStack')}
                  </button>
                )}
              </div>
            </div>
          </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
