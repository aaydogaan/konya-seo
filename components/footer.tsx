import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

const links = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Süreç", href: "#nasil-yapilir" },
  { label: "Faydalar", href: "#faydalar" },
  { label: "Paketler", href: "#fiyatlandirma" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
]

export function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block">
              <Image
                src="/images/brodigitalmedia-logo.png"
                alt="Brothers Digital Media Konya Web Tasarım ve SEO Ajansı"
                width={200}
                height={50}
                className="h-14 w-auto brightness-0 invert"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Konya SEO Ajansı olarak yerel işletmenizi arama motorlarında üst sıralara taşıyoruz. Profesyonel SEO danışmanlığı, web tasarım ve Google Haritalar optimizasyonu ile Konya pazarında dijitaldeki gücünüzü artırın.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/80">
              {"Hızlı Erişim"}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/80">
              {"İletişim"}
            </h4>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href="https://maps.google.com/?q=Fatih+Mah.+Altınkalem+Sok.+No:10+Selçuklu+/+KONYA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {"Fatih Mah. Altınkalem Sok. No:10 Selçuklu / KONYA"}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href="tel:05050638543"
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  0505 063 8543
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:info@brodigitalmedia.com"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  info@brodigitalmedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-sm text-primary-foreground/40">
            {`© ${new Date().getFullYear()} Brothers Digital Media. Tüm hakları saklıdır.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
