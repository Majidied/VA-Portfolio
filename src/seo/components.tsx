import type { ReactNode } from 'react';

// SEO-optimized heading components with proper hierarchy
interface HeadingProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const H1 = ({ children, className = '', id }: HeadingProps) => (
  <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${className}`} id={id}>
    {children}
  </h1>
);

export const H2 = ({ children, className = '', id }: HeadingProps) => (
  <h2 className={`text-3xl sm:text-4xl font-bold ${className}`} id={id}>
    {children}
  </h2>
);

export const H3 = ({ children, className = '', id }: HeadingProps) => (
  <h3 className={`text-2xl sm:text-3xl font-semibold ${className}`} id={id}>
    {children}
  </h3>
);

export const H4 = ({ children, className = '', id }: HeadingProps) => (
  <h4 className={`text-xl sm:text-2xl font-semibold ${className}`} id={id}>
    {children}
  </h4>
);

export const H5 = ({ children, className = '', id }: HeadingProps) => (
  <h5 className={`text-lg sm:text-xl font-medium ${className}`} id={id}>
    {children}
  </h5>
);

export const H6 = ({ children, className = '', id }: HeadingProps) => (
  <h6 className={`text-base sm:text-lg font-medium ${className}`} id={id}>
    {children}
  </h6>
);

// SEO utilities
export const addAltText = (src: string, alt?: string) => ({
  src,
  alt: alt || getAltTextFromFilename(src),
  loading: 'lazy' as const
});

// Generate alt text from filename if not provided
const getAltTextFromFilename = (src: string): string => {
  const filename = src.split('/').pop()?.split('.')[0] || '';
  return filename
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .trim();
};

// SEO-friendly link component
interface SEOLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  title?: string;
}

export const SEOLink = ({ 
  href, 
  children, 
  className = '', 
  external = false,
  title 
}: SEOLinkProps) => {
  const linkProps = external 
    ? { 
        target: '_blank', 
        rel: 'noopener noreferrer',
        'aria-label': `${children} (opens in new tab)`
      }
    : {};

  return (
    <a 
      href={href} 
      className={className}
      title={title}
      {...linkProps}
    >
      {children}
    </a>
  );
};

// Generate breadcrumb navigation
interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => (
  <nav aria-label="Breadcrumb" className={className}>
    <ol className="flex items-center space-x-2">
      {items.map((item, index) => (
        <li key={item.href} className="flex items-center">
          {index > 0 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
          {index === items.length - 1 ? (
            <span className="text-gray-600 dark:text-gray-300" aria-current="page">
              {item.name}
            </span>
          ) : (
            <a 
              href={item.href}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
            >
              {item.name}
            </a>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

// Skip to content link for accessibility/SEO
export const SkipToContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
  >
    Skip to main content
  </a>
);

// Page section wrapper with proper semantic structure
interface PageSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  as?: 'section' | 'article' | 'aside' | 'div';
  'aria-label'?: string;
}

export const PageSection = ({ 
  children, 
  id, 
  className = '', 
  as: Component = 'section',
  'aria-label': ariaLabel 
}: PageSectionProps) => (
  <Component 
    id={id} 
    className={className}
    aria-label={ariaLabel}
  >
    {children}
  </Component>
);

// Performance optimization utilities
export const preloadImage = (src: string) => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);
  }
};

export const preloadFont = (href: string, type = 'font/woff2') => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = 'font';
    link.type = type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }
};
