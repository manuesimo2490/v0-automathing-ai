import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Impostazioni</h1>
          <p className="text-gray-500 mt-1">Gestisci le impostazioni del tuo account e le preferenze</p>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="integrations">Integrazioni</TabsTrigger>
            <TabsTrigger value="notifications">Notifiche</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Informazioni Personali</CardTitle>
                  <CardDescription>Aggiorna le informazioni del tuo account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" defaultValue="Mario Rossi" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="mario.rossi@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Azienda</Label>
                    <Input id="company" defaultValue="Acme Srl" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Salva Modifiche</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Aggiorna la tua password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
                </CardContent>
                <CardFooter>
                  <Button>Aggiorna Password</Button>
                </CardFooter>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Preferenze</CardTitle>
                  <CardDescription>Gestisci le tue preferenze</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Tema</p>
                      <p className="text-sm text-gray-500">Scegli il tuo tema preferito</p>
                    </div>
                    <Select defaultValue="light">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Seleziona tema" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Chiaro</SelectItem>
                        <SelectItem value="dark">Scuro</SelectItem>
                        <SelectItem value="system">Sistema</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Lingua</p>
                      <p className="text-sm text-gray-500">Scegli la tua lingua preferita</p>
                    </div>
                    <Select defaultValue="it">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Seleziona lingua" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">Italiano</SelectItem>
                        <SelectItem value="en">Inglese</SelectItem>
                        <SelectItem value="es">Spagnolo</SelectItem>
                        <SelectItem value="fr">Francese</SelectItem>
                        <SelectItem value="de">Tedesco</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Fuso Orario</p>
                      <p className="text-sm text-gray-500">Scegli il tuo fuso orario</p>
                    </div>
                    <Select defaultValue="cet">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Seleziona fuso orario" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cet">CET (Europa Centrale)</SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="est">EST (USA Orientale)</SelectItem>
                        <SelectItem value="pst">PST (USA Occidentale)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle>Servizi Connessi</CardTitle>
                <CardDescription>Gestisci i tuoi servizi connessi e le integrazioni</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-red-100 rounded-md flex items-center justify-center text-red-600 font-bold">
                      G
                    </div>
                    <div>
                      <p className="font-medium">Gmail</p>
                      <p className="text-sm text-gray-500">Connesso come mario.rossi@gmail.com</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Disconnetti
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center text-purple-600 font-bold">
                      S
                    </div>
                    <div>
                      <p className="font-medium">Slack</p>
                      <p className="text-sm text-gray-500">Connesso al workspace Acme Srl</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Disconnetti
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 font-bold">
                      D
                    </div>
                    <div>
                      <p className="font-medium">Dropbox</p>
                      <p className="text-sm text-gray-500">Non connesso</p>
                    </div>
                  </div>
                  <Button size="sm">Connetti</Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center text-green-600 font-bold">
                      T
                    </div>
                    <div>
                      <p className="font-medium">Trello</p>
                      <p className="text-sm text-gray-500">Non connesso</p>
                    </div>
                  </div>
                  <Button size="sm">Connetti</Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Sfoglia Altre Integrazioni</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Preferenze di Notifica</CardTitle>
                <CardDescription>Configura come e quando ricevere le notifiche</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notifiche Email</p>
                    <p className="text-sm text-gray-500">Ricevi aggiornamenti via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notifiche di Errore</p>
                    <p className="text-sm text-gray-500">Ricevi notifiche quando un'automazione fallisce</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notifiche di Successo</p>
                    <p className="text-sm text-gray-500">
                      Ricevi notifiche quando un'automazione viene completata con successo
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Aggiornamenti Prodotto</p>
                    <p className="text-sm text-gray-500">Ricevi aggiornamenti sulle nuove funzionalità</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Comunicazioni Marketing</p>
                    <p className="text-sm text-gray-500">Ricevi email di marketing e promozioni</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Salva Preferenze</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>Chiavi API</CardTitle>
                <CardDescription>Gestisci le tue chiavi API per l'integrazione con altri servizi</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="api-key">Chiave API</Label>
                  <div className="flex">
                    <Input
                      id="api-key"
                      type="password"
                      value="sk_live_51NxXxXxXxXxXxXxXxXxXxXxXx"
                      readOnly
                      className="rounded-r-none"
                    />
                    <Button variant="outline" className="rounded-l-none">
                      Mostra
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Questa chiave API ti permette di accedere alle tue automazioni tramite API.
                  </p>
                </div>
                <div className="pt-4">
                  <h3 className="text-sm font-medium mb-2">Utilizzo API</h3>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <p className="text-sm font-mono">
                      curl -X POST https://api.automathing.ai/v1/automations/run \<br />
                      -H "Authorization: Bearer LA_TUA_CHIAVE_API" \<br />
                      -H "Content-Type: application/json" \<br />
                      -d '{'automation_id": "automation_123'}'
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Rigenera Chiave</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
