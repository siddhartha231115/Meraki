import { createFileRoute } from "@tanstack/react-router";
import { PROGRAMS, SITE } from "@/lib/site";
import { AnchorMethod, Faq, FinalCta, PageHeader, SectionHeading, Services } from "@/components/site/sections";

export const Route = createFileRoute("/coaching")({
  head: () => ({
    meta: [
      { title: "Coaching Services | Meraki Coaching" },
      {
        name: "description",
        content:
          "Free clarity calls, private 1:1 coaching, the three-week Self-Worth Reset, and the six-week Identity Reclaim — online sessions for clarity and confidence.",
      },
      { property: "og:title", content: "Coaching Services | Meraki Coaching" },
      {
        property: "og:description",
        content: "Explore Meraki’s free clarity call, 1:1 coaching, Self-Worth Reset, and Identity Reclaim.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Coaching,
});

function Coaching() {
  return (
    <>
      <PageHeader eyebrow="Coaching services" title="Ways we can work together.">
        <p>Every journey begins with a free conversation. From there, we choose the support that suits you.</p>
      </PageHeader>
      <section className="container-page py-24">
        <Services />
        <p className="placeholder-note mt-8 inline-block text-sm">[Confirm 1:1 session length, frequency, and packages.]</p>
      </section>

      <section id="programs" className="bg-cream blend-cream blend-t py-24 md:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="Two programs" title="Which program fits you?" center>
            <p>Both run online, and both begin with a free conversation.</p>
          </SectionHeading>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PROGRAMS.map((p) => (
              <article key={p.name} className="card-soft p-8">
                <p className="eyebrow mb-3">{p.weeks} weeks</p>
                <h2 className="text-3xl">{p.name}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.blurb}</p>
                <p className="mt-5 font-serif text-xl text-sage">{p.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AnchorMethod className="blend-cream blend-b" />
      <section className="container-page py-24">
        <SectionHeading eyebrow="FAQ" title="Before you begin." center />
        <div className="mt-14">
          <Faq />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
