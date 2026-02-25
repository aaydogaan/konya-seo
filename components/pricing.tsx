"use client"

import { CheckCircle2, ArrowRight, Sparkles, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Baslangic Paketi",
    tagline: "Dijitalde ilk adim",
    description: "Yerel aramada gorünür olmak ve dijital varliginizi olusturmak isteyen isletmeler icin ideal baslangic.",
    icon: Zap,
    features: [
      "Temel anahtar kelime analizi",
      "Google Isletme Profili optimizasyonu",
      "Sayfa ici SEO duzenleme",
      "Aylik performans raporu",
      "Teknik SEO denetimi",
    ],
    cta: "Ucretsiz Analiz Al",
    popular: false,
  },
  {
    name: "Profesyonel Paket",
    tagline: "En cok tercih edilen",
    description: "Rakiplerini geride birakmak ve Google'da ust siralara cikmak isteyen buyume odakli isletmeler icin.",
    icon: Sparkles,
    features: [
      "Kapsamli anahtar kelime stratejisi",
      "Google Haritalar optimizasyonu",
      "Teknik SEO + Hiz optimizasyonu",
      "Haftalik icerik uretimi",
      "Backlink stratejisi",
      "Rakip analizi ve raporlama",
      "Oncelikli destek",
    ],
    cta: "Teklif Isteyin",
    popular: true,
  },
  {
    name: "Kurumsal Paket",
    tagline: "Maksimum etki",
    description: "Agresif buyume hedefleyen, coklu lokasyon veya yuksek rekabetli sektorlerdeki isletmeler icin.",
    icon: Crown,
    features: [
      "360 derece SEO stratejisi",
      "Coklu lokasyon yonetimi",
      "Gelismis teknik SEO",
      "Gunluk icerik ve blog yonetimi",
      "PR & Otorite backlinkleri",
      "Donusum orani optimizasyonu",
      "Ozel SEO danismani",
      "Aylik strateji toplantisi",
    ],
    cta: "Gorusme Planlayin",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="fiyatlandirma" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {"Paketler"}
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            {"Isletmenize Uygun SEO Paketi"}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {"Her isletmenin ihtiyaci farklidir. Size ozel hazirlanmis paketlerimizle dijitalde fark yaratin."}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`group relative flex flex-col rounded-2xl border-2 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  plan.popular
                    ? "border-accent bg-primary text-primary-foreground shadow-lg scale-[1.02] lg:scale-105"
                    : "border-border bg-card text-card-foreground hover:border-accent/50"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-1.5 text-sm font-semibold text-accent-foreground shadow-md">
                      <Sparkles className="h-3.5 w-3.5" />
                      {"Populer"}
                    </span>
                  </div>
                )}

                {/* Icon & Name */}
                <div className="mb-6">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                      plan.popular
                        ? "bg-accent/20 text-accent"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      plan.popular ? "text-accent" : "text-accent"
                    }`}
                  >
                    {plan.tagline}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-bold">{plan.name}</h3>
                </div>

                {/* Description */}
                <p
                  className={`leading-relaxed ${
                    plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Divider */}
                <div
                  className={`my-6 h-px ${
                    plan.popular ? "bg-primary-foreground/15" : "bg-border"
                  }`}
                />

                {/* Features */}
                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          plan.popular ? "text-accent" : "text-accent"
                        }`}
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          plan.popular
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  className={`w-full gap-2 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  <a href="#iletisim">
                    {plan.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Bottom trust note */}
        <div className="mt-12 mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3">
            <CheckCircle2 className="h-5 w-5 text-accent" />
            <p className="text-sm text-muted-foreground">
              {"Tum paketler icin ucretsiz on analiz yapilir. Sozlesme zorunlulugu yoktur."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
