import { HeroSection } from "@/components/sections/hero"
import { TrustSection } from "@/components/sections/trust"
import { CategoriesSection } from "@/components/sections/categories-section"
import { FeaturedSection } from "@/components/sections/featured"
import { ProcessSection } from "@/components/sections/process"
import { ParamsSection } from "@/components/sections/params-section"
import { CtaBanner } from "@/components/sections/cta-banner"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactPreview } from "@/components/sections/contact-preview"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <CategoriesSection />
      <FeaturedSection />
      <ProcessSection />
      <ParamsSection />
      <CtaBanner />
      <FaqSection />
      <ContactPreview />
    </>
  )
}
