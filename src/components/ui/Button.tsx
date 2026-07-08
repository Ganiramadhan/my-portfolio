import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const variants: Record<Variant, string> = {
  primary:
    'border border-white/25 bg-brand-600/90 text-white shadow-[0_14px_34px_rgba(38,122,245,.26)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-500 hover:shadow-[0_18px_40px_rgba(38,122,245,.34)] active:translate-y-0 disabled:bg-brand-300',
  secondary:
    'border border-lime-200/70 bg-lime-300/80 text-slate-950 shadow-[0_10px_24px_rgba(163,230,53,.18)] backdrop-blur-xl hover:-translate-y-0.5 hover:bg-lime-300',
  outline:
    'border border-white/35 bg-white/45 text-[color:var(--color-ink)] shadow-[var(--shadow-sm)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white/70 dark:border-white/10 dark:bg-white/8 dark:hover:bg-white/12',
  ghost:
    'text-[color:var(--color-ink)] hover:bg-white/40 dark:hover:bg-white/8',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, leftIcon, rightIcon, children, ...rest }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200',
        'disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  ),
)
Button.displayName = 'Button'
