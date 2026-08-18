import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";
import { CtaSection } from "@/components/site/cta-section";
import { approach } from "@/content/site";

export const Route = createFileRoute("/who-we-are/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — HARAKA" },
      {
        name: "description",
        content:
          "Discover, Design, Implement, Transform, Grow — the five stages HARAKA uses on every engagement.",
      },
      { property: "og:title", content: "Our Approach — HARAKA" },
      {
        property: "og:description",
        content: "How HARAKA moves from understanding the business to measurable growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.lovable.app/who-we-are/approach" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.lovable.app/who-we-are/approach" }],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Our Approach"
        description="Five stages that take an organization from understanding the problem to sustained growth."
        crumbs={[{ label: "Who We Are", to: "/who-we-are" }, { label: "Our Approach" }]}
      />

      <section className="section-y">
        <div className="container-page">
          <ol className="divide-y divide-border border-y border-border">
            {approach.map((phase) => (
              <li key={phase.step} className="grid gap-4 py-10 lg:grid-cols-[8rem_16rem_minmax(0,1fr)]">
                <span className="text-3xl font-bold text-primary">{phase.step}</span>
                <h2 className="text-xl font-bold uppercase tracking-wide">{phase.title}</h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
