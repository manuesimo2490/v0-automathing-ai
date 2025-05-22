"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      // Cattura solo gli errori relativi al caricamento di risorse
      if (event.message.includes("Failed to load") || event.message.includes("blob:")) {
        console.warn("Errore nel caricamento di una risorsa:", event.message)
        setHasError(true)
        // Previeni la propagazione dell'errore
        event.preventDefault()
      }
    }

    window.addEventListener("error", handleError)

    return () => {
      window.removeEventListener("error", handleError)
    }
  }, [])

  if (hasError) {
    return (
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-md">
        <p className="text-amber-800">
          Si è verificato un errore nel caricamento di alcune risorse. L'applicazione continuerà a funzionare
          normalmente.
        </p>
      </div>
    )
  }

  return <>{children}</>
}
