"use client"

import { CheckCircle2, ArrowRight, Sparkles, Zap, Crown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Başlangıç Paketi",
    tagline: "Dijitalde ilk adım",
    description: "Yerel aramada görünür olmak ve dijital varlığınızı oluşturmak isteyen işletmeler için ideal başlangıç.",
    icon: Zap,
    features: [
      "Temel anahtar kelime analizi",
      "Google İşletme Profili optimizasyonu",
      "Sayfa içi SEO düzenleme",
      "Aylık performans raporu",
      "Teknik SEO denetimi",
    ],
    cta: "Ücretsiz Analiz Al",
    ctaLink: "#iletisim",
    popular: false,
    accent: false,
  },
  {
    name: "Profesyonel Paket",
    tagline: "En çok tercih edilen",
    description: "Rakiplerini geride bırakmak ve Google'da üst sıralara çıkmak isteyen büyüme odaklı işletmeler için.",
    icon: Sparkles,
    features: [
      "Kapsamlı anahtar kelime stratejisi",
      "Google Haritalar optimizasyonu",
      "Teknik SEO + Hız optimizasyonu",
      "Haftalık içerik üretimi",
      "Backlink stratejisi",
      "Rakip analizi ve raporlama",
      "Öncelikli destek",
    ],
    cta: "Teklif İsteyin",
    ctaLink: "https://wa.me/905050638543?text=Merhaba%2C%20Profesyonel%20Paket%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
    popular: true,
    accent: true,
  },
  {
    name: "Kurumsal Paket",
    tagline: "Maksimum etki",
    description: "Agresif büyüme hedefleyen, çoklu lokasyon veya yüksek rekabetli sektörlerdeki işletmeler için.",
    icon: Crown,
    features: [
      "360 derece SEO stratejisi",
      "Çoklu lokasyon yönetimi",
      "Gelişmiş teknik SEO",
      "Günlük içerik ve blog yönetimi",
      "PR & Otorite backlinkleri",
      "Dönüşüm oranı optimizasyonu",
      "Özel SEO danışmanı",
      "Aylık strateji toplantısı",
    ],
    cta: "Görüşme Planlayın",
    ctaLink: "https://wa.me/905050638543?text=Merhaba%2C%20Kurumsal%20Paket%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
    popular: false,
    accent: false,
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
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            {"İşletmenize Uygun SEO Paketi"}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {"Her işletmenin ihtiyacı farklıdır. Size özel hazırlanmış paketlerimizle dijitalde fark yaratın."}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`group relative flex flex-col rounded-2xl border-2 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
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
                      {"Popüler"}
                    </span>
                  </div>
                )}

                {/* Icon & Name */}
                <div className="mb-6">
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${
                      plan.popular
                        ? "bg-accent/20 text-accent"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      plan.popular ? "text-accent" : "text-accent"
                    }`}
                  >
                    {plan.tagline}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold">{plan.name}</h3>
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
                        className="mt-0.5 h-5 w-5 shrink-0 text-accent"
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
                  className={`w-full gap-2 py-6 text-base font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  <a href={plan.ctaLink} target={plan.ctaLink.startsWith("http") ? "_blank" : undefined} rel={plan.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {plan.accent && <MessageCircle className="h-4 w-4" />}
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
              {"Tüm paketler için ücretsiz ön analiz yapılır. Sözleşme zorunluluğu yoktur."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
