import { createFileRoute } from "@tanstack/react-router";
import coachAsset from "@/assets/srimathi-portrait.jpg.asset.json";
const coach = coachAsset.url;
import { COACH_INTRO, SITE } from "@/lib/site";
import { FinalCta, PageHeader } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Srimathi | Meraki Coaching" },
      { name: "description", content: "Meet Srimathi — engineer by profession, coach by purpose — the woman behind Meraki Life Coaching." },
      { property: "og:title", content: "About Srimathi | Meraki Coaching" },
      { property: "og:description", content: "Engineer by profession, coach by purpose. The story behind Meraki Life Coaching." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: coach },
      { name: "twitter:image", content: coach },
    ],
  }),
  component: About,
});

type Block = { h: string; p?: string[]; list?: string[]; after?: string[]; groups?: { h: string; list: string[] }[] };

const BLOCKS: Block[] = [
  {
    h: "Beyond My Professional Identity: A Mother, A Woman, A Work in Progress",
    p: [
      "Motherhood has been one of the most meaningful parts of my identity.",
      "Being a mother has taught me about responsibility, patience, unconditional care and the many dimensions of love. It has also made me reflect on the identities we carry as women and individuals.",
      "Somewhere between being a professional, a mother, a daughter and fulfilling the many expectations that life places on us, it is easy to lose touch with the person behind all those roles.",
      "We become so accustomed to being there for everyone else that we sometimes forget to ask ourselves:",
    ],
    list: ["What do I want?", "Who am I beyond the roles I fulfil?", "Am I making choices that reflect who I really am?"],
    after: [
      "These are questions I have had to explore in my own life, too.",
      "I don’t approach coaching as someone who has everything figured out. I approach it as someone who understands that growth is an ongoing process, that self-awareness takes courage, and that sometimes the most meaningful changes begin when we are willing to question the stories we have been telling ourselves.",
      "I believe that we can care deeply for others without abandoning ourselves. We can be responsible without carrying everyone’s responsibilities. And we can evolve without losing the parts of ourselves that make us who we are.",
    ],
  },
  {
    h: "Why I Chose Coaching",
    p: [
      "My transition into coaching came from a growing curiosity about human behaviour and personal transformation.",
      "I noticed how often people understand their problems intellectually but continue to experience the same situations in their lives.",
    ],
    list: [
      "They know they need boundaries, but struggle to say no.",
      "They know they are capable, but constantly seek validation.",
      "They want change, but keep returning to familiar behaviours.",
      "They recognise their patterns, but don’t always know how to interrupt them.",
    ],
    after: [
      "I became particularly interested in the space between knowing and doing.",
      "Through my learning in coaching, psychology-informed approaches, cognitive behavioural techniques and identity work, I began exploring how our thoughts, beliefs, experiences and behaviours influence the choices we make.",
      "I realised that meaningful change is not simply about thinking positively or repeating affirmations. It involves recognising patterns, questioning underlying beliefs, understanding our responses and consciously practising new ways of behaving.",
      "That is the kind of work I wanted to bring into the world.",
    ],
  },
  {
    h: "The Birth of Meraki",
    p: [
      "Meraki was born from a simple belief: You deserve to live a life that reflects who you truly are, not just who you have learned to be.",
      "The word Meraki represents putting your soul, creativity and love into what you do.",
      "For me, Meraki represents the process of coming back to yourself.",
      "It is about moving beyond automatic reactions, inherited expectations and patterns that no longer serve you.",
      "I created Meraki to build a space where people can pause, reflect, question their assumptions and develop a deeper understanding of themselves.",
      "A space where personal growth is not about becoming someone else, but about consciously choosing who you want to become.",
    ],
  },
  {
    h: "What We Work On at Meraki",
    p: ["My coaching focuses on the connection between thoughts, patterns, behaviours and identity.", "Together, we explore:"],
    list: [
      "Pattern Recognition: Understanding recurring behaviours and situations that keep showing up in your life.",
      "Belief Exploration: Identifying the assumptions and beliefs influencing your decisions.",
      "Emotional Awareness: Recognising emotional responses and understanding what drives them.",
      "Boundaries and Self-Worth: Learning to honour your needs without constantly seeking approval.",
      "Identity Transformation: Moving beyond familiar patterns and consciously shaping the person you want to become.",
      "Intentional Action: Translating self-awareness into practical, everyday behavioural changes.",
    ],
    after: [
      "My approach combines structured coaching conversations, reflective exercises, CBT-informed questioning, pattern mapping, values exploration and practical behavioural experiments.",
      "I don’t believe in giving people a list of instructions for how to live their lives. I believe in helping them develop the awareness and confidence to make their own choices.",
    ],
  },
  {
    h: "My Philosophy",
    p: ["I believe that:"],
    list: [
      "Self-awareness without action can keep us stuck.",
      "Understanding someone doesn’t mean accepting every behaviour.",
      "Being kind doesn’t require abandoning your own needs.",
      "Familiarity and what is good for us are not always the same.",
      "You can appreciate your past without allowing it to define your future.",
      "Your identity is not fixed. You can consciously choose and practise a different way of being.",
    ],
    after: [
      "And perhaps most importantly:",
      "You are not required to remain the person you became simply to survive, fit in or meet expectations.",
      "You are allowed to evolve.",
    ],
  },
  {
    h: "My Learning and Professional Background",
    p: ["I bring together my professional experience, coaching education and ongoing exploration of human behaviour."],
    groups: [
      {
        h: "Professional Background",
        list: [
          "Computer Engineer by profession.",
          "Approximately 17 years of experience in the Information Technology industry.",
          "Extensive experience in structured problem-solving, analytical thinking, communication and working with people across professional environments.",
        ],
      },
      {
        h: "Coaching and Development",
        list: [
          "ICF-aligned coach education and certification journey in progress.",
          "Ongoing learning in coaching competencies and professional ethics.",
          "Training and application of CBT-informed questioning and reflective techniques.",
          "Focused learning in mindset, behavioural patterns, beliefs, values and identity transformation.",
        ],
      },
    ],
    after: [
      "I believe a good coach should remain a student. My commitment is to continue learning, questioning and developing my practice while maintaining clear professional boundaries between coaching and therapy.",
    ],
  },
  {
    h: "A Little About What I Hope You Find Here",
    p: [
      "If you are someone who is constantly overthinking, struggling with boundaries, seeking approval, carrying too much responsibility or feeling disconnected from your own identity, you might find something meaningful in the work we do at Meraki.",
      "You don’t have to arrive with all the answers.",
      "You don’t have to have everything figured out.",
      "You simply need the willingness to look at yourself honestly and explore the possibility of doing things differently.",
      "Because the goal isn’t to create a completely different person.",
      "It’s to become more conscious of the person you are choosing to be.",
    ],
  },
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((l) => {
        const [head, ...rest] = l.split(": ");
        return (
          <li key={l} className="flex gap-4">
            <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
            <span>{rest.length ? <><strong className="font-semibold text-foreground">{head}:</strong> {rest.join(": ")}</> : l}</span>
          </li>
        );
      })}
    </ul>
  );
}

