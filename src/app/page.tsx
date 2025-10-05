import { Navigation } from '@/components/simple-navigation'
import { HeroSection } from '@/components/simple-hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { BlogSection } from '@/components/blog-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
