// Sitemap.xml generator for the Virtual Assistant portfolio

export const generateSitemap = () => {
  const baseUrl = "https://yoursite.com"; // Replace with actual domain
  const currentDate = new Date().toISOString().split('T')[0];
  
  const pages = [
    {
      url: '/',
      priority: '1.0',
      changefreq: 'monthly',
      lastmod: currentDate
    },
    {
      url: '/#about',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: currentDate
    },
    {
      url: '/#services', 
      priority: '0.9',
      changefreq: 'monthly',
      lastmod: currentDate
    },
    {
      url: '/#process',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: currentDate
    },
    {
      url: '/#case-studies',
      priority: '0.8',
      changefreq: 'monthly', 
      lastmod: currentDate
    },
    {
      url: '/#testimonials',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: currentDate
    },
    {
      url: '/#packages',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: currentDate
    },
    {
      url: '/#contact',
      priority: '0.9',
      changefreq: 'monthly',
      lastmod: currentDate
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// robots.txt generator
export const generateRobotsTxt = () => {
  const baseUrl = "https://yoursite.com"; // Replace with actual domain
  
  return `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /*.json$

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1`;
};
