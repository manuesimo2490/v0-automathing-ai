import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, CheckCircle, AlertCircle, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  // Esempio di esecuzioni (in un'app reale, questi dati verrebbero dal backend)
  const executions = [
    {
      id: "1",
      automationId: "1",
      automationName: "Notifica Email",
      status: "success",
      startTime: "2025-05-22T07:30:00Z",
      duration: "2s",
      error: null,
    },
    {
      id: "2",
      automationId: "2",
      automationName: "Backup Giornaliero",
      status: "success",
      startTime: "2025-05-22T02:00:00Z",
      duration: "45s",
      error: null,
    },
    {
      id: "3",
      automationId: "3",
      automationName: "Aggiornamento CRM",
      status: "error",
      startTime: "2025-05-21T14:15:00Z",
      duration: "5s",
      error: "Errore di connessione al server CRM",
    },
    {
      id: "4",
      automationId: "1",
      automationName: "Notifica Email",
      status: "success",
      startTime: "2025-05-21T10:45:00Z",
      duration: "1s",
      error: null,
    },
    {
      id: "5",
      automationId: "4",
      automationName: "Post Social Media",
      status: "success",
      startTime: "2025-05-20T09:00:00Z",
      duration: "3s",
      error: null,
    },
    {
      id: "6",
      automationId: "2",
      automationName: "Backup Giornaliero",
      status: "success",
      startTime: "2025-05-20T02:00:00Z",
      duration: "42s",
      error: null,
    },
    {
      id: "7",
      automationId: "5",
      automationName: "Sincronizzazione Inventario",
      status: "error",
      startTime: "2025-05-19T16:30:00Z",
      duration: "12s",
      error: "Timeout durante la sincronizzazione",
    },
    {
      id: "8",
      automationId: "6",
      automationName: "Notifiche Appuntamenti",
      status: "success",
      startTime: "2025-05-19T08:00:00Z",
      duration: "4s",
      error: null,
    },
  ]

  // Funzione per formattare la data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <DashboardHeader
          heading="Storico Esecuzioni"
          text="Visualizza lo storico di tutte le esecuzioni delle tue automazioni"
        />

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input className="pl-10" placeholder="Cerca esecuzioni..." />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Tabs defaultValue="all" className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">Tutte</TabsTrigger>
                <TabsTrigger value="success">Successo</TabsTrigger>
                <TabsTrigger value="error">Errore</TabsTrigger>
              </TabsList>
            </Tabs>
            <Select defaultValue="recent">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Ordina per" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Più recenti</SelectItem>
                <SelectItem value="automation">Automazione</SelectItem>
                <SelectItem value="status">Stato</SelectItem>
                <SelectItem value="duration">Durata</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Esecuzioni Recenti</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {executions.map((execution) => (
                <div
                  key={execution.id}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-start gap-3 mb-4 md:mb-0">
                    <div
                      className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                        execution.status === "success" ? "bg-green-100" : "bg-red-100"
                      }`}
                    >
                      {execution.status === "success" ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{execution.automationName}</h3>
                        <Badge
                          className={
                            execution.status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }
                        >
                          {execution.status === "success" ? "Successo" : "Errore"}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{formatDate(execution.startTime)}</span>
                        </div>
                        <div>Durata: {execution.duration}</div>
                      </div>
                      {execution.error && (
                        <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded">Errore: {execution.error}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 self-end md:self-center">
                    <Button variant="outline" size="sm">
                      Visualizza Log
                    </Button>
                    <Link href={`/dashboard/automations/${execution.automationId}`}>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1">
                        Automazione
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
