import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { Section, Card, Reveal } from '@/components/ui'
import { TESTIMONIALS } from '@/data/dummy'
import { cn } from '@/lib/utils'

export function TestimonialsCarousel() {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length

  useEffect(() => {
    if (total === 0) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), 6000)
    return () => window.clearInterval(id)
  }, [total])

  if (total === 0) return null

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  return (
    <Section eyebrow={t('testimonials.eyebrow')} title={t('testimonials.title')} align="center">
      <Reveal className="relative mx-auto max-w-3xl">
        <svg
          aria-hidden="true"
          className="absolute -top-6 left-2 h-16 w-16 text-brand-200 dark:text-brand-900/60"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9.17 6c.34 0 .58.34.45.66l-1.5 3.74c-.05.13-.08.27-.08.41V16c0 .55-.45 1-1 1H3a1 1 0 0 1-1-1v-4.6c0-.32.06-.63.18-.93L4.78 4c.15-.4.54-.66.97-.66H9.17zm10 0c.34 0 .58.34.45.66l-1.5 3.74c-.05.13-.08.27-.08.41V16c0 .55-.45 1-1 1H13a1 1 0 0 1-1-1v-4.6c0-.32.06-.63.18-.93L14.78 4c.15-.4.54-.66.97-.66h3.42z" />
        </svg>

        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {TESTIMONIALS.map((tm) => (
              <div key={tm.id} className="w-full shrink-0 px-1">
                <Card className="text-center">
                  <div className="mx-auto flex w-fit items-center gap-1 text-amber-500">
                    {Array.from({ length: tm.rating }).map((_, i) => (
                      <FiStar key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-lg sm:text-xl leading-relaxed text-[color:var(--color-ink)]">
                    “{t(tm.quoteKey)}”
                  </blockquote>
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <img
                      src={tm.avatar}
                      alt={tm.name}
                      width="48"
                      height="48"
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-200 dark:ring-brand-800"
                    />
                    <div className="text-left">
                      <p className="font-semibold">{tm.name}</p>
                      <p className="text-sm text-muted">
                        {t(tm.roleKey)} · {tm.company}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/45 shadow-[var(--shadow-sm)] backdrop-blur-xl transition-all hover:-translate-x-0.5 hover:border-brand-400 hover:bg-white/70 dark:border-white/10 dark:bg-white/8"
          >
            <FiChevronLeft />
          </button>
          <div className="flex items-center gap-1.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  i === index ? 'w-8 bg-brand-600' : 'w-2 bg-[color:var(--color-line)] hover:bg-brand-300',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/45 shadow-[var(--shadow-sm)] backdrop-blur-xl transition-all hover:translate-x-0.5 hover:border-brand-400 hover:bg-white/70 dark:border-white/10 dark:bg-white/8"
          >
            <FiChevronRight />
          </button>
        </div>
      </Reveal>
    </Section>
  )
}
