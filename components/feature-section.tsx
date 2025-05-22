import { Bot, Zap, Code, Layers, Clock, Globe } from "lucide-react"

export function FeatureSection() {
  return (
    <section id="features" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Perché Scegliere Automathing.AI</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          La nostra piattaforma rende l'automazione accessibile a tutti, indipendentemente dalle competenze tecniche.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="bg-emerald-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Bot className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="font-bold text-xl mb-2">Basata su AI</h3>
          <p className="text-gray-600">
            Modelli AI avanzati comprendono le tue esigenze e creano automazioni personalizzate senza richiedere
            conoscenze tecniche.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="bg-emerald-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Code className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="font-bold text-xl mb-2">Nessun Codice Richiesto</h3>
          <p className="text-gray-600">
            Descrivi cosa vuoi automatizzare in linguaggio naturale, senza dover scrivere una singola riga di codice.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="bg-emerald-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Layers className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="font-bold text-xl mb-2">Molteplici Integrazioni</h3>
          <p className="text-gray-600">
            Connettiti con centinaia di servizi e applicazioni per creare flussi di lavoro complessi tra i tuoi
            strumenti.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="bg-emerald-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="font-bold text-xl mb-2">Risparmio di Tempo</h3>
          <p className="text-gray-600">
            Automatizza attività e processi ripetitivi per risparmiare ore di lavoro manuale e concentrarti su ciò che
            conta di più.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="bg-emerald-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="font-bold text-xl mb-2">Flussi di Lavoro Potenti</h3>
          <p className="text-gray-600">
            Crea automazioni complesse e multi-step che possono gestire logica condizionale e trasformazioni di dati.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="bg-emerald-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Globe className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="font-bold text-xl mb-2">Basata su Cloud</h3>
          <p className="text-gray-600">
            Accedi e gestisci le tue automazioni da qualsiasi luogo, con un'infrastruttura cloud affidabile che si
            adatta alle tue esigenze.
          </p>
        </div>
      </div>
    </section>
  )
}
