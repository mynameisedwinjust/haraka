import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { company, contact, practiceAreas } from "@/content/site";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  organisation: z.string().trim().min(2, "Please enter your organisation").max(120),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  interest: z.string().min(1, "Please select an area of interest"),
  message: z.string().trim().min(20, "Tell us a little more (20+ characters)").max(2000),
});

type ContactValues = z.infer<typeof contactSchema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact HARAKA — Book a Consultation in Kigali" },
      {
        name: "description",
        content:
          "Contact HARAKA in Kigali, Rwanda. Book a consultation, request a product demo or reach us on WhatsApp.",
      },
      { property: "og:title", content: "Contact HARAKA" },
      {
        property: "og:description",
        content: "Book a consultation with a HARAKA partner in Kigali, Rwanda.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      organisation: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactValues) => {
    // Submissions are stored once the backend is enabled in phase two.
    toast.success(`Thank you, ${values.name}. A HARAKA partner will respond within one business day.`);
    form.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with a conversation"
        description="Tell us what you are trying to move. We will come to the first meeting with a point of view, not a brochure."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Book a consultation" title="Send us a brief" />
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                          <Input maxLength={100} autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work email</FormLabel>
                        <FormControl>
                          <Input type="email" maxLength={255} autoComplete="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="organisation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organisation</FormLabel>
                        <FormControl>
                          <Input maxLength={120} autoComplete="organization" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (optional)</FormLabel>
                        <FormControl>
                          <Input maxLength={30} autoComplete="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area of interest</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a practice or product" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {practiceAreas.map((area) => (
                            <SelectItem key={area.slug} value={area.title}>
                              {area.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="Product demo">Product demo</SelectItem>
                          <SelectItem value="Careers">Careers</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What are you trying to achieve?</FormLabel>
                      <FormControl>
                        <Textarea rows={6} maxLength={2000} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                  Request consultation
                </Button>
              </form>
            </Form>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Kigali office
              </h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{company.addressLines.join(", ")}</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <a href={`mailto:${company.email}`} className="hover:text-primary">
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>

              <h3 className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                <Clock className="h-4 w-4" aria-hidden />
                Business hours
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {company.hours.map((entry) => (
                  <li key={entry.day} className="flex justify-between gap-4">
                    <span>{entry.day}</span>
                    <span>{entry.time}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-5 text-sm">
                {company.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <iframe
                title="HARAKA Kigali office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </aside>
        </div>
      </section>

    </>
  );
}
