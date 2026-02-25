import { CheckCircle2 } from "lucide-react"

const points = [
  "Sektorel rekabet seviyesi ve hedeflenen anahtar kelimeler analiz edilir",
  "Mevcut web sitesi altyapisi ve icerik ihtiyaci degerlendirilir",
  "Isletmenizin hedefleri ve dijital altyapiniz birlikte incelenir",
  "Stratejik ve kapsamli SEO calismalari uzun vadede yuksek yatirim getirisi saglar",
  "SEO bir gider degil, buyume yatirimidir",
]

export function Pricing() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-px w-8 bg-accent" />
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                {"Fiyatlandirma"}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl text-balance">
              {"Konya SEO Fiyatlari ve Yatirim Getirisi"}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {"SEO fiyatlari standart degildir; sektorel rekabet, hedeflenen anahtar kelimeler, mevcut web sitesi altyapisi ve icerik ihtiyaci gibi faktorlere gore belirlenir."}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {"Ucuz SEO hizmetleri kisa vadeli cozumler sunabilir; ancak stratejik ve kapsamli SEO calismalari uzun vadede yuksek yatirim getirisi saglar."}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <h3 className="font-serif text-xl font-bold text-card-foreground">
              {"Fiyat teklifi nasil hazirliyoruz?"}
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="leading-relaxed text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
