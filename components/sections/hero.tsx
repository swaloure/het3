"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

function HeatWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      {/* Animated SVG heat waves */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave-grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.78 0.16 65)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.78 0.16 65)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="oklch(0.78 0.16 65)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 400 Q300 350 600 400 Q900 450 1200 400"
          fill="none"
          stroke="url(#wave-grad)"
          strokeWidth="0.5"
          animate={{
            d: [
              "M0 400 Q300 350 600 400 Q900 450 1200 400",
              "M0 400 Q300 450 600 400 Q900 350 1200 400",
              "M0 400 Q300 350 600 400 Q900 450 1200 400",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 500 Q300 460 600 500 Q900 540 1200 500"
          fill="none"
          stroke="url(#wave-grad)"
          strokeWidth="0.3"
          animate={{
            d: [
              "M0 500 Q300 460 600 500 Q900 540 1200 500",
              "M0 500 Q300 540 600 500 Q900 460 1200 500",
              "M0 500 Q300 460 600 500 Q900 540 1200 500",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 300 Q300 270 600 300 Q900 330 1200 300"
          fill="none"
          stroke="url(#wave-grad)"
          strokeWidth="0.3"
          animate={{
            d: [
              "M0 300 Q300 270 600 300 Q900 330 1200 300",
              "M0 300 Q300 330 600 300 Q900 270 1200 300",
              "M0 300 Q300 270 600 300 Q900 330 1200 300",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Glow orb top right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
      {/* Glow orb bottom left */}
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.78 0.16 65 / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.78 0.16 65 / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  )
}

export function HeroSection() {
  const t = useTranslations("hero")
  const locale = useLocale()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const parallaxX = useTransform(mouseX, [0, 1], [-8, 8])
  const parallaxY = useTransform(mouseY, [0, 1], [-8, 8])

  function handleMouse(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  const easing = [0.25, 0.1, 0.25, 1]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      onMouseMove={handleMouse}
    >
      <HeatWaves />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: easing }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Heat Energy Capital
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: easing }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1] text-balance"
          >
            {t("title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: easing }}
            className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: easing }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={`/${locale}/contacts`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-pulse"
            >
              {t("cta1")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/${locale}/contacts`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary hover:border-border/80"
            >
              {t("cta2")}
            </Link>
          </motion.div>
        </div>

        {/* Right side abstract shape with parallax */}
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
          aria-hidden="true"
        >
          <div className="relative w-80 h-80 xl:w-96 xl:h-96">
            {/* Abstract tech composition */}
            <div className="absolute inset-0 rounded-full border border-primary/10" />
            <div className="absolute inset-6 rounded-full border border-primary/10" />
            <div className="absolute inset-12 rounded-full border border-primary/15" />
            <div className="absolute inset-24 rounded-full bg-primary/5 backdrop-blur-sm" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            {/* Rotating accent ring */}
            <motion.div
              className="absolute inset-4 rounded-full border border-dashed border-accent/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_oklch(0.78_0.16_65/0.4)]" />
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">{t("scroll")}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
