import { Hero } from '@/components/features/Hero'
import { StatsSection } from '@/components/features/StatsSection'
import { AboutSection } from '@/components/features/AboutSection'
import { ProjectsSection } from '@/components/features/ProjectsSection'
import { ExperienceSection } from '@/components/features/ExperienceSection'
import { ContactSection } from '@/components/features/ContactSection'
import { usePageSeo } from '@/hooks/usePageSeo'

export function HomePage() {
  usePageSeo('home')
  return (
    <div className="home-shell relative isolate">
      <div className="relative z-10">
        <Hero />
        <StatsSection />
        <AboutSection />
        <ProjectsSection limit={3} showFilters={false} />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  )
}
