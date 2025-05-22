"use server"

import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "../supabase/types"

export async function createAutomation(formData: FormData) {
  const supabase = createServerActionClient<Database>({ cookies })

  // Verifica che l'utente sia autenticato
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) {
    return { error: "Devi essere autenticato per creare un'automazione." }
  }

  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const steps = JSON.parse(formData.get("steps") as string)
  const triggers = JSON.parse(formData.get("triggers") as string)
  const schedule = formData.get("schedule") as string | null

  const { error, data } = await supabase
    .from("automations")
    .insert({
      name,
      description,
      steps,
      triggers,
      schedule,
      status: "active",
      user_id: session.user.id,
    })
    .select()
    .single()

  if (error) {
    return { error: error.message }
  }

  return { success: "Automazione creata con successo", automation: data }
}

export async function updateAutomation(formData: FormData) {
  const supabase = createServerActionClient<Database>({ cookies })

  // Verifica che l'utente sia autenticato
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) {
    return { error: "Devi essere autenticato per aggiornare un'automazione." }
  }

  const id = formData.get("id") as string
  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const steps = JSON.parse(formData.get("steps") as string)
  const triggers = JSON.parse(formData.get("triggers") as string)
  const schedule = formData.get("schedule") as string | null
  const status = formData.get("status") as "active" | "paused" | "error"

  // Verifica che l'automazione appartenga all'utente
  const { data: automation, error: fetchError } = await supabase
    .from("automations")
    .select()
    .eq("id", id)
    .eq("user_id", session.user.id)
    .single()

  if (fetchError || !automation) {
    return { error: "Automazione non trovata o non autorizzata" }
  }

  const { error } = await supabase
    .from("automations")
    .update({
      name,
      description,
      steps,
      triggers,
      schedule,
      status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)

  if (error) {
    return { error: error.message }
  }

  return { success: "Automazione aggiornata con successo" }
}

export async function deleteAutomation(id: string) {
  const supabase = createServerActionClient<Database>({ cookies })

  // Verifica che l'utente sia autenticato
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) {
    return { error: "Devi essere autenticato per eliminare un'automazione." }
  }

  // Verifica che l'automazione appartenga all'utente
  const { data: automation, error: fetchError } = await supabase
    .from("automations")
    .select()
    .eq("id", id)
    .eq("user_id", session.user.id)
    .single()

  if (fetchError || !automation) {
    return { error: "Automazione non trovata o non autorizzata" }
  }

  const { error } = await supabase.from("automations").delete().eq("id", id)

  if (error) {
    return { error: error.message }
  }

  return { success: "Automazione eliminata con successo" }
}

export async function runAutomation(id: string) {
  const supabase = createServerActionClient<Database>({ cookies })

  // Verifica che l'utente sia autenticato
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) {
    return { error: "Devi essere autenticato per eseguire un'automazione." }
  }

  // Verifica che l'automazione appartenga all'utente
  const { data: automation, error: fetchError } = await supabase
    .from("automations")
    .select()
    .eq("id", id)
    .eq("user_id", session.user.id)
    .single()

  if (fetchError || !automation) {
    return { error: "Automazione non trovata o non autorizzata" }
  }

  // Qui in un'applicazione reale si avvierebbe l'esecuzione dell'automazione
  // Per ora simuliamo un'esecuzione di successo
  const { error } = await supabase.from("executions").insert({
    automation_id: id,
    status: "success",
    duration: 1.5,
    result: { message: "Esecuzione completata con successo" },
    user_id: session.user.id,
  })

  if (error) {
    return { error: error.message }
  }

  return { success: "Automazione eseguita con successo" }
}
