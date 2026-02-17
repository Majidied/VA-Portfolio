import { Mail, ExternalLink, Phone } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:mohammedmajidi321@gmail.com",
    label: "Email",
  },
  {
    icon: Phone,
    href: "tel:+212652508638",
    label: "Phone",
  },
  {
    icon: ExternalLink,
    href: "https://linkedin.com/in/mohammed-majidi",
    label: "LinkedIn",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div>
            <a
              href="/"
              className="font-mono text-sm font-bold tracking-wider text-primary"
            >
              {"MM."}
            </a>
            <p className="mt-1 text-xs text-muted-foreground">
              Systems-First Virtual Assistant
            </p>
          </div>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {"© "}{new Date().getFullYear()}{" Mohammed Majidi. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
