import { siteContent } from "@/config/site-content"

const content = siteContent.testimonials

export function Testimonials() {
  return (
    <section className="border-t border-border/50 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {content.tagline}
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
          {content.heading}
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {content.items.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-lg border border-border bg-background p-8"
            >
              <p className="flex-1 text-sm leading-relaxed text-foreground">
                {'"' + t.quote + '"'}
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-16 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="/book-a-call"
            className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Book a Call
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  )
}
