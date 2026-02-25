import { MapPin, Phone, Mail } from "lucide-react"

const links = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Surec", href: "#nasil-yapilir" },
  { label: "Faydalar", href: "#faydalar" },
  { label: "SSS", href: "#sss" },
  { label: "Iletisim", href: "#iletisim" },
]

export function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#" className="font-serif text-xl font-bold text-primary-foreground">
              BRO<span className="text-accent">Digital</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              {"Konya pazarini bilen, rekabeti analiz eden ve surdurulebilir buyume hedefleyen bir SEO stratejisi ile markaniz icin guclu bir dijital konum elde edin."}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-primary-foreground/80">
              {"Hizli Erisim"}
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
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-primary-foreground/80">
              {"Iletisim"}
            </h4>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/60">{"Konya, Turkiye"}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/60">{"0505 063 8543 / 0505 063 8544"}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/60">{"info@brodigitalmedia.com"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-sm text-primary-foreground/40">
            {`© ${new Date().getFullYear()} BRO Digital Media. Tum haklari saklidir.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
