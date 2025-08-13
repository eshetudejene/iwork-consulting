import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AnalyticsDashboardSection } from "@/components/analytics-dashboard-section"
import { ServicesSection } from "@/components/services-section"
import { ApproachSection } from "@/components/approach-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { PartnersSection } from "@/components/partners-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AnalyticsDashboardSection />
        <ServicesSection />
        <ApproachSection />
        <WhatWeDoSection />
        <PartnersSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
