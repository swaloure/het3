import { Suspense } from "react"
import { ContactsView } from "@/components/pages/contacts-view"

export default function ContactsPage() {
  return (
    <Suspense>
      <ContactsView />
    </Suspense>
  )
}
