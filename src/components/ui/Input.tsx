import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const base =
  'w-full rounded-2xl border border-slate-300/80 bg-white/70 px-4 py-3.5 text-sm shadow-sm shadow-slate-950/5 backdrop-blur-xl placeholder:text-[color:var(--color-ink-muted)] focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:outline-none transition-all dark:border-slate-700 dark:bg-white/6 dark:shadow-none dark:focus:border-brand-400 dark:focus:bg-white/10'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, className, ...rest }, ref) => (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-bold text-[color:var(--color-ink)]">
          {label}
        </label>
      )}
      <input ref={ref} id={id} className={cn(base, className)} {...rest} />
    </div>
  ),
)
Input.displayName = 'Input'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, className, rows = 5, ...rest }, ref) => (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-bold text-[color:var(--color-ink)]">
          {label}
        </label>
      )}
      <textarea ref={ref} id={id} rows={rows} className={cn(base, 'resize-y', className)} {...rest} />
    </div>
  ),
)
Textarea.displayName = 'Textarea'
