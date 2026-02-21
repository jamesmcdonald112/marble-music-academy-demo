import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { DM_Serif_Display, Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { CookieConsent } from '@/components/cookie-consent'
import { ScheduleCallWidget } from '@/components/schedule-call-widget'
import { siteContent } from '@/config/site-content'

import './globals.css'

const GA_ID = siteContent.meta.gaId

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
})

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
}

export const viewport: Viewport = {
  themeColor: siteContent.meta.themeColor,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_dmSerif.variable}`}>
      <head>
        {/* Google Consent Mode v2 defaults — MUST come before gtag.js loads */}
        <Script id="gtag-consent-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied'
            });
          `}
        </Script>

        {/* Load gtag.js */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        {/* Configure GA */}
        <Script id="gtag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <ScheduleCallWidget />
        <SpeedInsights />
        <CookieConsent />
      </body>
    </html>
  )
}
