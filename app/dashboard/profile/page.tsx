"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Loader2, Upload, Key, Shield, User } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

export default function ProfilePage() {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccessMessage("")

    // Simulazione di aggiornamento del profilo
    setTimeout(() => {
      setIsLoading(false)
      setSuccessMessage("Profilo aggiornato con successo")
    }, 1500)
  }

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccessMessage("")

    // Simulazione di aggiornamento della password
    setTimeout(() => {
      setIsLoading(false)
      setSuccessMessage("Password aggiornata con successo")
    }, 1500)
  }

  // Estrai le iniziali dall'email dell'utente
  const getInitials = () => {
    if (!user?.email) return "U"
    return user.email.charAt(0).toUpperCase()
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <DashboardHeader heading="Profilo Utente" text="Gestisci le tue informazioni personali e le impostazioni" />

        {successMessage && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
            {successMessage}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Il Tuo Profilo</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="text-2xl bg-emerald-100 text-emerald-700">{getInitials()}</AvatarFallback>
              </Avatar>
              <h3 className="font-medium text-lg">{user?.email}</h3>
              <p className="text-gray-500 text-sm mt-1">Membro dal 22 Maggio 2025</p>
              <Button variant="outline" className="mt-4 w-full flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Carica Immagine
              </Button>
            </CardContent>
          </Card>

          <div className="md:col-span-2">
            <Tabs defaultValue="info">
              <TabsList className="mb-4">
                <TabsTrigger value="info" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Informazioni
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Sicurezza
                </TabsTrigger>
              </TabsList>

              <TabsContent value="info">
                <Card>
                  <CardHeader>
                    <CardTitle>Informazioni Personali</CardTitle>
                    <CardDescription>Aggiorna le tue informazioni personali</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProfileUpdate} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">Nome</Label>
                          <Input id="first-name" defaultValue="Mario" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Cognome</Label>
                          <Input id="last-name" defaultValue="Rossi" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={user?.email || ""} disabled />
                        <p className="text-xs text-gray-500">
                          L'email non può essere modificata. Contatta il supporto se hai bisogno di cambiarla.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Azienda</Label>
                        <Input id="company" defaultValue="Acme Srl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="job-title">Ruolo</Label>
                        <Input id="job-title" defaultValue="Product Manager" />
                      </div>
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Salvataggio...
                          </>
                        ) : (
                          "Salva Modifiche"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Sicurezza</CardTitle>
                    <CardDescription>Aggiorna la tua password e le impostazioni di sicurezza</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePasswordUpdate} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Password Attuale</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nuova Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Conferma Nuova Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Aggiornamento...
                          </>
                        ) : (
                          "Aggiorna Password"
                        )}
                      </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t">
                      <h3 className="font-medium mb-4 flex items-center gap-2">
                        <Key className="h-4 w-4" />
                        Autenticazione a Due Fattori
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Aggiungi un ulteriore livello di sicurezza al tuo account attivando l'autenticazione a due
                        fattori.
                      </p>
                      <Button variant="outline">Configura 2FA</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
