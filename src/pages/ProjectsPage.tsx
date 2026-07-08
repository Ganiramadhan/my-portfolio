import { ProjectsSection } from '@/components/features/ProjectsSection'
import { usePageSeo } from '@/hooks/usePageSeo'

export function ProjectsPage() {
  usePageSeo('projects')
  return <ProjectsSection />
}
