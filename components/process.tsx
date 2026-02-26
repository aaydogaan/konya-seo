import { Search, MapPinned, Settings2, FileText, Link2, Lightbulb, BarChart } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Ücretsiz SEO ve Rekabet Analizi",
    description:
      "Durum raporu ile site sağlığı, mevcut sıralamalar ve rekabet yoğunluğu incelenir. Yapay zekâ destekli analiz sayesinde arama sonuçlarındaki rakip sitelerden toplanan veriler, kullanıcı niyetleri ve trendler ile birleştirilir. Sadece 'Konya SEO' değil, yüksek potansiyelli tüm ifadeler tespit edilir.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Anahtar Kelime ve Konu Kümeleri",
    description:
      "Konya içi bölge ve sektör odaklı aramalar, uzun kuyruklu kelimeler ve semantik terimler belirlenir. Yalnızca tek bir SEO sayfası yerine, birbiriyle bağlantılı blog ve hizmet alt sayfalarıyla algoritmada yetkili kaynak (otorite) olmanız sağlanır.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Teknik SEO ve Core Web Vitals Optimizasyonu",
    description:
      "Google'ın hayati metrikleri olan Core Web Vitals (LCP, INP, CLS) doğrudan iyileştirilir. Mobil kullanıcılar için ultra hızlı erişim, HTTPS güvenliği ve zararlı bot blokajları ile kusursuz bir teknik altyapı oluşturulur.",
  },
  {
    number: "04",
    icon: MapPinned,
    title: "Yerel SEO ve Google Business Profile Optimizasyonu",
    description:
      "Google İşletme Profili (eski adıyla Google My Business) bilgileri (NAP) her platformda senkronize edilir. Müşteri yorumları profesyonelce yönetilir ve LocalBusiness (Schema) kodlaması ile haritalarda zengin sonuçlarla çıkmanız sağlanır.",
  },
  {
    number: "05",
    icon: FileText,
    title: "İçerik Stratejisi: Doğal Dil ve Sesli Arama Uyumu",
    description:
      "Geleceğin arama motoru olan yapay zeka destekli soru-cevap algoritmalarına uygun (SGE) içerikler üretilir. Ziyaretçilerin doğal konuşma diliyle arattığı sorunlara çözüm üreten yerel rehber ve blog yazıları kaleme alınır.",
  },
  {
    number: "06",
    icon: Link2,
    title: "Backlink, Dijital PR ve NAP Yönetimi",
    description:
      "Sektörünüzle ilgili Konya'da ve Türkiye genelinde otoriter platformlardan organik backlink (geri bağlantı) inşa edilir. Sosyal medya sinerjisi ve yerel web dizinleri ile işletmenizin Google gözündeki güven puanı maksimize edilir.",
  },
  {
    number: "07",
    icon: BarChart,
    title: "Sürekli İzleme, Raporlama ve Yapay Zekâ İyileştirmesi",
    description:
      "Search Console ve sitemize kurduğumuz gelişmiş analiz tool'ları ile şeffaf paneller sunulur. Tıklama Oranı (CTR) iyileştirmeleri için düzenli A/B testleri yapılır. Google güncellemelerine karşı proaktif ve adaptif stratejiler entegre edilir.",
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
