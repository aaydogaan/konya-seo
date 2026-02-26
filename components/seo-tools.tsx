import Image from "next/image"

const tools = [
    {
        name: "Google Search Console",
        image: "/images/google-search-console.webp",
        description: "Site haritalarını gönderir, dizine ekleme ve tarama hatalarını tespit eder ve arama sorgularındaki performansı izler.",
    },
    {
        name: "Google Analytics",
        image: "/images/Google-Analytics.webp",
        description: "Kullanıcı davranışlarını, trafik kaynaklarını ve dönüşümleri ölçer; strateji belirlemeye yardımcı olur.",
    },
    {
        name: "Semrush",
        image: "/images/semrush.webp",
        description: "Anahtar kelime ve rakip analizi, site denetimi ve backlink kontrolü yapar.",
    },
    {
        name: "Ahrefs",
        image: "/images/ahrefs-seo-tool-seeklogo.webp",
        description: "Backlink profilini analiz eder, anahtar kelime fırsatlarını ve içerik boşluklarını bulur.",
    },
    {
        name: "Screaming Frog",
        image: "/images/Screamingfrog.webp",
        description: "Sitenizi tarayarak 404 hataları, yönlendirme zincirleri ve eksik meta etiketler gibi teknik sorunları raporlar.",
    },
]

export function SeoTools() {
    return (
        <section className="bg-background py-20 md:py-28 border-y border-border">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                            Kullandığımız Araçlar
                        </span>
                        <div className="h-px w-8 bg-accent" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Veri Odaklı SEO Analizi
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Profesyonel SEO hizmetimiz için dünyanın en güvenilir arama motoru optimizasyonu araçlarını kullanıyoruz. Bu araçlar sayesinde veri odaklı şeffaf kararlar alıyoruz.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    {tools.map((tool) => (
                        <div
                            key={tool.name}
                            className="group flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 hover:bg-muted/30"
                        >
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-3 shadow-sm border border-border/50 transition-transform group-hover:scale-110">
                                <Image
                                    src={tool.image}
                                    alt={`${tool.name} SEO Aracı`}
                                    width={64}
                                    height={64}
                                    className="object-contain h-full w-full"
                                />
                            </div>
                            <h3 className="mb-3 text-lg font-bold text-card-foreground">{tool.name}</h3>
                            <p className="text-xs leading-relaxed text-muted-foreground">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
