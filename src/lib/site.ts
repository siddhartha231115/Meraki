/**
 * EDIT ME — all business details for the Meraki site live here.
 * Leave a value as "" and it is hidden on the site instead of showing a note.
 */
export const SITE = {
  name: "Meraki",
  tagline: "Find clarity. Build confidence. Create a life that feels like yours.",
  coachName: "Srimathi",
  location: "Bengaluru, India",
  email: "",
  // Paste a full https:// Calendly or booking URL here. While empty, booking buttons open the request form.
  bookingUrl: "",
  instagram: "https://www.instagram.com/walkwithsri",
  instagramHandle: "@walkwithsri",
  // Full https:// address of the live site, e.g. https://merakilifecoaching.org
  siteUrl: "",
  // Include the country code, e.g. +91 98765 43210
  whatsapp: "",
  // Anchor book links — paste the real https:// URLs when ready.
  book: {
    buyUrl: "",
    sampleUrl: "",
  },
  prices: {
    oneToOne: "",
    selfWorthReset: "",
    identityReclaim: "",
  },
};

/** True when a detail has really been filled in (not blank, not a [BRACKET] note). */
export const isFilled = (value: string) => value.trim() !== "" && !value.includes("[");

/**
 * The two Meraki programs. Edit the wording here and it updates on every page.
 */
export const PROGRAMS = [
  {
    name: "Meraki Self-Worth Reset",
    short: "Self-Worth Reset",
    weeks: "3",
    blurb:
      "A shorter, three-week program focused on recognising patterns and beginning to make meaningful changes.",
    points: ["Three weeks", "Recognise your patterns", "Begin meaningful changes"],
    price: SITE.prices.selfWorthReset,
    featured: false,
  },
  {
    name: "Meraki Identity Reclaim",
    short: "Identity Reclaim",
    weeks: "6",
    blurb:
      "The six-week flagship program that explores self-worth, people-pleasing, boundaries, personal values, and identity development in greater depth.",
    points: [
      "Six weeks — the flagship program",
      "Self-worth and people-pleasing",
      "Boundaries and personal values",
      "Identity development in greater depth",
    ],
    price: SITE.prices.identityReclaim,
    featured: true,
  },
];

/**
 * The ANCHOR Method — one letter per week of Meraki Identity Reclaim.
 * Edit the wording here and it updates everywhere.
 */
export const ANCHOR = {
  program: "Meraki Identity Reclaim",
  heading: "Meraki Identity Reclaim — guided by the ANCHOR Method.",
  intro:
    "Meraki Identity Reclaim is a six-week flagship program that explores self-worth, people-pleasing, boundaries, personal values, and identity development in greater depth. Each week follows one letter of the ANCHOR Method — a structured, professional framework for moving from reactivity to self-trust, and from survival to a steady, sovereign sense of self.",
  weeks: [
    {
      n: "01",
      letter: "A",
      name: "Acknowledge",
      q: "What am I feeling right now?",
      d: "Meet the present emotion without judgment. Name what is alive in the body and the mind, so it can finally be heard.",
    },
    {
      n: "02",
      letter: "N",
      name: "Notice",
      q: "Where is this coming from?",
      d: "Trace the pattern to its origin. Distinguish the present moment from the older story your nervous system is replaying.",
    },
    {
      n: "03",
      letter: "C",
      name: "Check",
      q: "Is this mine to carry?",
      d: "Examine the weight you have been holding. Release what was inherited, assumed, or absorbed from others.",
    },
    {
      n: "04",
      letter: "H",
      name: "Honour",
      q: "What is actually true for me?",
      d: "Move beneath obligation and performance to the quiet truth underneath. Honour it as valid, even when it is inconvenient.",
    },
    {
      n: "05",
      letter: "O",
      name: "Own",
      q: "What response aligns with who I am?",
      d: "Choose a response rooted in values, not reaction. Practice acting from self-worth rather than self-protection.",
    },
    {
      n: "06",
      letter: "R",
      name: "Return",
      q: "Come back to yourself.",
      d: "Integrate the work into daily life. Return — again and again — to the steady, sovereign self you have been rebuilding.",
    },
  ],
  whoFor: [
    "You feel emotionally exhausted, disconnected, or quietly stuck.",
    "You gave so much to everyone else that you forgot what you needed too.",
    "You are tired of pretending you’re okay all the time.",
    "You want a steadier relationship with yourself — not another quick fix.",
  ],
};

export const hasBookingUrl = () => /^https?:\/\//.test(SITE.bookingUrl);

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "Products", to: "/coaching" },
  { label: "Identity Reclaim", to: "/", hash: "identity-reclaim" },
  { label: "Testimonials", to: "/", hash: "testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export type FaqItem = {
  q: string;
  a: string;
  link?: { to: "/cancellation"; label: string };
};

export const FAQS: FaqItem[] = [
  {
    q: "What is coaching?",
    a: "Coaching is a collaborative conversation that helps you explore your thoughts, understand your patterns, gain clarity, and take meaningful steps towards your goals.",
  },
  {
    q: "Who is Meraki coaching for?",
    a: "Meraki primarily works with women aged 25–45 who want to strengthen their self-worth, develop healthier boundaries, move beyond people-pleasing patterns, and build a stronger sense of identity.",
  },
  {
    q: "How are coaching sessions conducted?",
    a: "All coaching sessions are conducted online. Details and meeting links will be shared after booking.",
  },
  {
    q: "How long is each coaching session?",
    a: "Individual sessions are approximately 45 minutes long, unless otherwise specified.",
  },
  {
    q: "Do I need previous coaching experience?",
    a: "Not at all. You can begin your coaching journey without any previous experience.",
  },
  {
    q: "What is the difference between the two Meraki programs?",
    a: "Meraki Self-Worth Reset is a shorter, three-week program focused on recognising patterns and beginning to make meaningful changes.\n\nMeraki Identity Reclaim is a six-week flagship program that explores self-worth, people-pleasing, boundaries, personal values, and identity development in greater depth.",
  },
  {
    q: "Is there a free introductory session?",
    a: "Yes. You can book a free introductory session to understand our coaching approach and explore whether a program is suitable for you.",
  },
  {
    q: "Is coaching the same as therapy?",
    a: "No. Coaching focuses on personal development, self-awareness, goals, and forward-looking action. It does not replace therapy or mental health treatment.",
  },
  {
    q: "What if I cannot attend a scheduled session?",
    a: "Please inform us at least 24 hours in advance if you need to reschedule. Our cancellation and rescheduling policy applies.",
    link: { to: "/cancellation", label: "Read the Cancellation and Refund Policy" },
  },
  {
    q: "How do I get started?",
    a: "You can explore our programs on the Products page or book a free introductory session through the Contact page.\n\nYour journey begins with a conversation.",
  },
];
