"use client"

import { useTranslations } from "next-intl"
import { Shield, Brain, Users, Eye } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const valueIcons = [Shield, Brain, Users, Eye]

export function AboutView() {
  const t = useTranslations("about")
  const values = t.raw("values") as Array<{ title: string; description: string }>

  return (
    <section className="pt-24 pb-20 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <FadeIn className="max-w-3xl mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
            {t("subtitle")}
          </p>
        </FadeIn>

        {/* Mission */}
        <FadeIn className="mb-20">
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 lg:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {t("mission")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty max-w-3xl">
                {t("missionText")}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Values */}
        <StaggerContainer className="grid sm:grid-cols-2 gap-6">
          {values.map((val, i) => {
            const Icon = valueIcons[i] || Shield
            return (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="group rounded-xl border border-border/50 bg-card/40 p-6 lg:p-8 transition-all hover:border-primary/20 hover:bg-card/60"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
