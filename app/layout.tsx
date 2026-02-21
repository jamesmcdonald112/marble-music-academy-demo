import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ScheduleCallWidget } from '@/components/schedule-call-widget'
import { siteContent } from '@/config/site-content'

import './globals.css'

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
      <head />
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <ScheduleCallWidget />
        <SpeedInsights />
      </body>
    </html>
  )
}
