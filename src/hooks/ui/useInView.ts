import { useEffect, useRef, useState } from 'react'

export function useInView<T extends Element = HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
  once = true,
) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (once) obs.disconnect()
      } else if (!once) {
        setInView(false)
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [once, options])

  return { ref, inView }
}
