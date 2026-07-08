import { useEffect, useRef, useState } from 'react'
import { useInView } from './useInView'

export function useCountUp(target: number, duration = 1500, suffix = '') {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 })
  const [value, setValue] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(target * eased))
      if (t < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [inView, target, duration])

  return { ref, display: `${value.toLocaleString()}${suffix}` }
}
