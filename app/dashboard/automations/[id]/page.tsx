import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { ArrowLeft, Play, Pause, Settings, History, Edit, ExternalLink } from "lucide-react"

export default function AutomationDetailPage({ params }: { params: { id: string } }) {
  // In un'app reale, questi dati verrebbero recuperati dal backend
  const automation = {
    id: params.id,
    name: "Notifica Email",
    description: "Invia una notifica su Slack quando ricevo un'email importante",
    status: "active",
    lastRun: "2 ore fa",
    created: "20 Maggio 2025",
    steps: [
      { id: "1", description: "Connessione all'API di Gmail", service: "gmail" },
      { id: "2", description: "Filtraggio delle email in base ai criteri specificati", service: "gmail" },
      { id: "3", description: "Invio notifica a Slack", service: "slack" },
    ],
    executions: [
      { id: "1", date: "22 Maggio 2025, 07:30", status: "success", duration: "2s" },
      { id: "2", date: "21 Maggio 2025, 07:30", status: "success", duration: "1s" },
      { id: "3", date: "20 Maggio 2025, 07:30", status: "error", duration: "5s", error: "Errore di connessione" },
    ],
    analytics: {
      totalRuns: 42,
      successRate: 95,
      averageDuration: "1.8s",
      lastWeekRuns: [5, 7, 4, 6, 8, 5, 7],
    },
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">{automation.name}</h1>
                <Badge className="bg-green-100 text-green-800">Attiva</Badge>
              </div>
              <p className="text-gray-500 mt-1">{automation.description}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Pause className="mr-2 h-4 w-4" />
              Pausa
            </Button>
            <Button size="sm">
              <Play className="mr-2 h-4 w-4" />
              Esegui Ora
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">Esecuzioni Totali</p>
                <p className="text-3xl font-bold">{automation.analytics.totalRuns}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">Tasso di Successo</p>
                <p className="text-3xl font-bold">{automation.analytics.successRate}%</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">Durata Media</p>
                <p className="text-3xl font-bold">{automation.analytics.averageDuration}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">Ultima Esecuzione</p>
                <p className="text-3xl font-bold">{automation.lastRun}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Panoramica</TabsTrigger>
            <TabsTrigger value="executions">Storico Esecuzioni</TabsTrigger>
            <TabsTrigger value="settings">Impostazioni</TabsTrigger>
            <TabsTrigger value="code">Codice</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Passaggi dell'Automazione</CardTitle>
                <CardDescription>Questi sono i passaggi che la tua automazione eseguirà</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {automation.steps.map((step, index) => (
                    <div key={step.id} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-medium">
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
                            <Edit className="h-4 w-4 mr-2" />
                            Modifica
                          </Button>
                        </div>
                        {index < automation.steps.length - 1 && (
                          <div className="ml-5 mt-2 mb-2 border-l-2 border-dashed h-8 border-gray-200"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trigger</CardTitle>
                  <CardDescription>Quando questa automazione viene eseguita</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-800">Evento</Badge>
                    <span className="font-medium">Nuova Email Ricevuta</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Questa automazione viene attivata quando viene ricevuta una nuova email che corrisponde ai tuoi
                    criteri in Gmail.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Servizi Connessi</CardTitle>
                  <CardDescription>Servizi utilizzati da questa automazione</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-100 rounded-md flex items-center justify-center text-red-600">
                          G
                        </div>
                        <span>Gmail</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Gestisci
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center text-purple-600">
                          S
                        </div>
                        <span>Slack</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Gestisci
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="executions">
            <Card>
              <CardHeader>
                <CardTitle>Storico Esecuzioni</CardTitle>
                <CardDescription>Visualizza lo storico di tutte le esecuzioni per questa automazione</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {automation.executions.map((execution) => (
                    <div key={execution.id} className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-3 w-3 rounded-full ${
                            execution.status === "success" ? "bg-green-500" : "bg-red-500"
                          }`}
                        />
                        <div>
                          <p className="font-medium">{execution.date}</p>
                          <p className="text-sm text-gray-500">Durata: {execution.duration}</p>
                        </div>
                      </div>
                      {execution.error && (
                        <div className="text-sm text-red-500">
                          <p>{execution.error}</p>
                        </div>
                      )}
                      <Button variant="ghost" size="sm">
                        <History className="h-4 w-4 mr-2" />
                        Visualizza Log
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Impostazioni Automazione</CardTitle>
                <CardDescription>Configura le impostazioni per questa automazione</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Qui puoi configurare impostazioni specifiche per l'automazione, come la frequenza di esecuzione, le
                  condizioni di attivazione e le notifiche.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="code">
            <Card>
              <CardHeader>
                <CardTitle>Codice dell'Automazione</CardTitle>
                <CardDescription>Visualizza e modifica il codice per questa automazione</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code>{`// Esempio di codice per l'automazione
async function runAutomation() {
  // 1. Connessione all'API di Gmail
  const gmail = await connectToGmail();
  
  // 2. Filtraggio delle email
  const emails = await gmail.getEmails({
    from: "importante@cliente.com",
    isUnread: true
  });
  
  // 3. Invio notifica a Slack
  if (emails.length > 0) {
    await slack.sendNotification({
      channel: "#notifiche",
      message: \`Hai \${emails.length} nuove email da clienti importanti\`
    });
  }
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
