"use client"

import Link from "next/link"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { getLocalizedValue } from "@/lib/i18n"
import { formatPrice } from "@/data/products"
import type { Product, Locale } from "@/types"

export function ProductCard({ product }: { product: Product }) {
  const locale = useLocale() as Locale
  const t = useTranslations("catalog")

  return (
    <Link href={`/${locale}/catalog/${product.slug}`}>
      <motion.div
        whileHover={{ y: -3 }}
        className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card/40 transition-all hover:border-primary/20 hover:bg-card/70 h-full"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
          <Image
            src={product.images[0]}
            alt={getLocalizedValue(product.title, locale)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="rounded-md bg-background/80 backdrop-blur-sm px-2 py-0.5 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          <h3 className="text-sm font-semibold text-foreground line-clamp-2 mb-1.5 leading-snug">
            {getLocalizedValue(product.title, locale)}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1">
            {getLocalizedValue(product.shortDescription, locale)}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-sm font-semibold text-primary">
              {t("fromPrice")} {formatPrice(product.price)} {t("currency")}
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </div>
        </div>

        {/* Shimmer */}
        <div className="shimmer-line absolute bottom-0 left-0 right-0 h-px overflow-hidden" />
      </motion.div>
    </Link>
  )
}
