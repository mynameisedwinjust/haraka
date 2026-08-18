import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaSection } from "@/components/site/cta-section";
import { additionalIndustries, priorityIndustries } from "@/content/site";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — HARAKA Business & Technology Transformation" },
      { name: "description", content: "Healthcare, financial services, retail, manufacturing, hospitality, education, real estate and more." },
      { property: "og:title", content: "Industries — HARAKA" },
      { property: "og:description", content: "Industry knowledge applied to real business operations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.lovable.app/industries" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.lovable.app/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industry knowledge applied to real operations"
        description="We work across sectors where transformation changes how the organization performs day to day."
        crumbs={[{ label: "Industries" }]}
      />
      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Priority industries" title="Where we focus" />
          <ul className="mt-12 grid flush-grid sm:grid-cols-2 lg:grid-cols-4">
            {priorityIndustries.map((industry) => (
              <li key={industry.slug} className="bg-background p-7 text-base font-semibold">{industry.name}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Also serving" title="Additional industries" />
          <ul className="mt-12 grid flush-grid sm:grid-cols-2 lg:grid-cols-3">
            {additionalIndustries.map((industry) => (
              <li key={industry.slug} className="bg-surface p-7 text-base font-semibold">{industry.name}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
