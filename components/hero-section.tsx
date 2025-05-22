import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="mt-16 mb-16 flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Crea potenti automazioni <br />
          con un semplice prompt testuale
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Descrivi cosa vuoi automatizzare in linguaggio naturale, e la nostra AI costruirà il flusso di lavoro per te.
          Risparmia tempo, riduci gli errori e aumenta la produttività con automazioni intelligenti.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard/create">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full text-lg">
              Inizia a Creare
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button variant="outline" className="px-6 py-3 rounded-full text-lg">
              Come Funziona
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
