import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaSection } from "@/components/site/cta-section";
import { practiceAreas } from "@/content/site";

export const Route = createFileRoute("/what-we-do/")({
  head: () => ({
    meta: [
      { title: "What We Do — HARAKA Business & Technology Transformation" },
      {
        name: "description",
        content:
          "Strategy & Consulting, Technology, Digital Transformation and Business Growth — the four HARAKA practice areas.",
      },
      { property: "og:title", content: "What We Do — HARAKA" },
      {
        property: "og:description",
        content:
          "Four practice areas helping organizations transform, operate better and grow.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.lovable.app/what-we-do" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.lovable.app/what-we-do" }],
  }),
  component: WhatWeDoPage,
});

function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Transformation built on business understanding"
        description="Four practice areas that combine strategy, technology and industry knowledge to create measurable value."
        crumbs={[{ label: "What We Do" }]}
      />

      <section className="section-y">
        <div className="container-page">
          <div className="grid flush-grid sm:grid-cols-2">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                to="/what-we-do/$slug"
                params={{ slug: area.slug }}
                className="group flex h-full flex-col bg-background p-9 tile-hover hover:bg-foreground hover:text-background"
              >
                <span className="text-3xl font-bold text-primary">{area.number}</span>
                <h2 className="mt-5 text-2xl font-bold">{area.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-background/70">
                  {area.summary}
                </p>
                <ul className="mt-6 grid gap-1.5 text-sm text-muted-foreground group-hover:text-background/70 sm:grid-cols-2">
                  {area.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
