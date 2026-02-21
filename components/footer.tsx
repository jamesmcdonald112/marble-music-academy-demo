"use client"

import { siteContent } from "@/config/site-content"

const content = siteContent.footer

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
        {/* Name & positioning */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-serif text-lg text-foreground">{content.name}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {content.tagline}
          </p>
        </div>

        {/* CTA links */}
        <div className="flex items-center gap-8">
          <a
            href={content.ctaHref}
            className="text-sm font-medium text-foreground underline underline-offset-4 decoration-accent transition-colors hover:text-accent"
          >
            {content.ctaLabel}
          </a>
          <a
            href={content.secondaryCtaHref}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {content.secondaryCtaLabel}
          </a>
        </div>

        {/* Email */}
        <a
          href={`mailto:${content.email}`}
          className="text-sm text-muted-foreground transition-colors hover:text-accent"
        >
          {content.email}
        </a>

        {/* Copyright & privacy */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground/70">
            {"\u00A9 " + new Date().getFullYear() + " " + content.name + ". All rights reserved."}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-xs text-muted-foreground/50 transition-colors hover:text-muted-foreground"
            >
              Privacy Policy
            </a>
            <span className="text-xs text-muted-foreground/30">{"/"}</span>
            <button
              onClick={() => window.dispatchEvent(new Event("open-cookie-banner"))}
              className="text-xs text-muted-foreground/50 transition-colors hover:text-muted-foreground"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
