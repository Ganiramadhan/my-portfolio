import { useCallback, useEffect, useMemo, useRef, useState, type FC } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { FiExternalLink, FiGithub, FiFolder, FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi'
import { Section, Badge, Reveal, SparkDoodle } from '@/components/ui'
import { PROJECTS } from '@/data/dummy'
import type { Project } from '@/types/api'
import { cn } from '@/lib/utils'

type Filter = 'all' | Project['category']
const FILTERS: Filter[] = ['all', 'web', 'fullstack']

const rasterImageRe = /\.(png|jpe?g)$/i

function normalizeImagePath(src: string | undefined) {
  if (!src) return ''
  if (src.startsWith('http://') || src.startsWith('https://')) return src
  return src.startsWith('/') ? src : `/${src}`
}

function toWebpPath(src: string | undefined) {
  if (!src || src.startsWith('http://') || src.startsWith('https://')) return null
  if (!rasterImageRe.test(src)) return null
  return src.replace(rasterImageRe, '.webp')
}

function getProjectImages(project: Project | null | undefined) {
  if (!project) return []
  return project.images && project.images.length > 0 ? project.images : [project.image]
}

interface ImageLoaderProps {
  src: string
  alt: string
  className?: string
  wrapperClassName?: string
  priority?: boolean
}

const ImageLoader: FC<ImageLoaderProps> = ({ src, alt, className, wrapperClassName, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const imageSrc = normalizeImagePath(src)
  const webpSrc = toWebpPath(src)

  useEffect(() => {
    if (priority || isInView) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '160px' },
    )

    const current = rootRef.current
    if (current) observer.observe(current)
    return () => observer.disconnect()
  }, [isInView, priority])

  return (
    <div ref={rootRef} className={cn('relative h-full w-full overflow-hidden bg-slate-100 dark:bg-slate-900', wrapperClassName)}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-slate-200/80 dark:bg-white/8" />
      )}
      {hasError ? (
        <div className="absolute inset-0 grid place-items-center text-xs font-semibold text-slate-400">
          Image unavailable
        </div>
      ) : (
        <picture>
          {webpSrc && isInView && <source srcSet={normalizeImagePath(webpSrc)} type="image/webp" />}
          <img
            src={isInView ? imageSrc : undefined}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            width={1280}
            height={720}
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              setHasError(true)
              setIsLoaded(true)
            }}
            className={cn(
              className,
              'transition-opacity duration-200',
              isLoaded ? 'opacity-100' : 'opacity-0',
            )}
          />
        </picture>
      )}
    </div>
  )
}

interface ProjectsSectionProps {
  limit?: number
  showFilters?: boolean
}

