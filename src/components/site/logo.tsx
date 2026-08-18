import logo from "@/assets/haraka logo.png";
import { cn } from "@/lib/utils";
import { company } from "@/content/site";

export function Logo({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "inverse";
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <img
        src={logo}
        alt={`${company.shortName} logo`}
        width={40}
        height={40}
        className="h-9 w-9 rounded-md"
      />
      <span
        className={cn(
          "text-lg font-semibold tracking-tight leading-none",
          tone === "inverse" ? "text-navy-foreground" : "text-foreground",
        )}
      >
        HARAKA
      </span>
    </span>
  );
}
