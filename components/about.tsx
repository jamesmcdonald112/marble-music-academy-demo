import Image from "next/image"
import { siteContent } from "@/config/site-content"

const { tagline, heading, image, paragraphs } = siteContent.about

export function About() {
  return (
    <section id="about" className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <div className="relative ml-0 mr-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg lg:col-span-5 lg:mx-0 lg:h-full lg:max-w-none lg:aspect-auto">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {tagline}
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
              {heading}
            </h2>

            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
