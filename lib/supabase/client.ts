"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "./types"

export const createClient = () => {
  // Verifica se le variabili d'ambiente sono disponibili
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error(
      "Variabili d'ambiente Supabase mancanti. Configura NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    )
  }

  return createClientComponentClient<Database>()
}
