import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaSection } from "@/components/site/cta-section";
import { careers } from "@/content/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at HARAKA — Build What's Next" },
      { name: "description", content: careers.copy },
      { property: "og:title", content: "Careers at HARAKA" },
      { property: "og:description", content: careers.copy },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.lovable.app/careers" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.lovable.app/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={careers.headline}
        description={careers.copy}
        crumbs={[{ label: "Careers" }]}
      />
      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Open roles" title="Current openings" />
          {careers.openings.length === 0 ? (
            <div className="mt-10 border border-border p-8">
              <p className="text-sm text-muted-foreground">
                There are no published openings at the moment. To register your interest, get in touch.
              </p>
              <Button asChild className="mt-6">
                <Link to="/contact">Contact HARAKA</Link>
              </Button>
            </div>
          ) : (
            <ul className="mt-10 divide-y divide-border border border-border">
              {careers.openings.map((role) => (
                <li key={role.title} className="flex flex-wrap items-center justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-base font-semibold">{role.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{role.type} · {role.location}</p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/contact">Apply</Link>
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