export function ProjectsSection({ limit, showFilters = true }: ProjectsSectionProps) {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<Filter>('all')
  const [preview, setPreview] = useState<{ project: Project; index: number } | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState<Record<string, number>>(() =>
    Object.fromEntries(PROJECTS.map((project) => [project.id, 0])),
  )

  useEffect(() => {
    document.body.style.overflow = preview ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [preview])

  const movePreview = useCallback((direction: 'prev' | 'next') => {
    setPreview((current) => {
      if (!current) return current
      const images = getProjectImages(current.project)
      const nextIndex = direction === 'next'
        ? (current.index + 1) % images.length
        : (current.index - 1 + images.length) % images.length

      return { ...current, index: nextIndex }
    })
  }, [])

  useEffect(() => {
    if (!preview) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreview(null)
      if (event.key === 'ArrowLeft') movePreview('prev')
      if (event.key === 'ArrowRight') movePreview('next')
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [movePreview, preview])

  const projects = useMemo(() => {
    const list = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)
    return limit ? list.slice(0, limit) : list
  }, [filter, limit])

  return (
    <Section eyebrow={t('projects.eyebrow')} title={t('projects.title')} subtitle={t('projects.subtitle')} className="overflow-hidden">
      <SparkDoodle className="absolute right-[6%] top-20 hidden w-16 rotate-12 text-amber-400 lg:block" />
      {showFilters && (
        <Reveal className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-xl transition-all duration-200',
                filter === f
                  ? 'border-white/25 bg-brand-600/90 text-white shadow-md shadow-brand-600/20'
                  : 'border-white/35 bg-white/35 text-[color:var(--color-ink-muted)] hover:-translate-y-0.5 hover:bg-white/60 hover:text-[color:var(--color-ink)] dark:border-white/10 dark:bg-white/8 dark:hover:bg-white/12',
              )}
            >
              {t(`projects.filters.${f}`)}
            </button>
          ))}
        </Reveal>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, projectIndex) => {
          const images = getProjectImages(p)
          const currentImageIndex = activeImageIndex[p.id] || 0
          const currentImage = images[currentImageIndex] || p.image

          return (
          <Reveal key={p.id} y={8}>
            <article
              id={p.slug}
              aria-labelledby={`${p.slug}-title`}
              className="project-card group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/88 shadow-sm transition-colors duration-200 hover:border-brand-200 dark:border-white/10 dark:bg-slate-950/66"
            >
              <div className="relative bg-slate-50/72 p-3 pb-2 dark:bg-white/[0.03]">
                <button
                  type="button"
                  onClick={() => setPreview({ project: p, index: currentImageIndex })}
                  className="relative block aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm dark:border-white/10 dark:bg-slate-900"
                  aria-label={`${t('common.viewProject')}: ${t(p.titleKey)}`}
                >
                  <ImageLoader
                    src={currentImage}
                    alt={t(p.titleKey)}
                    priority={projectIndex < 3 && !limit}
                    className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-brand-600/15 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-brand-600 shadow-lg">
                      <FiMaximize2 className="h-5 w-5" />
                    </span>
                  </span>
                </button>
                <div className="absolute left-3 top-3 z-10">
                  <Badge tone="brand">{p.year}</Badge>
                </div>
                {p.featured && (
                  <div className="absolute left-3 top-12 z-10">
                    <Badge tone="success" className="py-1 text-[10px]">{t('common.featured')}</Badge>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setPreview({ project: p, index: currentImageIndex })}
                  aria-label={`${t('common.viewProject')}: ${t(p.titleKey)}`}
                  className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-2xl border border-white/45 bg-white/80 text-brand-700 shadow-sm backdrop-blur-xl transition-colors duration-200 hover:bg-white"
                >
                  <FiMaximize2 className="h-4 w-4" />
                </button>

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setActiveImageIndex((current) => ({
                        ...current,
                        [p.id]: (currentImageIndex - 1 + images.length) % images.length,
                      }))}
                      aria-label="Previous image"
                      className="absolute left-5 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-700 shadow-md opacity-100 transition hover:text-brand-600 sm:opacity-0 sm:group-hover:opacity-100"
                    >
                      <FiChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveImageIndex((current) => ({
                        ...current,
                        [p.id]: (currentImageIndex + 1) % images.length,
                      }))}
                      aria-label="Next image"
                      className="absolute right-5 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-700 shadow-md opacity-100 transition hover:text-brand-600 sm:opacity-0 sm:group-hover:opacity-100"
                    >
                      <FiChevronRight className="h-4 w-4" />
                    </button>

                    <div className="mt-3 flex items-center justify-center gap-2 px-2">
                      {images.map((image, index) => (
                      <button
                        key={`${p.id}-${image}`}
                        type="button"
                        onClick={() => setActiveImageIndex((current) => ({ ...current, [p.id]: index }))}
                        className={cn(
                          'h-9 w-14 shrink-0 overflow-hidden rounded-md border-2 transition',
                          currentImageIndex === index
                            ? 'scale-105 border-brand-500 shadow-sm'
                            : 'border-transparent opacity-70 hover:border-slate-300 hover:opacity-100',
                        )}
                        aria-label={`Preview image ${index + 1}`}
                      >
                        <ImageLoader src={image} alt="" className="h-full w-full object-cover" />
                      </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5 pt-4 sm:p-5 sm:pt-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex min-w-0 items-center gap-2 text-[10px] font-black uppercase tracking-[.16em] text-muted">
                    <FiFolder className="text-brand-500" /> {t(`projects.filters.${p.category}`)}
                  </span>
                  <span className="font-mono text-xs text-muted">{p.year}</span>
                </div>
                <div className="space-y-2">
                  <h3 id={`${p.slug}-title`} className="text-lg font-bold leading-snug sm:text-xl">
                    {p.demoUrl ? (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-2 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/15 dark:hover:text-brand-300"
                      >
                        <span>{t(p.titleKey)}</span>
                        <FiExternalLink className="mt-1 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                      </a>
                    ) : (
                      t(p.titleKey)
                    )}
                  </h3>
                  <p className="line-clamp-3 min-h-[4.45rem] text-sm leading-6 text-muted">
                    {t(p.descriptionKey)}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                  {p.tags.length > 4 && (
                    <Badge>+{p.tags.length - 4}</Badge>
                  )}
                </div>
                <div className="mt-auto flex items-center gap-2 border-t border-[color:var(--color-line)] pt-4">
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-xl border border-white/25 bg-brand-600/90 px-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(38,122,245,.26)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-500 hover:shadow-[0_18px_40px_rgba(38,122,245,.34)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/15 dark:bg-brand-400 dark:text-slate-950"
                    >
                      <span>
                        {t('common.viewProject')}
                      </span>
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  )}
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('common.viewSource')}: ${t(p.titleKey)}`}
                      className="inline-grid h-9 w-9 place-items-center rounded-xl border border-white/35 bg-white/45 text-[color:var(--color-ink)] shadow-[var(--shadow-sm)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/15 dark:border-white/10 dark:bg-white/8 dark:hover:bg-white/12"
                    >
                      <FiGithub aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
          )
        })}
      </div>

      {typeof document !== 'undefined' && preview && createPortal(
        <div
          className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-slate-950/82 p-4 text-white backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            aria-label={t('common.close')}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-xl transition hover:bg-white/20"
          >
            <FiX />
          </button>

          <div className="flex max-h-[calc(100dvh-2rem)] w-full max-w-6xl flex-col items-center justify-center gap-5 sm:max-h-[calc(100dvh-4rem)]" onClick={(event) => event.stopPropagation()}>
            <div className="relative grid w-full min-h-0 flex-1 place-items-center">
              <ImageLoader
                src={getProjectImages(preview.project)[preview.index]}
                alt={t(preview.project.titleKey)}
                priority
                wrapperClassName="grid h-full max-h-[72dvh] w-full place-items-center bg-transparent dark:bg-transparent"
                className="mx-auto max-h-[72dvh] w-full rounded-2xl object-contain shadow-none"
              />
              {getProjectImages(preview.project).length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => movePreview('prev')}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-2xl transition hover:bg-white/20"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    type="button"
                    onClick={() => movePreview('next')}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-2xl transition hover:bg-white/20"
                  >
                    <FiChevronRight />
                  </button>
                </>
              )}
            </div>

            <div className="shrink-0 text-center">
              <h3 className="text-2xl font-black">{t(preview.project.titleKey)}</h3>
              <p className="mt-1 text-sm text-white/70">
                {preview.index + 1} / {getProjectImages(preview.project).length}
              </p>
              {preview.project.demoUrl && (
                <a
                  href={preview.project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-bold text-slate-950 transition hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                  {t('common.viewProject')}
                  <FiExternalLink aria-hidden="true" />
                </a>
              )}
            </div>

            {getProjectImages(preview.project).length > 1 && (
              <div className="flex max-w-full shrink-0 gap-2 overflow-x-auto pb-1">
                {getProjectImages(preview.project).map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setPreview((current) => current ? { ...current, index } : current)}
                    className={cn(
                      'h-14 w-24 shrink-0 overflow-hidden rounded-xl border transition',
                      preview.index === index ? 'border-brand-400 opacity-100' : 'border-white/20 opacity-55 hover:opacity-90',
                    )}
                  >
                    <ImageLoader src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>,
        document.body,
      )}
    </Section>
  )
}
