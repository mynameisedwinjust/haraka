import { Quote } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials, testimonialsPublished } from "@/content/site";

/**
 * Testimonials are DRAFT placeholders. Nothing renders publicly until
 * `testimonialsPublished` is true, which requires real, approved client quotes.
 */
export function TestimonialsCarousel() {
  if (!testimonialsPublished) return null;

  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <figure className="flex h-full flex-col justify-between border border-border bg-card p-8">
              <Quote className="h-8 w-8 text-primary" aria-hidden />
              <blockquote className="mt-6 text-lg leading-relaxed text-foreground">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5 text-sm">
                <span className="block font-medium text-foreground">{testimonial.role}</span>
                <span className="mt-1 block text-muted-foreground">{testimonial.org}</span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex gap-3">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}
