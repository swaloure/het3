"use client"

import { useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react"
import { toast } from "sonner"
import { categories } from "@/data/products"
import { getLocalizedValue } from "@/lib/i18n"
import type { Locale } from "@/types"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

export function ContactsView() {
  const t = useTranslations("contacts")
  const locale = useLocale() as Locale
  const searchParams = useSearchParams()

  const initialProduct = searchParams.get("product") || ""
  const initialCategory = searchParams.get("category") || ""

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: initialCategory,
    product: initialProduct,
    message: "",
    consent: false,
  })

  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  function update(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    toast.success(t("success"), { description: t("successDesc") })
  }

  const contactInfo = [
    { icon: MapPin, label: t("address"), value: t("addressValue") },
    { icon: Phone, label: "", value: t("phoneValue") },
    { icon: Mail, label: "", value: t("emailValue") },
    { icon: Clock, label: "", value: t("workHours") },
  ]

  const inputClass =
    "w-full rounded-lg border border-border/60 bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors"

  return (
    <section className="pt-24 pb-20 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            {t("title")}
          </h1>
          <p className="mt-3 text-muted-foreground text-lg text-pretty">
            {t("subtitle")}
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info + Social */}
          <div className="lg:col-span-2">
            <StaggerContainer className="space-y-5">
              {contactInfo.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      {item.label && (
                        <p className="text-xs text-muted-foreground mb-0.5">
                          {item.label}
                        </p>
                      )}
                      <p className="text-sm text-foreground">{item.value}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Social links */}
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <FadeIn direction="right" className="lg:col-span-3">
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6 lg:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                {t("formTitle")}
              </h2>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t("success")}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t("successDesc")}</p>
                  <button
                    onClick={() => {
                      setSent(false)
                      setForm({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        category: "",
                        product: "",
                        message: "",
                        consent: false,
                      })
                    }}
                    className="mt-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    {"Send another"}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        {t("name")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        {t("company")}
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        {t("email")} *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        {t("phone")}
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        {t("category")}
                      </label>
                      <select
                        value={form.category}
                        onChange={(e) => update("category", e.target.value)}
                        className={inputClass}
                      >
                        <option value="">—</option>
                        {categories.map((cat) => (
                          <option key={cat.slug} value={cat.slug}>
                            {getLocalizedValue(cat.title, locale)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        {t("productField")}
                      </label>
                      <input
                        type="text"
                        value={form.product}
                        onChange={(e) => update("product", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      {t("message")}
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={form.consent}
                      onChange={(e) => update("consent", e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-border accent-primary"
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      {t("consent")}
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {"..."}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {t("submit")}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
