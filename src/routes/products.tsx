import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";
import { CtaSection } from "@/components/site/cta-section";
import { products, productsIntro } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "HARAKA Products — Technology Built Around Business Needs" },
      { name: "description", content: "HARAKA ERP, CRM, POS, Marketplace, Healthcare and Property Management, and AI Business Solutions." },
      { property: "og:title", content: "HARAKA Products" },
      { property: "og:description", content: productsIntro },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.lovable.app/products" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.lovable.app/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const flagship = products.filter((p) => p.tier === "flagship");
  const core = products.filter((p) => p.tier === "core");
  const emerging = products.filter((p) => p.tier === "emerging");

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="HARAKA Products"
        description={productsIntro}
        crumbs={[{ label: "Solutions", to: "/solutions" }, { label: "HARAKA Products" }]}
      />

      <section className="section-y">
        <div className="container-page">
          <div className="grid flush-grid lg:grid-cols-2">
            {flagship.map((product) => (
              <article key={product.slug} className="bg-background p-10">
                <p className="eyebrow text-primary">Flagship</p>
                <h2 className="mt-5 text-3xl font-bold">{product.name}</h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{product.summary}</p>
              </article>
            ))}
          </div>

          <div className="mt-px grid flush-grid sm:grid-cols-3">
            {core.map((product) => (
              <article key={product.slug} className="bg-background p-8">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
              </article>
            ))}
          </div>

          <div className={cn("mt-px grid flush-grid sm:grid-cols-2")}>
            {emerging.map((product) => (
              <article key={product.slug} className="bg-surface p-7">
                <h2 className="text-base font-bold">{product.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
