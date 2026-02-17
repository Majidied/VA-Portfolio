"use client"

import { useEffect, useRef, useState } from "react"
import { Send, Mail, Phone, ExternalLink, MapPin, Calendar } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  )

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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setStatus("sending")

    try {
      // EmailJS integration
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_qoa29cp",
          template_id: "template_7z91yp5",
          user_id: "F_DZ8hE4OlklvQm8x",
          template_params: {
            from_name: formState.name,
            from_email: formState.email,
            subject: formState.subject,
            message: formState.message,
          },
        }),
      })

      if (response.ok) {
        setStatus("sent")
        setFormState({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setStatus("idle"), 4000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 4000)
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mohammedmajidi321@gmail.com",
      href: "mailto:mohammedmajidi321@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 6 52 50 86 38",
      href: "tel:+212652508638",
    },
    {
      icon: ExternalLink,
      label: "LinkedIn",
      value: "mohammed-majidi",
      href: "https://linkedin.com/in/mohammed-majidi",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote - Global Support",
      href: undefined,
    },
    {
      icon: Calendar,
      label: "Schedule",
      value: "Book a Meeting",
      href: "https://calendly.com/majidimajidi2003/30-minute-meeting",
    },
  ]

  return (
    <section
      id="contact"
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
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">
              {"Let's "}
              <span className="bg-gradient-to-r from-primary to-teal-300 bg-clip-text text-transparent">
                Connect
              </span>
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ready to transform your operations? Reach out and let me build
            something great for your business.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div
            className={`flex flex-col gap-6 lg:col-span-2 transition-all delay-200 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {contactInfo.slice(0, 4).map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Animated Calendly Button */}
            <div className="mt-6 pt-6 border-t border-border">
              <a
                href="https://calendly.com/mohammedmajidi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
              >
                {/* Animated background shine effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <Calendar className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-all duration-300">Schedule a Meeting</span>
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                Available for consultations via Calendly
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all delay-300 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {/* Gradient border wrapper */}
            <div className="relative rounded-xl p-[1px]">
              <div
                className="absolute inset-0 rounded-xl opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.75 0.15 185), transparent 50%, oklch(0.75 0.12 200))",
                }}
              />
              <div className="relative rounded-xl bg-card p-6 md:p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-medium text-muted-foreground"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-medium text-muted-foreground"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-xs font-medium text-muted-foreground"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="How can I help?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium text-muted-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full resize-none rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90 disabled:opacity-50"
                  >
                    {status === "sending" && "Sending..."}
                    {status === "sent" && "Message Sent!"}
                    {status === "error" && "Error - Try Again"}
                    {status === "idle" && (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
