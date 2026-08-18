import { ClientOnly, createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { ChevronLink } from "@/components/site/chevron-link";
import { LogoMarquee } from "@/components/site/logo-marquee";
import {
  approach,
  company,
  ecosystem,
  ecosystemPartners,
  insights,
  insightsMeta,
  practiceAreas,
  priorityIndustries,
  solutionGroups,
  stats,
  careers as careersContent,
  contact as contactContent,
} from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HARAKA — Business & Technology Transformation" },
      {
        name: "description",
        content:
          "HARAKA helps organizations transform, operate better and grow through strategy, technology and innovation.",
      },
      { property: "og:title", content: "HARAKA — Business & Technology Transformation" },
      {
        property: "og:description",
        content:
          "Transforming Business. Enabling Growth. Strategy, technology, digital transformation and business growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.name,
          slogan: company.tagline,
          description: company.promise,
          email: company.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kigali",
            addressCountry: "RW",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const HeroTerrain = lazy(() => import("@/components/site/hero-terrain"));

import { heroRevealVariant } from "@/components/site/animations";

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow text-primary">{eyebrow}</p> : null}
      <h2 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="surface-ink relative overflow-hidden">
      <div className="absolute inset-0">
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <HeroTerrain />
          </Suspense>
        </ClientOnly>
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.115 0.018 254 / 0.78) 0%, oklch(0.115 0.018 254 / 0.42) 45%, oklch(0.115 0.018 254) 100%)",
        }}
      />
      <div className="relative mx-auto flex min-h-[78vh] w-full max-w-[110rem] flex-col justify-center px-6 pb-20 pt-24 lg:px-12 lg:pb-28 lg:pt-32">
        <Reveal variant={heroRevealVariant}>
          <p className="eyebrow text-primary">{company.descriptor}</p>
          <h1 className="mt-8 max-w-[18ch] text-4xl font-bold leading-[1.03] tracking-tight text-navy-foreground sm:text-6xl lg:text-[5.25rem]">
            Transforming Business.
            <br />
            Enabling Growth.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy-foreground/75">
            {company.promise}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/what-we-do">What We Do</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-navy-foreground/30 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
            >
              <Link to="/contact">Talk to HARAKA</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />

      {/* 1. What We Do */}
      <section className="section-y">
        <div className="mx-auto w-full max-w-[110rem] px-6 lg:px-12">
          <SectionTitle
            eyebrow="What We Do"
            title="Four practice areas, one transformation agenda"
            description="We work across strategy, technology, digital transformation and growth — always starting from the business problem."
          />
          <div className="mt-14 grid flush-grid sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((area, index) => (
              <Reveal key={area.slug} delay={index * 0.05}>
                <Link
                  to="/what-we-do/$slug"
                  params={{ slug: area.slug }}
                  className="group flex h-full flex-col bg-background p-8 tile-hover hover:bg-foreground hover:text-background"
                >
                  <span className="text-3xl font-bold text-primary">{area.number}</span>
                  <h3 className="mt-5 text-xl font-bold leading-snug">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-background/70">
                    {area.summary}
                  </p>
                  <ul className="mt-6 space-y-1.5 text-sm text-muted-foreground group-hover:text-background/70">
                    {area.capabilities.slice(0, 4).map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem partner marquee */}
      {ecosystemPartners.length ? (
        <section className="border-y border-border py-12 lg:py-16">
          <p className="mx-auto mb-8 w-full max-w-[110rem] px-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:px-12">
            Our partners
          </p>
          <LogoMarquee logos={ecosystemPartners} />
        </section>
      ) : null}

      {/* 2. Industries */}
      <section className="section-y bg-surface">
        <div className="mx-auto w-full max-w-[110rem] px-6 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              eyebrow="Industries"
              title="Industry knowledge applied to real operations"
            />
            <ChevronLink to="/industries">All industries</ChevronLink>
          </div>
          <div className="mt-12 grid flush-grid sm:grid-cols-2 lg:grid-cols-4">
            {priorityIndustries.map((industry) => (
              <Link
                key={industry.slug}
                to="/industries"
                className="group flex items-center bg-background p-7 text-base font-semibold tile-hover hover:bg-foreground hover:text-background"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solutions */}
      <section className="section-y">
        <div className="mx-auto w-full max-w-[110rem] px-6 lg:px-12">
          <SectionTitle
            eyebrow="Solutions"
            title="Solutions organized around business needs"
            description="Not a software catalogue — four groups of capability built around what organizations are trying to achieve."
          />
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {solutionGroups.map((group, index) => (
              <Reveal key={group.slug} delay={index * 0.05}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: group.slug }}
                  className="group flex h-full flex-col bg-surface p-9 tile-hover hover:bg-foreground hover:text-background"
                >
                  <p className="eyebrow text-primary">{group.title}</p>
                  <p className="mt-4 text-lg font-semibold leading-snug">{group.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground group-hover:text-background/70">
                    {group.items.map((item) => (
                      <li key={item.title}>{item.title}</li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <ChevronLink to="/products">HARAKA Products</ChevronLink>
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="section-y bg-surface">
        <div className="mx-auto w-full max-w-[110rem] px-6 lg:px-12">
          <SectionTitle
            eyebrow="Our Approach"
            title="Five stages, from discovery to growth"
          />
          <div className="relative mt-14">
            {/* The progress line background */}
            <div className="absolute left-0 top-0 hidden h-1 w-full bg-border md:block" />
            <ol className="grid flush-grid md:grid-cols-5 md:pt-1">
              {approach.map((phase, index) => (
                <li key={phase.step} className="group relative bg-background p-8 hover:bg-surface transition-colors">
                  <div className="absolute inset-x-0 top-0 h-1 bg-primary scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  <span className="text-3xl font-bold text-primary">{phase.step}</span>
                  <h3 className="mt-5 text-lg font-bold uppercase tracking-wide">{phase.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {phase.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* STRATEGY TO EXECUTION */}
      <section className="surface-ink py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[110rem] px-6 text-center lg:px-12">
          <h2 className="display-statement text-[13vw] text-navy-foreground sm:text-[8vw] lg:text-[5.5rem] uppercase">
            STRATEGY TO EXECUTION
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-foreground/70">
            Business strategy, technology solutions, and implementation — all through one trusted partner.
          </p>

          <div className="mt-10 flex justify-center text-navy-foreground">
            <ChevronLink to="/who-we-are">See how we work</ChevronLink>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-y-14 gap-x-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-primary lg:text-5xl">{stat.value}</p>
                <p className="mt-3 text-sm font-semibold text-navy-foreground">{stat.label}</p>
                {('subLabel' in stat) && (
                  <p className="mt-1 text-sm text-navy-foreground/60">{stat.subLabel}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HARAKA Insights */}
      <section className="section-y">
        <div className="mx-auto w-full max-w-[110rem] px-6 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="What We Think" title={insightsMeta.title} description={insightsMeta.description} />
            <ChevronLink to="/insights">All insights</ChevronLink>
          </div>
          <div className="mt-14 grid flush-grid sm:grid-cols-2 lg:grid-cols-4">
            {insights.slice(0, 4).map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05}>
                <Link
                  to="/insights"
                  className="group flex h-full flex-col bg-background p-8 tile-hover hover:bg-foreground hover:text-background"
                >
                  <span className="eyebrow text-primary">{post.category}</span>
                  <h3 className="mt-4 text-lg font-bold leading-snug">{post.title}</h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-muted-foreground group-hover:text-background/70">
                    {post.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* 6. Our Ecosystem */}
      <section className="section-y bg-surface">
        <div className="mx-auto grid w-full max-w-[110rem] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <SectionTitle eyebrow="Our Ecosystem" title="Capability brought in where it counts" description={ecosystem.statement} />
          <div>
            <ul className="grid grid-cols-2 flush-grid">
              {ecosystem.categories.map((category) => (
                <li key={category} className="bg-surface p-6 text-sm font-semibold">
                  {category}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ChevronLink to="/who-we-are/ecosystem">About our ecosystem</ChevronLink>
            </div>
          </div>
        </div>
      </section>



      {/* 7. Careers CTA */}
      <section className="section-y">
        <div className="mx-auto grid w-full max-w-[110rem] items-center gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:px-12">
          <div>
            <p className="eyebrow text-primary">Careers</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {careersContent.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              {careersContent.copy}
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/careers">Explore careers</Link>
          </Button>
        </div>
      </section>

      {/* 8. Contact */}
      <section className="section-y bg-surface">
        <div className="mx-auto w-full max-w-[110rem] px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {contactContent.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
              {contactContent.copy}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">{contactContent.primaryCta}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">{contactContent.secondaryCta}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
