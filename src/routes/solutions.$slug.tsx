import { createFileRoute, notFound } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaSection } from "@/components/site/cta-section";
import { ChevronLink } from "@/components/site/chevron-link";
import { solutionGroups, type SolutionGroup } from "@/content/site";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }): { group: SolutionGroup } => {
    const group = solutionGroups.find((item) => item.slug === params.slug);
    if (!group) throw notFound();
    return { group };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable — HARAKA" }, { name: "robots", content: "noindex" }] };
    }
    const { group } = loaderData;
    const url = `https://haraka-vision.com/solutions/${params.slug}`;
    return {
      meta: [
        { title: `${group.title} — HARAKA Solutions` },
        { name: "description", content: group.summary },
        { property: "og:title", content: `${group.title} — HARAKA Solutions` },
        { property: "og:description", content: group.summary },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: SolutionGroupPage,
});

function SolutionGroupPage() {
  const { group } = Route.useLoaderData();
  const others = solutionGroups.filter((item) => item.slug !== group.slug);

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={group.title}
        description={group.summary}
        crumbs={[{ label: "Solutions", to: "/solutions" }, { label: group.title }]}
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="In this group" title="What we implement" />
          <ul className="mt-12 grid flush-grid sm:grid-cols-2 lg:grid-cols-2">
            {group.items.map((item) => (
              <li key={item.title} className="bg-background p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-navy-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Other solution groups" title="Explore more" />
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {others.map((item) => (
              <ChevronLink key={item.slug} to="/solutions/$slug" params={{ slug: item.slug }}>
                {item.title}
              </ChevronLink>
            ))}
            <ChevronLink to="/products">HARAKA Products</ChevronLink>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
