"use client"

import { useTranslations } from "next-intl"
import { FlaskConical, Layers, Cog, CheckCircle2 } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

const catIcons = {
  chemicals: FlaskConical,
  metals: Layers,
  equipment: Cog,
}
const catKeys = ["chemicals", "metals", "equipment"] as const

export function ParamsSection() {
  const t = useTranslations("params")

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-pretty">
            {t("subtitle")}
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {catKeys.map((key) => {
            const Icon = catIcons[key]
            const items = t.raw(key) as string[]
            return (
              <StaggerItem key={key}>
                <div className="rounded-xl border border-border/50 bg-card/50 p-6 lg:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 capitalize">
                    {key === "chemicals" ? (
                      <>{t("title") === "Параметры для запроса" ? "Химия" : key === "chemicals" ? "Chemicals" : key}</>
                    ) : key === "metals" ? (
                      <>{t("title") === "Параметры для запроса" ? "Металлы" : "Metals"}</>
                    ) : (
                      <>{t("title") === "Параметры для запроса" ? "Оборудование" : "Equipment"}</>
                    )}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
