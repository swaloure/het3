"use client"

import Link from "next/link"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { products, formatPrice } from "@/data/products"
import { getLocalizedValue } from "@/lib/i18n"
import type { Locale } from "@/types"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

const featured = products.filter((_, i) => [0, 2, 5, 40, 43, 48, 76, 78, 81, 83, 90, 95].includes(i)).slice(0, 8)

export function FeaturedSection() {
  const t = useTranslations("featured")
  const ct = useTranslations("catalog")
  const locale = useLocale() as Locale

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
              {t("title")}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg text-pretty">
              {t("subtitle")}
            </p>
          </div>
          <Link
            href={`/${locale}/catalog`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 shrink-0"
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product) => (
            <StaggerItem key={product.id}>
              <Link href={`/${locale}/catalog/${product.slug}`}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/40 transition-all hover:border-primary/20 hover:bg-card/70"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-secondary/30">
                    <Image
                      src={product.images[0]}
                      alt={getLocalizedValue(product.title, locale)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="rounded-md bg-background/80 backdrop-blur-sm px-2 py-0.5 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-foreground line-clamp-2 mb-1.5 leading-snug">
                      {getLocalizedValue(product.title, locale)}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                      {getLocalizedValue(product.shortDescription, locale)}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary">
                        {ct("fromPrice")} {formatPrice(product.price)} {ct("currency")}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>

                  {/* Shimmer */}
                  <div className="shimmer-line absolute bottom-0 left-0 right-0 h-px overflow-hidden" />
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
