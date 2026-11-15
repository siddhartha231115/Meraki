import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Anchor — Free Sample | Meraki";
const DESC =
  "Read a free sample of Anchor: Come Home to Yourself — an emotional reset workbook for guilt, overthinking, boundaries and clarity.";

export const Route = createFileRoute("/sample")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Sample,
});

const ANCHOR_STEPS = [
  { letter: "A", name: "Acknowledge", q: "What am I feeling right now?", d: "Don’t judge it. Don’t explain it. Just name it." },
  { letter: "N", name: "Notice", q: "Where is this coming from?", d: "What triggered this? How long have I been carrying it?" },
  { letter: "C", name: "Check", q: "Is this mine to carry?", d: "Did I cause this, or did I absorb it?" },
  { letter: "H", name: "Honour", q: "What is true for me in this moment?", d: "Not what I should feel. What I actually feel." },
  { letter: "O", name: "Own", q: "What response aligns with who I am?", d: "Not the reactive one. The one I’ll respect tomorrow." },
  { letter: "R", name: "Return", q: "Come back to yourself.", d: "This is home. You don’t have to earn your way back here." },
];

const RESET_STEPS = [
  { n: "1", t: "Pause", d: "Stop. Don’t react yet. Even five seconds counts." },
  { n: "2", t: "Breathe", d: "Take one slow breath." },
  { n: "3", t: "Name it", d: "What am I feeling? Guilt, shame, pressure, anger?" },
  { n: "4", t: "Ask", d: "Did I actually do something wrong, or did I just not do what someone expected?" },
  { n: "5", t: "Choose", d: "What is one response that aligns with who I am?" },
];

const REFLECTIONS = [
  "What is one thing you’ve been feeling guilty about that you haven’t said out loud to anyone?",
  "When did you last do something purely for yourself?",
  "Is there something you’ve been wanting to say to someone but have been holding back?",
  "On a scale of 1–10, how far do you feel from yourself right now?",
  "What would it feel like to feel lighter?",
];

const PERMISSIONS = [
  "You are allowed to choose yourself.",
  "You are allowed to rest without earning it first.",
  "You are allowed to disappoint someone and still be a good person.",
  "You are allowed to change even if it makes others uncomfortable.",
  "And you are allowed to be a work in progress and still be worthy of love.",
];

function Divider() {
  return (
    <div className="my-16 flex items-center justify-center gap-3 md:my-20" aria-hidden>
      <span className="h-px w-16 bg-sage/40" />
      <span className="size-1.5 rounded-full bg-rose" />
      <span className="h-px w-16 bg-sage/40" />
    </div>
  );
}

