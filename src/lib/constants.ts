import type { NavItem, SocialLink } from '@/types/api'

export const SITE = {
  name: 'Gani Ramadhan',
  shortName: 'Gani.dev',
  domain: 'ganiramadhan.site',
  url: 'https://ganiramadhan.site',
  email: 'ganiramadhan35@gmail.com',
  whatsapp: '6283878624702',
  location: 'Bandung, Indonesia',
  region: 'West Java',
  country: 'Indonesia',
  geo: {
    latitude: -6.9175,
    longitude: 107.6191,
  },
} as const

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', href: '/', labelKey: 'nav.home' },
  { id: 'about', href: '/about', labelKey: 'nav.about' },
  { id: 'projects', href: '/projects', labelKey: 'nav.projects' },
  { id: 'experience', href: '/experience', labelKey: 'nav.experience' },
  { id: 'contact', href: '/contact', labelKey: 'nav.contact' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/ganiramadhan35/', iconKey: 'linkedin' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/Ganiramadhan', iconKey: 'github' },
  { id: 'email', name: 'Email', url: 'mailto:ganiramadhan35@gmail.com', iconKey: 'email' },
]

export const STORAGE_KEYS = {
  theme: 'theme',
  lang: 'lang',
} as const
