import { siteContent } from "@/config/site-content"

const content = siteContent.programs
const bookingCta = siteContent.booking

function splitPrice(duration: string) {
  const match = duration.match(/€\s?\d+(?:[.,]\d+)?/)
  if (!match) return { price: duration, detail: "" }

  const price = match[0].replace(/\s+/g, "")
  const detail = duration.replace(match[0], "").trim().replace(/^[-–—:)\s]+/, "")
  return { price, detail }
}

export function Programs() {
  return (
    <section id="programs" className="border-t border-border/50 py-24 md:py-32">
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
          {content.types.map((lesson) => {
            const { price, detail } = splitPrice(lesson.duration)
            return (
            <div
              key={lesson.label}
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
              <div>
                <p className="font-serif text-5xl leading-none text-accent md:text-6xl">
                  {price}
                </p>
                {detail ? (
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {detail}
                  </p>
                ) : null}
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
                href={bookingCta.ctaHref}
                className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Book a Call
              </a>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
