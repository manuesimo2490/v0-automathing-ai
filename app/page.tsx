import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { TestimonialSection } from "@/components/testimonial-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero Section */}
        <HeroSection />

        {/* Feature Section */}
        <FeatureSection />

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
              Come Funziona
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto">
              Creare automazioni con Automathing.AI è semplice e immediato. Basta descrivere cosa vuoi automatizzare, e
              la nostra AI farà il resto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Descrivi la Tua Automazione",
                description:
                  "Usa il linguaggio naturale per descrivere cosa vuoi automatizzare. Non è richiesta conoscenza tecnica.",
              },
              {
                title: "L'AI Genera il Flusso di Lavoro",
                description:
                  "La nostra AI analizza la tua descrizione e crea un flusso di automazione completo con tutti i passaggi necessari.",
              },
              {
                title: "Implementa e Monitora",
                description:
                  "Rivedi, personalizza se necessario, e implementa la tua automazione. Monitora le prestazioni dalla tua dashboard.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-slate-800 p-8 rounded-xl shadow-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white font-bold text-2xl">{index + 1}</span>
                </div>
                <h3 className="font-bold text-2xl mb-3 text-white">{step.title}</h3>
                <p className="text-slate-400 text-base">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 md:mt-20">
            <Link href="/dashboard/create">
              <Button className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform transition-transform duration-200 hover:scale-105">
                Crea la Tua Prima Automazione
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Testimonial Section */}
        <TestimonialSection />
      </div>
    </div>
  )
}
