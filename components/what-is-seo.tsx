import { Globe, BarChart3, Users } from "lucide-react"

export function WhatIsSeo() {
  return (
    <section id="hizmetler" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {"Konya SEO Nedir?"}
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl text-balance">
              {"Web sitenizi Konya merkezli aramalara uygun sekilde optimize edin"}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {"Konya SEO, web sitenizin, Google Haritalar kaydinizin ve tum dijital varliklarinizin Konya merkezli aramalara uygun sekilde optimize edilmesi surecidir. Amac yalnizca siralama kazanmak degil; satin almaya hazir kullanicilarin sizi bulmasini saglamaktir."}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {"Google, yerel aramalarda yalnizca icerik ve baglantilara bakmaz; konum, mesafe, yerel guven ve kullanici etkilesimi gibi sinyalleri de degerlendirir. Bu nedenle Konya'ya ozel SEO calismalari genel SEO'dan farklidir ve cogu zaman daha hizli sonuc uretir."}
            </p>
          </div>

          {/* Feature cards */}
          <div className="flex flex-col gap-6">
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-bold text-card-foreground">{"Yerel Arama Optimizasyonu"}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {"Konya'daki potansiyel musterileriniz sizi aradiginda, isletmenizi en ust siralarda gorsun."}
              </p>
            </div>
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-bold text-card-foreground">{"Veri Odakli Strateji"}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {"Her karari veriye dayandiriyor, rakiplerinizi analiz ediyor ve firsatlari sizin icin kesfediyoruz."}
              </p>
            </div>
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-bold text-card-foreground">{"Musteri Odakli Yaklasim"}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {"Trafik degil, donusum hedefliyoruz. Satin almaya hazir kullanicilari cekecek icerikleri olusturuyoruz."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
