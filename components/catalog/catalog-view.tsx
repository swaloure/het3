"use client"

import { useState, useMemo, useCallback } from "react"
import { useLocale, useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { PackageX } from "lucide-react"
import { products } from "@/data/products"
import { filterProducts, sortProducts, paginate, type SortOption } from "@/lib/filterSort"
import type { Locale, ProductCategory } from "@/types"
import { CatalogFilters } from "./catalog-filters"
import { ProductCard } from "./product-card"
import { Pagination } from "./pagination"
import { FadeIn } from "@/components/motion"

const PER_PAGE = 12

export function CatalogView() {
  const t = useTranslations("catalog")
  const locale = useLocale() as Locale
  const searchParams = useSearchParams()

  const initialCategory = (searchParams.get("category") as ProductCategory) || "all"

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState<ProductCategory | "all">(initialCategory)
  const [sort, setSort] = useState<SortOption>("price-asc")
  const [page, setPage] = useState(1)

  const filtered = useMemo(
    () => filterProducts(products, { search, category, locale }),
    [search, category, locale]
  )

  const sorted = useMemo(
    () => sortProducts(filtered, sort, locale),
    [filtered, sort, locale]
  )

  const { items, totalPages, totalItems } = useMemo(
    () => paginate(sorted, page, PER_PAGE),
    [sorted, page]
  )

  const resetFilters = useCallback(() => {
    setSearch("")
    setCategory("all")
    setSort("price-asc")
    setPage(1)
  }, [])

  const handleCategoryChange = useCallback((val: ProductCategory | "all") => {
    setCategory(val)
    setPage(1)
  }, [])

  const handleSearchChange = useCallback((val: string) => {
    setSearch(val)
    setPage(1)
  }, [])

  const handleSortChange = useCallback((val: SortOption) => {
    setSort(val)
    setPage(1)
  }, [])

  return (
    <section className="pt-24 pb-20 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-8 lg:mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            {t("title")}
          </h1>
          <p className="mt-3 text-muted-foreground text-lg text-pretty">
            {t("subtitle")}
          </p>
        </FadeIn>

        {/* Filters */}
        <CatalogFilters
          search={search}
          onSearchChange={handleSearchChange}
          category={category}
          onCategoryChange={handleCategoryChange}
          sort={sort}
          onSortChange={handleSortChange}
          onReset={resetFilters}
          totalResults={totalItems}
          totalItems={products.length}
        />

        {/* Product Grid */}
        {items.length > 0 ? (
          <>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <AnimatePresence mode="popLayout">
                {items.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        ) : (
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/50 text-muted-foreground">
              <PackageX className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {t("noResults")}
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              {t("noResultsDesc")}
            </p>
            <button
              onClick={resetFilters}
              className="mt-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {t("resetFilters")}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
