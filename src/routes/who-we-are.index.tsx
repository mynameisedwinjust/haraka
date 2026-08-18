import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaSection } from "@/components/site/cta-section";
import { ChevronLink } from "@/components/site/chevron-link";
import { about, approach, whyHaraka } from "@/content/site";

export const Route = createFileRoute("/who-we-are/")({
  head: () => ({
    meta: [
      { title: "About HARAKA — Business & Technology Transformation Firm" },
      {
        name: "description",
        content:
          "HARAKA is a business and technology transformation firm helping organizations improve performance, modernize operations and achieve sustainable growth.",
      },
      { property: "og:title", content: "About HARAKA" },
      {
        property: "og:description",
        content:
          "Business expertise, technology and industry knowledge combined into practical solutions that create measurable value.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.com/who-we-are" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.com/who-we-are" }],
  }),
  component: WhoWeArePage,
});

function WhoWeArePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About HARAKA"
        description={about.paragraphs[0]!}
        crumbs={[{ label: "Who We Are" }]}
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading eyebrow="About" title="A transformation firm, not a software vendor" />
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Our Approach" title="Five stages, from discovery to growth" />
          <div className="relative mt-12">
            <div className="absolute left-0 top-0 hidden h-1 w-full bg-border md:block" />
            <ol className="grid flush-grid md:grid-cols-5 md:pt-1">
              {approach.map((phase, index) => (
                <li key={phase.step} className="group relative bg-surface p-7 transition-colors hover:bg-background">
                  <div className="absolute inset-x-0 top-0 h-1 bg-primary scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  <span className="text-2xl font-bold text-primary">{phase.step}</span>
                  <h3 className="mt-4 text-base font-bold uppercase tracking-wide">{phase.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {phase.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-10">
            <ChevronLink to="/who-we-are/approach">More on our approach</ChevronLink>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading eyebrow="Why HARAKA" title="Four reasons organizations work with us" />
          <ul className="divide-y divide-border border-y border-border">
            {whyHaraka.map((item) => (
              <li key={item.title} className="group relative py-8 pl-6 transition-colors hover:bg-surface">
                <div className="absolute bottom-0 left-0 top-0 w-1 bg-border transition-colors group-hover:bg-primary" />
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page flex flex-wrap gap-x-10 gap-y-4">
          <ChevronLink to="/who-we-are/our-people">Our People</ChevronLink>
          <ChevronLink to="/who-we-are/why-haraka">Why HARAKA</ChevronLink>
          <ChevronLink to="/who-we-are/ecosystem">Our Ecosystem</ChevronLink>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
