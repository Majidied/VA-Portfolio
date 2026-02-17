# Mohammed Majidi Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with smooth animations, dark mode support, and optimized performance.

## ✨ Features

- 🎨 Modern UI with shadcn/ui components
- 🌓 Dark mode support with next-themes
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js 16
- 🎯 SEO-friendly with metadata and sitemap
- 📊 Analytics integration with Vercel Analytics
- ✍️ Form validation with React Hook Form and Zod
- 🎭 Smooth animations and transitions
- ⭐ Interactive star background
- 🚀 Production-ready deployment config

## 🛠️ Tech Stack

### Core
- **Framework:** [Next.js 16.1.6](https://nextjs.org/)
- **React:** 19.2.4
- **TypeScript:** 5.7.3
- **Package Manager:** pnpm

### Styling
- **CSS Framework:** [Tailwind CSS 4.1.9](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

### Key Libraries
- **Form Handling:** React Hook Form + Zod
- **Animations:** Embla Carousel, Vaul
- **Theme:** next-themes
- **Analytics:** Vercel Analytics

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── manifest.ts        # PWA manifest
│   ├── robots.ts          # Robots.txt config
│   └── sitemap.ts         # Sitemap config
├── components/            # React components
│   ├── hero-section.tsx   # Hero section
│   ├── about-section.tsx  # About section
│   ├── services-section.tsx
│   ├── process-section.tsx
│   ├── case-studies-section.tsx
│   ├── contact-section.tsx
│   ├── navigation.tsx     # Navigation bar
│   ├── footer.tsx         # Footer
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd VA-Portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The project includes a `vercel.json` configuration file for optimal deployment settings.

### Manual Deployment

```bash
# Build the project
pnpm build

# The output will be in the .next directory
# Deploy the .next directory along with package.json and public folder
```

## 🎨 Customization

### Adding UI Components

This project uses shadcn/ui. To add new components:

```bash
npx shadcn@latest add [component-name]
```

### Modifying Sections

Edit the component files in the `components/` directory:
- `hero-section.tsx` - Main landing section
- `about-section.tsx` - About/bio section
- `services-section.tsx` - Services offered
- `case-studies-section.tsx` - Project showcases
- `contact-section.tsx` - Contact form

### Theme Customization

Modify Tailwind configuration and global styles in:
- `app/globals.css` - CSS variables and theme colors
- `tailwind.config.js` - Tailwind configuration

## 📄 License

This project is private and proprietary.

## 👤 Author

**Mohammed Majidi**

---

Built with ❤️ using Next.js and TypeScript
