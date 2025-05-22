"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { DashboardLayout } from "@/components/dashboard-layout"
import { ArrowLeft, Loader2, Sparkles, Save, Play, Trash } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function CreateAutomationPage() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentStep, setCurrentStep] = useState("prompt")
  const [generatedAutomation, setGeneratedAutomation] = useState<null | {
    name: string
    description: string
    steps: { id: string; description: string; service: string }[]
    triggers: string[]
    schedule: string
  }>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulazione chiamata API al backend
    setTimeout(() => {
      // Esempio di risposta dal backend
      setGeneratedAutomation({
        name: "Flusso di Notifica Email",
        description: "Invia una notifica su Slack quando ricevo un'email importante",
        steps: [
          { id: "1", description: "Connessione all'API di Gmail", service: "gmail" },
          { id: "2", description: "Filtraggio delle email in base ai criteri specificati", service: "gmail" },
          { id: "3", description: "Invio notifica a Slack", service: "slack" },
        ],
        triggers: ["Nuova email ricevuta"],
        schedule: "Tempo reale",
      })
      setIsGenerating(false)
      setCurrentStep("customize")
    }, 2000)
  }

  const handleSaveAutomation = () => {
    // Simulazione del salvataggio dell'automazione
    setCurrentStep("success")
  }

  return (
    <DashboardLayout>
      <div className="flex items-center mb-6">
        <Link href="/dashboard">
          <Button variant="outline" size="sm" className="mr-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna alla Dashboard
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Crea Nuova Automazione</h1>
          <p className="text-gray-500 mt-1">
            Descrivi cosa vuoi automatizzare e lascia che l'AI generi il flusso di lavoro per te
          </p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep === "prompt" || currentStep === "customize" || currentStep === "success"
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              1
            </div>
            <div className="h-1 w-12 bg-gray-200">
              <div
                className={`h-full ${
                  currentStep === "customize" || currentStep === "success" ? "bg-emerald-500" : "bg-gray-200"
                }`}
              ></div>
            </div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep === "customize" || currentStep === "success"
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              2
            </div>
            <div className="h-1 w-12 bg-gray-200">
              <div className={`h-full ${currentStep === "success" ? "bg-emerald-500" : "bg-gray-200"}`}></div>
            </div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep === "success" ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              3
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {currentStep === "prompt"
              ? "Passo 1: Descrivi Automazione"
              : currentStep === "customize"
                ? "Passo 2: Personalizza Flusso di Lavoro"
                : "Passo 3: Automazione Creata"}
          </div>
        </div>
      </div>

      {currentStep === "prompt" && (
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Descrivi la Tua Automazione</CardTitle>
              <CardDescription>
                Spiega in linguaggio naturale cosa vuoi automatizzare. Ad esempio: "Inviami una notifica su Slack quando
                ricevo un'email da un cliente importante."
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Descrivi la tua automazione qui..."
                className="min-h-[200px] text-base"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <div className="mt-4 text-sm text-gray-500">
                <p>Suggerimenti:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Sii specifico su cosa attiva l'automazione</li>
                  <li>Menziona quali servizi vuoi connettere (Gmail, Slack, ecc.)</li>
                  <li>Descrivi chiaramente il risultato desiderato</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isGenerating || !prompt.trim()} className="gap-2">
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generazione in corso...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Genera Automazione
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </form>
      )}

      {currentStep === "customize" && generatedAutomation && (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personalizza la Tua Automazione</CardTitle>
                <CardDescription>Rivedi e personalizza il flusso di lavoro generato</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Automazione</Label>
                  <Input id="name" defaultValue={generatedAutomation.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Descrizione</Label>
                  <Textarea id="description" defaultValue={generatedAutomation.description} />
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-2">Passaggi del Flusso di Lavoro</h3>
                  <div className="space-y-4">
                    {generatedAutomation.steps.map((step, index) => (
                      <div key={step.id} className="flex items-start gap-3 p-4 border rounded-md bg-gray-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-medium">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{step.description}</p>
                              <Badge variant="outline" className="mt-1">
                                {step.service}
                              </Badge>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      + Aggiungi Passaggio
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Test</CardTitle>
                <CardDescription>Testa la tua automazione prima di salvarla</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="gap-2">
                  <Play className="h-4 w-4" />
                  Testa Automazione
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Impostazioni Trigger</CardTitle>
                <CardDescription>Configura quando questa automazione deve essere eseguita</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Tipo di Trigger</Label>
                  <Select defaultValue="event">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona tipo di trigger" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="event">Basato su Evento</SelectItem>
                      <SelectItem value="schedule">Basato su Programmazione</SelectItem>
                      <SelectItem value="manual">Trigger Manuale</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Evento</Label>
                  <Select defaultValue="new_email">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona evento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new_email">Nuova Email Ricevuta</SelectItem>
                      <SelectItem value="form_submission">Invio Modulo</SelectItem>
                      <SelectItem value="file_upload">Caricamento File</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Opzioni Aggiuntive</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Abilita Notifiche</Label>
                    <p className="text-sm text-gray-500">Ricevi notifiche quando l'automazione viene eseguita</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Gestione Errori</Label>
                    <p className="text-sm text-gray-500">Riprova in caso di fallimento</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Logging</Label>
                    <p className="text-sm text-gray-500">Abilita log dettagliati</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setCurrentStep("prompt")}>
                Indietro
              </Button>
              <Button className="flex-1 gap-2" onClick={handleSaveAutomation}>
                <Save className="h-4 w-4" />
                Salva Automazione
              </Button>
            </div>
          </div>
        </div>
      )}

      {currentStep === "success" && (
        <Card>
          <CardContent className="pt-6 pb-6 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Automazione Creata con Successo!</h2>
            <p className="text-gray-600 mb-6">
              La tua automazione è stata creata ed è pronta all'uso. Ora puoi gestirla dalla tua dashboard.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/dashboard">
                <Button variant="outline">Vai alla Dashboard</Button>
              </Link>
              <Button>Visualizza Automazione</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </DashboardLayout>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
