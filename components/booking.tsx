import { ExternalLink } from "lucide-react"
import { siteContent } from "@/config/site-content"

const content = siteContent.booking

export function Booking() {
  return (
    <section id="book" className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {content.tagline}
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-5xl text-balance">
          {content.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
          {content.description}
        </p>
        <a
          href={content.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-10 py-4 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          {content.ctaLabel}
          <ExternalLink className="h-4 w-4" />
        </a>
        <p className="mt-4 text-xs text-muted-foreground">
          {content.footnote}
        </p>
      </div>
    </section>
  )
}
