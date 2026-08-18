import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, X } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { CtaSection } from "@/components/site/cta-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/site/reveal";
import { fadeUpVariant, staggerContainer } from "@/components/site/animations";
import { insightTags, insights, insightsMeta } from "@/content/site";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "HARAKA Insights — Business, Technology and Growth" },
      { name: "description", content: insightsMeta.description },
      { property: "og:title", content: "HARAKA Insights" },
      { property: "og:description", content: insightsMeta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://haraka-vision.com/insights" },
    ],
    links: [{ rel: "canonical", href: "https://haraka-vision.com/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const [category, setCategory] = useState<string>("All");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const toggleTag = (tag: string) =>
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]));

  const reset = () => {
    setCategory("All");
    setActiveTags([]);
    setQuery("");
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return insights.filter((post) => {
      if (category !== "All" && post.category !== category) return false;
      if (activeTags.length && !activeTags.every((tag) => post.tags.includes(tag))) return false;
      if (!q) return true;
      return [post.title, post.excerpt, post.category, ...post.tags].join(" ").toLowerCase().includes(q);
    });
  }, [category, activeTags, query]);

  const hasFilters = category !== "All" || activeTags.length > 0 || query.trim() !== "";

  return (
    <>
      <PageHero
        eyebrow="What We Think"
        title={insightsMeta.title}
        description={insightsMeta.description}
        crumbs={[{ label: "HARAKA Insights" }]}
      />
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="space-y-6">
              <div>
                <p className="eyebrow text-primary">Filter by category</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["All", ...insightsMeta.categories].map((item) => {
                    const count =
                      item === "All" ? insights.length : insights.filter((post) => post.category === item).length;
                    return (
                      <Button
                        key={item}
                        size="sm"
                        variant={category === item ? "default" : "outline"}
                        onClick={() => setCategory(item)}
                        aria-pressed={category === item}
                      >
                        {item}
                        <span className="ml-2 opacity-60">{count}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="eyebrow text-primary">Filter by tag</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {insightTags.map((tag) => {
                    const active = activeTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        aria-pressed={active}
                        className={`border px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors ${
                          active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:w-80">
              <label htmlFor="insights-search" className="eyebrow text-primary">
                Search insights
              </label>
              <div className="relative mt-3">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="insights-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search titles, topics, tags…"
                  className="pl-9"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              Showing {filtered.length} of {insights.length} perspectives
            </p>
            {hasFilters ? (
              <Button size="sm" variant="ghost" onClick={reset}>
                <X className="mr-1 size-4" /> Clear filters
              </Button>
            ) : null}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-14 text-sm text-muted-foreground">
              No perspectives match these filters yet. Try a different category, tag or search term.
            </p>
          ) : (
            <Reveal variant={staggerContainer} className="mt-10 grid flush-grid sm:grid-cols-2">
              {filtered.map((post) => (
                <Reveal key={post.slug} variant={fadeUpVariant} delay={0}>
                  <article className="bg-background p-9 h-full flex flex-col">
                    <p className="eyebrow text-primary">{post.category}</p>
                    <h2 className="mt-4 text-2xl font-bold leading-snug">{post.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-6 mt-auto flex flex-wrap gap-2 pt-4">
                      {post.tags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleTag(tag)}
                          className="border border-border px-2.5 py-1 text-[11px] uppercase tracking-wide text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </Reveal>
          )}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
