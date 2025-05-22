"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Plus, Settings, History, Zap, User, Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { LogoutButton } from "@/components/logout-button"

interface DashboardLayoutProps {
  children: ReactNode
  user?: {
    email: string
    firstName?: string
    lastName?: string
  }
}

export function DashboardLayout({
  children,
  user = { email: "mario@example.com", firstName: "Mario", lastName: "Rossi" },
}: DashboardLayoutProps) {
  const [open, setOpen] = useState(false)
  const fullName = user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.email

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Crea Automazione",
      href: "/dashboard/create",
      icon: <Plus className="h-5 w-5" />,
    },
    {
      title: "Le Mie Automazioni",
      href: "/dashboard/automations",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "Storico Esecuzioni",
      href: "/dashboard/history",
      icon: <History className="h-5 w-5" />,
    },
    {
      title: "Impostazioni",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-64 flex-col border-r bg-white">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl">Automathing.AI</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-6 px-3">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 font-normal hover:bg-gray-100 hover:text-gray-900"
                  >
                    {item.icon}
                    {item.title}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                  <User className="h-4 w-4" />
                </div>
                <div className="flex flex-col items-start text-sm">
                  <span className="font-medium">{fullName}</span>
                  <span className="text-gray-500">{user.email}</span>
                </div>
                <ChevronDown className="ml-auto h-4 w-4" />
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
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Impostazioni
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <LogoutButton />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" className="absolute left-4 top-3 z-40">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold" onClick={() => setOpen(false)}>
              <span className="text-xl">Automathing.AI</span>
            </Link>
            <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex-1 overflow-auto py-6 px-3">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 font-normal hover:bg-gray-100 hover:text-gray-900"
                    >
                      {item.icon}
                      {item.title}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                <User className="h-4 w-4" />
              </div>
              <div className="flex flex-col items-start text-sm">
                <span className="font-medium">{fullName}</span>
                <span className="text-gray-500">{user.email}</span>
              </div>
            </div>
            <LogoutButton />
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Content */}
        <div className="container py-6 px-4 max-w-6xl">{children}</div>
      </main>
    </div>
  )
}
