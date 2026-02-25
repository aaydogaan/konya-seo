import { Search, MapPinned, Settings2, FileText, Link2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Yerel Anahtar Kelime ve Rakip Analizi",
    description:
      "Konya ozelinde yapilan aramalar detayli sekilde analiz edilir. \"Konya dis hekimi\", \"Konya avukat\" veya \"Konya restoran\" gibi yuksek donusum potansiyeline sahip anahtar kelimeler belirlenir. Rakip analizi yaparak hangi kelimelerde rekabetin yogun oldugunu ve sizin firsat alanlarinizi kesfederiz.",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Google Business Profile ve Harita Optimizasyonu",
    description:
      "Google Haritalar kaydiniz Konya lokasyonuna uygun sekilde optimize edilir. Adres, telefon, kategori secimi, hizmet alanlari ve gorseller eksiksiz doldurulur. NAP bilgilerinin tum platformlarda tutarli olmasi ve gercek musteri yorumlarinin yonetilmesi, Google'in isletmenize duydugu guveni artirir.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Site Ici SEO ve Teknik Iyilestirmeler",
    description:
      "Baslik ve meta aciklamalari yerel anahtar kelimelerle optimize edilir. Ic sayfalar arasi linkleme yapilir, mobil uyumluluk ve sayfa hizi artirilir, kod yapisi ve URL mimarisi duzenlenir, schema isaretlemeleri kullanilir.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Icerik Stratejisi ve E-E-A-T",
    description:
      "Google artik sadece anahtar kelime saymiyor; uzmanlik, deneyim, otorite ve guven faktorlerini olcuyor. Kullancinin sorularini yanitlayan, bilgilendirici ve yerel orneklerle zenginlestirilmis makaleler uretiyoruz. Duzeli olarak guncellenen blog yazilariyla sitenizin guncel kaldigini gosteriyoruz.",
  },
  {
    number: "05",
    icon: Link2,
    title: "Yerel Guven ve Backlink Calismalari",
    description:
      "Konya ve cevresindeki guvenilir kaynaklardan geri baglantilar almak ve marka otoritesini artirmak onemlidir. Yerel haber siteleri, sektorel bloglar ve isletme rehberlerine icerik veya sponsorlu baglantilar yerlestirilir.",
  },
]

export function Process() {
  return (
    <section id="nasil-yapilir" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {"Surec"}
          </span>
        </div>

        <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl text-balance">
          {"Konya SEO Nasil Yapilir?"}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {"Basarili bir Konya SEO sureci, birden fazla adimin stratejik bir sekilde uygulanmasiyla gerceklestirilir."}
        </p>

        <div className="mt-16 flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="group relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-[4.5rem] bottom-0 w-px bg-border md:left-8" />
              )}

              <div className="relative flex gap-6 pb-12 md:gap-10">
                {/* Step number circle */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background font-serif text-sm font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground md:h-16 md:w-16 md:text-base">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-border bg-card p-6 transition-all group-hover:border-accent/30 group-hover:shadow-lg md:p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <step.icon className="h-5 w-5 text-accent" />
                    <h3 className="font-serif text-lg font-bold text-card-foreground md:text-xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
