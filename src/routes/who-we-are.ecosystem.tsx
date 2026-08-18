import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaSection } from "@/components/site/cta-section";
import { LogoMarquee } from "@/components/site/logo-marquee";
import { ecosystem, ecosystemPartners } from "@/content/site";

export const Route = createFileRoute("/who-we-are/ecosystem")({
  head: () => ({
    meta: [
      { title: "Our Ecosystem — HARAKA Capability Partners" },
      { name: "description", content: "HARAKA works with technology providers, specialists and industry organizations to bring the right capabilities to each engagement." },
      { property: "og:title", content: "Our Ecosystem — HARAKA" },
      { property: "og:description", content: "Technology, cloud, AI and industry capability relationships." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.lovable.app/who-we-are/ecosystem" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.lovable.app/who-we-are/ecosystem" }],
  }),
  component: EcosystemPage,
});

function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Our Ecosystem"
        description={ecosystem.statement}
        crumbs={[{ label: "Who We Are", to: "/who-we-are" }, { label: "Our Ecosystem" }]}
      />
      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Capability areas" title="Where the ecosystem adds depth" />
          <ul className="mt-12 grid flush-grid sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.categories.map((category) => (
              <li key={category} className="bg-background p-7 text-base font-semibold">{category}</li>
            ))}
          </ul>
        </div>
        {ecosystemPartners.length ? (
          <div className="mt-16">
            <p className="container-page mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Ecosystem partners
            </p>
            <LogoMarquee logos={ecosystemPartners} />
          </div>
        ) : null}
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Technologies"
            title="Technology and capability relationships"
            description="These represent technology and capability relationships. They are not clients and do not imply endorsement."
          />
          <div className="mt-10 space-y-12">
            {ecosystem.relationshipGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-base font-semibold text-navy-foreground">
                  {group.title}
                </h3>
                <ul className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  {group.items.map((item, index) => (
                    <li key={item} className="flex items-center gap-3">
                      <span>{item}</span>
                      {index < group.items.length - 1 && (
                        <span className="text-muted-foreground/40 text-lg leading-none">&middot;</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
