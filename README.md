# Mohammed Majidi - VA Portfolio

A modern, comprehensive portfolio website for a Virtual Assistant with a systems advantage. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Modern Design & User Experience
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between dark, light, and system themes
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Accessibility**: Built with accessibility best practices
- **SEO Ready**: Optimized for search engines

### Portfolio Sections

#### 1. **Hero Section** 
- Compelling headline emphasizing the "Systems Advantage"
- Key statistics and trust indicators
- Dual CTA buttons (consultation booking and services overview)

#### 2. **About Section**
- Personal story highlighting the unique blend of VA skills + technical expertise
- Achievement badges showcasing specializations

#### 3. **Services Section**
- **Core VA Excellence**: Traditional administrative services
- **Custom Efficiency Solutions**: The competitive edge
- Expandable service details with feature lists

#### 4. **Process Section**
- 4-step methodology from consultation to ongoing support
- Visual timeline with interactive elements

#### 5. **Case Studies Section**
- Interactive carousel showcasing real client results
- Quantified metrics and client testimonials

#### 6. **Testimonials Section**
- Featured testimonials emphasizing the "more than a VA" angle
- Client company showcase with 5-star reviews

#### 7. **Packages Section**
- 3-tier pricing structure with annual/monthly billing
- Feature comparison table and add-on services

#### 8. **FAQ Section**
- Categorized frequently asked questions
- Interactive expanding answers

#### 9. **Contact Section**
- Comprehensive contact form with availability status
- Multiple contact methods and scheduling links

### Technical Implementation

#### **Architecture**
```
src/
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # All main sections
│   ├── common/          # Reusable components
│   └── ui/              # UI components
├── content/             # Content data files
├── hooks/               # Custom React hooks
├── lib/                 # Utilities
├── styles/             # Global CSS
└── types/              # TypeScript definitions
```

#### **Key Technologies**
- **React 19**: Latest React with modern patterns
- **TypeScript**: Full type safety
- **Tailwind CSS v4**: Modern styling with dark mode
- **Framer Motion**: Smooth animations
- **Radix UI**: Accessible components
- **Heroicons**: Beautiful SVG icons
- **Vite**: Fast development and build tool

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Customization
1. Update personal information in `src/content/general.ts`
2. Replace email addresses and contact information
3. Customize service offerings and pricing
4. Add real testimonials and case studies

## 🔧 Content Management

All content is stored in the `src/content/` directory:
- `general.ts` - Personal info, navigation, stats
- `services.ts` - Service categories and process steps  
- `case-studies.ts` - Client case studies and achievements
- `testimonials.ts` - Client testimonials and logos
- `pricing.ts` - Package details and comparisons
- `faqs.ts` - Frequently asked questions
- `availability.ts` - Working hours and contact preferences

## 📱 Responsive Design

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 📞 Contact & Support

For questions about this portfolio or VA services:
- **Email**: mohammed@example.com
- **LinkedIn**: [Your LinkedIn Profile]

---

**Built with ❤️ for modern Virtual Assistant professionals.**
