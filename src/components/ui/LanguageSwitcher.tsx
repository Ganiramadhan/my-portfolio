import { useEffect, useRef, useState } from 'react'
import { FiCheck, FiChevronDown, FiGlobe } from 'react-icons/fi'
import { useLanguage } from '@/hooks'
import { cn } from '@/lib/utils'
import type { Language } from '@/types/api'

const langs: { code: Language; label: string; nativeLabel: string; flag: string }[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'id', label: 'Indonesian', nativeLabel: 'Indonesia', flag: '🇮🇩' },
  { code: 'ja', label: 'Japanese', nativeLabel: '日本語', flag: '🇯🇵' },
]

interface LanguageSwitcherProps {
  flat?: boolean
  compact?: boolean
}

export function LanguageSwitcher({ flat = false, compact = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const active = langs.find((lang) => lang.code === language) || langs[0]

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  return (
    <div
      ref={rootRef}
      className={cn(
        'language-switcher relative',
        flat && 'language-switcher-flat',
      )}
    >
      <button
        type="button"
        aria-label="Language"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          'inline-flex h-10 items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-white/70 px-3 text-xs font-bold text-[color:var(--color-ink)] shadow-sm backdrop-blur-xl transition-all duration-200 hover:border-brand-300 hover:bg-white dark:bg-white/8 dark:hover:bg-white/12',
          flat && 'border-transparent bg-white/0 shadow-none backdrop-blur-0 hover:bg-white/55 dark:hover:bg-white/8',
          compact && 'w-10 justify-center px-0 sm:w-auto sm:justify-start sm:px-3',
        )}
      >
        <span className={cn('grid h-6 w-6 place-items-center rounded-full bg-white/70 shadow-sm dark:bg-white/10', compact && 'hidden sm:grid')}>
          <FiGlobe className="h-3.5 w-3.5 text-muted" />
        </span>
        <span className="text-[15px] leading-none">{active.flag}</span>
        <span className={cn('uppercase', compact && 'hidden sm:inline')}>{active.code}</span>
        <FiChevronDown className={cn('h-3.5 w-3.5 text-muted transition-transform duration-200', compact && 'hidden sm:block', open && 'rotate-180')} />
      </button>

      <div
        role="menu"
        className={cn(
          'absolute right-0 top-12 z-50 w-64 overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-white/95 p-2 shadow-[0_22px_60px_rgba(15,23,42,.16)] backdrop-blur-2xl transition-all duration-200 dark:bg-slate-950/95',
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
        )}
      >
        {langs.map((lang) => {
          const selected = lang.code === language
          return (
            <button
              key={lang.code}
              type="button"
              role="menuitemradio"
              aria-checked={selected}
              onClick={() => {
                setLanguage(lang.code)
                setOpen(false)
              }}
              className={cn(
                'flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors duration-150',
                selected
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/12 dark:text-brand-200'
                  : 'text-[color:var(--color-ink)] hover:bg-slate-100/80 dark:hover:bg-white/8',
              )}
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-xl shadow-sm dark:bg-white/10">
                {lang.flag}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold">{lang.label}</span>
                <span className="block text-xs text-muted">{lang.nativeLabel}</span>
              </span>
              {selected && <FiCheck className="h-5 w-5" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
