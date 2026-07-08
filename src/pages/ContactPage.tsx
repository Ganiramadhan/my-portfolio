import { ContactSection } from '@/components/features/ContactSection'
import { usePageSeo } from '@/hooks/usePageSeo'

export function ContactPage() {
  usePageSeo('contact')
  return <ContactSection />
}
