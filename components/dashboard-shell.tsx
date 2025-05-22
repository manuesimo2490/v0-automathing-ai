import type { ReactNode } from "react"
import { DashboardNav } from "@/components/dashboard-nav"

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-gray-50 lg:block">
          <div className="flex h-full flex-col">
            <div className="flex h-14 items-center border-b px-4">
              <div className="flex items-center gap-2 font-semibold">
                <span>Automathing.AI</span>
              </div>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <DashboardNav />
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container max-w-6xl py-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
