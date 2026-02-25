import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "SEO nedir ve ne işe yarar?",
    answer:
      "SEO (Search Engine Optimization), web sitenizin arama motorlarında üst sıralarda görünmesini sağlayan teknik, içeriksel ve stratejik çalışmaların bütünüdür. Doğru yapıldığında sürdürülebilir müşteri akışı sağlar; yanlış yapıldığında görünmez olursunuz.",
  },
  {
    question: "Konya SEO çalışması ne kadar sürer?",
    answer:
      "SEO kısa vadeli bir işlem değildir. İlk sonuçlar genellikle 3-6 ay içinde alınır; ideal süre 6 ay ve üzeridir. Süreç boyunca analiz ve iyileştirmeler yapılır.",
  },
  {
    question: "Web sitemde hangi değişiklikler yapılacak?",
    answer:
      "Başlık ve meta düzenlemeleri, içerik revizyonu, URL yapısının optimize edilmesi, mobil uyumluluk ve sayfa hızının artırılması, schema işaretlemeleri ve iç bağlantılar gibi teknik ve içerik odaklı düzenlemeler yapılır. Yapılan tüm güncellemeler, sitenizin mevcut tasarımını ve marka kimliğini korumaya özen gösterir.",
  },
  {
    question: "Yerel SEO ile genel SEO arasında fark var mı?",
    answer:
      "Evet. Yerel SEO'da Google, konum, mesafe, yerel güven ve kullanıcı etkileşimi sinyallerini değerlendirir. Bu nedenle yerel arama sonuçları için Google Business Profile optimizasyonu ve yerel referans çalışmaları zorunludur.",
  },
  {
    question: "SEO kampanyasına ne kadar bütçe ayırmalıyım?",
    answer:
      "Bütçe, sektörünüzdeki rekabet düzeyi ve hedef kelimelerinizin zorluğuna göre değişir. Stratejik SEO çalışmalarına ayrılan bütçeler genellikle uzun vadede reklam harcamalarını azaltır ve yüksek geri dönüş sağlar.",
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

          <h2 className="text-3xl font-bold leading-tight text-secondary-foreground md:text-4xl text-balance">
            {"Sık Sorulan Sorular"}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"Konya SEO hizmetlerimiz hakkında merak edilenler."}
          </p>

          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold text-secondary-foreground hover:text-accent hover:no-underline md:text-lg">
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
