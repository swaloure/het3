import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { products } from "@/data/products"
import { ProductDetail } from "@/components/catalog/product-detail"
import { getLocalizedValue } from "@/lib/i18n"
import type { Locale } from "@/types"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}

  const title = getLocalizedValue(product.title, locale as Locale)
  const description = getLocalizedValue(product.shortDescription, locale as Locale)

  return {
    title: `${title} — Heat Energy Capital`,
    description,
  }
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
