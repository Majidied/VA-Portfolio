'use client'

import React, { useEffect, useState } from 'react'
import { useLoading } from '@/hooks/use-loading-store'
import Loader from './loader'

export function LoadingOverlay() {
  const { isLoading, setIsLoading } = useLoading()
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Wait for the page to fully load
    const handleLoad = () => {
      // Add a minimum display time of 1.5s for better UX
      const minDisplayTime = 1500
      const startTime = Date.now()
      
      const finishLoading = () => {
        const elapsedTime = Date.now() - startTime
        const remainingTime = Math.max(0, minDisplayTime - elapsedTime)
        
        setTimeout(() => {
          setIsLoading(false)
          // Remove from DOM after fade out animation
          setTimeout(() => setShouldRender(false), 600)
        }, remainingTime)
      }

      if (document.readyState === 'complete') {
        finishLoading()
      } else {
        window.addEventListener('load', finishLoading)
        return () => window.removeEventListener('load', finishLoading)
      }
    }

    handleLoad()
  }, [setIsLoading])

  if (!shouldRender) return null

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className={`transition-transform duration-500 ${isLoading ? 'scale-100' : 'scale-90'}`}>
        <Loader />
      </div>
    </div>
  )
}
