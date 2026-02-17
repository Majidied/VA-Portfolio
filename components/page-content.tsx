'use client'

import { ReactNode } from 'react'
import { useLoading } from '@/hooks/use-loading-store'

export function PageContent({ children }: { children: ReactNode }) {
  const { isLoading } = useLoading()

  return (
    <div
      className={`transition-opacity duration-700 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {children}
    </div>
  )
}
