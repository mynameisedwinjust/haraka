import { createFileRoute, notFound } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaSection } from "@/components/site/cta-section";
import { ChevronLink } from "@/components/site/chevron-link";
import { approach, practiceAreas } from "@/content/site";

export const Route = createFileRoute("/what-we-do/$slug")({
  loader: ({ params }) => {
    const area = practiceAreas.find((item) => item.slug === params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable — HARAKA" }, { name: "robots", content: "noindex" }] };
    }
    const { area } = loaderData;
    const url = `https://haraka-vision.lovable.app/what-we-do/${params.slug}`;
    return {
      meta: [
        { title: `${area.title} — HARAKA` },
        { name: "description", content: area.summary },
        { property: "og:title", content: `${area.title} — HARAKA` },
        { property: "og:description", content: area.summary },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: PracticeAreaPage,
});

function PracticeAreaPage() {
  const { area } = Route.useLoaderData();
  const others = practiceAreas.filter((item) => item.slug !== area.slug);

  return (
    <>
      <PageHero
        eyebrow={`${area.number} — What We Do`}
        title={area.title}
        description={area.summary}
        crumbs={[{ label: "What We Do", to: "/what-we-do" }, { label: area.title }]}
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Capabilities" title="What this practice covers" />
          <ul className="mt-12 grid flush-grid sm:grid-cols-2 lg:grid-cols-3">
            {area.capabilities.map((capability: string) => (
              <li key={capability} className="bg-background p-7 text-base font-semibold">
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Our Approach" title="How the work runs" />
          <ol className="mt-12 grid flush-grid md:grid-cols-5">
            {approach.map((phase) => (
              <li key={phase.step} className="bg-surface p-7">
                <span className="text-2xl font-bold text-primary">{phase.step}</span>
                <h3 className="mt-4 text-base font-bold uppercase tracking-wide">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Also in What We Do" title="Other practice areas" />
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {others.map((item) => (
              <ChevronLink key={item.slug} to="/what-we-do/$slug" params={{ slug: item.slug }}>
                {item.title}
              </ChevronLink>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
