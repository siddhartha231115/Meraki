import type { ReactNode } from "react";
import { Check, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS, RESET, SITE } from "@/lib/site";
import { BookButton } from "./Booking";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  center,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-4xl md:text-5xl">{title}</h2>
      {children && <div className="mt-5 text-lg leading-relaxed text-muted-foreground">{children}</div>}
    </Reveal>
  );
}

/** Small botanical line ornament */
export function Sprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" fill="none" aria-hidden className={cn("h-8 w-24 text-sage", className)}>
      <path d="M2 30 C 40 30, 70 20, 118 6" stroke="currentColor" strokeWidth="1" />
      {[20, 40, 60, 80, 100].map((x, i) => (
        <g key={x} stroke="currentColor" strokeWidth="1">
          <path d={`M${x} ${28 - i * 4} q 6 -10 14 -10 q -4 9 -14 10`} />
          <path d={`M${x} ${28 - i * 4} q 4 8 12 9 q -2 -8 -12 -9`} />
        </g>
      ))}
    </svg>
  );
}

const SERVICES = [
  {
    name: "Free Clarity Call",
    price: "Free",
    points: ["30-minute private conversation", "Identify the main challenge", "Leave with one practical next step"],
    cta: "Book Your Call",
    action: "book" as const,
  },
  {
    name: "1:1 Coaching",
    price: SITE.prices.oneToOne,
    points: ["Personalized private sessions", "Goal and action planning", "Ongoing accountability and support"],
    cta: "Explore 1:1 Coaching",
    featured: true,
    action: "link" as const,
  },
  {
    name: "The 6-Week RESET",
    price: SITE.prices.program,
    points: [
      `A structured ${SITE.prices.programWeeks}-week journey`,
      "Weekly private coaching",
      "One letter of the ANCHOR Method each week",
    ],
    cta: "View the Program",
    action: "link" as const,
  },
];

