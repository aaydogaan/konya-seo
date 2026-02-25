import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "SEO nedir ve ne ise yarar?",
    answer:
      "SEO (Search Engine Optimization), web sitenizin arama motorlarinda ust siralarda gorunmesini saglayan teknik, iceriksel ve stratejik calismalarin butunudur. Dogru yapildiginda surdurulebilir musteri akisi saglar; yanlis yapildiginda gorunmez olursunuz.",
  },
  {
    question: "Konya SEO calismasi ne kadar surer?",
    answer:
      "SEO kisa vadeli bir islem degildir. Ilk sonuclar genellikle 3-6 ay icinde alinir; ideal sure 6 ay ve uzeridir. Surec boyunca analiz ve iyilestirmeler yapilir.",
  },
  {
    question: "Web sitemde hangi degisiklikler yapilacak?",
    answer:
      "Baslik ve meta duzenlemeleri, icerik revizyonu, URL yapisinin optimize edilmesi, mobil uyumluluk ve sayfa hizinin artirilmasi, schema isaretlemeleri ve ic baglantilar gibi teknik ve icerik odakli duzenlemeler yapilir. Yapilan tum guncellemeler, sitenizin mevcut tasarimini ve marka kimligini korumaya ozen gosterir.",
  },
  {
    question: "Yerel SEO ile genel SEO arasinda fark var mi?",
    answer:
      "Evet. Yerel SEO'da Google, konum, mesafe, yerel guven ve kullanici etkilesimi sinyallerini degerlendirir. Bu nedenle yerel arama sonuclari icin Google Business Profile optimizasyonu ve yerel referans calismalari zorunludur.",
  },
  {
    question: "SEO kampanyasina ne kadar butce ayirmaliyim?",
    answer:
      "Butce, sektorunuzdeki rekabet duzeyi ve hedef kelimelerinizin zorluguna gore degisir. Stratejik SEO calismalarina ayrilan butceler genellikle uzun vadede reklam harcamalarini azaltir ve yuksek geri donus saglar.",
  },
]

export function FAQ() {
  return (
    <section id="sss" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {"SSS"}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-bold leading-tight text-secondary-foreground md:text-4xl text-balance">
            {"Sik Sorulan Sorular"}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"Konya SEO hizmetlerimiz hakkinda merak edilenler."}
          </p>

          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-serif text-base font-semibold text-secondary-foreground hover:text-accent hover:no-underline md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
