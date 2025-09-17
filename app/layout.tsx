import type React from "react"
import type { Metadata } from "next"
import { GeistSans, GeistMono } from "geist/font"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gaelscoil na bhFál - Fáilte go dtí ár suíomh gréasáin",
  description: "Gaelscoil na bhFál - An Irish-language primary school fostering bilingual education and Irish culture",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ga">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
