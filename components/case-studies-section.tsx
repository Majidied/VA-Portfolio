"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Clock, Target } from "lucide-react"

const caseStudies = [
  {
    title: "E-Commerce Founder: Inbox Zero System",
    challenge:
      "A fast-scaling D2C founder was drowning in 200+ daily emails across 3 inboxes, missing key supplier communications and investor follow-ups.",
    solution:
      "Built a zero-based inbox management system with automated tagging, priority filtering, and daily executive briefing summaries. Integrated with calendar for meeting prep automation.",
    result:
      "Reduced inbox processing time by 85% and eliminated missed follow-ups entirely. Founder reclaimed 12+ hours per week.",
    metrics: [
      { icon: TrendingUp, label: "Inbox Time Reduced", value: "85%" },
      { icon: Clock, label: "Hours Saved/Week", value: "12+" },
      { icon: Target, label: "Missed Follow-ups", value: "0" },
    ],
  },
  {
    title: "SaaS Startup: Operations Automation",
    challenge:
      "A 15-person SaaS startup had no documented processes. Onboarding, client reporting, and internal updates were manual and inconsistent.",
    solution:
      "Developed comprehensive SOPs, built automated onboarding workflows using multi-platform API integrations, and created real-time project dashboards.",
    result:
      "Client onboarding time dropped from 2 weeks to 3 days. Team adopted standardized processes, reducing errors by 90%.",
    metrics: [
      { icon: TrendingUp, label: "Onboarding Speed", value: "4x" },
      { icon: Clock, label: "Error Reduction", value: "90%" },
      { icon: Target, label: "SOPs Delivered", value: "25+" },
    ],
  },
  {
    title: "Consulting Firm: Multi-Timezone Scheduling",
    challenge:
      "A global consulting firm with clients across 8 time zones struggled with scheduling conflicts, double-bookings, and timezone conversion errors.",
    solution:
      "Engineered an intelligent scheduling system with timezone-aware booking, buffer time management, and automated conflict resolution with priority-based rescheduling.",
    result:
      "Scheduling conflicts dropped to near-zero. Client satisfaction scores improved by 35% due to reliable meeting logistics.",
    metrics: [
      { icon: TrendingUp, label: "Conflict Resolution", value: "99%" },
      { icon: Clock, label: "Satisfaction Boost", value: "+35%" },
      { icon: Target, label: "Timezones Managed", value: "8" },
    ],
  },
]

export function CaseStudiesSection() {
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
      id="case-studies"
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
            Case Studies
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">
              Results That{" "}
              <span className="bg-gradient-to-r from-primary to-teal-300 bg-clip-text text-transparent">
                Speak
              </span>
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Real challenges, engineered solutions, and measurable outcomes.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {caseStudies.map((study, i) => (
            <div
              key={study.title}
              className={`group rounded-xl border border-border bg-card transition-all duration-700 hover:border-primary/20 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${200 + i * 150}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="p-6 md:p-8">
                <h3 className="mb-6 text-xl font-bold text-foreground">
                  {study.title}
                </h3>

                <div className="mb-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="mb-2 font-mono text-xs tracking-wider text-primary/60 uppercase">
                      Challenge
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs tracking-wider text-primary/60 uppercase">
                      Solution
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs tracking-wider text-primary/60 uppercase">
                      Result
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {study.result}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center gap-2 rounded-lg border border-border bg-secondary/30 px-4 py-2.5"
                    >
                      <metric.icon className="h-4 w-4 text-primary" />
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-bold text-foreground">
                          {metric.value}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {metric.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
