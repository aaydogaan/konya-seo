import { Eye, MapPin, PhoneCall, TrendingUp, Shield } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "Yüksek Dijital Görünürlük",
    description: "Konya genelinde daha yüksek dijital görünürlük elde edin.",
  },
  {
    icon: MapPin,
    title: "Üst Sıra Konumlandırma",
    description: "Google Haritalar ve organik sonuçlarda üst sıralarda yer alın.",
  },
  {
    icon: PhoneCall,
    title: "Artan Müşteri Talebi",
    description: "Telefon aramaları, form talepleri ve ziyaretler artar, satışlarınıza yansır.",
  },
  {
    icon: TrendingUp,
    title: "Sürdürülebilir Büyüme",
    description: "Reklama bağımlı olmayan sürdürülebilir müşteri akışı sağlayın.",
  },
  {
    icon: Shield,
    title: "Güçlenen Marka Otoritesi",
    description: "Markanızın yerel güvenilirliği ve dijital otoritesi güçlenir.",
  },
]

export function Benefits() {
  return (
    <section id="faydalar" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {"Faydalar"}
          </span>
        </div>

        <h2 className="text-3xl font-bold leading-tight text-primary-foreground md:text-4xl text-balance">
          {"Konya SEO Hizmeti ile Elde Edeceğiniz Faydalar"}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
          {"Doğru planlanmış bir Konya SEO çalışması ile işletmenizi dijitalde bir adım öne çıkartın."}
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
