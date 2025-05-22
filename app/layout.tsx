import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/components/auth-provider"
import { SupabaseConfigError } from "@/components/supabase-config-error"
import { ErrorBoundary } from "@/components/error-boundary"
import { MainHeader } from "@/components/main-header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Automathing.AI - Crea automazioni con l'intelligenza artificiale",
  description: "Descrivi cosa vuoi automatizzare e lascia che l'AI faccia il resto. Semplice, veloce e potente.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Verifica se le variabili d'ambiente sono disponibili
  const isMissingConfig =
    typeof window === "undefined" &&
    (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

  return (
    <html lang="it">
      <body className={inter.className}>
        <ErrorBoundary>
          {isMissingConfig ? (
            <SupabaseConfigError />
          ) : (
            <AuthProvider>
              <div className="flex flex-col min-h-screen">
                <MainHeader />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </AuthProvider>
          )}
        </ErrorBoundary>
      </body>
    </html>
  )
}
