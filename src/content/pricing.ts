export const packages = [
  {
    id: "essential",
    name: "Essential VA Services",
    price: 25,
    period: "per hour",
    description: "Core administrative services with reliable support.",
    popular: false,
    features: [
      "Email management and organization",
      "Calendar scheduling and coordination",
      "Basic research and data entry",
      "Document creation and formatting",
      "Client communication handling",
      "Task management and follow-ups",
      "Standard response time (24 hours)",
      "Weekly progress summaries"
    ],
    limitations: [
      "No custom tool development",
      "Basic templates only",
      "Standard integrations"
    ],
    cta: "Book Hours",
    ideal: "Perfect for entrepreneurs and small business owners who need reliable administrative support on a flexible basis.",
    minimumHours: 10,
    bulkDiscount: "15% off for 20+ hours per week"
  },
  {
    id: "optimized",
    name: "Enhanced VA Services",
    price: 35,
    period: "per hour",
    description: "Core VA services plus custom systems and optimization.",
    popular: true,
    features: [
      "Everything in Essential VA Services",
      "Custom templates and workflows",
      "Process optimization consultation",
      "Basic automation setup",
      "Priority email and calendar rules",
      "Custom reporting solutions",
      "Priority response time (12 hours)",
      "Bi-weekly strategy sessions"
    ],
    limitations: [
      "Advanced custom development requires Premium rate",
      "Complex integrations may need additional time"
    ],
    cta: "Most Popular",
    ideal: "Ideal for growing businesses ready to optimize their workflows with custom enhancements.",
    minimumHours: 5,
    bulkDiscount: "20% off for 15+ hours per week"
  },
  {
    id: "premium",
    name: "Premium Development & VA",
    price: 50,
    period: "per hour",
    description: "Complete VA support with advanced custom development.",
    popular: false,
    features: [
      "Everything in Enhanced VA Services",
      "Custom web applications development",
      "Advanced automation and integrations",
      "API integrations and scripting",
      "Database setup and management",
      "Custom dashboard creation",
      "Priority response time (4 hours)",
      "Weekly strategy and development sessions",
      "Ongoing system maintenance"
    ],
    limitations: [],
    cta: "Book Premium",
    ideal: "For established businesses requiring comprehensive administrative support with ongoing custom development.",
    minimumHours: 5,
    bulkDiscount: "25% off for 10+ hours per week"
  }
];

export const addons = [
  {
    name: "Rush Delivery",
    description: "Same-day completion for urgent tasks",
    price: 10,
    period: "per hour surcharge"
  },
  {
    name: "Weekend Work",
    description: "Saturday and Sunday availability",
    price: 15,
    period: "per hour surcharge"
  },
  {
    name: "Complex Integration Setup",
    description: "One-time setup of advanced system integrations",
    price: 75,
    period: "per hour"
  },
  {
    name: "Training & Documentation",
    description: "Custom training sessions and detailed documentation",
    price: 40,
    period: "per hour"
  },
  {
    name: "Maintenance & Updates",
    description: "Ongoing maintenance for custom systems",
    price: 30,
    period: "per hour"
  }
];

export const packageComparison = [
  {
    feature: "Email & Calendar Management",
    essential: true,
    optimized: true,
    premium: true
  },
  {
    feature: "Research & Documentation",
    essential: true,
    optimized: true,
    premium: true
  },
  {
    feature: "Client Communication",
    essential: true,
    optimized: true,
    premium: true
  },
  {
    feature: "Custom Templates & Workflows",
    essential: false,
    optimized: true,
    premium: true
  },
  {
    feature: "Process Automation",
    essential: false,
    optimized: "Basic",
    premium: "Advanced"
  },
  {
    feature: "Custom Web Applications",
    essential: false,
    optimized: false,
    premium: true
  },
  {
    feature: "API Integrations",
    essential: false,
    optimized: false,
    premium: true
  },
  {
    feature: "Database Management",
    essential: false,
    optimized: false,
    premium: true
  },
  {
    feature: "Response Time",
    essential: "24 hours",
    optimized: "12 hours",
    premium: "4 hours"
  },
  {
    feature: "Minimum Hours",
    essential: "10 hours/week",
    optimized: "5 hours/week",
    premium: "5 hours/week"
  }
];
