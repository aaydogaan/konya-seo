import { Search, MapPinned, Settings2, FileText, Link2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Yerel Anahtar Kelime ve Rakip Analizi",
    description:
      "Konya özelinde yapılan aramalar detaylı şekilde analiz edilir. \"Konya diş hekimi\", \"Konya avukat\" veya \"Konya restoran\" gibi yüksek dönüşüm potansiyeline sahip anahtar kelimeler belirlenir. Rakip analizi yaparak hangi kelimelerde rekabetin yoğun olduğunu ve sizin fırsat alanlarınızı keşfederiz.",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Google Business Profile ve Harita Optimizasyonu",
    description:
      "Google Haritalar kaydınız Konya lokasyonuna uygun şekilde optimize edilir. Adres, telefon, kategori seçimi, hizmet alanları ve görseller eksiksiz doldurulur. NAP bilgilerinin tüm platformlarda tutarlı olması ve gerçek müşteri yorumlarının yönetilmesi, Google'ın işletmenize duyduğu güveni artırır.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Site İçi SEO ve Teknik İyileştirmeler",
    description:
      "Başlık ve meta açıklamaları yerel anahtar kelimelerle optimize edilir. İç sayfalar arası linkleme yapılır, mobil uyumluluk ve sayfa hızı artırılır, kod yapısı ve URL mimarisi düzenlenir, schema işaretlemeleri kullanılır.",
  },
  {
    number: "04",
    icon: FileText,
    title: "İçerik Stratejisi ve E-E-A-T",
    description:
      "Google artık sadece anahtar kelime saymıyor; uzmanlık, deneyim, otorite ve güven faktörlerini ölçüyor. Kullanıcının sorularını yanıtlayan, bilgilendirici ve yerel örneklerle zenginleştirilmiş makaleler üretiyoruz. Düzenli olarak güncellenen blog yazılarıyla sitenizin güncel kaldığını gösteriyoruz.",
  },
  {
    number: "05",
    icon: Link2,
    title: "Yerel Güven ve Backlink Çalışmaları",
    description:
      "Konya ve çevresindeki güvenilir kaynaklardan geri bağlantılar almak ve marka otoritesini artırmak önemlidir. Yerel haber siteleri, sektörel bloglar ve işletme rehberlerine içerik veya sponsorlu bağlantılar yerleştirilir.",
  },
]

export function Process() {
  return (
    <section id="nasil-yapilir" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {"Süreç"}
          </span>
        </div>

        <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl text-balance">
          {"Konya SEO Nasıl Yapılır?"}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {"Başarılı bir Konya SEO süreci, birden fazla adımın stratejik bir şekilde uygulanmasıyla gerçekleştirilir."}
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
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background text-sm font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground md:h-16 md:w-16 md:text-base">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-border bg-card p-6 transition-all group-hover:border-accent/30 group-hover:shadow-lg md:p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <step.icon className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-bold text-card-foreground md:text-xl">
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