function About() {
  return (
    <>
      <PageHeader eyebrow="About Me" title="The Woman Behind Meraki">
        <p>I’m {SITE.coachName}. Engineer by profession, coach by purpose, and a woman who believes that understanding yourself can change the way you live.</p>
      </PageHeader>
      <section className="container-page grid gap-14 py-20 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <img src={coach} alt={`Portrait of ${SITE.coachName}`} width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover object-left shadow-lift" />
        </Reveal>
        <Reveal className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>For nearly 17 years, I have worked in the world of Information Technology, building my career as a Computer Engineer and navigating the ever-evolving corporate environment.</p>
          <p>My professional journey has taught me discipline, structured thinking, problem-solving and the importance of continuous learning. But over time, I became equally interested in something that no technology or professional qualification could fully explain: the way people think, behave, make decisions and relate to themselves.</p>
          <p>What makes us repeat certain patterns? Why do we sometimes know exactly what we need to change but struggle to take action? Why do we find ourselves putting everyone else’s needs before our own, seeking approval, overthinking decisions or questioning our worth?</p>
          <p>These questions gradually became more than an interest. They became the beginning of my journey into coaching.</p>
          <p className="text-base text-muted-foreground">{COACH_INTRO.audience} {COACH_INTRO.sessions}</p>
        </Reveal>
      </section>
      <div className="container-page max-w-3xl space-y-20 pb-24">
        {BLOCKS.map((b) => (
          <Reveal key={b.h} as="section" className="space-y-5 text-lg leading-relaxed text-foreground/85">
            <h2 className="text-3xl text-foreground md:text-4xl">{b.h}</h2>
            {b.p?.map((t) => <p key={t}>{t}</p>)}
            {b.list && <List items={b.list} />}
            {b.groups?.map((g) => (
              <div key={g.h} className="space-y-3">
                <h3 className="text-2xl text-foreground">{g.h}</h3>
                <List items={g.list} />
              </div>
            ))}
            {b.after?.map((t) => <p key={t}>{t}</p>)}
          </Reveal>
        ))}
        <Reveal className="rounded-[2rem] bg-cream p-10 text-center">
          <p className="eyebrow mb-4">Meraki</p>
          <p className="font-serif text-3xl italic leading-snug md:text-4xl">Understand yourself. Change your patterns. Choose your identity.</p>
          <p className="mt-4 text-muted-foreground">Your next chapter doesn’t have to look like your last one.</p>
        </Reveal>
      </div>
      <FinalCta />
    </>
  );
}
