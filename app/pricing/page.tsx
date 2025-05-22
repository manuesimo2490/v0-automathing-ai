import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="bg-gray-50 py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Piani e Prezzi</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scegli il piano più adatto alle tue esigenze. Tutti i piani includono una prova gratuita di 14 giorni.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Piano Free */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <h3 className="text-lg font-medium text-gray-900">Free</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight">€0</span>
                <span className="ml-1 text-xl font-medium text-gray-500">/mese</span>
              </div>
              <p className="mt-5 text-gray-500">Perfetto per iniziare e testare la piattaforma.</p>
            </div>
            <div className="px-8 pb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">5 automazioni</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">100 esecuzioni al mese</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">Integrazioni di base</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">Supporto via email</p>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/signup">
                  <Button variant="outline" className="w-full">
                    Inizia Gratis
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Piano Pro */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-emerald-500 relative">
            <div className="absolute top-0 inset-x-0">
              <div className="bg-emerald-500 text-white text-xs font-semibold py-1 text-center">CONSIGLIATO</div>
            </div>
            <div className="p-8 pt-10">
              <h3 className="text-lg font-medium text-gray-900">Pro</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight">€29</span>
                <span className="ml-1 text-xl font-medium text-gray-500">/mese</span>
              </div>
              <p className="mt-5 text-gray-500">Ideale per professionisti e piccole imprese.</p>
            </div>
            <div className="px-8 pb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">50 automazioni</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">1.000 esecuzioni al mese</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">Tutte le integrazioni</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">Supporto prioritario</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">Automazioni avanzate</p>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/signup">
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Inizia la Prova Gratuita</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Piano Enterprise */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <h3 className="text-lg font-medium text-gray-900">Enterprise</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight">€99</span>
                <span className="ml-1 text-xl font-medium text-gray-500">/mese</span>
              </div>
              <p className="mt-5 text-gray-500">Per aziende con esigenze avanzate e su larga scala.</p>
            </div>
            <div className="px-8 pb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">Automazioni illimitate</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">10.000 esecuzioni al mese</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">Integrazioni personalizzate</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">Account manager dedicato</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">SLA garantito</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">Formazione personalizzata</p>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Contattaci
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Domande Frequenti</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h3 className="font-semibold mb-2">Posso cambiare piano in qualsiasi momento?</h3>
              <p className="text-gray-600">
                Sì, puoi passare a un piano superiore o inferiore in qualsiasi momento. Le modifiche avranno effetto dal
                ciclo di fatturazione successivo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Come funziona la prova gratuita?</h3>
              <p className="text-gray-600">
                Tutti i piani a pagamento includono una prova gratuita di 14 giorni. Non è richiesta una carta di
                credito per iniziare.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cosa succede se supero il limite di esecuzioni?</h3>
              <p className="text-gray-600">
                Se superi il limite di esecuzioni del tuo piano, ti verrà addebitato un costo aggiuntivo per ogni
                esecuzione extra.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Posso annullare in qualsiasi momento?</h3>
              <p className="text-gray-600">
                Sì, puoi annullare il tuo abbonamento in qualsiasi momento. Non ci sono contratti a lungo termine o
                penali per l'annullamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