export function Services() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
      {SERVICES.map((s, i) => (
        <Reveal key={s.name} delay={i * 120}>
          <article
            className={cn(
              "card-soft relative flex h-full flex-col p-8",
              s.featured && "border-sage/60 bg-sage-soft/50 lg:-translate-y-4 lg:hover:-translate-y-6",
            )}
          >
            {s.featured && (
              <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-medium tracking-wide text-primary-foreground">
                Most popular
              </span>
            )}
            <h3 className="text-3xl">{s.name}</h3>
            <p className="mt-3 font-serif text-xl text-sage">{s.price}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {s.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 size-4 shrink-0 text-sage" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              {s.action === "book" ? (
                <BookButton variant={s.featured ? "hero" : "soft"} className="w-full">
                  {s.cta}
                </BookButton>
              ) : (
                <Link
                  to="/coaching"
                  className={cn(
                    "inline-flex h-12 w-full items-center justify-center rounded-full text-[0.95rem] tracking-wide transition-all duration-300",
                    s.featured
                      ? "bg-primary text-primary-foreground hover:bg-charcoal"
                      : "border border-foreground/20 hover:bg-foreground hover:text-background",
                  )}
                >
                  {s.cta}
                </Link>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/** The 6-Week RESET — one letter of the ANCHOR Method per week. */
export function AnchorMethod({ className }: { className?: string }) {
  return (
    <section id="reset" className={cn("bg-cream py-24 md:py-32", className)}>
      <div className="container-page">
        <SectionHeading eyebrow="The ANCHOR Method" title={RESET.heading} center>
          <p>{RESET.intro}</p>
        </SectionHeading>
        <Sprig className="mx-auto mt-8" />

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESET.weeks.map((w, i) => (
            <Reveal as="li" key={w.n} delay={(i % 3) * 100} className="h-full">
              <article className="card-soft flex h-full flex-col p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-serif text-5xl leading-none text-primary" aria-hidden>
                    {w.letter}
                  </span>
                  <span className="text-xs font-semibold tracking-[0.22em] text-muted-foreground">{w.n}</span>
                </div>
                <h3 className="mt-5 text-2xl">
                  {w.letter} — {w.name}
                </h3>
                <p className="mt-3 font-serif text-lg italic leading-snug text-sage">“{w.q}”</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 grid overflow-hidden rounded-[2rem] bg-card shadow-soft lg:grid-cols-[1fr_1.15fr]">
          <div className="p-8 md:p-12">
            <p className="eyebrow mb-4">Who it’s for</p>
            <h3 className="text-3xl leading-tight md:text-4xl">For women learning to come back to themselves.</h3>
            <p className="placeholder-note mt-5 inline-block text-xs">
              Add or edit this list in src/lib/site.ts.
            </p>
          </div>
          <ul className="space-y-4 bg-sage-soft/50 p-8 md:p-12">
            {RESET.whoFor.map((line) => (
              <li key={line} className="flex gap-4 font-serif text-xl italic leading-snug text-foreground/85">
                <span className="mt-3 size-1.5 shrink-0 rounded-full bg-rose" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <BookButton variant="hero">Join the Reset</BookButton>
          <p className="mt-5 text-sm text-muted-foreground">
            Prefer to talk first?{" "}
            <Link to="/contact" className="text-foreground underline underline-offset-4">
              Ask a question
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { quote: "I came in feeling scattered and left each session with something real to work on. I finally feel like I’m making decisions for me.", who: "A.M.", service: "1:1 Coaching" },
  { quote: "The clarity call alone helped me name what I’d been avoiding for years. It was gentle, honest, and surprisingly practical.", who: "Priya", service: "Free Clarity Call" },
  { quote: "Learning to set boundaries without guilt has changed my relationships and my work. I feel steadier in myself.", who: "J.K.", service: "The 6-Week RESET" },
];

export function Testimonials() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.who} delay={i * 120}>
            <figure className="card-soft flex h-full flex-col p-8">
              <span className="placeholder-note self-start text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                Placeholder testimonial
              </span>
              <div className="mt-4 flex gap-1 text-rose" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-serif text-xl leading-snug">“{t.quote}”</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{t.who}</span>
                <span className="text-muted-foreground"> · {t.service}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">
        Shared with client permission. Results vary for each individual.
      </p>
    </>
  );
}

export function Faq() {
  return (
    <Accordion type="single" collapsible className="divide-y divide-border border-y border-border">
      {FAQS.map((f, i) => (
        <AccordionItem key={f.q} value={`q${i}`} className="border-0">
          <AccordionTrigger className="py-6 text-left font-serif text-xl hover:no-underline md:text-2xl">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FinalCta() {
  return (
    <section data-no-float-cta className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
      <Sprig className="absolute left-6 top-10 h-16 w-48 opacity-30 text-primary-foreground" />
      <Sprig className="absolute bottom-10 right-6 h-16 w-48 rotate-180 opacity-30 text-primary-foreground" />
      <Reveal className="container-page relative text-center">
        <h2 className="mx-auto max-w-3xl text-4xl md:text-6xl">Your next chapter can begin with one conversation.</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
          Book a free clarity call and take the first step toward a clearer, more confident life.
        </p>
        <BookButton variant="light" className="mt-10" />
      </Reveal>
    </section>
  );
}

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-cream blend-cream blend-b pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="container-page">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="max-w-3xl text-5xl md:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function LegalPage({
  title,
  updated,
  template = true,
  children,
}: {
  title: string;
  updated?: string;
  template?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title}>
        <p>
          {template && (
            <span className="placeholder-note">
              Template copy — please have this reviewed by a qualified professional before publishing.
            </span>
          )}
          {updated && <span className={cn("block text-sm", template && "mt-2")}>Last updated: {updated}</span>}
        </p>
      </PageHeader>
      <article className="container-page max-w-3xl space-y-6 py-16 leading-relaxed text-foreground/85 [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:text-foreground">
        {children}
      </article>
    </>
  );
}
