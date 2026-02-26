import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Konya SEO nedir ve nasıl çalışır?",
    answer:
      "Konya SEO, web sitenizin yerel aramalarda daha üst sıralarda çıkmasını sağlayan arama motoru optimizasyonu çalışmalarının yerel odaklı versiyonudur. SEO, sitenizin tasarımından içerik yapısına, anahtar kelime araştırmasından backlink oluşturmaya kadar pek çok unsuru kapsayan bir süreçtir. Amacı organik trafik artışı ve işletmenizin Konya’daki hedef kitlesine ulaşmasıdır.",
  },
  {
    question: "Konya SEO hizmeti neleri içerir?",
    answer:
      "Profesyonel bir yerel SEO çalışması; anahtar kelime ve rakip analizi, site içi/teknik SEO (hız, mobil uyumluluk, Core Web Vitals), Google Business Profile optimizasyonu, içerik stratejisi, backlink ve otorite çalışmaları, NAP tutarlılığı ve sürekli raporlama gibi adımlardan oluşur. Bu sayede hem arama motorları hem de kullanıcılar için yüksek kaliteli bir deneyim sunulur.",
  },
  {
    question: "SEO neden önemlidir ve işletmeme nasıl fayda sağlar?",
    answer:
      "SEO’nun en önemli avantajı, arama motorlarında daha yüksek sıralamalar elde ederek görünürlüğünüzü ve organik trafiğinizi artırmasıdır. Ayrıca SEO, hızlı ve mobil uyumlu bir site ile kullanıcı deneyimini iyileştirir, böylece ziyaretçilerin memnuniyetini artırır. Yerel SEO çalışmaları ise Konya’daki potansiyel müşterilerinizin sizi daha kolay bulmasına yardımcı olur.",
  },
  {
    question: "Konya SEO çalışmasının süresi ne kadardır, sonuçlar ne zaman görülür?",
    answer:
      "SEO uzun vadeli bir süreçtir; rekabet düzeyine, sektörünüze ve sitenizin mevcut durumuna bağlı olarak ilk sonuçlar 3–6 ay arasında görülebilir. Yerel SEO’da Google Business Profile optimizasyonu ve NAP tutarlılığı gibi faktörler doğru yönetildiğinde sonuçlar daha kısa sürede ortaya çıkabilir.",
  },
  {
    question: "Konya SEO ücreti nasıl belirlenir?",
    answer:
      "Fiyatlandırma; sektörünüzdeki rekabet seviyesi, hedeflediğiniz anahtar kelimelerin zorluğu, web sitenizin büyüklüğü ve ihtiyaç duyulan iş gücü gibi faktörlere göre değişir. Kapsamlı bir analiz sonrasında, beklentilerinize uygun bir teklif hazırlanır.",
  },
  {
    question: "Yerel SEO ile genel SEO arasındaki farklar nelerdir?",
    answer:
      "Genel SEO, web sitenizin ulusal veya uluslararası aramalarda görünürlüğünü artırmayı hedeflerken, yerel SEO belirli bir coğrafi bölgedeki aramalara odaklanır. Yerel SEO’da Google Business Profile, NAP (Name, Address, Phone) tutarlılığı, haritalar ve yerel dizinler gibi unsurlar büyük rol oynar. Yerel SEO, “Konya restoran” gibi konum tabanlı sorgular yapan kullanıcılara ulaşmayı amaçlar.",
  },
  {
    question: "SEO ve Google Ads (SEM) arasındaki fark nedir?",
    answer:
      "SEO, organik (ücretsiz) trafiği artırmayı amaçlayan uzun vadeli bir stratejidir; Google Ads ise ücretli reklamlarla anlık görünürlük sağlar. SEO çalışmaları kalıcı sonuçlar üretebilirken, reklam kampanyaları bütçe durduğunda sona erer.",
  },
  {
    question: "Backlink ve otorite çalışmaları neden önemlidir?",
    answer:
      "Güvenilir ve alakalı sitelerden gelen bağlantılar (backlinkler), sitenizin otoritesini artırır ve arama motorlarının gözünde güven sinyali oluşturur. Bu da sıralamanızın yükselmesine katkıda bulunur. Yerel haber siteleri ve sektörel bloglarda yer almak, Konya SEO çalışmanız için güçlü bir stratejidir.",
  },
  {
    question: "Google Business Profile optimizasyonu neden kritiktir?",
    answer:
      "Google, yerel sıralamalarda işletmenin aramayla ilişkisi, kullanıcının konumuna olan uzaklık ve işletmenin önemi (prominence) gibi faktörleri dikkate alır; eksiksiz işletme bilgileri ve olumlu müşteri yorumları yerel sıralamayı artırır. Bu nedenle Google Business Profile’ınızı güncel tutmak, yorumlara yanıt vermek ve doğru kategori seçmek önemlidir.",
  },
  {
    question: "Konya SEO hizmeti hangi sektörler için uygundur?",
    answer:
      "Yerel SEO, restoranlar, avukatlık büroları, klinikler, mağazalar, oteller, eğitim kurumları ve hizmet sektöründeki tüm işletmeler için uygundur. Konya’daki KOBİ’lerden çok şubeli zincirlere kadar her işletme, yerel aramalarda görünürlüğünü artırarak potansiyel müşterilere ulaşabilir.",
  },
  {
    question: "SEO çalışmamı kendim yapabilir miyim?",
    answer:
      "Temel seviyede SEO çalışmaları yapılabilir; ancak doğru anahtar kelime analizi, teknik optimizasyon, içerik stratejisi ve yerel SEO unsurları uzmanlık gerektirir. Profesyonel destek, hem zaman tasarrufu sağlar hem de olası hataların önüne geçer.",
  },
  {
    question: "SEO başarısı nasıl ölçülür?",
    answer:
      "SEO performansı; anahtar kelime sıralamaları, organik trafik artışı, dönüşüm oranları, Google Business Profile görüntülenmeleri ve kullanıcı etkileşimleri gibi metriklerle ölçülür. Google Search Console ve Google Analytics gibi araçlar bu verileri izlemenize olanak tanır.",
  },
  {
    question: "Müşteri yorumları SEO’yu etkiler mi?",
    answer:
      "Evet. Olumlu ve tutarlı müşteri yorumları, Google’ın yerel sıralama faktörlerinden biridir. Yorum toplamak ve yanıtlamak, hem kullanıcı güvenini hem de sıralamayı iyileştirir.",
  },
  {
    question: "Core Web Vitals ve teknik SEO neden önemlidir?",
    answer:
      "Google’ın Core Web Vitals metrikleri (LCP, INP, CLS) sayfa yüklenme hızı ve etkileşim gibi gerçek kullanıcı deneyimlerini ölçer; bu değerlerin iyi olması sıralamanıza katkı sağlar. Hızlı, mobil uyumlu ve güvenli bir siteye sahip olmak, kullanıcıların sitenizde daha fazla vakit geçirmesini sağlar.",
  },
  {
    question: "SEO stratejisi ne sıklıkla güncellenmelidir?",
    answer:
      "Arama motoru algoritmaları ve kullanıcı davranışları sürekli değişir. Bu nedenle SEO stratejinizi düzenli olarak gözden geçirip güncellemek önemlidir. Google, Search Console ve Analytics verilerini kullanarak performansı izlemeyi ve içeriğinizi yeni arama trendlerine göre uyarlamayı önerir.",
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
