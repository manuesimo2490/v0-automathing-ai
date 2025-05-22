"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

interface AuthButtonProps {
  provider: "google" | "facebook"
  children: React.ReactNode
  className?: string
}

export function AuthButton({ provider, children, className }: AuthButtonProps) {
  const router = useRouter()
  const supabase = createClient()

  const handleAuth = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      console.error("Errore durante l'autenticazione:", error)
    }
  }

  return (
    <Button variant="outline" className={className} onClick={handleAuth}>
      {children}
    </Button>
  )
}
