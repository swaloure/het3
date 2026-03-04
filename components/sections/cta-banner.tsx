"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/motion"

export function CtaBanner() {
  const t = useTranslations("ctaBanner")
  const locale = useLocale()

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/5 p-8 lg:p-16"
          >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/5 blur-3xl" aria-hidden="true" />

            <div className="relative max-w-3xl mx-auto text-center">
              <p className="text-xl lg:text-2xl font-semibold text-foreground leading-relaxed text-balance">
                {t("text")}
              </p>
              <div className="mt-8">
                <Link
                  href={`/${locale}/contacts`}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-pulse"
                >
                  {t("button")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
