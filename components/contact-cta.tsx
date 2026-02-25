"use client"

import { useState } from "react"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="iletisim" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text side */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-px w-8 bg-accent" />
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                {"İletişim"}
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl text-balance">
              {"Ücretsiz Konya SEO Analizi Talep Edin"}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {"Arama motorlarında daha görünür olmak ve doğru müşterilere ulaşmak için profesyonel Konya SEO hizmetlerimizi keşfedin. Web sitenizin mevcut durumunu analiz ederek potansiyel fırsatları ve iyileştirme alanlarını ücretsiz olarak belirliyoruz."}
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <a
                href="tel:05050638543"
                className="flex items-center gap-3 text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                0505 063 8543
              </a>
              <a
                href="mailto:bromakagency@gmail.com"
                className="flex items-center gap-3 text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                bromakagency@gmail.com
              </a>
              <div className="flex items-start gap-3 text-base text-muted-foreground">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                {"Fatih Mah. Altınkalem Sok. No:10 Selçuklu / KONYA"}
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <ArrowRight className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{"Teşekkür Ederiz!"}</h3>
                <p className="mt-2 text-muted-foreground">
                  {"Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz."}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="flex flex-col gap-5"
              >
                <h3 className="text-xl font-bold text-card-foreground">
                  {"Hemen Ücretsiz SEO Analizi Alın"}
                </h3>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                    {"Adınız Soyadınız"}
                  </Label>
                  <Input
                    id="name"
                    placeholder="Örnek: Ahmet Yılmaz"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
                    {"E-posta Adresiniz"}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                    {"Telefon Numaranız"}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0 5XX XXX XX XX"
                    className="bg-background border-border"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="website" className="text-sm font-medium text-card-foreground">
                    {"Web Siteniz"}
                  </Label>
                  <Input
                    id="website"
                    placeholder="https://www.orneksite.com"
                    className="bg-background border-border"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    {"Mesajınız"}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="İşletmeniz ve hedefiniz hakkında kısa bilgi verin..."
                    rows={3}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                >
                  {"Ücretsiz Analiz Talep Et"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
