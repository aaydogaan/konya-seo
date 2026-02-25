import { Building2, Stethoscope, Scale, UtensilsCrossed, Store } from "lucide-react"

const audiences = [
  {
    icon: Building2,
    title: "Fiziksel Ofisi Olan Firmalar",
    description: "Satış ofisleri, mağazalar ve atölyeler için yerel görünürlük",
  },
  {
    icon: Stethoscope,
    title: "Klinikler ve Sağlık Merkezleri",
    description: "Diş hekimleri, poliklinikler ve özel sağlık kuruluşları",
  },
  {
    icon: Scale,
    title: "Avukatlar ve Danışmanlar",
    description: "Hukuk büroları, danışmanlık ofisleri ve kurumsal hizmet verenler",
  },
  {
    icon: UtensilsCrossed,
    title: "Restoranlar ve Kafeler",
    description: "Yeme-içme sektörü ve diğer hizmet işletmeleri",
  },
  {
    icon: Store,
    title: "Tüm KOBİ'ler",
    description: "Yerel müşteri hedefleyen her ölçekteki Konya işletmesi",
  },
]

export function WhoIsItFor() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {"Kimler İçin?"}
          </span>
        </div>

        <h2 className="text-3xl font-bold leading-tight text-secondary-foreground md:text-4xl text-balance">
          {"Konya SEO Hizmeti Kimler İçin Uygundur?"}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {"Hizmet verdiğiniz ana bölge Konya ise ve müşteri kazanmak istiyorsanız, yerel SEO zorunluluktur."}
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
              <h3 className="text-base font-bold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
