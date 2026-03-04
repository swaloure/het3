"use client"

import Image from "next/image"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Phone,
  FileText,
} from "lucide-react"
import { getLocalizedValue } from "@/lib/i18n"
import { formatPrice, products } from "@/data/products"
import type { Product, Locale } from "@/types"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

function RelatedCard({ product }: { product: Product }) {
  const locale = useLocale() as Locale
  const t = useTranslations("catalog")

  return (
    <Link href={`/${locale}/catalog/${product.slug}`}>
      <motion.div
        whileHover={{ y: -2 }}
        className="group overflow-hidden rounded-xl border border-border/50 bg-card/40 transition-all hover:border-primary/20"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
          <Image
            src={product.images[0]}
            alt={getLocalizedValue(product.title, locale)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-3">
          <h4 className="text-xs font-semibold text-foreground line-clamp-2 mb-1">
            {getLocalizedValue(product.title, locale)}
          </h4>
          <span className="text-xs text-primary font-medium">
            {t("fromPrice")} {formatPrice(product.price)} {t("currency")}
          </span>
        </div>
      </motion.div>
    </Link>
  )
}

export function ProductDetail({ product }: { product: Product }) {
  const t = useTranslations("product")
  const ct = useTranslations("catalog")
  const locale = useLocale() as Locale

  const related = product.relatedSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as Product[]

  return (
    <section className="pt-24 pb-20 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Back link */}
        <FadeIn>
          <Link
            href={`/${locale}/catalog`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToCatalog")}
          </Link>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <FadeIn direction="left">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/50 bg-secondary/20">
              <Image
                src={product.images[0]}
                alt={getLocalizedValue(product.title, locale)}
                fill
                className="object-cover"
                priority
              />
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="rounded-lg bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Product info */}
          <FadeIn direction="right">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight text-balance">
                {getLocalizedValue(product.title, locale)}
              </h1>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                {getLocalizedValue(product.description, locale)}
              </p>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-sm text-muted-foreground">{t("price")}:</span>
                <span className="text-2xl font-bold text-primary">
                  {ct("fromPrice")} {formatPrice(product.price)} {ct("currency")}
                </span>
              </div>

              {/* Specs table */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  {t("specs")}
                </h3>
                <div className="rounded-xl border border-border/50 overflow-hidden">
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between px-4 py-3 text-sm ${
                        i % 2 === 0 ? "bg-secondary/20" : "bg-transparent"
                      }`}
                    >
                      <span className="text-muted-foreground">
                        {getLocalizedValue(spec.key, locale)}
                      </span>
                      <span className="text-foreground font-medium text-right">
                        {getLocalizedValue(spec.value, locale)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/${locale}/contacts?product=${encodeURIComponent(
                    getLocalizedValue(product.title, locale)
                  )}&category=${product.category}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-pulse"
                >
                  {t("requestQuote")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={`/${locale}/contacts`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary"
                >
                  <Phone className="h-4 w-4" />
                  {t("contact")}
                </Link>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/60 bg-transparent px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:border-border">
                  <Download className="h-4 w-4" />
                  {t("downloadCard")}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <FadeIn>
              <h2 className="text-2xl font-bold text-foreground tracking-tight mb-8">
                {t("related")}
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {related.map((p) => (
                <StaggerItem key={p.id}>
                  <RelatedCard product={p} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}
      </div>
    </section>
  )
}
