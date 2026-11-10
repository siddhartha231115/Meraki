import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Feather, Heart, Shield, Sparkles, Sun } from "lucide-react";
import heroAsset from "@/assets/hero-photo.jpg.asset.json";
const hero = heroAsset.url;
import coachAsset from "@/assets/srimathi-portrait.jpg.asset.json";
const coach = coachAsset.url;
import bookAsset from "@/assets/anchor-book.jpg.asset.json";
const journal = bookAsset.url;
import { FAQS, SITE } from "@/lib/site";
import { BookButton } from "@/components/site/Booking";
import { Reveal } from "@/components/site/Reveal";
import { Faq, FinalCta, SectionHeading, Services, Sprig, Testimonials } from "@/components/site/sections";

const TITLE = "Meraki Coaching | Clarity, Confidence and Personal Growth";
const DESC =
  "Personal life coaching to help you build confidence, create healthy boundaries, gain clarity, and move forward with purpose.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Meraki",
          description: DESC,
          slogan: SITE.tagline,
          areaServed: SITE.location,
          email: SITE.email,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

const TOPICS = [
  { icon: Heart, title: "Self-Worth", text: "Learn to measure yourself by your own values, not by how much you give away." },
  { icon: Feather, title: "Identity", text: "Rediscover who you are beneath the roles, expectations, and old stories." },
  { icon: Shield, title: "Healthy Boundaries", text: "Say yes and no with kindness, steadiness, and far less guilt." },
  { icon: Sun, title: "Emotional Clarity", text: "Make sense of what you feel so it can guide you rather than overwhelm you." },
  { icon: Sparkles, title: "Confidence", text: "Build quiet, grounded trust in your choices and your voice." },
  { icon: Compass, title: "Life Direction", text: "Find a next step that feels honest — and the courage to take it." },
];

const STEPS = [
  { n: "01", t: "Connect", d: "Book a free clarity call." },
  { n: "02", t: "Clarify", d: "Identify where you are and where you want to go." },
  { n: "03", t: "Create", d: "Build a personalized coaching plan." },
  { n: "04", t: "Grow", d: "Take supported, practical action and review your progress." },
];

