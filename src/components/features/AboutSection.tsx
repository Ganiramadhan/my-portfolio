import { useTranslation } from 'react-i18next'
import { FiCode, FiZap, FiLayers, FiUsers } from 'react-icons/fi'
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiLaravel,
  SiGo,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiDocker,
  SiGrafana,
  SiKubernetes,
  SiJenkins,
  SiApachecassandra,
} from 'react-icons/si'
import { Section, Card, Reveal, DotsPattern, ScribbleDoodle, SparkDoodle } from '@/components/ui'

const highlightIcons = [<FiCode key="1" />, <FiZap key="2" />, <FiLayers key="3" />, <FiUsers key="4" />]

const SKILL_ICONS: { name: string; icon: React.ReactNode; color: string }[] = [
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '' },
  { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E' },
  { name: 'Go', icon: <SiGo />, color: '#00ADD8' },
  { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
  { name: 'Cassandra', icon: <SiApachecassandra />, color: '#1287B1' },
  { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
  { name: 'RabbitMQ', icon: <SiRabbitmq />, color: '#FF6600' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
  { name: 'Jenkins', icon: <SiJenkins />, color: '#D33833' },
  { name: 'Grafana', icon: <SiGrafana />, color: '#F46800' },
]

export function AboutSection() {
  const { t } = useTranslation()
  const highlights = (['h1', 'h2', 'h3', 'h4'] as const).map((k, i) => ({
    icon: highlightIcons[i],
    title: t(`about.highlights.${k}`),
    desc: t(`about.highlights.${k}d`),
  }))

  return (
    <Section eyebrow={t('about.eyebrow')} title={t('about.title')} muted className="overflow-hidden">
      <DotsPattern className="right-0 top-16 hidden h-40 w-40 text-brand-200 dark:text-brand-800/40 sm:block" />
      <SparkDoodle className="absolute right-[8%] top-10 hidden w-12 text-amber-400 lg:block" />

      <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <div className="relative">
            <p className="text-base font-semibold leading-7 text-[color:var(--color-ink)] sm:text-xl sm:font-medium sm:leading-8">{t('about.p1')}</p>
            <p className="mt-5 hidden text-base leading-8 text-muted sm:block">{t('about.p2')}</p>
            <ScribbleDoodle className="mt-5 w-40 text-brand-400/70" />
          </div>

          <div className="mt-8">
            <h3 className="text-xs font-black uppercase tracking-[.18em] text-[color:var(--color-ink)]">
              {t('about.skillsTitle')}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {SKILL_ICONS.map((s, i) => (
                <Reveal key={s.name} delay={i * 30} y={8}>
                  <div className="toolkit-chip group flex items-center gap-2 rounded-xl border border-[color:var(--color-line)] bg-white/48 px-3 py-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white/70 dark:bg-white/6 dark:hover:bg-white/10">
                    <span className="text-base transition-transform duration-300 group-hover:scale-110" style={{ color: s.color || undefined }}>
                      {s.icon}
                    </span>
                    <span className="text-xs font-bold text-muted">{s.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:hidden">
            {highlights.map((h, i) => (
              <Reveal key={i} delay={i * 60} y={8}>
                <div className="about-principle-row flex items-start gap-3 rounded-2xl border border-[color:var(--color-line)] bg-white/58 p-4 shadow-sm dark:bg-white/[0.04]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-lg text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                    {h.icon}
                  </span>
                  <div>
                    <h4 className="text-sm font-black text-[color:var(--color-ink)]">{h.title}</h4>
                    <p className="mt-1 text-xs leading-6 text-muted">{h.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="hidden gap-4 sm:grid sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={i} delay={i * 100}>
              <Card hover className={`flex h-full flex-col gap-4 p-6 sm:p-7 ${
                i === 0 ? 'glass-tint-blue' :
                i === 1 ? 'glass-tint-lime' :
                i === 2 ? 'glass-tint-amber' :
                'glass-tint-rose'
              }`}>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/70 text-2xl text-brand-700 shadow-sm backdrop-blur dark:bg-brand-900/40 dark:text-brand-300">
                  {h.icon}
                </div>
                <h4 className="text-lg font-black">{h.title}</h4>
                <p className="text-sm leading-7 text-muted">{h.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
