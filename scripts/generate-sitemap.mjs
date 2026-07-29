import { writeFile, rm } from "node:fs/promises";
import { resolve } from "node:path";

const rawSiteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL;
const outputPath = resolve("public/sitemap.xml");
const robotsPath = resolve("public/robots.txt");

if (!rawSiteUrl) {
  await rm(outputPath, { force: true });
  await writeFile(robotsPath, "User-agent: *\nAllow: /\n", "utf8");
  console.warn(
    "SEO notice: SITE_URL was not supplied, so sitemap.xml was not generated. " +
      "Run the production build with SITE_URL=https://your-domain.example.",
  );
  process.exit(0);
}

const siteUrl = rawSiteUrl.replace(/\/$/, "");
const pages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
];

const today = new Date().toISOString().slice(0, 10);
const urls = pages
  .map(
    ({ path, priority, changefreq }) => `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

await writeFile(outputPath, sitemap, "utf8");
await writeFile(
  robotsPath,
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
  "utf8",
);

console.log(`Generated sitemap.xml for ${siteUrl}`);
