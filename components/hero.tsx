import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { siteContent } from "@/config/site-content"

const { tagline, heading, description, image, primaryCta, secondaryCta } =
  siteContent.hero

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-14">
      {/* Background image */}
      <Image
        src={image.src}
        alt=""
        fill
        priority
        className="absolute inset-0 -z-10 object-cover opacity-15"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Top decorative blur */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[hsl(24,70%,55%)] to-[hsl(35,80%,70%)] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* Tagline pill */}
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent ring-1 ring-inset ring-accent/30">
              {tagline}
            </div>
          </div>

          {/* Main content */}
          <div className="text-center">
            <h1 className="font-serif text-5xl
            tracking-tight text-foreground text-balance sm:text-7xl">
              {heading}
            </h1>
            <p className="mt-8 text-lg font-medium text-muted-foreground text-pretty sm:text-xl leading-relaxed">
              {description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
              >
                {primaryCta.label}
              </a>
              <a
                href={secondaryCta.href}
                className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
              >
                {secondaryCta.label}{" "}
                <span aria-hidden="true">{"→"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative blur */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${image.src})` }}
      />

      {/* Scroll hint */}
      <div className="flex justify-center pb-10">
        <a
          href="#how-it-works"
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
