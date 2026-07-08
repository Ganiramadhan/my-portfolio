import { AboutSection } from '@/components/features/AboutSection'
import { usePageSeo } from '@/hooks/usePageSeo'

export function AboutPage() {
  usePageSeo('about')
  return <AboutSection />
}
