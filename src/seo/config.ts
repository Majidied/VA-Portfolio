import { personalInfo } from '../content/general';

// Main SEO configuration
export const seoConfig = {
  // Default meta tags
  defaultTitle: "Mohammed Majidi - Expert Virtual Assistant | Systems-Driven VA Services",
  titleTemplate: "%s | Mohammed Majidi - Virtual Assistant",
  defaultDescription: "Professional Virtual Assistant specializing in administrative support, email management, calendar optimization, and custom workflow solutions. Get reliable VA services with a tech advantage.",
  
  // Site info
  siteUrl: "https://yoursite.com", // Replace with actual domain
  siteName: "Mohammed Majidi - Virtual Assistant",
  
  // Social media
  social: {
    twitter: "@yourtwitterhandle", // Replace with actual handle
    linkedin: "https://linkedin.com/in/yourprofile", // Replace with actual profile
  },
  
  // Default Open Graph image
  defaultOGImage: "/og-image.jpg",
  
  // Keywords for different pages
  keywords: {
    home: "virtual assistant, VA services, administrative support, email management, calendar management, remote assistant, business support, workflow optimization, executive assistant, personal assistant, Mohammed Majidi",
    about: "virtual assistant about, professional VA, remote assistant experience, administrative support specialist, workflow optimization expert",
    services: "virtual assistant services, email management, calendar management, administrative tasks, customer service, data entry, document management, workflow automation",
    contact: "hire virtual assistant, VA contact, remote assistant hire, administrative support contact, virtual assistant consultation",
    portfolio: "virtual assistant portfolio, VA case studies, administrative support examples, workflow optimization results, client testimonials"
  },
  
  // Page-specific configurations
  pages: {
    home: {
      title: "Mohammed Majidi - Expert Virtual Assistant | Systems-Driven VA Services",
      description: "Professional Virtual Assistant specializing in administrative support, email management, calendar optimization, and custom workflow solutions. Get reliable VA services with a tech advantage.",
      keywords: "virtual assistant, VA services, administrative support, email management, calendar management, remote assistant, business support, workflow optimization"
    },
    about: {
      title: "About Mohammed Majidi - Professional Virtual Assistant with Tech Edge",
      description: "Learn about Mohammed Majidi, an expert Virtual Assistant who combines organizational expertise with technical innovation to deliver superior administrative support and custom solutions.",
      keywords: "virtual assistant about, professional VA, remote assistant experience, administrative support specialist, workflow optimization expert"
    },
    services: {
      title: "Virtual Assistant Services - Email, Calendar & Administrative Support",
      description: "Comprehensive virtual assistant services including email management, calendar optimization, administrative support, customer service, and custom workflow solutions.",
      keywords: "virtual assistant services, email management, calendar management, administrative tasks, customer service, data entry, document management"
    },
    contact: {
      title: "Contact Mohammed Majidi - Hire Expert Virtual Assistant",
      description: "Get in touch to discuss your virtual assistant needs. Free consultation available for administrative support, email management, and workflow optimization services.",
      keywords: "hire virtual assistant, VA contact, remote assistant hire, administrative support contact, virtual assistant consultation"
    }
  }
};

// Generate page-specific SEO data
export const generatePageSEO = (pageKey: keyof typeof seoConfig.pages, customData?: Partial<typeof seoConfig.pages.home>) => {
  const pageData = seoConfig.pages[pageKey];
  
  return {
    title: customData?.title || pageData.title,
    description: customData?.description || pageData.description,
    keywords: customData?.keywords || pageData.keywords,
    ogTitle: customData?.title || pageData.title,
    ogDescription: customData?.description || pageData.description,
  };
};

// Common JSON-LD structured data
export const baseStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${seoConfig.siteUrl}/#person`,
      "name": personalInfo.name,
      "jobTitle": personalInfo.title,
      "description": personalInfo.bio,
      "email": personalInfo.email,
      "telephone": personalInfo.phone,
      "url": seoConfig.siteUrl,
      "sameAs": [
        seoConfig.social.linkedin,
        seoConfig.social.twitter
      ].filter(Boolean),
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Remote",
        "addressCountry": "Worldwide"
      },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Virtual Assistant",
        "occupationLocation": {
          "@type": "Place",
          "name": "Remote/Worldwide"
        }
      }
    },
    {
      "@type": "WebSite",
      "@id": `${seoConfig.siteUrl}/#website`,
      "url": seoConfig.siteUrl,
      "name": seoConfig.siteName,
      "description": seoConfig.defaultDescription,
      "publisher": {
        "@id": `${seoConfig.siteUrl}/#person`
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "ProfessionalService",
      "@id": `${seoConfig.siteUrl}/#service`,
      "name": `${personalInfo.name} - Virtual Assistant Services`,
      "description": personalInfo.subtagline,
      "provider": {
        "@id": `${seoConfig.siteUrl}/#person`
      },
      "serviceType": "Virtual Assistant Services",
      "areaServed": "Worldwide",
      "availableLanguage": "English"
    }
  ]
};

// SEO Best Practices Checklist
export const seoChecklist = {
  technical: [
    "✅ Proper meta titles (50-60 characters)",
    "✅ Meta descriptions (150-160 characters)",
    "✅ H1-H6 heading hierarchy",
    "✅ Alt text for images",
    "✅ Clean URL structure", 
    "✅ Mobile responsiveness",
    "✅ Fast loading speed",
    "✅ SSL certificate",
    "✅ XML sitemap",
    "✅ Robots.txt file"
  ],
  content: [
    "✅ Keyword-optimized content",
    "✅ Unique content on each page",
    "✅ Internal linking",
    "✅ External authority links",
    "✅ Regular content updates",
    "✅ Local SEO optimization",
    "✅ Schema markup",
    "✅ Social media integration"
  ],
  monitoring: [
    "📊 Google Search Console setup",
    "📊 Google Analytics setup", 
    "📊 Core Web Vitals monitoring",
    "📊 Keyword ranking tracking",
    "📊 Backlink monitoring",
    "📊 Site performance monitoring"
  ]
};
