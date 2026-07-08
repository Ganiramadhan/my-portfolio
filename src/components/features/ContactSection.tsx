import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { FiMail, FiMapPin, FiClock, FiSend, FiMessageCircle } from 'react-icons/fi'
import { Section, Card, Input, Textarea, Button, Reveal, DotsPattern, SparkDoodle } from '@/components/ui'
import { SITE } from '@/lib/constants'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const infoItems = (t: (k: string) => string) => [
  { icon: <FiMail />, label: t('contact.info.emailLabel'), value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: <FiMapPin />, label: t('contact.info.locationLabel'), value: SITE.location },
  { icon: <FiClock />, label: t('contact.info.responseLabel'), value: t('contact.info.response') },
]

export function ContactSection() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const allFilled = ['name', 'email', 'subject', 'message'].every(
      (k) => String(data.get(k) || '').trim().length > 0,
    )
    if (!allFilled) {
      setStatus('error')
      return
    }
    setStatus('sending')
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const subject = String(data.get('subject') || '').trim()
    const message = String(data.get('message') || '').trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }

    const text = [
      t('contact.form.whatsappIntro'),
      `${t('contact.form.whatsappName')}: ${name}`,
      `${t('contact.form.whatsappEmail')}: ${email}`,
      `${t('contact.form.whatsappSubject')}: ${subject}`,
      '',
      message,
    ].join('\n')
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setStatus('sent')
    form.reset()
    window.setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <Section
      eyebrow={t('contact.eyebrow')}
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
      className="overflow-hidden"
    >
      <DotsPattern className="bottom-0 left-0 h-40 w-40 text-brand-200 dark:text-brand-800/40" />
      <SparkDoodle className="absolute right-[8%] top-20 hidden w-16 text-amber-400 lg:block" />

      <div className="grid gap-5 sm:gap-8 lg:grid-cols-[.75fr_1.25fr]">
        <Reveal className="space-y-4">
          <div className="contact-intro-card relative overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-white/64 p-5 shadow-sm backdrop-blur-xl dark:bg-white/[0.04] sm:rounded-3xl sm:p-7">
            <span className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-400/20 blur-2xl" />
            <FiMessageCircle className="relative h-8 w-8 text-brand-600 dark:text-brand-300" />
            <p className="relative mt-5 text-xl font-bold">{t('sidebar.cta')}</p>
            <p className="relative mt-3 text-sm leading-7 text-muted">{t('contact.subtitle')}</p>
          </div>
          {infoItems(t).map((it) => (
            <Card key={it.label} hover className="contact-info-card flex items-start gap-4 rounded-2xl p-4 shadow-[var(--shadow-sm)] sm:p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/35 bg-white/45 text-brand-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-brand-300">
                {it.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">{it.label}</p>
                {it.href ? (
                  <a href={it.href} className="mt-0.5 block break-all font-medium hover:text-brand-600">
                    {it.value}
                  </a>
                ) : (
                  <p className="mt-0.5 font-medium">{it.value}</p>
                )}
              </div>
            </Card>
          ))}
        </Reveal>

        <Reveal delay={150}>
          <Card as="section" className="rounded-2xl p-5 shadow-[var(--shadow-md)] sm:p-8 sm:shadow-[var(--shadow-lg)]">
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  id="name"
                  name="name"
                  label={t('contact.form.name')}
                  placeholder={t('contact.form.namePh')}
                  autoComplete="name"
                  minLength={2}
                  required
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  label={t('contact.form.email')}
                  placeholder={t('contact.form.emailPh')}
                  autoComplete="email"
                  required
                />
              </div>
              <Input
                id="subject"
                name="subject"
                label={t('contact.form.subject')}
                placeholder={t('contact.form.subjectPh')}
                required
                minLength={4}
              />
              <Textarea
                id="message"
                name="message"
                label={t('contact.form.message')}
                placeholder={t('contact.form.messagePh')}
                rows={6}
                minLength={12}
                required
              />

              {status === 'sent' && (
                <p role="status" aria-live="polite" className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-900/30 dark:text-emerald-200 anim-fade-up">
                  {t('contact.form.sent')}
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800/60 dark:bg-red-900/30 dark:text-red-200 anim-fade-up">
                  {t('contact.form.error')}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === 'sending'}
                rightIcon={<FiSend className={status === 'sending' ? 'animate-pulse' : undefined} />}
                className="w-full sm:w-auto"
              >
                {status === 'sending' ? t('common.loading') : t('contact.form.send')}
              </Button>
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
