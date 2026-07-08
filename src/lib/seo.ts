import { SITE, SOCIAL_LINKS } from './constants'
import { PROJECTS, EXPERIENCES } from '@/data/dummy'

type SeoInput = {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'profile'
  noindex?: boolean
  schema?: Record<string, unknown>
}

const defaultImage = `${SITE.url}/profile-gani.webp`
const canonicalLanguages = ['en', 'id', 'ja'] as const

const basePersonSchema = {
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.name,
  url: SITE.url,
  jobTitle: 'Full Stack Engineer',
  image: defaultImage,
  email: SITE.email,
  telephone: `+${SITE.whatsapp}`,
  nationality: SITE.country,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bandung',
    addressRegion: SITE.region,
    addressCountry: 'ID',
  },
  homeLocation: {
    '@type': 'Place',
    name: SITE.location,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
  },
  areaServed: [
    { '@type': 'Country', name: 'Indonesia' },
    { '@type': 'AdministrativeArea', name: SITE.region },
    { '@type': 'City', name: 'Bandung' },
    { '@type': 'Place', name: 'Remote' },
  ],
  sameAs: SOCIAL_LINKS
    .filter((link) => link.url.startsWith('http'))
    .map((link) => link.url),
  knowsAbout: [
    'TypeScript',
    'React',
    'Next.js',
    'NestJS',
    'Go',
    'Laravel',
    'PostgreSQL',
    'Apache Cassandra',
    'Redis',
    'RabbitMQ',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'Grafana',
  ],
}

function setMeta(selector: string, attribute: 'content' | 'href', value: string) {
  const element = document.head.querySelector(selector)
  if (element) {
    element.setAttribute(attribute, value)
  }
}

function ensureMeta(name: string, value: string) {
  let element = document.head.querySelector(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

function ensureProperty(property: string, value: string) {
  let element = document.head.querySelector(`meta[property="${property}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

function ensureLink(rel: string, href: string, attributes: Record<string, string> = {}) {
  const selectorAttributes = Object.entries(attributes)
    .map(([key, value]) => `[${key}="${value}"]`)
    .join('')
  let element = document.head.querySelector(`link[rel="${rel}"]${selectorAttributes}`)
  if (!element) {
    const linkElement = document.createElement('link')
    linkElement.setAttribute('rel', rel)
    Object.entries(attributes).forEach(([key, value]) => linkElement.setAttribute(key, value))
    document.head.appendChild(linkElement)
    element = linkElement
  }
  element.setAttribute('href', href)
}

function setJsonLd(schema: Record<string, unknown>) {
  const id = 'page-schema'
  let script = document.getElementById(id) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(schema)
}

export function setSeo({
  title,
  description,
  path = '/',
  image = defaultImage,
  type = 'website',
  noindex = false,
  schema,
}: SeoInput) {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`
  const canonical = `${SITE.url}${normalizedPath === '/' ? '' : normalizedPath}`
  const fullTitle = title.includes(SITE.name) ? title : `${title} — ${SITE.name}`

  document.title = fullTitle
  document.documentElement.lang = document.documentElement.lang || 'en'

  ensureMeta('description', description)
  ensureMeta('author', SITE.name)
  ensureMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
  ensureMeta('geo.region', 'ID-JB')
  ensureMeta('geo.placename', `${SITE.location}, ${SITE.country}`)
  ensureMeta('geo.position', `${SITE.geo.latitude};${SITE.geo.longitude}`)
  ensureMeta('ICBM', `${SITE.geo.latitude}, ${SITE.geo.longitude}`)
  ensureMeta('language', document.documentElement.lang || 'en')
  setMeta('link[rel="canonical"]', 'href', canonical)
  canonicalLanguages.forEach((lang) => ensureLink('alternate', canonical, { hreflang: lang }))
  ensureLink('alternate', SITE.url, { hreflang: 'x-default' })

  ensureProperty('og:type', type)
  ensureProperty('og:site_name', SITE.name)
  ensureProperty('og:title', fullTitle)
  ensureProperty('og:description', description)
  ensureProperty('og:url', canonical)
  ensureProperty('og:image', image)

  ensureMeta('twitter:card', 'summary_large_image')
  ensureMeta('twitter:title', fullTitle)
  ensureMeta('twitter:description', description)
  ensureMeta('twitter:image', image)

  setJsonLd(schema || {
    '@context': 'https://schema.org',
    ...basePersonSchema,
  })
}

export function buildPageSchema(page: string, title: string, description: string, path: string) {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`
  const url = `${SITE.url}${normalizedPath === '/' ? '' : normalizedPath}`
  const webPage = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      name: SITE.name,
      url: SITE.url,
      inLanguage: canonicalLanguages,
      publisher: { '@id': `${SITE.url}/#person` },
    },
    about: { '@id': `${SITE.url}/#person` },
    primaryImageOfPage: defaultImage,
  }

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      name: SITE.name,
      url: SITE.url,
      inLanguage: canonicalLanguages,
      publisher: { '@id': `${SITE.url}/#person` },
    },
    basePersonSchema,
    webPage,
  ]

  if (page === 'projects') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#projects`,
      name: 'Selected projects by Gani Ramadhan',
      itemListElement: PROJECTS.map((project, index) => ({
        '@type': 'CreativeWork',
        position: index + 1,
        name: project.titleKey.split('.').at(-2) || project.slug,
        url: project.demoUrl || `${SITE.url}/projects#${project.slug}`,
        image: `${SITE.url}${project.image}`,
        dateCreated: String(project.year),
        keywords: project.tags.join(', '),
      })),
    })
  }

  if (page === 'experience') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#experience`,
      name: 'Professional experience',
      itemListElement: EXPERIENCES.map((experience, index) => ({
        '@type': 'OrganizationRole',
        position: index + 1,
        roleName: experience.roleKey.split('.').at(-2) || experience.company,
        startDate: experience.startDate,
        endDate: experience.endDate || undefined,
        worksFor: {
          '@type': 'Organization',
          name: experience.company,
          url: experience.url,
        },
      })),
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
