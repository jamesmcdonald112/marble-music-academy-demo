"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { siteContent } from "@/config/site-content"

const content = siteContent.songExamples
const { songs } = content

function getYouTubeEmbedUrl(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/
  )
  return match
    ? `https://www.youtube.com/embed/${match[1]}`
    : url
}

const difficultyColor: Record<string, string> = {
  Beginner: "bg-emerald-100 text-emerald-800",
  Intermediate: "bg-amber-100 text-amber-800",
  Advanced: "bg-rose-100 text-rose-800",
}

export function SongExamples() {
  const [activeSong, setActiveSong] = useState<
    (typeof songs)[number] | null
  >(null)

  return (
    <section
      id="songs"
      className="border-t border-border/50 py-24 md:py-32"
    >
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

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {songs.map((song) => (
            <div
              key={song.title}
              className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-background p-5 transition-shadow hover:shadow-md"
            >
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-medium text-foreground">
                  {song.title}
                </h3>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {song.artist}
                </p>
                <span
                  className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${difficultyColor[song.difficulty]}`}
                >
                  {song.difficulty}
                </span>
              </div>

              <button
                onClick={() => setActiveSong(song)}
                className="flex shrink-0 items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                aria-label={`Preview ${song.title} by ${song.artist}`}
              >
                <Play className="h-3 w-3" />
                Preview
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={content.ctaHref}
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              {content.ctaLabel}
            </a>
            <a
              href={content.secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {content.secondaryCtaLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog
        open={!!activeSong}
        onOpenChange={(open) => {
          if (!open) setActiveSong(null)
        }}
      >
        <DialogContent className="max-w-3xl gap-0 overflow-hidden p-0">
          <DialogHeader className="px-6 pt-6 pb-4">
            <DialogTitle>
              {activeSong?.title}
            </DialogTitle>
            <DialogDescription>
              {activeSong?.artist} &middot; {activeSong?.difficulty}
            </DialogDescription>
          </DialogHeader>
          <div className="relative aspect-video w-full">
            {activeSong && (
              <iframe
                src={`${getYouTubeEmbedUrl(activeSong.videoUrl)}?autoplay=1&rel=0`}
                title={`${activeSong.title} by ${activeSong.artist}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
