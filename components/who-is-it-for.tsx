import { Building2, Stethoscope, Scale, Store, Globe } from "lucide-react"

const audiences = [
  {
    icon: Building2,
    title: "Küçük ve Orta Ölçekli İşletmeler",
    description: "Konya'da veya çevresindeki ilçelerde hizmet veren tüm KOBİ'ler",
  },
  {
    icon: Store,
    title: "Çoklu Şube Yapan Firmalar",
    description: "Yerel rekabet avantajı sağlamak isteyen zincir restoranlar, klinikler ve perakende mağazalar",
  },
  {
    icon: Globe,
    title: "E-ticaret ve B2B Firmaları",
    description: "Yerel aramalardan gelen trafikle online ve toptan satışlarını artırmak isteyenler",
  },
  {
    icon: Stethoscope,
    title: "Klinikler ve Sağlık Merkezleri",
    description: "Potansiyel hastaların arama yaptığı bölgede öne çıkmak isteyen sağlık kuruluşları",
  },
  {
    icon: Scale,
    title: "Avukatlar ve Danışmanlar",
    description: "Hukiki ve danışmanlık hizmetlerini arayan müşterilere hızlıca ulaşmak isteyen ofisler",
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
