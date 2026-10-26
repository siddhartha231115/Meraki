import { createFileRoute } from "@tanstack/react-router";
import coach from "@/assets/coach.jpg";
import { SITE } from "@/lib/site";
import { FinalCta, PageHeader } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Coach | Meraki Coaching" },
      { name: "description", content: "Meet the coach behind Meraki and learn about a warm, honest, practical approach to life coaching." },
      { property: "og:title", content: "About the Coach | Meraki Coaching" },
      { property: "og:description", content: "Meet the coach behind Meraki and the values that guide every session." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <PageHeader eyebrow="My story" title="Support that feels human, practical, and personal.">
        <p>Hi, I’m {SITE.coachName} — the person behind Meraki.</p>
      </PageHeader>
      <section className="container-page grid gap-14 py-20 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <img src={coach} alt={`Portrait of ${SITE.coachName}`} width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift" />
        </Reveal>
        <Reveal className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <p className="placeholder-note inline text-sm">Placeholder story — please rewrite in your own words.</p>
          <p>
            For a long time I was the reliable one — the person who kept everything moving while quietly losing track of
            what I actually wanted. Meraki grew out of the slow, sometimes messy work of finding my way back.
          </p>
          <p>
            Meraki is a Greek word for doing something with soul, creativity, and love. It is how I hope you will learn
            to approach your own life: with care, intention, and a little more room for yourself.
          </p>
          <h2 className="pt-4 text-3xl">Background</h2>
          <p className="placeholder-note">[Add your training, credentials, and relevant experience here. Only list qualifications you genuinely hold.]</p>
          <h2 className="pt-4 text-3xl">What guides my work</h2>
          <ul className="space-y-4">
            <li><strong className="font-serif text-xl">Compassion.</strong> You are met as a whole person, without judgment.</li>
            <li><strong className="font-serif text-xl">Honesty.</strong> Kind, clear reflections — even when they are hard to hear.</li>
            <li><strong className="font-serif text-xl">Practical progress.</strong> Insight matters most when it changes how you live.</li>
          </ul>
        </Reveal>
      </section>
      <FinalCta />
    </main>
  );
}