function Sample() {
  return (
    <article className="pt-28 md:pt-36">
      {/* HEADER */}
      <header className="container-page max-w-3xl text-center">
        <Reveal>
          <Link
            to="/"
            hash="book"
            className="group mb-10 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden />
            Back to the book
          </Link>
          <p className="eyebrow mb-6">Free sample</p>
          <h1 className="text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            ANCHOR
            <span className="mt-3 block text-3xl italic text-sage sm:text-4xl md:text-5xl">Come Home to Yourself</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A powerful emotional reset workbook for guilt, overthinking, boundaries and clarity.
          </p>
        </Reveal>
      </header>

      <div className="container-page max-w-3xl pb-24 md:pb-32">
        <Divider />

        {/* BEFORE WE BEGIN */}
        <Reveal as="section">
          <h2 className="text-3xl md:text-4xl">Before We Begin</h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p className="font-serif text-2xl italic">Can I ask you something?</p>
            <p>
              When was the last time you made a decision that was completely yours, without feeling guilty about it
              afterwards?
            </p>
            <p>
              Perhaps you said no to someone and spent the entire evening wondering whether you should have said yes.
            </p>
            <p>
              Perhaps you wanted something for yourself but convinced yourself that someone else’s needs were more
              important.
            </p>
            <p>Perhaps you’ve been carrying a feeling you cannot quite explain.</p>
            <p>
              You look like you have everything under control. You keep showing up. You keep taking care of things. You
              tell everyone you’re fine.
            </p>
            <p>But somewhere underneath, something feels unresolved.</p>
            <p className="font-serif text-2xl italic text-sage">This workbook is for that part of you.</p>
            <p>
              The part that is tired of overthinking, explaining, adjusting and carrying emotions that were never
              entirely yours to carry.
            </p>
          </div>
        </Reveal>

        <Divider />

        {/* A THOUGHT WORTH SITTING WITH */}
        <Reveal as="section">
          <h2 className="text-3xl md:text-4xl">A Thought Worth Sitting With</h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>Most of us aren’t just guilty about what we did.</p>
            <p className="font-serif text-2xl italic">We’re guilty about what we didn’t say.</p>
            <p>
              The apology that stayed in our throat. The truth we swallowed because it felt too risky. The conversation
              we rehearsed a hundred times but never actually had.
            </p>
            <p>Guilt and silence feed each other.</p>
            <p>
              The silence creates more guilt. The guilt keeps us more silent. And somewhere in that loop, we lose a
              little more of ourselves.
            </p>
            <p>But what if you could interrupt that pattern?</p>
            <p>
              What if you could pause, understand what you’re feeling and choose your response instead of automatically
              reacting?
            </p>
            <p className="font-serif text-2xl italic text-sage">That’s where we begin.</p>
          </div>
        </Reveal>

        <Divider />

        {/* THE ANCHOR METHOD */}
        <Reveal as="section">
          <h2 className="text-3xl md:text-4xl">The ANCHOR Method</h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/85">
            When you feel lost, reactive, guilty or far from yourself, come back to these six steps.
          </p>
          <ol className="mt-10 space-y-5">
            {ANCHOR_STEPS.map((s) => (
              <li key={s.letter} className="card-soft flex gap-6 p-6 md:p-7">
                <span
                  className="flex size-14 shrink-0 items-center justify-center rounded-full bg-sage-soft font-serif text-2xl text-sage"
                  aria-hidden
                >
                  {s.letter}
                </span>
                <div>
                  <h3 className="text-2xl">{s.name}</h3>
                  <p className="mt-1 font-serif text-lg italic text-foreground/85">{s.q}</p>
                  <p className="mt-1 text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Divider />

        {/* 30-SECOND RESET */}
        <Reveal as="section">
          <h2 className="text-3xl md:text-4xl">Try This: The 30-Second Reset</h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/85">
            For the next time guilt hits and you don’t have space to think.
          </p>
          <ol className="mt-10 space-y-6">
            {RESET_STEPS.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-sage/50 font-serif text-lg text-sage"
                  aria-hidden
                >
                  {s.n}
                </span>
                <div>
                  <h3 className="text-xl tracking-wide uppercase">{s.t}</h3>
                  <p className="mt-1 text-lg text-foreground/85">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 rounded-3xl bg-sage-soft/60 p-8 text-center">
            <p className="font-serif text-2xl italic leading-snug">You don’t have to solve everything.</p>
            <p className="mt-2 font-serif text-2xl italic leading-snug text-sage">
              You just have to not collapse under it.
            </p>
          </div>
        </Reveal>

        <Divider />

        {/* REFLECTION */}
        <Reveal as="section">
          <h2 className="text-3xl md:text-4xl">A Moment of Reflection</h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/85">
            Before you leave this sample, take a few minutes with these questions.
          </p>
          <ol className="mt-10 space-y-6">
            {REFLECTIONS.map((q, i) => (
              <li key={q} className="flex gap-5">
                <span className="font-serif text-2xl text-rose" aria-hidden>
                  {i + 1}.
                </span>
                <p className="font-serif text-xl italic leading-relaxed text-foreground/85">{q}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-center text-lg text-muted-foreground">
            There are no right answers. <span className="font-serif italic text-foreground">Just honest ones.</span>
          </p>
        </Reveal>

        <Divider />

        {/* A NOTE BEFORE YOU GO */}
        <Reveal as="section" className="text-center">
          <h2 className="text-3xl md:text-4xl">A Note Before You Go</h2>
          <div className="mt-10 space-y-4">
            {PERMISSIONS.map((p) => (
              <p key={p} className="font-serif text-2xl italic leading-snug text-foreground/85">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-12 font-serif text-3xl italic text-sage">Take a breath. Come home.</p>
          <p className="mt-10 text-lg">
            — Srimathi S
            <span className="mt-1 block text-sm tracking-wide text-muted-foreground">Founder, Meraki Life Coaching</span>
          </p>
        </Reveal>

        <Divider />

        {/* END / CTA */}
        <Reveal as="section" className="text-center">
          <p className="eyebrow mb-5">End of sample</p>
          <h2 className="text-4xl md:text-5xl">Your journey with ANCHOR begins here.</h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-muted-foreground">
            The full workbook goes deeper — with guided exercises, journaling prompts and space to write.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SITE.book.buyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-full bg-primary px-8 text-[0.95rem] tracking-wide text-primary-foreground transition-colors hover:bg-charcoal"
            >
              Buy Anchor
            </a>
            <Link
              to="/"
              hash="book"
              className="inline-flex h-12 items-center rounded-full border border-foreground/20 px-8 text-[0.95rem] tracking-wide transition-colors hover:bg-foreground hover:text-background"
            >
              Back to Meraki
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