function Home() {
  return (
    <main id="top">
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream pt-28 md:pt-32">
        <div className="container-page grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28">
          <Reveal className="text-center">
            <p className="eyebrow mb-6">Life and mindset coaching</p>
            <h1 className="text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Come back to the person you were <em className="text-sage">always</em> meant to be.
            </h1>
            <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Personal coaching to help you quiet the noise, reconnect with yourself, and move forward with clarity and
              confidence.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <BookButton />
              <a href="#coaching" className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide">
                Explore Coaching
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
            </div>
            <p className="mt-10 text-sm text-muted-foreground">
              Private 1:1 coaching <span aria-hidden>·</span> Online sessions <span aria-hidden>·</span> A supportive,
              judgment-free space
            </p>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div className="absolute -left-6 -top-6 hidden size-40 rounded-full bg-rose-soft lg:block" aria-hidden />
            <img
              src={hero}
              alt="Srimathi seated at a cafe table with an open notebook and a pen, looking up toward the camera"
              width={960}
              height={960}
              fetchPriority="high"
              className="relative aspect-square w-full rounded-t-[12rem] rounded-b-3xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="Welcome to Meraki" title="Coaching created with soul, care, and intention." center>
            <p>
              Meraki is a supportive space for people who have spent years meeting expectations, caring for others, or
              simply surviving — and who are now ready to come home to themselves.
            </p>
          </SectionHeading>
          <Sprig className="mx-auto mt-8" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 100}>
                <article className="card-soft h-full p-7">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-sage-soft text-primary">
                    <t.icon className="size-5" strokeWidth={1.4} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-2xl">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-cream py-24 md:py-32">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={coach}
              alt={`Portrait of ${SITE.coachName}, Meraki life coach`}
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover object-left shadow-lift"
            />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Meet your coach" title="Support that feels human, practical, and personal.">
              <p>
                Hi, I’m {SITE.coachName}. I created Meraki after noticing how many thoughtful, capable people quietly
                lose touch with themselves while doing everything “right.”{" "}
                <span className="placeholder-note">[Add your background and any credentials you hold.]</span>
              </p>
              <p className="mt-4">
                My approach is gentle but honest: we slow down, look clearly at what is happening, and take real steps
                you can sustain.
              </p>
            </SectionHeading>
            <Reveal delay={100}>
              <Link
                to="/about"
                className="mt-10 inline-flex h-12 items-center rounded-full border border-foreground/20 px-7 text-[0.95rem] tracking-wide transition-colors hover:bg-foreground hover:text-background"
              >
                My Story
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="coaching" className="py-24 md:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="Coaching" title="Ways we can work together." center>
            <p>Begin with a conversation. Continue only if it feels right.</p>
          </SectionHeading>
          <div className="mt-16">
            <Services />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-sage-soft/60 py-24 md:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="How it works" title="A simple path toward meaningful change." />
          <ol className="relative mt-16 grid gap-6 md:grid-cols-4 md:gap-0">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-sage/40 md:block" aria-hidden />
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 120} className="relative md:pr-8">
                <div className="rounded-3xl bg-card p-7 shadow-soft md:bg-transparent md:p-0 md:shadow-none">
                  <span className="relative inline-flex size-14 items-center justify-center rounded-full border border-sage/50 bg-background font-serif text-xl text-sage">
                    {s.n}
                  </span>
                  <h3 className="mt-6 text-3xl">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* THE BOOK */}
      <section id="book" className="py-24 md:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={journal}
              alt="Anchor: Come Home to Yourself, an emotional reset workbook by Srimathi"
              width={832}
              height={1296}
              loading="lazy"
              className="mx-auto w-full max-w-md rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <SectionHeading eyebrow="The book" title="Anchor — come home to yourself.">
              <p>
                A quiet, honest book for women navigating emotional exhaustion, identity loss, and the slow work of
                returning to themselves. Part reflection, part field guide — written for the late nights when the mind
                finally goes still.
              </p>
            </SectionHeading>
            <Reveal delay={100}>
              <ul className="mt-10 space-y-5">
                {[
                  "For women learning to come back to themselves.",
                  "For the ones who gave so much to everyone else, they forgot what they needed too.",
                  "For anyone exhausted from pretending they’re okay all the time.",
                ].map((line) => (
                  <li key={line} className="flex gap-4 font-serif text-xl italic leading-snug text-foreground/85">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-rose" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={SITE.book.buyUrl || "#book"}
                  target={SITE.book.buyUrl ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex h-12 items-center rounded-full bg-primary px-8 text-[0.95rem] tracking-wide text-primary-foreground transition-colors hover:bg-charcoal"
                >
                  Buy Anchor
                </a>
                <a
                  href={SITE.book.sampleUrl || "#book"}
                  target={SITE.book.sampleUrl ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex h-12 items-center rounded-full border border-foreground/20 px-8 text-[0.95rem] tracking-wide transition-colors hover:bg-foreground hover:text-background"
                >
                  Read a Sample
                </a>
              </div>
              {(!SITE.book.buyUrl || !SITE.book.sampleUrl) && (
                <p className="placeholder-note mt-4 inline-block text-xs">
                  Add the buy and sample links in src/lib/site.ts to activate these buttons.
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-rose-soft/60 py-24 md:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="Kind words" title="In their own words." center />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* CLARITY CALL */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container-page">
          <Reveal className="grid overflow-hidden rounded-[2rem] bg-charcoal text-ivory lg:grid-cols-[1.2fr_1fr]">
            <div className="p-10 md:p-16">
              <p className="eyebrow mb-5 text-sage-soft">Free clarity call</p>
              <h2 className="text-4xl md:text-5xl">You do not have to figure everything out alone.</h2>
              <p className="mt-6 max-w-lg text-lg text-ivory/75">
                Take 30 private minutes to slow down, talk through what feels difficult, and identify one honest next
                step.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "A calm, judgment-free conversation",
                  "Clarity about what is keeping you stuck",
                  "One practical next step",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-rose" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
              <BookButton variant="light" className="mt-10">
                Book My Free Call
              </BookButton>
            </div>
            <img
              src={hero}
              alt=""
              width={960}
              height={960}
              loading="lazy"
              className="hidden h-full w-full object-cover opacity-90 lg:block"
            />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-cream py-24 md:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQ" title="Questions, gently answered.">
            <p>
              Still wondering? <Link to="/contact" className="text-foreground underline underline-offset-4">Get in touch</Link>.
            </p>
          </SectionHeading>
          <Reveal>
            <Faq />
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
