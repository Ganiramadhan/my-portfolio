import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from '@/lib/constants'

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <FiLinkedin className="h-5 w-5" />,
  github: <FiGithub className="h-5 w-5" />,
  email: <FiMail className="h-5 w-5" />,
}

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--color-line)] bg-white/42 text-[color:var(--color-ink)] backdrop-blur-xl dark:bg-white/[0.03]">
      <div className="container-page relative py-12 sm:py-16">
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_.6fr_.6fr]">
          <svg className="pointer-events-none absolute -right-14 -top-12 h-64 w-64 text-brand-500/[0.075] dark:text-brand-300/[0.09] sm:-right-8 sm:-top-10 sm:h-72 sm:w-72" viewBox="0 0 280 280" fill="none" aria-hidden="true">
            <rect x="72" y="64" width="132" height="92" rx="24" stroke="currentColor" strokeWidth="2.5" opacity=".62" />
            <path d="M96 96h62M96 116h40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".72" />
            <path d="M38 182c43-46 86-47 128-5 29 29 58 30 86 3" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".7" />
            <path d="M104 198c26-14 48-10 67 3 18 13 38 12 60-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".42" />
            <circle cx="210" cy="86" r="9" fill="currentColor" opacity=".32" />
            <circle cx="66" cy="170" r="6" fill="currentColor" opacity=".26" />
          </svg>
          <div className="relative max-w-lg">
            <Link to="/" className="flex items-center gap-3 font-display text-lg font-bold">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-600 text-sm text-white shadow-[0_8px_24px_rgba(38,122,245,.22)]">
                GR
              </span>
              {SITE.name}
            </Link>
            <p className="mt-5 max-w-md text-base leading-7 text-muted">{t('footer.tagline')}</p>
            <p className="mt-3 text-sm font-semibold text-muted">
              {SITE.location} · {SITE.domain}
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target={s.url.startsWith('http') ? '_blank' : undefined}
                  rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.name}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--color-line)] bg-white/62 text-muted shadow-sm transition hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-500/10 hover:text-brand-600 dark:bg-white/6 dark:hover:text-white"
                >
                  {socialIcons[s.iconKey]}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <h3 className="text-xs font-semibold uppercase tracking-[.18em]">
              {t('footer.navigation')}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link to={item.href} className="group inline-flex items-center gap-1 text-muted transition-colors hover:text-brand-600">
                    {t(item.labelKey)} <FiArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <h3 className="text-xs font-semibold uppercase tracking-[.18em]">
              {t('footer.social')}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target={s.url.startsWith('http') ? '_blank' : undefined}
                    rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-muted transition-colors hover:text-brand-600"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[color:var(--color-line)] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {year} {SITE.name}. {t('footer.rights')}
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="text-xs font-bold text-muted transition hover:text-brand-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/15 dark:hover:text-brand-300"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
