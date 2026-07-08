import { ExperienceSection } from '@/components/features/ExperienceSection'
import { usePageSeo } from '@/hooks/usePageSeo'

export function ExperiencePage() {
  usePageSeo('experience')
  return <ExperienceSection />
}
