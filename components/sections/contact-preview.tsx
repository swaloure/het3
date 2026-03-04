"use client"

import { useTranslations } from "next-intl"
import { Phone, Mail, MessageCircle, Send } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

export function ContactPreview() {
  const t = useTranslations("contactPreview")

  const channels = [
    { icon: Phone, label: t("phone"), href: "tel:+77271234567", color: "text-primary" },
    { icon: Mail, label: t("email"), href: "mailto:info@heatenergycapital.kz", color: "text-primary" },
    { icon: MessageCircle, label: t("whatsapp"), href: "#", color: "text-primary" },
    { icon: Send, label: t("telegram"), href: "#", color: "text-primary" },
  ]

  return (
    <section className="py-20 lg:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-pretty">
            {t("subtitle")}
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {channels.map((ch, i) => (
            <StaggerItem key={i}>
              <a href={ch.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card/40 p-6 text-center transition-all hover:border-primary/20 hover:bg-card/70"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <ch.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{ch.label}</span>
                </motion.div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
