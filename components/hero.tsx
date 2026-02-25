import { ArrowRight, MapPin, TrendingUp, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-accent blur-[128px]" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/80">
            <MapPin className="h-4 w-4" />
            {"Konya'da Yerel SEO Uzmanligi"}
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
            {"Konya SEO: Yerel SEO ile"}
            <br />
            <span className="text-accent">{"Isletmenizi Buyutun"}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl text-pretty">
            {"Dijital dunyada gorunur olmak artik tercihten ziyade zorunluluk. Dogru SEO stratejileri sayesinde hem arama motorlarinda ust siralarda yer alin hem de yerel musterilerinize ulasin."}
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold"
            >
              <a href="#iletisim">
                {"Ucretsiz SEO Analizi Al"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
            >
              <a href="#nasil-yapilir">{"Nasil Calisiyoruz?"}</a>
            </Button>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
              <Search className="mb-1 h-5 w-5 text-accent" />
              <span className="font-serif text-3xl font-bold text-primary-foreground">{"1000+"}</span>
              <span className="text-sm text-primary-foreground/60">{"Anahtar Kelime Analizi"}</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
              <TrendingUp className="mb-1 h-5 w-5 text-accent" />
              <span className="font-serif text-3xl font-bold text-primary-foreground">{"%300"}</span>
              <span className="text-sm text-primary-foreground/60">{"Organik Trafik Artisi"}</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
              <MapPin className="mb-1 h-5 w-5 text-accent" />
              <span className="font-serif text-3xl font-bold text-primary-foreground">{"Top 3"}</span>
              <span className="text-sm text-primary-foreground/60">{"Google Haritalar Sirasi"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
