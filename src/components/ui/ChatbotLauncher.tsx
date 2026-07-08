import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { FiMessageCircle, FiRefreshCcw, FiSend, FiX, FiZap } from 'react-icons/fi'
import { cn } from '@/lib/utils'

type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export function ChatbotLauncher() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const viewportRef = useRef<HTMLDivElement>(null)
  const initialSuggestions = useMemo(() => [
    t('chatbot.shortcuts.projects'),
    t('chatbot.shortcuts.strengths'),
    t('chatbot.shortcuts.stack'),
    t('chatbot.shortcuts.contact'),
  ], [t])
  const [suggestionOverride, setSuggestionOverride] = useState<string[] | null>(null)
  const suggestions = suggestionOverride || initialSuggestions
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'intro',
      role: 'assistant',
      content: t('chatbot.intro'),
    },
  ])

  useEffect(() => {
    if (!open) return
    viewportRef.current?.scrollTo({
      top: viewportRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [loading, messages, open])

  const resetChat = () => {
    setInput('')
    setLoading(false)
    setSuggestionOverride(null)
    setMessages([
      {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: t('chatbot.intro'),
      },
    ])
  }

  const submitChat = async (value: string) => {
    const content = value.trim()
    if (!content || loading) return

    const nextMessages: ChatMessage[] = [
      ...messages,
      { id: crypto.randomUUID(), role: 'user', content },
    ]

    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      })

      const data = (await response.json()) as { reply?: string; error?: string; suggestions?: string[] }

      if (!response.ok || !data.reply) {
        throw new Error(data.error || t('chatbot.error'))
      }

      setMessages((current) => [
        ...current,
        { id: crypto.randomUUID(), role: 'assistant', content: data.reply || t('chatbot.error') },
      ])
      setSuggestionOverride(data.suggestions?.length ? data.suggestions : null)
    } catch {
      setMessages((current) => [
        ...current,
        { id: crypto.randomUUID(), role: 'assistant', content: t('chatbot.error') },
      ])
      setSuggestionOverride(null)
    } finally {
      setLoading(false)
    }
  }

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void submitChat(input)
  }

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
      <div
        className={cn(
          'pointer-events-auto mb-3 w-[min(calc(100vw-1.5rem),23.5rem)] overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-white/96 shadow-[0_24px_80px_rgba(15,23,42,.18)] backdrop-blur-2xl transition-all duration-300 dark:bg-slate-950/96 sm:w-[min(calc(100vw-2rem),23.5rem)] sm:rounded-3xl',
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[color:var(--color-line)] bg-slate-50/80 p-4 dark:bg-white/[0.03]">
          <div className="flex gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white dark:bg-brand-400 dark:text-slate-950">
              <FiZap />
            </span>
            <div>
              <p className="text-sm font-black text-[color:var(--color-ink)]">{t('chatbot.title')}</p>
              <p className="mt-1 text-xs leading-5 text-muted">{t('chatbot.subtitle')}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t('chatbot.close')}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted transition hover:bg-slate-100 hover:text-[color:var(--color-ink)] dark:hover:bg-white/8"
          >
            <FiX />
          </button>
        </div>

        <div className="border-b border-[color:var(--color-line)] bg-white/55 px-4 py-2.5 text-[11px] font-semibold leading-5 text-muted dark:bg-white/[0.02]">
          {t('chatbot.helper')}
        </div>

        <div ref={viewportRef} className="max-h-[48dvh] space-y-3 overflow-y-auto p-3 sm:max-h-[23rem] sm:p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'max-w-[88%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6',
                message.role === 'user'
                  ? 'ml-auto bg-brand-600 text-white dark:bg-brand-400 dark:text-slate-950'
                  : 'bg-slate-100 text-slate-700 dark:bg-white/8 dark:text-slate-200',
              )}
            >
              {message.content}
            </div>
          ))}
          {loading && (
            <div className="max-w-[88%] rounded-2xl bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-700 dark:bg-white/8 dark:text-slate-200">
              {t('chatbot.thinking')}
            </div>
          )}
        </div>

        <div className="border-t border-[color:var(--color-line)] bg-white/60 px-3 py-3 dark:bg-white/[0.02]">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {suggestions.map((shortcut) => (
              <button
                key={shortcut}
                type="button"
                disabled={loading}
                onClick={() => {
                  setOpen(true)
                  void submitChat(shortcut)
                }}
                className="shrink-0 rounded-full border border-[color:var(--color-line)] bg-white/75 px-3 py-1.5 text-xs font-bold text-muted transition hover:border-brand-300 hover:text-brand-600 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white/8 dark:hover:text-brand-300"
              >
                {shortcut}
              </button>
            ))}
          </div>
        </div>

        <form className="flex gap-2 border-t border-[color:var(--color-line)] bg-white/70 p-3 dark:bg-white/[0.03]" onSubmit={sendMessage}>
          <button
            type="button"
            onClick={resetChat}
            aria-label={t('chatbot.reset')}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-[color:var(--color-line)] bg-white text-muted transition hover:border-brand-300 hover:text-brand-600 dark:bg-white/5 dark:hover:text-brand-300"
          >
            <FiRefreshCcw className="h-4 w-4" />
          </button>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            aria-label={t('chatbot.placeholder')}
            placeholder={t('chatbot.placeholder')}
            disabled={loading}
            className="min-w-0 flex-1 rounded-2xl border border-[color:var(--color-line)] bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:bg-white/5"
          />
          <button
            type="submit"
            aria-label={t('chatbot.send')}
            disabled={loading || !input.trim()}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-brand-400 dark:text-slate-950"
          >
            <FiSend />
          </button>
        </form>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={t('chatbot.open')}
        className="pointer-events-auto relative ml-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-lg text-white shadow-[0_18px_44px_rgba(21,93,225,.32)] transition hover:-translate-y-1 hover:bg-brand-500 dark:bg-brand-400 dark:text-slate-950 sm:h-14 sm:w-14 sm:text-xl"
      >
        <FiMessageCircle />
        <span className="absolute -right-1.5 -top-1.5 grid h-6 min-w-6 place-items-center rounded-full border-2 border-white bg-red-500 px-1 text-[10px] font-black text-white shadow-lg dark:border-slate-950">
          AI
        </span>
      </button>
    </div>
  )
}
