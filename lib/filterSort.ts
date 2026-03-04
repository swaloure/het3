import type { Product, ProductCategory, Locale } from "@/types"
import { getLocalizedValue } from "./i18n"

export type SortOption = "price-asc" | "price-desc" | "name-asc" | "name-desc"

export function filterProducts(
  products: Product[],
  options: {
    search?: string
    category?: ProductCategory | "all"
    minPrice?: number
    maxPrice?: number
    locale: Locale
  }
): Product[] {
  let filtered = [...products]

  if (options.category && options.category !== "all") {
    filtered = filtered.filter((p) => p.category === options.category)
  }

  if (options.search && options.search.trim() !== "") {
    const q = options.search.toLowerCase().trim()
    filtered = filtered.filter((p) => {
      const title = getLocalizedValue(p.title, options.locale).toLowerCase()
      const desc = getLocalizedValue(p.shortDescription, options.locale).toLowerCase()
      const tags = p.tags.join(" ").toLowerCase()
      return title.includes(q) || desc.includes(q) || tags.includes(q)
    })
  }

  if (options.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= options.minPrice!)
  }
  if (options.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= options.maxPrice!)
  }

  return filtered
}

export function sortProducts(
  products: Product[],
  sort: SortOption,
  locale: Locale
): Product[] {
  const sorted = [...products]
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price)
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price)
    case "name-asc":
      return sorted.sort((a, b) =>
        getLocalizedValue(a.title, locale).localeCompare(
          getLocalizedValue(b.title, locale)
        )
      )
    case "name-desc":
      return sorted.sort((a, b) =>
        getLocalizedValue(b.title, locale).localeCompare(
          getLocalizedValue(a.title, locale)
        )
      )
    default:
      return sorted
  }
}

export function paginate<T>(items: T[], page: number, perPage: number) {
  const start = (page - 1) * perPage
  return {
    items: items.slice(start, start + perPage),
    totalPages: Math.ceil(items.length / perPage),
    totalItems: items.length,
  }
}
