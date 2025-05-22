"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Plus, Settings, History, Zap } from "lucide-react"

export function DashboardNav() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
    },
    {
      title: "Crea automazione",
      href: "/dashboard/create",
      icon: <Plus className="h-4 w-4" />,
    },
    {
      title: "Automazioni",
      href: "/dashboard/automations",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      title: "Storico esecuzioni",
      href: "/dashboard/history",
      icon: <History className="h-4 w-4" />,
    },
    {
      title: "Impostazioni",
      href: "/dashboard/settings",
      icon: <Settings className="h-4 w-4" />,
    },
  ]

  return (
    <nav className="grid gap-1 px-2">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button
            variant="ghost"
            className={cn("w-full justify-start", pathname === item.href && "bg-gray-100 font-medium text-primary")}
          >
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Button>
        </Link>
      ))}
    </nav>
  )
}
