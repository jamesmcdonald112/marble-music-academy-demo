import Image from "next/image"
import { siteContent } from "@/config/site-content"

const { tagline, heading, image, paragraphs } = siteContent.about

export function About() {
  return (
    <section id="about" className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Left column: image + heading */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {tagline}
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
                {heading}
              </h2>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right column: text */}
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
