import { useTranslation } from 'react-i18next'
import { useTheme } from '@/hooks'
import { FiSun, FiMoon } from 'react-icons/fi'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  flat?: boolean
}

export function ThemeToggle({ flat = false }: ThemeToggleProps) {
  const { theme, toggle } = useTheme()
  const { t } = useTranslation()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`${t('common.theme')}: ${isDark ? t('common.dark') : t('common.light')}`}
      className={cn(
        'theme-toggle-button inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-transparent text-[color:var(--color-ink)] shadow-none backdrop-blur-0 transition-colors',
        flat
          ? 'hover:bg-white/20 dark:hover:bg-white/8'
          : 'hover:bg-white/20 dark:hover:bg-white/8',
      )}
    >
      {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  )
}
