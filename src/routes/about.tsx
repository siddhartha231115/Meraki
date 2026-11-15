import { createFileRoute } from "@tanstack/react-router";
import coachAsset from "@/assets/srimathi-portrait.jpg.asset.json";
const coach = coachAsset.url;
import { COACH_INTRO, SITE } from "@/lib/site";
import { FinalCta, PageHeader } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Coach | Meraki Coaching" },
      { name: "description", content: "Meet Srimathi, the coach behind Meraki, offering online coaching for self-worth, boundaries, and identity." },
      { property: "og:title", content: "About the Coach | Meraki Coaching" },
      { property: "og:description", content: "Meet Srimathi and explore Meraki’s online coaching for self-worth, boundaries, and identity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: coach },
      { name: "twitter:image", content: coach },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About Me" title={SITE.coachName}>
        <p>Meraki Life Coaching</p>
      </PageHeader>
      <section className="container-page grid gap-14 py-20 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <img src={coach} alt={`Portrait of ${SITE.coachName}`} width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover object-left shadow-lift" />
        </Reveal>
        <Reveal className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>{COACH_INTRO.audience}</p>
          <p>{COACH_INTRO.sessions}</p>
        </Reveal>
      </section>
      <FinalCta />
    </>
  );
}
