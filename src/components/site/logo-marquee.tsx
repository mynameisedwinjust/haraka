import { cn } from "@/lib/utils";

export type MarqueeLogo = {
  /** Organization name — used for the image alt text. */
  name: string;
  /** Path or URL to the logo image asset. */
  logo: string;
};

/**
 * Reusable infinite horizontal logo marquee.
 * Add logos to the source array — the loop, spacing and responsiveness adapt
 * automatically. Nothing renders when no logos are supplied.
 */
export function LogoMarquee({
  logos,
  className,
  speedSeconds = 40,
  label = "Ecosystem partner logos",
}: {
  logos: readonly MarqueeLogo[];
  className?: string;
  speedSeconds?: number;
  label?: string;
}) {
  if (!logos.length) return null;

  // Repeat enough times that the track always overflows the viewport, then
  // duplicate the whole sequence once more for a seamless -50% loop.
  const repeats = Math.max(2, Math.ceil(8 / logos.length));
  const base = Array.from({ length: repeats }, () => logos).flat();
  const track = [...base, ...base];

  return (
    <div
      className={cn("logo-marquee group relative w-full overflow-hidden", className)}
      role="group"
      aria-label={label}
    >
      <ul
        className="logo-marquee-track flex w-max items-center gap-12 sm:gap-16 lg:gap-24"
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {track.map((item, index) => (
          <li
            key={`${item.name}-${index}`}
            className="shrink-0"
            aria-hidden={index >= base.length ? true : undefined}
          >
            <img
              src={item.logo}
              alt={index >= base.length ? "" : item.name}
              loading="lazy"
              decoding="async"
              className="h-8 w-auto max-w-[10rem] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-9 lg:h-11 lg:max-w-[13rem]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
