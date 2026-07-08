import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import type { Language } from '@/types/api'

export function useLanguage() {
  const { i18n } = useTranslation()
  const resolved = i18n.resolvedLanguage || 'en'
  const current = (resolved.startsWith('id') ? 'id' : resolved.startsWith('ja') ? 'ja' : 'en') as Language

  const setLanguage = useCallback(
    (lang: Language) => {
      void i18n.changeLanguage(lang)
    },
    [i18n],
  )

  const toggle = useCallback(() => {
    setLanguage(current === 'en' ? 'id' : current === 'id' ? 'ja' : 'en')
  }, [current, setLanguage])

  return { language: current, setLanguage, toggle }
}
