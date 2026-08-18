import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/site/breadcrumbs";
import { Reveal } from "@/components/site/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="surface-navy relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]"
      />
      <div className="container-page relative pb-20 pt-12 lg:pb-28 lg:pt-16">
        <Breadcrumbs items={crumbs} />
        <Reveal className="mt-10 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-navy-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/70">
            {description}
          </p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
