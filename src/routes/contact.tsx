import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { BookingForm } from "@/components/site/Booking";
import { PageHeader } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book a Clarity Call | Meraki Coaching" },
      { name: "description", content: "Get in touch with Meraki or request a free 30-minute clarity call." },
      { property: "og:title", content: "Contact Meraki Coaching" },
      { property: "og:description", content: "Request a free 30-minute clarity call or send a message." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main>
      <PageHeader eyebrow="Contact" title="Let’s start with a conversation.">
        <p>Request your free clarity call below, or write to me directly.</p>
      </PageHeader>
      <section className="container-page grid gap-14 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl">Email</h2>
            <a href={`mailto:${SITE.email}`} className="text-muted-foreground underline underline-offset-4">{SITE.email}</a>
          </div>
          <div>
            <h2 className="text-2xl">Instagram</h2>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline underline-offset-4">Follow along</a>
          </div>
          <div>
            <h2 className="text-2xl">Where</h2>
            <p className="text-muted-foreground">{SITE.location}</p>
          </div>
          <p className="rounded-2xl bg-rose-soft/70 p-5 text-sm leading-relaxed">
            If you are in crisis or thinking about harming yourself, please contact your local emergency services or a
            crisis line right away. Coaching cannot provide emergency support.
          </p>
        </div>
        <div className="card-soft p-8 md:p-10">
          <h2 className="mb-6 text-3xl">Request a free clarity call</h2>
          <BookingForm />
        </div>
      </section>
    </main>
  );
}
