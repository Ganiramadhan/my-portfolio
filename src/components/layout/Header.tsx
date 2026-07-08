import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiArrowUpRight, FiMenu, FiX, FiSend } from 'react-icons/fi'
import { NAV_ITEMS, SITE } from '@/lib/constants'
import { ThemeToggle, LanguageSwitcher } from '@/components/ui'
import { cn } from '@/lib/utils'

export function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 px-3 transition-all duration-300 sm:px-10',
        scrolled ? 'pt-3 sm:pt-5' : 'pt-4 sm:pt-6',
      )}
    >
      {/* Main topbar */}
      <div
        className={cn(
          'header-shell mx-auto flex w-full max-w-[72rem] items-center justify-between gap-3 rounded-full border px-3 transition-all duration-300 sm:gap-5 sm:px-8 lg:px-10',
          scrolled
            ? 'h-14 border-[color:var(--color-line)] bg-white/90 shadow-[0_14px_45px_rgba(15,23,42,.10)] backdrop-blur-2xl dark:bg-slate-950/90 sm:h-16'
            : 'h-16 border-transparent bg-transparent shadow-none backdrop-blur-0 sm:h-[4.25rem]',
        )}
      >
        {/* Brand */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex min-w-0 items-center gap-2 rounded-full py-1 pr-1 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/15 sm:gap-3 sm:pr-2"
          aria-label={SITE.name}
        >
          <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-brand-600 text-[11px] font-black text-white shadow-[0_10px_24px_rgba(21,93,225,.24)] transition-transform duration-200 group-hover:-translate-y-0.5 dark:bg-brand-500 sm:h-10 sm:w-10 sm:text-xs">
            GR
            <span className="absolute -right-0.5 top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400 dark:border-slate-950" />
          </span>
          <span className="min-w-0">
            <span className="block max-w-[7.5rem] truncate font-display text-sm font-bold leading-none tracking-tight text-[color:var(--color-ink)] sm:max-w-none sm:text-[15px]">
              {SITE.name}
            </span>
            <span className="mt-0.5 block max-w-[7.5rem] truncate font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-muted sm:mt-1 sm:max-w-none sm:text-[10px] sm:tracking-[0.15em]">
              {t('hero.scene.role')}
            </span>
          </span>
        </Link>

        {/* Desktop nav island */}
        <nav
          className="hidden items-center gap-2 lg:flex"
          aria-label={t('common.navigation')}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                cn(
                  'group/nav relative rounded-full px-4 py-2.5 text-[13px] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/15',
                  isActive
                    ? 'text-brand-600 dark:text-brand-300'
                    : 'text-muted hover:text-[color:var(--color-ink)]',
                )
              }
            >
              <span className="relative">{t(item.labelKey)}</span>
              <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 rounded-full bg-brand-500 transition-transform duration-200 group-hover/nav:scale-x-100" />
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5">
          <LanguageSwitcher flat compact />
          <ThemeToggle flat />

          {/* CTA — hidden on small screens */}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="hidden h-10 items-center gap-1.5 rounded-full bg-brand-600 px-4 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(21,93,225,.24)] transition hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-[0_16px_34px_rgba(21,93,225,.32)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/20 dark:bg-brand-400 dark:text-slate-950 dark:hover:bg-brand-300 sm:inline-flex"
          >
            {t('common.getInTouch')}
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t('common.close') : t('common.menu')}
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-line)] bg-white/70 transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/15 dark:bg-white/8 dark:hover:bg-white/14 lg:hidden"
          >
            {open ? <FiX className="h-4.5 w-4.5" /> : <FiMenu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label={t('common.close')}
        onClick={() => setOpen(false)}
        className={cn(
          'fixed inset-0 top-0 bg-slate-950/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      {/* Mobile dropdown */}
      <div
        className={cn(
          'fixed inset-x-3 top-[4.75rem] z-10 transition-all duration-300 sm:left-auto sm:right-5 sm:top-[5.25rem] sm:w-72 lg:hidden',
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
        )}
      >
        <nav aria-label={t('common.navigation')}>
          <div className="grid max-h-[calc(100dvh-6rem)] gap-1 overflow-y-auto rounded-2xl border border-[color:var(--color-line)] bg-white/96 p-2 shadow-[0_24px_70px_rgba(15,23,42,.16)] backdrop-blur-2xl dark:bg-slate-950/96">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                to={item.href}
                end={item.href === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'flex items-center justify-between rounded-xl px-4 py-2.5 text-[13px] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/15',
                    isActive
                      ? 'text-brand-600 dark:text-brand-300'
                      : 'text-muted hover:bg-slate-100/70 hover:text-[color:var(--color-ink)] dark:hover:bg-white/8',
                  )
                }
              >
                <span>{t(item.labelKey)}</span>
                <FiArrowUpRight className="h-3.5 w-3.5 opacity-50" />
              </NavLink>
            ))}

            <div className="mt-1 flex items-center justify-between gap-2 border-t border-black/6 px-2 py-2 dark:border-white/8">
              <span className="text-[11px] font-bold uppercase tracking-[.14em] text-muted">
                {t('common.preferences')}
              </span>
              <div className="flex items-center gap-1.5">
                <LanguageSwitcher flat compact />
                <ThemeToggle flat />
              </div>
            </div>

            {/* CTA inside mobile menu */}
            <div className="border-t border-black/6 pt-1 dark:border-white/8">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl bg-brand-600 px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/20 dark:bg-brand-400 dark:text-slate-950"
              >
                <span>{t('common.getInTouch')}</span>
                <FiSend className="h-3.5 w-3.5 opacity-70" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
