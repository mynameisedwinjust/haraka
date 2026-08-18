import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";
import { CtaSection } from "@/components/site/cta-section";
import { leadership } from "@/content/site";

export const Route = createFileRoute("/who-we-are/our-people")({
  head: () => ({
    meta: [
      { title: "Our People — HARAKA Leadership Team" },
      { name: "description", content: "The people leading strategy, technology, consulting and project delivery at HARAKA." },
      { property: "og:title", content: "Our People — HARAKA" },
      { property: "og:description", content: "Meet the HARAKA leadership team." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.lovable.app/who-we-are/our-people" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.lovable.app/who-we-are/our-people" }],
  }),
  component: OurPeoplePage,
});

function OurPeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Our People"
        description="Business, technology and delivery leadership working as one team."
        crumbs={[{ label: "Who We Are", to: "/who-we-are" }, { label: "Our People" }]}
      />
      <section className="section-y">
        <div className="container-page grid flush-grid sm:grid-cols-2">
          {leadership.map((person) => (
            <article key={person.name} className="grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] items-center gap-6 bg-background p-8">
              <img
                src={person.image}
                alt={`${person.name} profile`}
                className="h-20 w-20 shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0">
                <h2 className="text-lg font-bold">{person.name}</h2>
                <p className="mt-1 text-sm font-medium text-primary">{person.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{person.expertise}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
