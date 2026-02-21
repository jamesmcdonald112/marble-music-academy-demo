"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { FileText, Check, Download, ArrowRight } from "lucide-react"
import { siteContent } from "@/config/site-content"

const content = siteContent.leadMagnet

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  website: z.string().max(0).optional(), // honeypot
})

type FormValues = z.infer<typeof formSchema>

export function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", website: "" },
  })

  async function onSubmit(data: FormValues) {
    setServerError("")
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json()
        setServerError(json.errors?._form?.[0] ?? "Something went wrong.")
        return
      }

      setSubmitted(true)
    } catch {
      setServerError("Something went wrong. Please try again.")
    }
  }

  return (
    <section className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
          <div className="grid md:grid-cols-2">
            {/* Left column: info */}
            <div className="flex flex-col justify-center bg-primary p-8 md:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/10">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>

              <p className="mt-6 text-sm font-medium uppercase tracking-widest text-primary-foreground/60">
                {content.tagline}
              </p>
              <h2 className="mt-3 font-serif text-2xl tracking-tight text-primary-foreground md:text-3xl text-balance">
                {content.heading}
              </h2>
              <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
                {content.description}
              </p>

              <ul className="mt-8 space-y-3">
                {content.bulletPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-primary-foreground/80">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column: form or success */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              {submitted ? (
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <Download className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-foreground">
                    {content.successHeading}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {content.successMessage}
                  </p>
                  <a
                    href={content.pdfPath}
                    download={content.pdfFileName}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                  >
                    <Download className="h-4 w-4" />
                    Download Now
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-xl text-foreground">
                    {"Get your free copy"}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {"Enter your details below and we\u2019ll send the guide straight to your inbox."}
                  </p>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-6 space-y-4"
                    noValidate
                  >
                    {/* Honeypot - visually hidden */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        tabIndex={-1}
                        autoComplete="off"
                        {...register("website")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-name"
                        className="block text-sm font-medium text-foreground"
                      >
                        {content.fields.name.label}{" "}
                        <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="lead-name"
                        autoComplete="given-name"
                        className="mt-1.5 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder={content.fields.name.placeholder}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lead-email"
                        className="block text-sm font-medium text-foreground"
                      >
                        {content.fields.email.label}{" "}
                        <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="lead-email"
                        autoComplete="email"
                        className="mt-1.5 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder={content.fields.email.placeholder}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {serverError && (
                      <p className="text-xs text-destructive">{serverError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : content.submitLabel}
                      {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                    </button>

                    <p className="text-center text-xs text-muted-foreground/70">
                      {content.footnote}
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
