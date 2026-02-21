"use client"

import { useState, useEffect, useCallback } from "react"

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

const STORAGE_KEY = "cookie_consent"

export function CookieConsent() {
  const [visible, setVisible] = useState<boolean | null>(null)

  const openBanner = useCallback(() => setVisible(true), [])

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)

    if (consent === "granted") {
      // User previously accepted -- update consent mode (covers page reload)
      window.gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      })
      setVisible(false)
    } else if (consent === "denied") {
      // User previously rejected -- consent stays denied (the default)
      setVisible(false)
    } else {
      // No previous choice -- show the banner
      setVisible(true)
    }

    window.addEventListener("open-cookie-banner", openBanner)
    return () => window.removeEventListener("open-cookie-banner", openBanner)
  }, [openBanner])

  function accept() {
    localStorage.setItem(STORAGE_KEY, "granted")
    window.gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    })
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "denied")
    // No update needed -- consent defaults are already 'denied'
    setVisible(false)
  }

  // Render nothing until we know the consent state (prevents flash)
  // or when the banner should be hidden
  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground leading-relaxed">
          This site uses cookies to understand usage and improve the
          experience.{" "}
          <a
            href="/privacy"
            className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
          >
            Privacy Policy
          </a>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={reject}
            className="rounded-md border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Reject
          </button>
          <button
            onClick={accept}
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
