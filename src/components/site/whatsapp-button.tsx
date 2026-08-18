import { MessageCircle } from "lucide-react";

import { company } from "@/content/site";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello HARAKA, I would like to discuss a potential engagement.",
  );

  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with HARAKA on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
