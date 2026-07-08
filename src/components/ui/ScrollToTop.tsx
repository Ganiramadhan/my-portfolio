import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const h = document.documentElement.scrollHeight - window.innerHeight
      setVisible(y > 480)
      setProgress(h > 0 ? Math.min(1, y / h) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dash = 2 * Math.PI * 18
  const offset = dash * (1 - progress)

  return (
    <button
      type="button"
      aria-label={t('common.backToTop')}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-[5.25rem] right-4 z-40 hidden h-11 w-11 place-items-center rounded-full border border-white/40 bg-white/55 text-brand-600 shadow-[var(--shadow-md)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 dark:border-white/10 dark:bg-white/10 motion-reduce:transition-none sm:bottom-[6.75rem] sm:right-6 sm:grid sm:h-12 sm:w-12',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2" fill="none" />
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={dash}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 120ms linear' }}
        />
      </svg>
      <FiArrowUp className="relative h-5 w-5" />
    </button>
  )
}
