"use client"

import { useEffect, useRef, useState } from "react"
import { Search, PenTool, Settings, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Audit",
    description:
      "Deep-dive into your current workflows, tools, and bottlenecks. I map every process to identify quick wins and long-term optimizations.",
    detail:
      "Comprehensive workflow mapping, tool inventory, and stakeholder interviews.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Blueprint & Design",
    description:
      "Architect a tailored operations blueprint with automated workflows, custom tooling specs, and clear deliverables.",
    detail:
      "Custom system architecture, SOP drafts, and integration planning.",
  },
  {
    icon: Settings,
    step: "03",
    title: "Build & Integrate",
    description:
      "Deploy automation systems, configure integrations, and set up the infrastructure that powers your operations.",
    detail:
      "API integrations, dashboard builds, and automation deployment.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Optimize & Scale",
    description:
      "Continuously monitor, refine, and scale systems as your business grows. Every process gets faster over time.",
    detail:
      "Performance tracking, iterative improvements, and growth scaling.",
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
            Process
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">
              How I{" "}
              <span className="bg-gradient-to-r from-primary to-teal-300 bg-clip-text text-transparent">
                Work
              </span>
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A proven four-step methodology that transforms chaotic operations
            into well-oiled systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${200 + i * 150}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:bg-card/80">
                {/* Step Number */}
                <span className="mb-4 block font-mono text-xs text-primary/40">
                  {step.step}
                </span>

                {/* Icon */}
                <step.icon className="mb-4 h-7 w-7 text-primary transition-transform duration-500 group-hover:scale-110" />

                {/* Title */}
                <h3 className="mb-3 text-base font-bold text-foreground">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Detail - slides up on hover */}
                <div className="translate-y-4 text-xs leading-relaxed text-primary/80 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {step.detail}
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-teal-300 transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
