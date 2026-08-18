import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";
import { CtaSection } from "@/components/site/cta-section";
import { whyHaraka } from "@/content/site";

export const Route = createFileRoute("/who-we-are/why-haraka")({
  head: () => ({
    meta: [
      { title: "Why HARAKA — Business Understanding, Practical Technology" },
      { name: "description", content: "Business understanding, practical technology, local knowledge and execution." },
      { property: "og:title", content: "Why HARAKA" },
      { property: "og:description", content: "Four reasons organizations choose HARAKA for transformation." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.lovable.app/who-we-are/why-haraka" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.lovable.app/who-we-are/why-haraka" }],
  }),
  component: WhyHarakaPage,
});

function WhyHarakaPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Why HARAKA"
        description="We start with the business problem and stay accountable for the result."
        crumbs={[{ label: "Who We Are", to: "/who-we-are" }, { label: "Why HARAKA" }]}
      />
      <section className="section-y">
        <div className="container-page grid flush-grid sm:grid-cols-2">
          {whyHaraka.map((item) => (
            <div key={item.title} className="bg-background p-9">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
