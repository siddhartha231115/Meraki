/**
 * EDIT ME — all business details for the Meraki site live here.
 * Anything in [BRACKETS] is a placeholder that needs the coach's approval or replacement.
 */
export const SITE = {
  name: "Meraki",
  tagline: "Find clarity. Build confidence. Create a life that feels like yours.",
  coachName: "[COACH NAME]",
  location: "[LOCATION OR ONLINE WORLDWIDE]",
  email: "[EMAIL]",
  // Paste a full https:// Calendly or booking URL here. While empty, booking buttons open the request form.
  bookingUrl: "",
  instagram: "[INSTAGRAM URL]",
  prices: {
    oneToOne: "From [PRICE]",
    program: "[PRICE] or payment plan",
    programWeeks: "[6/8/12]",
  },
};

export const hasBookingUrl = () => /^https?:\/\//.test(SITE.bookingUrl);

export const NAV = [
  { label: "Home", hash: "top" },
  { label: "About", hash: "about" },
  { label: "Coaching", hash: "coaching" },
  { label: "How It Works", hash: "how-it-works" },
  { label: "Testimonials", hash: "testimonials" },
  { label: "FAQ", hash: "faq" },
  { label: "Contact", hash: "contact" },
] as const;

export const FAQS = [
  {
    q: "What is life coaching?",
    a: "Life coaching is a forward-focused partnership. Together we clarify what you want, explore what is getting in the way, and create practical steps to move toward it — at a pace that feels right for you.",
  },
  {
    q: "How is coaching different from therapy?",
    a: "Coaching is not therapy, counselling, medical treatment, or crisis care, and it is not a replacement for licensed mental health support. Therapy often explores healing and diagnosis; coaching focuses on present goals, choices, and action. If you are living with a mental health condition, coaching can sit alongside — not instead of — care from a licensed professional.",
  },
  {
    q: "Who is Meraki coaching for?",
    a: "Adults who feel stuck, overwhelmed, or uncertain about their next step and are ready to reconnect with themselves — whether that means stronger boundaries, more confidence, or a clearer sense of direction.",
  },
  {
    q: "What happens during the free clarity call?",
    a: "It is a relaxed 30-minute conversation. We talk about what feels difficult right now, what you would like to change, and you leave with one practical next step. There is no pressure to continue.",
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on you and your goals. Some people find a few sessions helpful; others prefer a longer, structured journey. We will talk honestly about what makes sense during your clarity call.",
  },
  {
    q: "Are sessions available online?",
    a: "Yes. Sessions take place over secure video call, so you can join from wherever you feel most comfortable. [Confirm whether in-person sessions are offered.]",
  },
  {
    q: "What is your cancellation policy?",
    a: "[Placeholder — coach to confirm.] Sessions can be rescheduled with at least 24 hours’ notice. Late cancellations may be charged in full.",
  },
  {
    q: "Is everything I share confidential?",
    a: "Yes. What you share stays between us, with the usual exceptions where there is a serious risk of harm to you or others, or where disclosure is required by law. If you are in crisis, please contact your local emergency services or a crisis line right away.",
  },
];
