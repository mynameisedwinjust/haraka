import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { contact } from "@/content/site";

export function CtaSection({
  title = contact.headline,
  description = contact.copy,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <Reveal className="group surface-navy relative overflow-hidden px-8 py-16 lg:px-16 lg:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-1000 ease-out group-hover:opacity-100" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight text-navy-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-foreground/70">
              {description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  {contact.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-navy-foreground/30 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
              >
                <Link to="/contact">{contact.secondaryCta}</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
