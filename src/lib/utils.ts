import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateRange(
  start: string,
  end: string | null,
  locale: 'en' | 'id' | 'ja' = 'en',
): string {
  const fmt = (iso: string) =>
    new Date(iso + '-01').toLocaleDateString(locale === 'id' ? 'id-ID' : locale === 'ja' ? 'ja-JP' : 'en-US', {
      month: 'short',
      year: 'numeric',
    })
  return `${fmt(start)} — ${end ? fmt(end) : locale === 'id' ? 'Sekarang' : locale === 'ja' ? '現在' : 'Present'}`
}

export function calcDuration(
  start: string,
  end: string | null,
  locale: 'en' | 'id' | 'ja' = 'en',
): string {
  const s = new Date(start + '-01')
  const e = end ? new Date(end + '-01') : new Date()
  const months = Math.max(1, (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()))
  const y = Math.floor(months / 12)
  const m = months % 12
  if (locale === 'id') {
    if (y && m) return `${y} thn ${m} bln`
    if (y) return `${y} thn`
    return `${m} bln`
  }
  if (locale === 'ja') {
    if (y && m) return `${y}年 ${m}ヶ月`
    if (y) return `${y}年`
    return `${m}ヶ月`
  }
  if (y && m) return `${y}y ${m}m`
  if (y) return `${y}y`
  return `${m}m`
}

export function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
