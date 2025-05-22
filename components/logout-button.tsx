"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { signOut } from "@/lib/actions/auth-actions"

export function LogoutButton() {
  return (
    <Button
      variant="ghost"
      className="w-full justify-start gap-2 text-red-500 hover:text-red-600 hover:bg-red-50"
      onClick={() => signOut()}
    >
      <LogOut className="h-4 w-4" />
      Esci
    </Button>
  )
}
