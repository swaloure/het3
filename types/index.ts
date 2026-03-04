export type Locale = "ru" | "kz" | "en"

export interface LocalizedString {
  ru: string
  kz: string
  en: string
}

export interface ProductSpec {
  key: LocalizedString
  value: LocalizedString
}

export type ProductCategory = "chemicals" | "metals" | "equipment"

export interface Product {
  id: number
  slug: string
  category: ProductCategory
  title: LocalizedString
  shortDescription: LocalizedString
  description: LocalizedString
  price: number
  currency: string
  specs: ProductSpec[]
  tags: string[]
  images: string[]
  relatedSlugs: string[]
}

export interface CategoryInfo {
  slug: ProductCategory
  title: LocalizedString
  description: LocalizedString
  icon: string
  count: number
}

export interface RequestParam {
  label: LocalizedString
  placeholder: LocalizedString
  type: "text" | "number" | "select"
  options?: LocalizedString[]
}

export type RequestParamsMap = Record<ProductCategory, RequestParam[]>
