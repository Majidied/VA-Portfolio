"use client"

import { useEffect, useRef, useState } from "react"
import {
  Mail,
  Users,
  BarChart3,
  FileText,
  Workflow,
  Laptop,
  Zap,
} from "lucide-react"

const strategicSystems = [
  {
    icon: Workflow,
    title: "Workflow Architecture",
    description:
      "Re-engineering daily operations for speed and clarity. Mapping bottlenecks, eliminating redundancies, and building streamlined processes.",
  },
  {
    icon: Laptop,
    title: "Bespoke Digital Tools",
    description:
      "Custom internal apps and interactive dashboards tailored to your exact operational needs.",
  },
  {
    icon: Zap,
    title: "Hyper-Automation Systems",
    description:
      "Trigger-based multi-platform API integrations that connect your tools and automate repetitive tasks end-to-end.",
  },
]

const executiveSupport = [
  {
    icon: Mail,
    title: "Strategic Inbox & Calendar",
    features: [
      "Zero-based inbox management",
      "Meeting prioritization",
      "Executive briefings",
    ],
  },
  {
    icon: Users,
    title: "Operational Coordination",
    features: [
      "Team/client sync",
      "Project velocity monitoring",
      "Cross-functional liaison",
    ],
  },
  {
    icon: BarChart3,
    title: "Market & Business Intelligence",
    features: [
      "Detailed market analysis",
      "Competitor profiling",
      "Data synthesis",
    ],
  },
  {
    icon: FileText,
    title: "Systems Documentation",
    features: [
      "SOP development",
      "Workflow mapping",
      "Knowledge base creation",
    ],
  },
]

export function ServicesSection() {
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
      id="services"
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
            Services
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">
              What I{" "}
              <span className="bg-gradient-to-r from-primary to-teal-300 bg-clip-text text-transparent">
                Build & Manage
              </span>
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A dual approach combining hands-on executive support with
            custom-built automation systems.
          </p>
        </div>

        {/* Strategic Systems - Rotating Gradient Border Cards */}
        <div className="mb-20">
          <h3
            className={`mb-8 text-center font-mono text-xs tracking-widest text-muted-foreground uppercase transition-all delay-100 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Strategic Systems & Automation
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {strategicSystems.map((service, i) => (
              <div
                key={service.title}
                className={`group relative rounded-xl p-[1px] transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${200 + i * 100}ms`,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Rotating gradient border */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div
                    className="absolute -inset-[100%] animate-gradient-rotate opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent, oklch(0.75 0.15 185), transparent, oklch(0.75 0.12 200), transparent)",
                    }}
                  />
                </div>
                <div className="relative rounded-xl border border-border bg-card p-8 transition-all duration-300 group-hover:border-transparent">
                  <service.icon className="mb-4 h-8 w-8 text-primary" />
                  <h4 className="mb-3 text-lg font-bold text-foreground">
                    {service.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Support - Flip Cards */}
        <div>
          <h3
            className={`mb-8 text-center font-mono text-xs tracking-widest text-muted-foreground uppercase transition-all delay-300 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Executive-Level Support
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {executiveSupport.map((service, i) => (
              <div
                key={service.title}
                className={`group perspective-[1000px] transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${400 + i * 100}ms`,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div className="relative h-56 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 [backface-visibility:hidden]">
                    <service.icon className="mb-4 h-8 w-8 text-primary" />
                    <h4 className="text-center text-base font-bold text-foreground">
                      {service.title}
                    </h4>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col justify-center rounded-xl border border-primary/30 bg-card p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h4 className="mb-3 text-sm font-bold text-primary">
                      {service.title}
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
