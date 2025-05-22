export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Cosa Dicono i Nostri Utenti</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Scopri come Automathing.AI sta aiutando aziende e individui a risparmiare tempo e aumentare la produttività.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center text-gray-500">
              SB
            </div>
            <div>
              <h4 className="font-bold">Sara Bianchi</h4>
              <p className="text-gray-500 text-sm">Direttrice Marketing</p>
            </div>
          </div>
          <p className="text-gray-600">
            "Automathing.AI ha trasformato il modo in cui gestiamo la programmazione dei social media. Ciò che prima
            richiedeva ore ora avviene automaticamente con un semplice prompt. È come avere un membro del team in più!"
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center text-gray-500">
              MV
            </div>
            <div>
              <h4 className="font-bold">Marco Verdi</h4>
              <p className="text-gray-500 text-sm">Ingegnere Software</p>
            </div>
          </div>
          <p className="text-gray-600">
            "Come sviluppatore, ero scettico riguardo a un'AI che creasse automazioni. Ma la qualità e la flessibilità
            di ciò che Automathing.AI produce è impressionante. Gestisce le cose semplici così posso concentrarmi sui
            problemi complessi."
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center text-gray-500">
              ER
            </div>
            <div>
              <h4 className="font-bold">Elena Rossi</h4>
              <p className="text-gray-500 text-sm">Titolare di Piccola Impresa</p>
            </div>
          </div>
          <p className="text-gray-600">
            "Gestire una piccola impresa significa indossare molti cappelli. Automathing.AI mi ha aiutato ad
            automatizzare i follow-up con i clienti, gli avvisi di inventario e i post sui social media. È come avere un
            assistente virtuale!"
          </p>
        </div>
      </div>
    </section>
  )
}
