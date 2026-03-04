"use client"

import { useTranslations } from "next-intl"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

export function ProcessSection() {
  const t = useTranslations("process")
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const steps = t.raw("steps") as Array<{ title: string; description: string }>

  return (
    <section className="py-20 lg:py-28" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-pretty">
            {t("subtitle")}
          </p>
        </FadeIn>

        <div className="relative max-w-2xl mx-auto">
          {/* Animated line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border/50 lg:left-1/2 lg:-translate-x-px">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-primary to-primary/0"
              style={{ height: lineHeight }}
            />
          </div>

          <StaggerContainer className="space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="relative flex gap-6 lg:gap-0">
                  {/* Dot */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border/50 bg-card text-primary font-mono text-sm font-bold lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, type: "spring" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:ml-auto"}`}>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
