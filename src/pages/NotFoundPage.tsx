import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiArrowLeft, FiArrowUpRight, FiCompass } from 'react-icons/fi'
import { usePageSeo } from '@/hooks/usePageSeo'

export function NotFoundPage() {
  const { t } = useTranslation()
  usePageSeo('notFound')

  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <svg className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 text-brand-500/[0.08] dark:text-brand-300/[0.10]" viewBox="0 0 440 440" fill="none" aria-hidden="true">
        <path d="M86 230c70-105 161-95 214-12 28 44 62 56 101 24" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M116 278c48-26 88-19 123 5 34 24 71 21 107-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".55" />
        <rect x="135" y="116" width="170" height="116" rx="34" stroke="currentColor" strokeWidth="4" opacity=".5" />
        <path d="M168 158h82M168 184h54" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity=".52" />
      </svg>

      <div className="container-page grid min-h-[calc(100dvh-9rem)] place-items-center pb-16 text-center sm:pb-24">
        <div className="max-w-2xl">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[color:var(--color-line)] bg-white/70 text-brand-600 shadow-sm backdrop-blur dark:bg-white/8 dark:text-brand-300">
            <FiCompass className="h-6 w-6" />
          </div>
          <p className="mt-7 font-mono text-xs font-black uppercase tracking-[0.22em] text-brand-600 dark:text-brand-300">
            {t('notFound.eyebrow')}
          </p>
          <p className="mt-3 font-display text-[clamp(4rem,18vw,9rem)] font-black leading-none text-[color:var(--color-ink)]">
            404
          </p>
          <h1 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">{t('notFound.title')}</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted sm:text-base">
            {t('notFound.subtitle')}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 text-sm font-bold text-white shadow-[0_14px_34px_rgba(38,122,245,.24)] transition hover:-translate-y-0.5 hover:bg-brand-500"
            >
              <FiArrowLeft className="h-4 w-4" />
              {t('notFound.back')}
            </Link>
            <Link
              to="/projects"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[color:var(--color-line)] bg-white/62 px-5 text-sm font-bold text-[color:var(--color-ink)] shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white/80 dark:bg-white/8 dark:hover:bg-white/12"
            >
              {t('notFound.projects')}
              <FiArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
