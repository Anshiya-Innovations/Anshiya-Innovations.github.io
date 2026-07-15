const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const siteUrl = 'https://www.anshiyainnovations.com';

(async () => {
  const { sitemapRoutes } = await import(pathToFileURL(path.resolve(__dirname, '../src/router/sitemapRoutes.js')).href);
  const routes = sitemapRoutes;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>\n    <loc>${siteUrl}${route.path}</loc>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`;

  const distDir = path.resolve(__dirname, '../dist');
  const publicDir = path.resolve(__dirname, '../public');

  fs.mkdirSync(distDir, { recursive: true });
  fs.mkdirSync(publicDir, { recursive: true });

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated at public/sitemap.xml and dist/sitemap.xml');
})();
