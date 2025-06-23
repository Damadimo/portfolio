import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Portfolio - Computer Engineering Student & Developer",
  description: "Portfolio showcasing projects, experience, and interests of a Computer Engineering student",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
