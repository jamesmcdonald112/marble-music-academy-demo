import { siteContent } from "@/config/site-content"

const { stats } = siteContent.credentials

export function Credentials() {
  return (
    <section className="border-y border-border/50 bg-secondary/50 py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-serif text-3xl text-foreground md:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
