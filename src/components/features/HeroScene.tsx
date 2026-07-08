import type { CSSProperties } from 'react'
import { FiCheck, FiCpu, FiGitBranch, FiLayers, FiShield } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import {
  SiDocker,
  SiGo,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from 'react-icons/si'

const stack = [
  { icon: <SiReact />, label: 'React', color: '#61DAFB' },
  { icon: <SiNextdotjs />, label: 'Next.js', color: '#111827' },
  { icon: <SiTypescript />, label: 'TypeScript', color: '#3178C6' },
  { icon: <SiGo />, label: 'Go', color: '#00ADD8' },
  { icon: <SiPostgresql />, label: 'PostgreSQL', color: '#4169E1' },
  { icon: <SiDocker />, label: 'Docker', color: '#2496ED' },
]

export function HeroScene() {
  const { t } = useTranslation()

  return (
    <div className="hero-scene relative mx-auto w-full max-w-[610px]" aria-label={t('hero.dashboardLabel')}>
      <div className="hero-shell-card premium-panel relative z-10 rounded-[1.35rem] p-1.5 transition-all duration-300 sm:rounded-[1.6rem] sm:p-2">
        <div className="hero-scene-window relative overflow-hidden rounded-[1.05rem] border border-slate-200/80 bg-white sm:rounded-[1.35rem]">
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />
          <span className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-500/[0.045] blur-3xl" />
          <div className="hero-scene-topbar relative z-10 flex items-center justify-between border-b border-slate-200 px-3.5 py-3 sm:px-4">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-brand-600 shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-brand-300">
                <FiCpu className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-mono text-[9px] font-black uppercase tracking-[.18em] text-brand-600 dark:text-brand-300">{t('hero.scene.system')}</p>
                <p className="mt-0.5 hidden truncate text-[10px] font-bold text-slate-500 sm:block dark:text-slate-400">{t('hero.dashboardSubtitle')}</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm dark:border-white/10 dark:bg-white/8">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="font-mono text-[9px] font-black uppercase tracking-[.18em] text-slate-500 dark:text-slate-300">Live</span>
            </div>
          </div>

          <div className="relative z-10 grid gap-2.5 p-2.5 sm:grid-cols-[.95fr_1fr] sm:gap-3 sm:p-3">
            <div className="hero-profile-card relative min-h-[230px] overflow-hidden rounded-[1rem] border border-slate-200 bg-white p-3.5 sm:min-h-[258px] sm:p-4">
              <span className="absolute -left-14 top-16 h-36 w-36 rounded-full bg-brand-100/55" />
              <span className="absolute -right-16 bottom-4 h-40 w-40 rounded-full bg-slate-100/90" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-600 dark:text-brand-300">
                    {t('hero.scene.profile')}
                  </p>
                  <span className="grid h-7 w-7 place-items-center rounded-xl border border-slate-200 bg-white/75 text-brand-600 shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-brand-300">
                    <FiShield className="h-3.5 w-3.5" />
                  </span>
                </div>
                <div className="my-auto">
                  <div className="hero-photo-frame relative mx-auto w-[8.5rem] sm:w-40">
                    <div className="hero-photo-accent absolute -inset-1.5 rotate-1 rounded-[1.55rem] bg-[#ff7a66] shadow-lg" />
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.4rem] border-4 border-white bg-slate-100 shadow-xl">
                      <img
                        src="/profile-gani.webp"
                        alt=""
                        width="400"
                        height="480"
                        className="hero-photo h-full w-full scale-[1.12] object-cover object-[50%_18%]"
                      />
                    </div>
                  </div>
                </div>
                <div className="hero-production-card flex items-center justify-between rounded-2xl border border-slate-200 bg-white/92 p-2.5 text-slate-900 shadow-sm backdrop-blur">
                  <span className="max-w-[9rem] text-xs font-black leading-snug">{t('hero.scene.production')}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-950 text-white"><FiGitBranch /></span>
                </div>
              </div>
            </div>

            <div className="grid content-start gap-3">
              <div className="hero-status-card rounded-[1rem] border border-slate-200 bg-white p-3.5 text-slate-900 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[.18em] text-brand-600 dark:text-brand-300">{t('hero.scene.status')}</span>
                  <span className="hero-live-pill inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Live
                  </span>
                </div>
                <p className="mt-3 max-w-[13rem] text-lg font-black leading-tight sm:text-xl">{t('hero.scene.shipping')}</p>
                <div className="hero-status-meter mt-3 grid grid-cols-[1fr_auto] items-end gap-3">
                  <div className="space-y-1.5">
                    <span className="block h-1.5 w-full rounded-full bg-brand-500" />
                    <span className="block h-1.5 w-4/5 rounded-full bg-sky-300" />
                    <span className="block h-1.5 w-2/3 rounded-full bg-emerald-300" />
                  </div>
                  <span className="rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-[10px] font-black text-brand-600 shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-brand-300">01</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="hero-capability-pill inline-flex items-center justify-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1"><FiCheck className="text-brand-600 dark:text-brand-300" /> {t('hero.scene.design')}</span>
                  <span className="hero-capability-pill inline-flex items-center justify-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1"><FiCheck className="text-brand-600 dark:text-brand-300" /> {t('hero.scene.build')}</span>
                  <span className="hero-capability-pill inline-flex items-center justify-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1"><FiCheck className="text-brand-600 dark:text-brand-300" /> {t('hero.scene.scale')}</span>
                </div>
              </div>

              <div className="group/stack hero-mini-card hero-stack-card rounded-[1rem] border border-slate-200 bg-white p-3.5 text-slate-900 shadow-sm">
                <div className="flex items-center gap-2">
                  <FiLayers />
                  <span className="text-[10px] font-black uppercase tracking-[.18em]">{t('hero.scene.stack')}</span>
                </div>
                <div className="mt-3 grid grid-cols-6 gap-2">
                  {stack.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      title={item.label}
                      style={{ '--stack-color': item.color } as CSSProperties}
                      className="hero-stack-icon grid aspect-square cursor-pointer place-items-center rounded-xl border border-slate-200 bg-white text-base shadow-sm"
                    >
                      {item.icon}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hero-delivery-card hero-mini-card flex items-center justify-between gap-3 rounded-[1rem] border border-slate-200 bg-white p-3.5 text-slate-900 shadow-sm">
                <div className="min-w-0">
                  <span className="block text-[10px] font-black uppercase tracking-[.18em] text-brand-600 dark:text-brand-300">{t('hero.scene.architecture')}</span>
                  <span className="mt-1 block text-sm font-black leading-snug text-slate-900 dark:text-slate-100">{t('hero.scene.deliveryReady')}</span>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white shadow-[0_12px_26px_rgba(37,99,235,.22)]">
                  <FiCpu className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
