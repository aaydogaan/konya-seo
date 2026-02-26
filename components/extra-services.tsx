import { Megaphone, MonitorSmartphone, ShoppingCart } from "lucide-react"

const services = [
    {
        icon: Megaphone,
        title: "Reklam ve SEM Yönetimi",
        description: "SEO ile sinerji oluşturmak için Google Ads, YouTube ve Meta reklam kampanyaları kurarak kısa vadeli görünürlük sağlarız.",
    },
    {
        icon: MonitorSmartphone,
        title: "Dönüşüm Optimizasyonu (CRO)",
        description: "Siteye gelen organik veya ücretli ziyaretçilerinizi müşteriye dönüştürecek tasarım ve kullanıcı deneyimi (UX) geliştirmeleri yapıyoruz.",
    },
    {
        icon: ShoppingCart,
        title: "E-Ticaret SEO",
        description: "Ürün sayfaları, kategori yapıları ve filtreleme sistemlerinizi optimize ederek e-ticaretteki arama motoru trafiğinizi artırırız.",
    },
]

export function ExtraServices() {
    return (
        <section className="bg-secondary/50 py-20 md:py-28 border-t border-border">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-4 flex items-center justify-center gap-2">
                    <div className="h-px w-8 bg-accent" />
                    <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                        SEO'yu Destekleyen
                    </span>
                    <div className="h-px w-8 bg-accent" />
                </div>

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl text-balance">
                        Ek Dijital Hizmetlerimiz
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        Büyümenizi desteklemek için arama motoru optimizasyonuna ek olarak ihtiyaç duyabileceğiniz diğer dijital pazarlama çözümleri.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="group flex flex-col items-center text-center rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-muted/5 transition-colors group-hover:bg-accent group-hover:text-accent-foreground text-accent">
                                <s.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-card-foreground mb-3">{s.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
