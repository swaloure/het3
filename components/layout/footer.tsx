"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { Flame, Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react"

export function Footer() {
  const t = useTranslations()
  const locale = useLocale()

  const navLinks = [
    { href: `/${locale}`, label: t("nav.home") },
    { href: `/${locale}/catalog`, label: t("nav.catalog") },
    { href: `/${locale}/about`, label: t("nav.about") },
    { href: `/${locale}/contacts`, label: t("nav.contacts") },
    { href: `/${locale}/privacy-policy`, label: t("nav.privacy") },
  ]

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <Flame className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-foreground leading-none">
                  Heat Energy
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground leading-none mt-0.5">
                  Capital
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
            {/* Social icons */}
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4">
              {t("footer.contactInfo")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {t("contacts.addressValue")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {t("contacts.phoneValue")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {t("contacts.emailValue")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Heat Energy Capital. {t("footer.rights")}
          </p>
          <Link
            href={`/${locale}/privacy-policy`}
            className="text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            {t("nav.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  )
}
