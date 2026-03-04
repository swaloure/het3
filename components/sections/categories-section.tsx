"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { FlaskConical, Layers, Cog, ArrowRight } from "lucide-react"
import { categories } from "@/data/products"
import { getLocalizedValue } from "@/lib/i18n"
import type { Locale } from "@/types"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

const iconMap: Record<string, React.ElementType> = {
  flask: FlaskConical,
  layers: Layers,
  cog: Cog,
}

export function CategoriesSection() {
  const t = useTranslations("categories")
  const locale = useLocale() as Locale

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            {t("subtitle")}
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Layers
            return (
              <StaggerItem key={cat.slug}>
                <Link href={`/${locale}/catalog?category=${cat.slug}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80"
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {/* Border glow */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ boxShadow: "inset 0 0 0 1px oklch(0.78 0.16 65 / 0.15)" }}
                    />

                    <div className="relative">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {getLocalizedValue(cat.title, locale)}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {getLocalizedValue(cat.description, locale)}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground font-mono">
                          {cat.count}+ items
                        </span>
                        <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>

                    {/* Shimmer line */}
                    <div className="shimmer-line absolute bottom-0 left-0 right-0 h-px overflow-hidden" />
                  </motion.div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
