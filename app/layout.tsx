import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PocketLLM",
  description:
    "Experience the future of AI assistance with complete privacy. No internet required, no data sharing, just intelligent conversations powered by on-device language models.",
  keywords: "AI assistant, privacy, offline AI, Android app, on-device AI, llama.cpp, intent recognition",
  authors: [{ name: "AI Assistant Team" }],
  openGraph: {
    title: "PocketLLM",
    description: "Experience the future of AI assistance with complete privacy. No internet required, no data sharing.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/icon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
