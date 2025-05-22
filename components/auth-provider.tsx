"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/auth-helpers-nextjs"

type AuthContextType = {
  user: User | null
  isLoading: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  error: null,
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Verifica se le variabili d'ambiente sono disponibili
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn("Variabili d'ambiente Supabase mancanti. L'autenticazione non funzionerà correttamente.")
      setError("Configurazione Supabase mancante. Contatta l'amministratore.")
      setIsLoading(false)
      return
    }

    let supabase
    try {
      supabase = createClient()
    } catch (err) {
      console.error("Errore durante la creazione del client Supabase:", err)
      setError("Errore durante l'inizializzazione di Supabase")
      setIsLoading(false)
      return
    }

    const getUser = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser()

        if (error) {
          // Se l'errore è "Auth session missing", non è un problema critico per gli utenti non autenticati
          if (error.message === "Auth session missing!") {
            console.log("Nessuna sessione di autenticazione trovata. L'utente non è autenticato.")
            setUser(null)
          } else {
            console.error("Errore durante il recupero dell'utente:", error)
            setError("Errore durante il recupero dell'utente")
          }
        } else {
          setUser(user)
        }
      } catch (err) {
        console.error("Errore imprevisto:", err)
        setError("Si è verificato un errore imprevisto")
      } finally {
        setIsLoading(false)
      }
    }

    getUser()

    try {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((event, session) => {
        setUser(session?.user ?? null)
        setIsLoading(false)
      })

      return () => {
        subscription.unsubscribe()
      }
    } catch (err) {
      console.error("Errore durante la sottoscrizione agli eventi di autenticazione:", err)
      setError("Errore durante l'inizializzazione dell'autenticazione")
      setIsLoading(false)
      return () => {}
    }
  }, [])

  return <AuthContext.Provider value={{ user, isLoading, error }}>{children}</AuthContext.Provider>
}
