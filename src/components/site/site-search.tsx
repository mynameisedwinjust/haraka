import { useNavigate } from "@tanstack/react-router";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { industries, insights, practiceAreas, products, solutionGroups } from "@/content/site";

const staticPages = [
  { label: "Home", to: "/" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "HARAKA Insights", to: "/insights" },
  { label: "About HARAKA", to: "/who-we-are" },
  { label: "Our Approach", to: "/who-we-are/approach" },
  { label: "Why HARAKA", to: "/who-we-are/why-haraka" },
  { label: "Our People", to: "/who-we-are/our-people" },
  { label: "Our Ecosystem", to: "/who-we-are/ecosystem" },
  { label: "Solutions", to: "/solutions" },
  { label: "HARAKA Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export function SiteSearch({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const navigate = useNavigate();

  const go = (to: string) => {
    onOpenChange(false);
    void navigate({ to });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search HARAKA…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {staticPages.map((page) => (
            <CommandItem key={page.to} value={page.label} onSelect={() => go(page.to)}>
              {page.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="What We Do">
          {practiceAreas.map((area) => (
            <CommandItem
              key={area.slug}
              value={area.title}
              onSelect={() => go(`/what-we-do/${area.slug}`)}
            >
              {area.title}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Solutions">
          {solutionGroups.map((group) => (
            <CommandItem
              key={group.slug}
              value={group.title}
              onSelect={() => go(`/solutions/${group.slug}`)}
            >
              {group.title}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Industries">
          {industries.map((industry) => (
            <CommandItem
              key={industry.slug}
              value={industry.name}
              onSelect={() => go("/industries")}
            >
              {industry.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Products">
          {products.map((product) => (
            <CommandItem key={product.slug} value={product.name} onSelect={() => go("/products")}>
              {product.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Insights">
          {insights.map((post) => (
            <CommandItem key={post.slug} value={post.title} onSelect={() => go("/insights")}>
              {post.title}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
