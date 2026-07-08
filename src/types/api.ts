export type Language = 'en' | 'id' | 'ja'
export type Theme = 'light' | 'dark'

export interface NavItem {
  id: string
  href: string
  labelKey: string
}

export interface Stat {
  id: string
  value: string
  labelKey: string
}

export interface Project {
  id: string
  slug: string
  titleKey: string
  descriptionKey: string
  image: string
  images?: string[]
  tags: string[]
  category: 'web' | 'mobile' | 'fullstack' | 'design'
  demoUrl?: string
  repoUrl?: string
  year: number
  featured?: boolean
}

export interface Experience {
  id: string
  company: string
  roleKey: string
  summaryKey: string
  location: string
  startDate: string
  endDate: string | null
  bulletKeys: string[]
  stack: string[]
  logo?: string
  url?: string
}

export interface Skill {
  name: string
  iconKey: string
  category: 'frontend' | 'backend' | 'devops' | 'tools'
}

export interface Testimonial {
  id: string
  name: string
  roleKey: string
  company: string
  avatar: string
  quoteKey: string
  rating: number
}

export interface SocialLink {
  id: string
  name: string
  url: string
  iconKey: string
}
