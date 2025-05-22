import type { ReactNode } from "react"

interface DashboardHeaderProps {
  heading: string
  text?: string
  action?: ReactNode
  backAction?: ReactNode
}

export function DashboardHeader({ heading, text, action, backAction }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-6">
      <div className="space-y-1">
        {backAction && <div className="mb-2">{backAction}</div>}
        <h1 className="text-2xl font-bold tracking-tight">{heading}</h1>
        {text && <p className="text-gray-500">{text}</p>}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  )
}
