"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Nasıl Yapılır", href: "#nasil-yapilir" },
  { label: "Faydalar", href: "#faydalar" },
  { label: "Paketler", href: "#fiyatlandirma" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <Image
            src="/images/brodigitalmedia-logo.png"
            alt="Brothers Digital Media"
            width={180}
            height={45}
            className="h-9 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:05050638543"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            0505 063 8543
          </a>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#iletisim">{"Ücretsiz Analiz"}</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Menü"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="tel:05050638543"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
            >
              <Phone className="h-4 w-4" />
              0505 063 8543
            </a>
            <Button asChild className="w-full bg-primary text-primary-foreground">
              <a href="#iletisim" onClick={() => setOpen(false)}>{"Ücretsiz Analiz"}</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
