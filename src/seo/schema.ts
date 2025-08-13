import { personalInfo } from '../content/general';

// Professional Service Schema
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": personalInfo.name,
  "alternateName": "Expert Virtual Assistant",
  "description": personalInfo.bio,
  "serviceType": "Virtual Assistant Services",
  "provider": {
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.title,
    "description": personalInfo.bio,
    "email": personalInfo.email,
    "telephone": personalInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Remote",
      "addressCountry": "Worldwide"
    }
  },
  "areaServed": "Worldwide",
  "availableLanguage": ["English"],
  "serviceArea": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Virtual Assistant Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Email Management",
          "description": "Professional email organization, response management, and inbox optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Calendar Management", 
          "description": "Efficient scheduling, appointment coordination, and calendar optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Administrative Support",
          "description": "Comprehensive administrative tasks, document management, and business support"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Workflow Solutions",
          "description": "Tailored automation and process optimization for improved efficiency"
        }
      }
    ]
  }
};

// Person Schema
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": personalInfo.name,
  "jobTitle": personalInfo.title,
  "description": personalInfo.bio,
  "email": personalInfo.email,
  "telephone": personalInfo.phone,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Remote",
    "addressCountry": "Worldwide"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance Virtual Assistant"
  },
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Virtual Assistant",
    "occupationLocation": {
      "@type": "Place",
      "name": "Remote/Worldwide"
    },
    "skills": [
      "Email Management",
      "Calendar Management", 
      "Administrative Support",
      "Customer Service",
      "Data Entry",
      "Document Management",
      "Project Coordination",
      "Workflow Optimization"
    ]
  },
  "knowsLanguage": ["English"],
  "availableLanguage": ["English"]
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": `${personalInfo.name} - Virtual Assistant Portfolio`,
  "alternateName": "Expert Virtual Assistant Services",
  "description": personalInfo.subtagline,
  "url": typeof window !== 'undefined' ? window.location.origin : 'https://yoursite.com',
  "author": {
    "@type": "Person",
    "name": personalInfo.name
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${typeof window !== 'undefined' ? window.location.origin : 'https://yoursite.com'}?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items: Array<{name: string; url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// FAQ Schema Generator (for FAQ section)
export const generateFAQSchema = (faqs: Array<{question: string; answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Service Schema Generator
export const generateServiceSchema = (service: {
  name: string;
  description: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "category": service.category || "Virtual Assistant Services",
  "provider": {
    "@type": "Person",
    "name": personalInfo.name
  },
  "areaServed": "Worldwide",
  "availableLanguage": "English"
});
