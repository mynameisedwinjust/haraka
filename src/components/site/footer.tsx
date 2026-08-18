import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/site/logo";
import { company, practiceAreas } from "@/content/site";

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "What We Do",
    links: practiceAreas.map((area) => ({
      label: area.title,
      to: `/what-we-do/${area.slug}`,
    })),
  },
  {
    title: "Solutions",
    links: [
      { label: "Business Solutions", to: "/solutions/business-management" },
      { label: "Industry Solutions", to: "/solutions/industry-solutions" },
      { label: "HARAKA Products", to: "/products" },
    ],
  },
  {
    title: "What We Think",
    links: [{ label: "HARAKA Insights", to: "/insights" }],
  },
  {
    title: "Who We Are",
    links: [
      { label: "About HARAKA", to: "/who-we-are" },
      { label: "Our People", to: "/who-we-are/our-people" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="surface-navy">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="inverse" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              {company.descriptor}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-navy-foreground/70">
              <li>{company.addressLines.join(", ")}</li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-primary">
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://${company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  {company.website}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-sm text-navy-foreground/65 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-navy-foreground/10 pt-8 text-sm text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <Link to="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <span aria-hidden>·</span>
            <Link to="/terms" className="transition-colors hover:text-primary">
              Terms
            </Link>
          </div>
          <p>© {new Date().getFullYear()} HARAKA</p>
        </div>
      </div>
    </footer>
  );
}
