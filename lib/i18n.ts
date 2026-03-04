import type { Locale } from "@/types"

export const locales: Locale[] = ["ru", "kz", "en"]
export const defaultLocale: Locale = "ru"

export function getLocalizedValue(
  obj: { ru: string; kz: string; en: string },
  locale: Locale
): string {
  return obj[locale] || obj.ru
}
