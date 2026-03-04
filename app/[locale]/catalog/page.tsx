import { Suspense } from "react"
import { CatalogView } from "@/components/catalog/catalog-view"

export default function CatalogPage() {
  return (
    <Suspense>
      <CatalogView />
    </Suspense>
  )
}
