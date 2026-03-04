"use client"

import { useTranslations } from "next-intl"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

export function PrivacyView() {
  const t = useTranslations("privacy")
  const sections = t.raw("sections") as Array<{ title: string; content: string }>

  return (
    <section className="pt-24 pb-20 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <FadeIn>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            {t("title")}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">{t("lastUpdated")}</p>
        </FadeIn>

        <StaggerContainer className="mt-10 space-y-8">
          {sections.map((section, i) => (
            <StaggerItem key={i}>
              <div className="rounded-xl border border-border/50 bg-card/40 p-6 lg:p-8">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
