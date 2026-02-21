import { Clock } from "lucide-react"
import { siteContent } from "@/config/site-content"

const content = siteContent.lessons

export function Lessons() {
  return (
    <section id="lessons" className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {content.tagline}
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
          {content.heading}
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {content.description}
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {content.types.map((lesson) => (
            <div
              key={lesson.duration}
              className={`relative flex flex-col rounded-lg border p-8 transition-shadow hover:shadow-md ${
                lesson.highlighted
                  ? "border-accent bg-accent/5"
                  : "border-border bg-background"
              }`}
            >
              {lesson.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {lesson.suited}
                </span>
              )}
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{lesson.duration}</span>
              </div>
              <h3 className="mt-4 text-xl font-medium text-foreground">
                {lesson.label}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {lesson.description}
              </p>
              {!lesson.highlighted && (
                <p className="mt-4 text-xs font-medium text-muted-foreground">
                  {lesson.suited}
                </p>
              )}
              <a
                href="#book"
                className={`mt-6 inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors ${
                  lesson.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                Book a Lesson
              </a>
            </div>
          ))}
        </div>

        {/* Full-width CTA band */}
        <div className="mt-20 flex flex-col items-center gap-3 rounded-lg border border-border bg-primary px-8 py-12 text-center">
          <h3 className="font-serif text-2xl tracking-tight text-primary-foreground md:text-3xl text-balance">
            {content.ctaBand.heading}
          </h3>
          <p className="max-w-md text-sm text-primary-foreground/70 leading-relaxed">
            {content.ctaBand.description}
          </p>
          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={content.ctaBand.primaryCta.href}
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              {content.ctaBand.primaryCta.label}
            </a>
            <a
              href={content.ctaBand.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/20 px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {content.ctaBand.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
