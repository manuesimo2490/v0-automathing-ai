import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, ArrowRight, Search } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard-header"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AutomationsPage() {
  // Esempio di automazioni (in un'app reale, questi dati verrebbero dal backend)
  const automations = [
    {
      id: "1",
      name: "Notifica Email",
      description: "Invia una notifica su Slack quando ricevo un'email importante",
      status: "active",
      lastRun: "2 ore fa",
      tags: ["email", "slack"],
    },
    {
      id: "2",
      name: "Backup Giornaliero",
      description: "Crea un backup dei dati ogni giorno alle 2:00",
      status: "active",
      lastRun: "1 giorno fa",
      tags: ["backup", "programmato"],
    },
    {
      id: "3",
      name: "Aggiornamento CRM",
      description: "Aggiorna il CRM quando un cliente compila il modulo di contatto",
      status: "error",
      lastRun: "3 giorni fa",
      tags: ["crm", "moduli"],
    },
    {
      id: "4",
      name: "Post Social Media",
      description: "Programma post sui social media dal calendario dei contenuti",
      status: "paused",
      lastRun: "5 giorni fa",
      tags: ["social", "contenuti"],
    },
    {
      id: "5",
      name: "Sincronizzazione Inventario",
      description: "Sincronizza l'inventario tra il negozio online e il sistema di gestione",
      status: "active",
      lastRun: "12 ore fa",
      tags: ["inventario", "ecommerce"],
    },
    {
      id: "6",
      name: "Notifiche Appuntamenti",
      description: "Invia promemoria per gli appuntamenti imminenti",
      status: "paused",
      lastRun: "2 giorni fa",
      tags: ["calendario", "notifiche"],
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <DashboardHeader
          heading="Le Mie Automazioni"
          text="Gestisci e monitora tutte le tue automazioni"
          action={
            <Link href="/dashboard/create">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Nuova Automazione
              </Button>
            </Link>
          }
        />

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input className="pl-10" placeholder="Cerca automazioni..." />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Tabs defaultValue="all" className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">Tutte</TabsTrigger>
                <TabsTrigger value="active">Attive</TabsTrigger>
                <TabsTrigger value="paused">In Pausa</TabsTrigger>
                <TabsTrigger value="error">Errore</TabsTrigger>
              </TabsList>
            </Tabs>
            <Select defaultValue="recent">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Ordina per" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Più recenti</SelectItem>
                <SelectItem value="name">Nome (A-Z)</SelectItem>
                <SelectItem value="status">Stato</SelectItem>
                <SelectItem value="last-run">Ultima esecuzione</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {automations.map((automation) => (
            <Card key={automation.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{automation.name}</CardTitle>
                  <div>
                    {automation.status === "active" ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Attiva</Badge>
                    ) : automation.status === "paused" ? (
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">In Pausa</Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Errore</Badge>
                    )}
                  </div>
                </div>
                <CardDescription>{automation.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Ultima esecuzione:</span>
                  <span>{automation.lastRun}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {automation.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  {automation.status === "active" ? "Pausa" : automation.status === "paused" ? "Riprendi" : "Riprova"}
                </Button>
                <Link href={`/dashboard/automations/${automation.id}`}>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    Dettagli
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}

          <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6">
            <Plus className="h-8 w-8 text-gray-400 mb-2" />
            <h3 className="font-medium text-gray-900 mb-1">Crea Nuova Automazione</h3>
            <p className="text-gray-500 text-sm text-center mb-4">
              Descrivi cosa vuoi automatizzare e lascia che l'AI faccia il resto
            </p>
            <Link href="/dashboard/create">
              <Button>Inizia</Button>
            </Link>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
