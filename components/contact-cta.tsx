"use client"

import { useState } from "react"
import { ArrowRight, Phone, Mail } from "lucide-react"
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
                {"Iletisim"}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl text-balance">
              {"Ucretsiz Konya SEO Analizi Talep Edin"}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {"Arama motorlarinda daha gorunur olmak ve dogru musterilere ulasmak icin profesyonel Konya SEO hizmetlerimizi kesfedin. Web sitenizin mevcut durumunu analiz ederek potansiyel firsatlari ve iyilestirme alanlarini ucretsiz olarak belirliyoruz."}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="tel:05050638543"
                className="flex items-center gap-3 text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                {"0505 063 8543 / 0505 063 8544"}
              </a>
              <a
                href="mailto:info@brodigitalmedia.com"
                className="flex items-center gap-3 text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                {"info@brodigitalmedia.com"}
              </a>
            </div>
          </div>

          {/* Form side */}
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <ArrowRight className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground">{"Tesekkur Ederiz!"}</h3>
                <p className="mt-2 text-muted-foreground">
                  {"Talebiniz alindi. En kisa surede sizinle iletisime gececegiz."}
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
                <h3 className="font-serif text-xl font-bold text-card-foreground">
                  {"Hemen Ucretsiz SEO Analizi Alin"}
                </h3>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                    {"Adiniz Soyadiniz"}
                  </Label>
                  <Input
                    id="name"
                    placeholder="Ornek: Ahmet Yilmaz"
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
                    {"Telefon Numaraniz"}
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
                    {"Mesajiniz"}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Isletmeniz ve hedefiniz hakkinda kisa bilgi verin..."
                    rows={3}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                >
                  {"Ucretsiz Analiz Talep Et"}
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
