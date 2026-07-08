import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { buildPageSchema, setSeo } from '@/lib/seo'

type PageKey = 'home' | 'about' | 'projects' | 'experience' | 'contact' | 'notFound'

const pagePaths: Record<PageKey, string> = {
  home: '/',
  about: '/about',
  projects: '/projects',
  experience: '/experience',
  contact: '/contact',
  notFound: '/',
}

export function usePageSeo(page: PageKey) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (i18n.resolvedLanguage) {
      document.documentElement.lang = i18n.resolvedLanguage
    }

    const title = t(`seo.${page}.title`)
    const description = t(`seo.${page}.description`)
    const path = pagePaths[page]

    setSeo({
      title,
      description,
      path,
      noindex: page === 'notFound',
      schema: buildPageSchema(page, title, description, path),
    })
  }, [i18n.resolvedLanguage, page, t])
}
