import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { practiceAreas, solutionGroups } from "@/content/site";

const BASE_URL = "https://haraka-vision.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/",
          "/what-we-do",
          ...practiceAreas.map((area) => `/what-we-do/${area.slug}`),
          "/solutions",
          ...solutionGroups.map((group) => `/solutions/${group.slug}`),
          "/products",
          "/industries",
          "/insights",
          "/who-we-are",
          "/who-we-are/approach",
          "/who-we-are/why-haraka",
          "/who-we-are/our-people",
          "/who-we-are/ecosystem",
          "/careers",
          "/contact",
          "/privacy",
          "/terms",
        ];

        const urls = paths.map(
          (path) =>
            `  <url>\n    <loc>${BASE_URL}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${path === "/" ? "1.0" : "0.8"}</priority>\n  </url>`,
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
