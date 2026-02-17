import { Navigation } from "@/components/navigation"
import { StarBackground } from "@/components/star-background"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <StarBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <div className="mx-auto max-w-7xl px-0">
          <hr className="border-border" />
        </div>
        <AboutSection />
        <div className="mx-auto max-w-7xl px-0">
          <hr className="border-border" />
        </div>
        <ServicesSection />
        <div className="mx-auto max-w-7xl px-0">
          <hr className="border-border" />
        </div>
        <ProcessSection />
        <div className="mx-auto max-w-7xl px-0">
          <hr className="border-border" />
        </div>
        <CaseStudiesSection />
        <div className="mx-auto max-w-7xl px-0">
          <hr className="border-border" />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
