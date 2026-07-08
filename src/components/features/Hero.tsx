import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  FiArrowUpRight,
  FiDownload,
  FiMail,
} from 'react-icons/fi'
import { Button, Badge } from '@/components/ui'
import { HeroScene } from './HeroScene'

export function Hero() {
  const { t, i18n } = useTranslation()
  const greeting = t('hero.greeting')
  const [typedGreeting, setTypedGreeting] = useState(greeting)

  useEffect(() => {
    let index = 0
    let intervalId = 0
    let pauseId = 0
    const type = () => {
      setTypedGreeting('')
      index = 0
      intervalId = window.setInterval(() => {
        index += 1
        setTypedGreeting(greeting.slice(0, index))
        if (index >= greeting.length) {
          window.clearInterval(intervalId)
          pauseId = window.setTimeout(type, 1800)
        }
      }, 46)
    }
    const timeoutId = window.setTimeout(() => {
      type()
    }, 0)
    return () => {
      window.clearTimeout(timeoutId)
      window.clearTimeout(pauseId)
      window.clearInterval(intervalId)
    }
  }, [greeting, i18n.resolvedLanguage])

  return (
    <section className="hero-section relative min-h-dvh overflow-hidden pb-10 pt-24 sm:pt-32 lg:pb-14">
      <svg
        className="hero-context-art pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 820"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-art-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity=".08" />
            <stop offset="52%" stopColor="currentColor" stopOpacity=".22" />
            <stop offset="100%" stopColor="currentColor" stopOpacity=".05" />
          </linearGradient>
          <linearGradient id="hero-art-panel" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity=".09" />
            <stop offset="100%" stopColor="currentColor" stopOpacity=".025" />
          </linearGradient>
        </defs>
        <g className="hero-art-top">
          <rect className="hero-art-panel" x="1010" y="116" width="250" height="132" rx="32" />
          <path className="hero-art-flow" d="M1052 174H1186M1052 204H1144" />
          <circle className="hero-art-dot" cx="1222" cy="162" r="7" />
        </g>
        <g className="hero-art-bottom">
          <rect className="hero-art-panel hero-art-panel-b" x="90" y="584" width="230" height="112" rx="28" />
          <path className="hero-art-flow hero-art-flow-soft" d="M124 642C170 604 222 684 286 626" />
          <circle className="hero-art-dot hero-art-dot-b" cx="132" cy="642" r="6" />
          <circle className="hero-art-dot hero-art-dot-b" cx="286" cy="626" r="6" />
        </g>
      </svg>
      <div className="container-page relative z-10">
        <div className="grid min-h-[calc(100dvh-8rem)] items-center gap-9 lg:min-h-[calc(100dvh-9rem)] lg:grid-cols-[minmax(0,1fr)_minmax(560px,.9fr)] lg:gap-10 xl:gap-12">
          <div className="relative max-w-[36.5rem]">
            <Badge tone="success" className="mb-5 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t('common.available')}
            </Badge>
            <p className="hero-handwriting text-lg text-brand-700 dark:text-brand-300 sm:text-[1.45rem]">
              <span className="typing-greeting">{typedGreeting}</span>
            </p>
            <p className="mt-3 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[.16em] text-muted sm:text-[10px] sm:tracking-[.2em]">
              <span className="h-px w-8 bg-brand-500" /> {t('hero.role')}
            </p>
            <h1 className="mt-5 text-[2.45rem] font-bold leading-[1.04] tracking-[-.03em] sm:text-[3rem] lg:text-[3.05rem] lg:tracking-[-.04em] xl:text-[3.28rem]">
              {t('hero.title')}
            </h1>
            <p className="mt-5 max-w-[33rem] text-base font-semibold leading-7 text-muted sm:text-[1.05rem] sm:leading-8">
              {t('hero.lead')}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link to="/projects">
                <Button size="lg" className="w-full sm:w-auto" rightIcon={<FiArrowUpRight />}>
                  {t('hero.ctaPrimary')}
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="hero-contact-button w-full sm:w-auto" leftIcon={<FiMail />}>
                  {t('hero.ctaSecondary')}
                </Button>
              </Link>
              <a
                href="/images/cv-gani-ramadhan.pdf"
                download="cv-gani-ramadhan.pdf"
                className="hero-cv-button inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border px-6 text-base font-bold transition-all duration-200 sm:w-auto"
              >
                <FiDownload />
                {t('common.downloadCV')}
              </a>
            </div>
          </div>

          <div className="relative w-full lg:justify-self-end xl:translate-x-6 2xl:translate-x-10">
            <HeroScene />
          </div>
        </div>

        <div className="hero-professional-strip mt-10 hidden items-center justify-between rounded-2xl px-5 py-3 text-xs font-bold uppercase tracking-[.18em] text-muted lg:flex">
          <span>{t('hero.trustedBy')}</span>
          <span>{t('hero.footerLine')}</span>
        </div>
      </div>
    </section>
  )
}
