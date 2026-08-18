import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — HARAKA" },
      { name: "description", content: "How HARAKA collects, uses and protects personal information submitted through this website." },
      { property: "og:title", content: "Privacy Policy — HARAKA" },
      { property: "og:description", content: "How HARAKA handles personal information." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.lovable.app/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="How we handle the information you share with us." crumbs={[{ label: "Privacy Policy" }]} />
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>HARAKA collects personal information only when you choose to share it, for example when you submit an enquiry, request a consultation or subscribe to HARAKA Insights.</p>
          <p>We use this information to respond to your request, provide the services you ask for and send communications you have opted into. We do not sell personal information.</p>
          <p>Information is retained only as long as necessary for these purposes and is protected with appropriate technical and organisational measures.</p>
          <p>To access, correct or delete your information, contact us at info@haraka.rw.</p>
        </div>
      </section>
    </>
  );
}
