import { getCollection } from "astro:content";
import { absoluteUrl } from "../lib/urls";

interface PageEntry {
  path: string;
  lastmod?: Date;
}

export async function GET() {
  const articles = await getCollection("articles", ({ data }) => !data.draft);

  const pages: PageEntry[] = [
    { path: "/" },
    { path: "/about/" },
    ...articles
      .map((a) => ({
        path: `/articles/${a.id}/`,
        lastmod: a.data.updatedDate ?? a.data.publishDate,
      }))
      .sort((a, b) => (b.lastmod?.valueOf() ?? 0) - (a.lastmod?.valueOf() ?? 0)),
  ];

  const urls = pages
    .map((p) => {
      const loc = absoluteUrl(p.path);
      const lastmod = p.lastmod ? `<lastmod>${p.lastmod.toISOString()}</lastmod>` : "";
      return `<url><loc>${loc}</loc>${lastmod}</url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
