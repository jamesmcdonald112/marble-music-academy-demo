"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { siteContent } from "@/config/site-content"

const content = siteContent.contact

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // In production, this would POST to an API route
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="border-t border-border/50 bg-secondary/30 py-24 md:py-32">
        <div className="mx-auto max-w-lg px-6 text-center">
          <div className="rounded-lg border border-border bg-background p-12">
            <p className="font-serif text-2xl text-foreground">{content.successHeading}</p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {content.successMessage}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="border-t border-border/50 bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-lg px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {content.tagline}
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            {content.heading}
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {content.description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground"
            >
              {content.fields.name.label} {content.fields.name.required && <span className="text-accent">*</span>}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required={content.fields.name.required}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-1.5 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder={content.fields.name.placeholder}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              {content.fields.email.label} {content.fields.email.required && <span className="text-accent">*</span>}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required={content.fields.email.required}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="mt-1.5 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder={content.fields.email.placeholder}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-foreground"
            >
              {content.fields.phone.label} {!content.fields.phone.required && <span className="text-xs text-muted-foreground">(optional)</span>}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="mt-1.5 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder={content.fields.phone.placeholder}
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {content.submitLabel}
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}
