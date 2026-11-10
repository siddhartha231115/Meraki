import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { AnchorMethod, Faq, FinalCta, PageHeader, SectionHeading, Services } from "@/components/site/sections";

export const Route = createFileRoute("/coaching")({
  head: () => ({
    meta: [
      { title: "Coaching Services | Meraki Coaching" },
      { name: "description", content: "Free clarity calls, private 1:1 coaching, and the 6-Week RESET guided by the ANCHOR Method — online sessions for clarity and confidence." },
      { property: "og:title", content: "Coaching Services | Meraki Coaching" },
      { property: "og:description", content: "Explore Meraki’s free clarity call, 1:1 coaching, and the 6-Week RESET." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Coaching,
});

function Coaching() {
  return (
    <main>
      <PageHeader eyebrow="Coaching services" title="Ways we can work together.">
        <p>Every journey begins with a free conversation. From there, we choose the support that suits you.</p>
      </PageHeader>
      <section className="container-page py-24">
        <Services />
      </section>
      <section className="bg-cream blend-cream blend-t py-24">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl">1:1 Coaching</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Private sessions shaped around what you bring. We set clear intentions, build a realistic action plan,
              and check in on your progress with steady accountability.
            </p>
            <p className="mt-4 font-serif text-xl text-sage">{SITE.prices.oneToOne}</p>
            <p className="placeholder-note mt-2 inline-block text-sm">[Confirm session length, frequency, and packages.]</p>
          </div>
          <div>
            <h2 className="text-4xl">The 6-Week RESET</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A structured {SITE.prices.programWeeks}-week journey with weekly private coaching, reflection exercises, and
              a personalized plan — one letter of the ANCHOR Method each week: Acknowledge, Notice, Check, Honour, Own,
              Return.
            </p>
            <p className="mt-4 font-serif text-xl text-sage">{SITE.prices.program}</p>
          </div>
        </div>
      </section>
      <AnchorMethod className="blend-cream blend-b" />
      <section className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading eyebrow="FAQ" title="Before you begin." />
        <Faq />
      </section>
      <FinalCta />
    </main>
  );
}
