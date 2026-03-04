"use client"

import { useTranslations, useLocale } from "next-intl"
import { Search, X, SlidersHorizontal } from "lucide-react"
import { categories } from "@/data/products"
import { getLocalizedValue } from "@/lib/i18n"
import type { Locale, ProductCategory } from "@/types"
import type { SortOption } from "@/lib/filterSort"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface CatalogFiltersProps {
  search: string
  onSearchChange: (val: string) => void
  category: ProductCategory | "all"
  onCategoryChange: (val: ProductCategory | "all") => void
  sort: SortOption
  onSortChange: (val: SortOption) => void
  onReset: () => void
  totalResults: number
  totalItems: number
}

export function CatalogFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
  onReset,
  totalResults,
  totalItems,
}: CatalogFiltersProps) {
  const t = useTranslations("catalog")
  const locale = useLocale() as Locale
  const [filtersOpen, setFiltersOpen] = useState(false)

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "price-asc", label: t("sortOptions.price-asc") },
    { value: "price-desc", label: t("sortOptions.price-desc") },
    { value: "name-asc", label: t("sortOptions.name-asc") },
    { value: "name-desc", label: t("sortOptions.name-desc") },
  ]

  return (
    <div className="space-y-4">
      {/* Search + mobile filter toggle */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t("search")}
            className="w-full rounded-lg border border-border/60 bg-secondary/30 py-2.5 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors"
          />
          {search && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className={cn(
            "flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors lg:hidden",
            filtersOpen
              ? "border-primary/40 bg-primary/10 text-primary"
              : "border-border/60 bg-secondary/30 text-muted-foreground hover:text-foreground"
          )}
        >
          <SlidersHorizontal className="h-4 w-4" />
          {t("filters")}
        </button>
      </div>

      {/* Filter bar - always visible on desktop */}
      <div className="hidden lg:flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => onCategoryChange("all")}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
              category === "all"
                ? "bg-primary/15 text-primary border border-primary/20"
                : "bg-secondary/40 text-muted-foreground border border-transparent hover:text-foreground hover:bg-secondary/60"
            )}
          >
            {t("allCategories")}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onCategoryChange(cat.slug)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                category === cat.slug
                  ? "bg-primary/15 text-primary border border-primary/20"
                  : "bg-secondary/40 text-muted-foreground border border-transparent hover:text-foreground hover:bg-secondary/60"
              )}
            >
              {getLocalizedValue(cat.title, locale)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {t("showing")} {totalResults} {t("of")} {totalItems}
          </span>
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="rounded-lg border border-border/60 bg-secondary/30 px-3 py-1.5 text-xs text-foreground focus:outline-none focus:border-primary/40"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {(search || category !== "all") && (
            <button
              onClick={onReset}
              className="text-xs text-primary hover:text-primary/80 transition-colors"
            >
              {t("resetFilters")}
            </button>
          )}
        </div>
      </div>

      {/* Mobile filters panel */}
      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="rounded-xl border border-border/50 bg-card/50 p-4 space-y-4">
              {/* Categories */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">
                  {t("allCategories")}
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onCategoryChange("all")}
                    className={cn(
                      "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                      category === "all"
                        ? "bg-primary/15 text-primary border border-primary/20"
                        : "bg-secondary/40 text-muted-foreground border border-transparent"
                    )}
                  >
                    {t("allCategories")}
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => onCategoryChange(cat.slug)}
                      className={cn(
                        "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                        category === cat.slug
                          ? "bg-primary/15 text-primary border border-primary/20"
                          : "bg-secondary/40 text-muted-foreground border border-transparent"
                      )}
                    >
                      {getLocalizedValue(cat.title, locale)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">
                  {t("sort")}
                </label>
                <select
                  value={sort}
                  onChange={(e) => onSortChange(e.target.value as SortOption)}
                  className="w-full rounded-lg border border-border/60 bg-secondary/30 px-3 py-2 text-xs text-foreground"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset */}
              {(search || category !== "all") && (
                <button
                  onClick={onReset}
                  className="text-xs text-primary hover:text-primary/80 transition-colors"
                >
                  {t("resetFilters")}
                </button>
              )}

              <div className="text-xs text-muted-foreground">
                {t("showing")} {totalResults} {t("of")} {totalItems}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
