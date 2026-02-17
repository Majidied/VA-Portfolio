"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { useLoading } from "@/hooks/use-loading-store"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { isLoading } = useLoading()

  useEffect(() => {
    // Only start animations after loading is complete
    if (!isLoading) {
      const timer = setTimeout(() => setIsVisible(true), 200)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8 lg:pt-24"
    >
      {/* Full-width Illustration Background */}
      <div
        className={`absolute inset-0 flex items-center justify-end pr-0 transition-all duration-1000 delay-200 lg:pr-12 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div className="relative h-full w-full lg:w-[65%]">
          {/* Ambient glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-teal-500/20 to-cyan-400/20 blur-[120px]" />
          
          {/* Main illustration */}
          <div className="relative flex h-full items-center justify-center">
            <Image
              src="/hero-illustration.png"
              alt="Systems and automation illustration"
              width={1200}
              height={1200}
              className="relative z-10 h-auto w-full max-w-5xl drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              quality={90}
            />
          </div>

          {/* Floating connection lines effect */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-1/4 h-px w-16 animate-pulse bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute right-1/4 top-1/2 h-px w-20 animate-pulse bg-gradient-to-r from-transparent via-teal-400 to-transparent" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/3 left-1/3 h-px w-12 animate-pulse bg-gradient-to-r from-transparent via-cyan-400 to-transparent" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Text Content - Overlaid on left */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div
          className={`max-w-2xl transition-all duration-1000 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <p className="mb-6 font-mono text-xs tracking-[0.3em] text-primary uppercase lg:text-sm">
            Systems-First Virtual Assistant
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-6xl">
            High-Level
            <br />
            Executive
            <br />
            Support
            <br />
            <span className="bg-gradient-to-r from-primary via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Powered by
              <br />
              Custom
              <br />
              Systems
            </span>
          </h1>

          <p className="mb-8 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-base">
            Precision administrative support and custom-built automation to help
            founders and executives scale their impact, not their task list.
          </p>
        </div>
      </div>

      {/* Logo Badge - Bottom Right */}
      <div
        className={`absolute bottom-8 right-8 z-20 flex items-center gap-3 transition-all duration-1000 delay-500 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
      </div>      {/* Scroll Indicator - Bottom Center */}
      <div className="absolute bottom-4 left-1/2 z-20 flex flex-col items-center gap-2 -translate-x-1/2">
        <span className="animate-pulse text-xs font-medium text-muted-foreground">Scroll to explore</span>
        <style>{`
          @keyframes float-down {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(10px); }
          }
        `}</style>
        <div className="relative" style={{ animation: 'float-down 3s ease-in-out infinite' }}>
          {/* Glow background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-cyan-400/20 blur-lg" style={{ width: '48px', height: '48px', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
          
          {/* Main button */}
          <a 
            href="#about" 
            aria-label="Scroll to about section"
            className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-teal-400/10 transition-all duration-300 hover:border-primary hover:bg-gradient-to-br hover:from-primary/20 hover:to-cyan-400/20 hover:shadow-lg hover:shadow-primary/30"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}
