import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhatIsSeo } from "@/components/what-is-seo"
import { WhoIsItFor } from "@/components/who-is-it-for"
import { Process } from "@/components/process"
import { ProofSection } from "@/components/proof"
import { Benefits } from "@/components/benefits"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProofSection />
      <WhatIsSeo />
      <WhoIsItFor />
      <Process />
      <Benefits />
      <Pricing />
      <FAQ />
      <ContactCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
