import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — HARAKA" },
      { name: "description", content: "The terms that apply to your use of the HARAKA website and its content." },
      { property: "og:title", content: "Terms of Use — HARAKA" },
      { property: "og:description", content: "Terms governing use of the HARAKA website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.lovable.app/terms" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" description="The terms that apply when you use this website." crumbs={[{ label: "Terms of Use" }]} />
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>The content on this website is provided for general information about HARAKA and its services. It does not constitute professional advice and should not be relied on as such.</p>
          <p>All trademarks, text, graphics and other material on this site belong to HARAKA or its licensors and may not be reproduced without permission.</p>
          <p>Technology and capability relationships referenced on this site do not imply endorsement by those organisations.</p>
          <p>Questions about these terms can be sent to info@haraka.rw.</p>
        </div>
      </section>
    </>
  );
}
