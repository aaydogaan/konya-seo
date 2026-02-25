import { Building2, Stethoscope, Scale, UtensilsCrossed, Store } from "lucide-react"

const audiences = [
  {
    icon: Building2,
    title: "Fiziksel Ofisi Olan Firmalar",
    description: "Satis ofisleri, magazalar ve atolyeler icin yerel gorunurluk",
  },
  {
    icon: Stethoscope,
    title: "Klinikler ve Saglik Merkezleri",
    description: "Dis hekimleri, poliklinikler ve ozel saglik kuruluslari",
  },
  {
    icon: Scale,
    title: "Avukatlar ve Danismanlar",
    description: "Hukuk burolari, danismanlik ofisleri ve kurumsal hizmet verenler",
  },
  {
    icon: UtensilsCrossed,
    title: "Restoranlar ve Kafeler",
    description: "Yeme-icme sektoru ve diger hizmet isletmeleri",
  },
  {
    icon: Store,
    title: "Tum KOBIler",
    description: "Yerel musteri hedefleyen her olcekteki Konya isletmesi",
  },
]

export function WhoIsItFor() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {"Kimler Icin?"}
          </span>
        </div>

        <h2 className="font-serif text-3xl font-bold leading-tight text-secondary-foreground md:text-4xl text-balance">
          {"Konya SEO Hizmeti Kimler Icin Uygundur?"}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {"Hizmet verdiginiz ana bolge Konya ise ve musteri kazanmak istiyorsaniz, yerel SEO zorunluluktur."}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-start rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-base font-bold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
