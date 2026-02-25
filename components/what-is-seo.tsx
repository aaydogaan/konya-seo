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
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl text-balance">
              {"Web sitenizi Konya merkezli aramalara uygun şekilde optimize edin"}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {"Konya SEO, web sitenizin, Google Haritalar kaydınızın ve tüm dijital varlıklarınızın Konya merkezli aramalara uygun şekilde optimize edilmesi sürecidir. Amaç yalnızca sıralama kazanmak değil; satın almaya hazır kullanıcıların sizi bulmasını sağlamaktır."}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {"Google, yerel aramalarda yalnızca içerik ve bağlantılara bakmaz; konum, mesafe, yerel güven ve kullanıcı etkileşimi gibi sinyalleri de değerlendirir. Bu nedenle Konya'ya özel SEO çalışmaları genel SEO'dan farklıdır ve çoğu zaman daha hızlı sonuç üretir."}
            </p>
          </div>

          {/* Feature cards */}
          <div className="flex flex-col gap-6">
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground">{"Yerel Arama Optimizasyonu"}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {"Konya'daki potansiyel müşterileriniz sizi aradığında, işletmenizi en üst sıralarda görsün."}
              </p>
            </div>
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground">{"Veri Odaklı Strateji"}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {"Her kararı veriye dayandırıyor, rakiplerinizi analiz ediyor ve fırsatları sizin için keşfediyoruz."}
              </p>
            </div>
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground">{"Müşteri Odaklı Yaklaşım"}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {"Trafik değil, dönüşüm hedefliyoruz. Satın almaya hazır kullanıcıları çekecek içerikleri oluşturuyoruz."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
