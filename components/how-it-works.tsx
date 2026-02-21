import { CalendarCheck, Target, TrendingUp, type LucideIcon } from "lucide-react"
import { siteContent } from "@/config/site-content"

const iconMap: Record<string, LucideIcon> = {
  CalendarCheck,
  Target,
  TrendingUp,
}

const { tagline, heading, steps } = siteContent.howItWorks

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {tagline}
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
          {heading}
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => {
            const Icon = iconMap[step.iconName] ?? CalendarCheck
            return (
            <div key={step.title} className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {"0" + (i + 1)}
              </p>
              <h3 className="mt-4 text-lg font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
