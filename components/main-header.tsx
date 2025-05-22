"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-provider"
import { usePathname } from "next/navigation"
import { Menu, X, User, ChevronDown } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LogoutButton } from "@/components/logout-button"

export function MainHeader() {
  const { user, isLoading } = useAuth()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Determina se siamo in una pagina della dashboard
  const isDashboard = pathname?.startsWith("/dashboard")

  // Mostra un header diverso per le pagine della dashboard
  if (isDashboard && user) {
    return (
      <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-white px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">Automathing.AI</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                  <User className="h-4 w-4" />
                </div>
                <span className="hidden md:inline">{user.email}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Il Mio Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                  <User className="mr-2 h-4 w-4" />
                  Profilo
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <LogoutButton />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    )
  }

  // Header per le pagine pubbliche
  return (
    <header className="sticky top-0 z-10 bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">Automathing.AI</span>
            </Link>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-gray-900">
              Funzionalità
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-gray-900">
              Come Funziona
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-gray-900">
              Testimonianze
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
              Prezzi
            </Link>
          </nav>

          {/* Pulsanti di autenticazione per desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoading ? (
              <div className="h-10 w-20 bg-gray-100 animate-pulse rounded"></div>
            ) : user ? (
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-gray-900">
                  Accedi
                </Link>
                <Link
                  href="/signup"
                  className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Registrati
                </Link>
              </>
            )}
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b">
                    <span className="text-xl font-bold">Menu</span>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <nav className="flex flex-col space-y-4 py-6">
                    <Link href="#features" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        Funzionalità
                      </Button>
                    </Link>
                    <Link href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        Come Funziona
                      </Button>
                    </Link>
                    <Link href="#testimonials" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        Testimonianze
                      </Button>
                    </Link>
                    <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        Prezzi
                      </Button>
                    </Link>
                  </nav>

                  <div className="mt-auto border-t py-4">
                    {isLoading ? (
                      <div className="h-10 w-full bg-gray-100 animate-pulse rounded"></div>
                    ) : user ? (
                      <div className="space-y-4">
                        <div className="px-4 py-2 bg-gray-50 rounded-md">
                          <p className="text-sm text-gray-500">Connesso come</p>
                          <p className="font-medium truncate">{user.email}</p>
                        </div>
                        <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                          <Button className="w-full">Dashboard</Button>
                        </Link>
                        <LogoutButton />
                      </div>
                    ) : (
                      <div className="flex flex-col space-y-2">
                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                          <Button variant="outline" className="w-full">
                            Accedi
                          </Button>
                        </Link>
                        <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                          <Button className="w-full">Registrati</Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
