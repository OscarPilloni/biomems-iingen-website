import React from 'react'

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-white/50 px-2.5 py-0.5 text-xs font-medium">
      {children}
    </span>
  )
}
