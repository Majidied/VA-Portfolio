"use client"

import { useEffect, useRef, useState } from "react"
import { Terminal } from "lucide-react"

const skills = [
  "System Architecture",
  "Process Automation",
  "Workflow Design",
  "API Integration",
  "Data Analysis",
  "Executive Support",
]

const terminalLines = [
  { prompt: "$ whoami", output: "mohammed-majidi" },
  { prompt: "$ cat role.txt", output: "Systems-First Virtual Assistant" },
  { prompt: "$ ls skills/", output: "workflow-architecture/  automation-engines/  api-integrations/  sop-development/  data-synthesis/" },
  { prompt: "$ cat mission.txt", output: "Bridging high-level administration with technical efficiency." },
  { prompt: "$ uptime", output: "5+ years of remote executive support across 5+ countries" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 600)
    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
            About
          </p>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">
              Meet{" "}
              <span className="bg-gradient-to-r from-primary to-teal-300 bg-clip-text text-transparent">
                Mohammed Majidi
              </span>
            </span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <div
            className={`transition-all delay-200 duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {"I'm Mohammed Majidi, a Systems-First Virtual Assistant. I specialize in bridging the gap between high-level administration and technical efficiency. By building custom tools, automated workflows, and precision-engineered processes, I don't just manage your workload — I fundamentally optimize it."}
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              {"With a background in technical systems, I provide a unique advantage: the ability to streamline complex inboxes, manage multi-time-zone schedules, and develop ready-to-use digital infrastructure that eliminates repetitive overhead automatically."}
            </p>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground/80">
              {"My goal is simple: to make your operations so smooth they feel invisible, allowing you to focus entirely on your vision while I handle the execution."}
            </p>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div
            className={`transition-all delay-400 duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <div className="ml-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Terminal className="h-3.5 w-3.5" />
                  <span className="font-mono">terminal</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-sm">
                {terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className={`mb-3 transition-all duration-500 ${
                      i < visibleLines
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                    }`}
                  >
                    <p className="text-primary">{line.prompt}</p>
                    <p className="mt-0.5 text-muted-foreground">{line.output}</p>
                  </div>
                ))}
                {visibleLines >= terminalLines.length && (
                  <div className="flex items-center gap-1 text-primary">
                    <span>{"$"}</span>
                    <span className="inline-block h-4 w-2 animate-terminal-blink bg-primary" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
