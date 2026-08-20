import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "@/components/site/logo";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { LanguageToggle } from "@/components/site/language-toggle";
import { SiteSearch } from "@/components/site/site-search";
import { cn } from "@/lib/utils";
import { practiceAreas, solutionGroups } from "@/content/site";

type NavLink = { label: string; to: string; description?: string };

type NavGroup = {
  label: string;
  to: string;
  blurb: string;
  links: NavLink[];
};

export const megaMenu: NavGroup[] = [
  {
    label: "What We Do",
    to: "/what-we-do",
    blurb: "Four practice areas that move business performance.",
    links: practiceAreas.map((area) => ({
      label: area.title,
      to: `/what-we-do/${area.slug}`,
      description: area.summary,
    })),
  },
  {
    label: "Who We Are",
    to: "/who-we-are",
    blurb: "How HARAKA works and who does the work.",
    links: [
      { label: "About HARAKA", to: "/who-we-are" },
      { label: "Our Approach", to: "/who-we-are/approach" },
      { label: "Why HARAKA", to: "/who-we-are/why-haraka" },
      { label: "Our People", to: "/who-we-are/our-people" },
      { label: "Our Ecosystem", to: "/who-we-are/ecosystem" },
    ],
  },
  {
    label: "Solutions",
    to: "/solutions",
    blurb: "Solutions organized around business needs.",
    links: [
      ...solutionGroups.map((group) => ({
        label: group.navLabel,
        to: `/solutions/${group.slug}`,
        description: group.summary,
      })),
      {
        label: "HARAKA Products",
        to: "/products",
        description: "Technology designed around real business needs.",
      },
    ],
  },
];

const simpleLinks: NavLink[] = [
  { label: "What We Think", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

// Desktop order per spec: What We Do, What We Think, Who We Are, Solutions, Careers, Contact
const desktopOrder: (NavGroup | NavLink)[] = [
  megaMenu[0]!,
  simpleLinks[0]!,
  megaMenu[1]!,
  megaMenu[2]!,
  simpleLinks[1]!,
  simpleLinks[2]!,
];

function isGroup(item: NavGroup | NavLink): item is NavGroup {
  return "links" in item;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-xl"
          : "border-transparent bg-background",
      )}
      onMouseLeave={() => setOpen(null)}
    >
      <div
        className={cn(
          "mx-auto grid w-full max-w-[110rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 transition-all duration-300 lg:px-12",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <div className="flex min-w-0 items-center gap-8">
          <Link to="/" aria-label="HARAKA home" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {desktopOrder.map((item) =>
              isGroup(item) ? (
                <div key={item.label} onMouseEnter={() => setOpen(item.label)}>
                  <Link
                    to={item.to}
                    className={cn(
                      "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      open === item.label && "text-primary",
                    )}
                    activeProps={{ className: "text-primary" }}
                    onFocus={() => setOpen(item.label)}
                  >
                    {item.label}
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                  onMouseEnter={() => setOpen(null)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search the site"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-4 w-4" />
          </Button>
          <LanguageToggle />
          <ThemeToggle />

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 px-4 pb-10">
                <Accordion type="single" collapsible>
                  {megaMenu.map((group) => (
                    <AccordionItem key={group.label} value={group.label}>
                      <AccordionTrigger className="text-base font-medium">
                        {group.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-3 pb-2">
                          <Link
                            to={group.to}
                            onClick={() => setMobileOpen(false)}
                            className="text-sm font-medium text-primary"
                          >
                            All {group.label.toLowerCase()}
                          </Link>
                          {group.links.map((link) => (
                            <Link
                              key={link.to}
                              to={link.to}
                              onClick={() => setMobileOpen(false)}
                              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="mt-6 flex flex-col gap-4">
                  {simpleLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <LanguageToggle className="inline-flex lg:hidden" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mega menu panel */}
      {megaMenu.map((group) =>
        open === group.label ? (
          <div
            key={group.label}
            className="absolute inset-x-0 top-full hidden border-b border-border bg-background/98 backdrop-blur-xl lg:block"
          >
            <div className="mx-auto grid w-full max-w-[110rem] grid-cols-12 gap-10 px-6 py-10 lg:px-12">
              <div className="col-span-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {group.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {group.blurb}
                </p>
                <Link
                  to={group.to}
                  onClick={() => setOpen(null)}
                  className="mt-4 inline-flex text-sm font-medium text-foreground underline underline-offset-4 hover:text-primary"
                >
                  View all
                </Link>
              </div>
              <div className="col-span-9 grid grid-cols-3 gap-x-8 gap-y-4">
                {group.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(null)}
                    className="group rounded-md p-3 transition-colors hover:bg-muted"
                  >
                    <span className="block text-sm font-medium transition-colors group-hover:text-primary">
                      {link.label}
                    </span>
                    {link.description ? (
                      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                        {link.description}
                      </span>
                    ) : null}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null,
      )}

      <SiteSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
