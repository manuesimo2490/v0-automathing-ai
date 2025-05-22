export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Ultimo aggiornamento: 22 Maggio 2025</p>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduzione</h2>
            <p>
              La presente Privacy Policy descrive come Automathing.AI raccoglie, utilizza e condivide le tue
              informazioni personali quando utilizzi il nostro servizio. Rispettiamo la tua privacy e ci impegniamo a
              proteggere i tuoi dati personali.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Dati che Raccogliamo</h2>
            <p>Raccogliamo i seguenti tipi di informazioni:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>
                <strong>Informazioni di registrazione:</strong> nome, indirizzo email, password e altre informazioni
                fornite durante la creazione dell'account.
              </li>
              <li>
                <strong>Informazioni di utilizzo:</strong> dati su come interagisci con il nostro servizio, inclusi i
                log di accesso, le automazioni create e le preferenze.
              </li>
              <li>
                <strong>Informazioni del dispositivo:</strong> tipo di dispositivo, sistema operativo, browser e
                indirizzo IP.
              </li>
              <li>
                <strong>Informazioni di pagamento:</strong> dettagli della carta di credito o altre informazioni
                finanziarie necessarie per elaborare i pagamenti.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Come Utilizziamo i Tuoi Dati</h2>
            <p>Utilizziamo i tuoi dati personali per:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Fornire, mantenere e migliorare il nostro servizio</li>
              <li>Elaborare i pagamenti e gestire il tuo account</li>
              <li>Comunicare con te riguardo al tuo account e al servizio</li>
              <li>Inviare aggiornamenti, notifiche e informazioni di marketing (se hai acconsentito)</li>
              <li>Rilevare, prevenire e risolvere problemi tecnici e di sicurezza</li>
              <li>Rispettare gli obblighi legali</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Condivisione dei Dati</h2>
            <p>Possiamo condividere i tuoi dati personali con:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>
                <strong>Fornitori di servizi:</strong> terze parti che ci aiutano a fornire il servizio, come provider
                di hosting, elaborazione dei pagamenti e analisi.
              </li>
              <li>
                <strong>Partner commerciali:</strong> terze parti con cui collaboriamo per offrirti servizi integrati.
              </li>
              <li>
                <strong>Autorità legali:</strong> quando richiesto dalla legge o per proteggere i nostri diritti.
              </li>
            </ul>
            <p>
              Non vendiamo i tuoi dati personali a terze parti e non condividiamo i tuoi dati con terze parti per scopi
              di marketing senza il tuo consenso esplicito.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Sicurezza dei Dati</h2>
            <p>
              Adottiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati personali da
              perdita, uso improprio e accesso non autorizzato. Tuttavia, nessun sistema è completamente sicuro, e non
              possiamo garantire la sicurezza assoluta dei tuoi dati.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. I Tuoi Diritti</h2>
            <p>In base al GDPR e ad altre leggi sulla privacy applicabili, hai i seguenti diritti:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Diritto di accesso ai tuoi dati personali</li>
              <li>Diritto di rettifica dei dati inesatti</li>
              <li>Diritto alla cancellazione dei tuoi dati</li>
              <li>Diritto di limitazione del trattamento</li>
              <li>Diritto alla portabilità dei dati</li>
              <li>Diritto di opposizione al trattamento</li>
              <li>Diritto di non essere sottoposto a decisioni automatizzate</li>
            </ul>
            <p>
              Per esercitare questi diritti, contattaci all'indirizzo{" "}
              <a href="mailto:privacy@automathing.ai" className="text-emerald-600 hover:text-emerald-700">
                privacy@automathing.ai
              </a>
              .
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Cookie e Tecnologie Simili</h2>
            <p>
              Utilizziamo cookie e tecnologie simili per raccogliere informazioni sul tuo utilizzo del servizio e per
              migliorare la tua esperienza. Puoi gestire le tue preferenze sui cookie attraverso le impostazioni del tuo
              browser.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Modifiche alla Privacy Policy</h2>
            <p>
              Possiamo aggiornare questa Privacy Policy di tanto in tanto. Ti informeremo di eventuali modifiche
              sostanziali pubblicando la nuova Privacy Policy sul nostro sito web e, se necessario, inviandoti una
              notifica via email.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Contatti</h2>
            <p>
              Per domande o preoccupazioni riguardo questa Privacy Policy o il trattamento dei tuoi dati personali,
              contattaci all'indirizzo{" "}
              <a href="mailto:privacy@automathing.ai" className="text-emerald-600 hover:text-emerald-700">
                privacy@automathing.ai
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
