"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { siteContent } from "@/config/site-content"

const content = siteContent.videoPreview

export function VideoPreview() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="watch" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {content.tagline}
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
            {content.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-xl border border-border bg-foreground/[0.03] shadow-sm">
            {/* 16:9 aspect ratio container */}
            <div className="relative aspect-video w-full">
              {!isPlaying ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group absolute inset-0 flex cursor-pointer flex-col items-center justify-center transition-colors hover:bg-foreground/[0.02]"
                  aria-label="Play video preview"
                >
                  {/* Decorative lines to suggest a video frame */}
                  <div className="absolute inset-6 rounded-lg border border-dashed border-border/60" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-foreground/20 bg-background shadow-md transition-all group-hover:scale-105 group-hover:border-accent group-hover:shadow-lg">
                    <Play className="ml-1 h-8 w-8 text-foreground/70 transition-colors group-hover:text-accent" />
                  </div>
                  <span className="mt-5 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    {content.playButtonLabel}
                  </span>
                </button>
              ) : (
                <iframe
                  src={`${content.videoEmbedUrl}?autoplay=1&rel=0`}
                  title="Lesson preview video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              )}
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            {content.footnote}
          </p>
        </div>
      </div>
    </section>
  )
}
