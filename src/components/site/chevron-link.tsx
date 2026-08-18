import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ChevronLinkProps = {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
  className?: string;
};

export function ChevronLink({ to, params, children, className }: ChevronLinkProps) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      params={params as never}
      className={cn("chevron-link text-sm", className)}
    >
      <span>{children}</span>
      <span className="chev" aria-hidden>
        <ChevronRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
