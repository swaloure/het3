"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Package, Globe, Truck, FileText } from "lucide-react"
import { StaggerContainer, StaggerItem, CountUp } from "@/components/motion"

export function TrustSection() {
  const t = useTranslations("trust")

  const stats = [
    {
      icon: Package,
      value: 100,
      suffix: "+",
      label: t("products"),
    },
    {
      icon: Globe,
      value: 3,
      suffix: "",
      label: t("languages"),
    },
    {
      icon: Truck,
      value: null,
      suffix: "",
      label: t("delivery"),
    },
    {
      icon: FileText,
      value: null,
      suffix: "",
      label: t("custom"),
    },
  ]

  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -2 }}
                className="group relative flex flex-col items-center rounded-xl border border-border/50 bg-card/50 p-6 lg:p-8 text-center backdrop-blur-sm transition-colors hover:border-primary/20 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                  {stat.value !== null ? (
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  ) : (
                    <motion.span
                      className="text-primary text-xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {"///"}
                    </motion.span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
