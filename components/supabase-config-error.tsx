"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SupabaseConfigError() {
  const [missingVars, setMissingVars] = useState<string[]>([])

  useEffect(() => {
    const missing = []
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) missing.push("NEXT_PUBLIC_SUPABASE_URL")
    if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) missing.push("NEXT_PUBLIC_SUPABASE_ANON_KEY")
    setMissingVars(missing)
  }, [])

  if (missingVars.length === 0) return null

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-amber-600 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Errore di configurazione
          </CardTitle>
          <CardDescription>
            Mancano alcune variabili d'ambiente necessarie per il funzionamento di Supabase
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="bg-amber-50 border-amber-200">
            <AlertTitle>Variabili d'ambiente mancanti:</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {missingVars.map((variable) => (
                  <li key={variable}>{variable}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm">
                Per risolvere questo problema, assicurati di configurare queste variabili nel file .env.local o nelle
                variabili d'ambiente del tuo ambiente di hosting.
              </p>
            </AlertDescription>
          </Alert>
          <div className="flex justify-center">
            <Link href="/">
              <Button>Torna alla Homepage</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
