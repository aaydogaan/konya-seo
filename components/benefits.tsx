import { Target, BrainCircuit, ShieldCheck, FileCheck2, Handshake } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Konya'ya Özgü Uzmanlık",
    description: "Yerel pazar dinamiklerini, sektörler arası farklılıkları ve bölgedeki rekabeti biliyoruz.",
  },
  {
    icon: BrainCircuit,
    title: "Yapay Zekâ & Veri Odaklılık",
    description: "Her adımda analiz, ölçüm ve strateji belirleme için veri ve yapay zekâ teknolojileri kullanıyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "E-E-A-T Odaklı İçerik",
    description: "Google'ın deneyim, uzmanlık, otorite ve güven (E-E-A-T) kriterlerini karşılayan içerikler üretiyoruz.",
  },
  {
    icon: FileCheck2,
    title: "Şeffaf Raporlama",
    description: "Her ay kapsamlı analiz raporları ve toplantılar ile süreci son derece şeffaf bir şekilde paylaşıyoruz.",
  },
  {
    icon: Handshake,
    title: "Uzun Vadeli Ortaklık",
    description: "İşletmenizin büyümesine paralel olarak stratejileri güncelliyor, sürekli destek sağlıyoruz.",
  },
]

export function Benefits() {
  return (
    <section id="faydalar" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {"Neden Biz?"}
          </span>
        </div>

        <h2 className="text-3xl font-bold leading-tight text-primary-foreground md:text-4xl text-balance">
          {"Neden Bro Digital Media'yı Seçmelisiniz?"}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
          {"Sadece bir ajans değil, dijital dünyadaki stratejik büyüme ortağınız oluyoruz."}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-all hover:bg-primary-foreground/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                <b.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-base font-bold text-primary-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
