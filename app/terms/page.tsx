export default function TermsPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-6">Termini di Servizio</h1>
          <p className="text-gray-500 mb-8">Ultimo aggiornamento: 22 Maggio 2025</p>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Accettazione dei Termini</h2>
            <p>
              Utilizzando il servizio Automathing.AI, accetti di essere vincolato dai presenti Termini di Servizio. Se
              non accetti questi termini, ti preghiamo di non utilizzare il servizio.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Descrizione del Servizio</h2>
            <p>
              Automathing.AI è una piattaforma che consente agli utenti di creare e gestire automazioni basate
              sull'intelligenza artificiale. Il servizio è fornito "così com'è" e "come disponibile" senza garanzie di
              alcun tipo.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Account Utente</h2>
            <p>
              Per utilizzare alcune funzionalità del servizio, è necessario creare un account. Sei responsabile del
              mantenimento della riservatezza delle tue credenziali di accesso e di tutte le attività che si verificano
              sotto il tuo account.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Utilizzo del Servizio</h2>
            <p>
              Ti impegni a utilizzare il servizio solo per scopi legali e in conformità con questi termini. Non puoi
              utilizzare il servizio per:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Violare leggi o regolamenti</li>
              <li>Violare i diritti di terzi</li>
              <li>Inviare spam o contenuti dannosi</li>
              <li>Tentare di interferire con il funzionamento del servizio</li>
              <li>Accedere a dati non destinati a te</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Contenuti dell'Utente</h2>
            <p>
              Mantieni la proprietà di tutti i contenuti che carichi o crei utilizzando il servizio. Concedi ad
              Automathing.AI una licenza mondiale, non esclusiva, esente da royalty per utilizzare, riprodurre,
              modificare, adattare, pubblicare e distribuire tali contenuti al solo scopo di fornirti il servizio.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Pagamenti e Abbonamenti</h2>
            <p>
              Alcuni aspetti del servizio possono richiedere un pagamento o un abbonamento. I dettagli sui prezzi sono
              disponibili sulla pagina dei prezzi. Tutti i pagamenti sono non rimborsabili, salvo diversamente indicato.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Cancellazione e Risoluzione</h2>
            <p>
              Puoi cancellare il tuo account in qualsiasi momento. Ci riserviamo il diritto di sospendere o terminare il
              tuo accesso al servizio in caso di violazione di questi termini.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Modifiche ai Termini</h2>
            <p>
              Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Le modifiche saranno
              pubblicate sul sito web e, se sostanziali, ti informeremo via email.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Limitazione di Responsabilità</h2>
            <p>
              In nessun caso Automathing.AI sarà responsabile per danni indiretti, incidentali, speciali, consequenziali
              o punitivi derivanti dall'utilizzo o dall'impossibilità di utilizzare il servizio.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Legge Applicabile</h2>
            <p>
              Questi termini sono regolati e interpretati in conformità con le leggi italiane, senza riguardo ai
              principi di conflitto di leggi.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">11. Contatti</h2>
            <p>
              Per domande o chiarimenti su questi termini, contattaci all'indirizzo{" "}
              <a href="mailto:info@automathing.ai" className="text-emerald-600 hover:text-emerald-700">
                info@automathing.ai
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
