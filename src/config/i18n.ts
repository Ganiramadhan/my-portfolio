import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '@/locales/en.json'
import id from '@/locales/id.json'
import ja from '@/locales/ja.json'
import { STORAGE_KEYS } from '@/lib/constants'

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
      ja: { translation: ja },
    },
    fallbackLng: 'en',
    lng: typeof window === 'undefined' ? 'en' : undefined,
    supportedLngs: ['en', 'id', 'ja'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: STORAGE_KEYS.lang,
      caches: ['localStorage'],
    },
  })

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', lng.startsWith('id') ? 'id' : lng.startsWith('ja') ? 'ja' : 'en')
  }
})

export default i18n
