import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "haraka-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-lg border border-border bg-card p-5 shadow-elevated sm:inset-x-6 md:left-6 md:right-auto md:max-w-md"
    >
      <p className="text-sm leading-relaxed text-muted-foreground">
        We use essential cookies to run this site and optional analytics cookies to
        understand how it is used. You can decline analytics without affecting site
        functionality.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button size="sm" onClick={() => decide("accepted")}>
          Accept all
        </Button>
        <Button size="sm" variant="outline" onClick={() => decide("declined")}>
          Essential only
        </Button>
      </div>
    </div>
  );
}
