import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import type { Database } from "@/lib/supabase/types"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Verifica se le variabili d'ambiente sono disponibili
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Se le variabili d'ambiente non sono disponibili, salta la verifica dell'autenticazione
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Variabili d'ambiente Supabase mancanti. Saltando la verifica dell'autenticazione.")

    // Se l'utente sta cercando di accedere a una pagina protetta, reindirizzalo alla homepage
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = "/"
      return NextResponse.redirect(redirectUrl)
    }

    return res
  }

  try {
    const supabase = createMiddlewareClient<Database>({ req, res })

    // Ottieni la sessione e gestisci eventuali errori
    const { data, error } = await supabase.auth.getSession()

    if (error) {
      console.error("Errore durante il recupero della sessione:", error)
      // Se c'è un errore, assumiamo che l'utente non sia autenticato
      if (req.nextUrl.pathname.startsWith("/dashboard")) {
        const redirectUrl = req.nextUrl.clone()
        redirectUrl.pathname = "/login"
        redirectUrl.searchParams.set("redirectedFrom", req.nextUrl.pathname)
        return NextResponse.redirect(redirectUrl)
      }
      return res
    }

    const session = data.session

    // Se l'utente non è autenticato e sta cercando di accedere a una pagina protetta
    if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = "/login"
      redirectUrl.searchParams.set("redirectedFrom", req.nextUrl.pathname)
      return NextResponse.redirect(redirectUrl)
    }

    // Se l'utente è autenticato e sta cercando di accedere a una pagina di autenticazione
    if (session && (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/signup")) {
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = "/dashboard"
      return NextResponse.redirect(redirectUrl)
    }
  } catch (error) {
    console.error("Errore nel middleware:", error)
    // In caso di errore, continuiamo con la richiesta normale
  }

  return res
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
}
