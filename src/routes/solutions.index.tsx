import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaSection } from "@/components/site/cta-section";
import { ChevronLink } from "@/components/site/chevron-link";
import { solutionGroups } from "@/content/site";

import { Reveal } from "@/components/site/reveal";
import { panelTransitionVariant } from "@/components/site/animations";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions — HARAKA Business & Technology Transformation" },
      {
        name: "description",
        content:
          "Business management, customer and sales, industry solutions and data intelligence — organized around business needs.",
      },
      { property: "og:title", content: "Solutions — HARAKA" },
      {
        property: "og:description",
        content: "Solutions grouped around what organizations are trying to achieve.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.lovable.app/solutions" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.lovable.app/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Solutions organized around business needs"
        description="Four groups of capability, selected and implemented against the outcome an organization is working towards."
        crumbs={[{ label: "Solutions" }]}
      />

      <section className="section-y">
        <div className="container-page space-y-px bg-border">
          {solutionGroups.map((group, index) => (
            <Reveal key={group.slug} delay={index * 0.1} variant={panelTransitionVariant}>
              <div className="grid gap-8 bg-background p-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
                <div>
                  <h2 className="text-2xl font-bold">{group.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {group.summary}
                  </p>
                  <div className="mt-6">
                    <ChevronLink to="/solutions/$slug" params={{ slug: group.slug }}>
                      Explore {group.navLabel}
                    </ChevronLink>
                  </div>
                </div>
                <ul className="grid self-start flush-grid sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item.title} className="bg-background p-5 text-sm font-semibold">
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="HARAKA Products"
            title="Technology designed around real business needs"
          />
          <div className="mt-8">
            <Link
              to="/products"
              className="inline-flex text-sm font-medium underline underline-offset-4 hover:text-primary"
            >
              View HARAKA Products
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
