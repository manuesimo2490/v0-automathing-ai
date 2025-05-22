"use server"

import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import type { Database } from "../supabase/types"

// Valori predefiniti per lo sviluppo locale
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co"
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key"

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  try {
    const supabase = createServerActionClient<Database>({
      cookies,
      supabaseUrl: SUPABASE_URL,
      supabaseKey: SUPABASE_ANON_KEY,
    })

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return { error: error.message }
    }

    redirect("/dashboard")
  } catch (error) {
    console.error("Errore durante il login:", error)
    return { error: "Si è verificato un errore durante il login. Riprova più tardi." }
  }
}

export async function signUp(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const firstName = formData.get("first-name") as string
  const lastName = formData.get("last-name") as string

  try {
    const supabase = createServerActionClient<Database>({
      cookies,
      supabaseUrl: SUPABASE_URL,
      supabaseKey: SUPABASE_ANON_KEY,
    })

    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/callback`,
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    })

    if (error) {
      return { error: error.message }
    }

    // Creare il profilo utente
    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id,
        first_name: firstName,
        last_name: lastName,
      })

      if (profileError) {
        return { error: profileError.message }
      }
    }

    return { success: "Controlla la tua email per confermare la registrazione." }
  } catch (error) {
    console.error("Errore durante la registrazione:", error)
    return { error: "Si è verificato un errore durante la registrazione. Riprova più tardi." }
  }
}

export async function resetPassword(formData: FormData) {
  const email = formData.get("email") as string

  try {
    const supabase = createServerActionClient<Database>({
      cookies,
      supabaseUrl: SUPABASE_URL,
      supabaseKey: SUPABASE_ANON_KEY,
    })

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/reset-password/confirm`,
    })

    if (error) {
      return { error: error.message }
    }

    return { success: "Ti abbiamo inviato un link per reimpostare la password." }
  } catch (error) {
    console.error("Errore durante il reset della password:", error)
    return { error: "Si è verificato un errore durante il reset della password. Riprova più tardi." }
  }
}

export async function signOut() {
  try {
    const supabase = createServerActionClient<Database>({
      cookies,
      supabaseUrl: SUPABASE_URL,
      supabaseKey: SUPABASE_ANON_KEY,
    })

    await supabase.auth.signOut()
    redirect("/")
  } catch (error) {
    console.error("Errore durante il logout:", error)
    redirect("/")
  }
}
