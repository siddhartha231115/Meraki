import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/sections";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Coaching Disclaimer | Meraki Coaching" },
      { name: "description", content: "Important information about what coaching is and is not." },
      { property: "og:title", content: "Coaching Disclaimer | Meraki Coaching" },
      { property: "og:description", content: "What coaching is, and what it is not." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Coaching Disclaimer">
      <p>At Meraki, we believe in the power of self-awareness, reflection, and intentional personal growth.</p>
      <p>However, it is important to understand what coaching involves.</p>

      <h2>Coaching Is Not Therapy</h2>
      <p>
        Meraki provides mindset and personal development coaching. Coaching is designed to help individuals explore
        their thoughts, beliefs, goals, values, and behavioural patterns.
      </p>
      <p>Coaching is not psychotherapy, counselling, psychiatric treatment, or medical advice.</p>

      <h2>Your Journey Is Your Responsibility</h2>
      <p>
        Coaching is a collaborative process. While we provide guidance, questions, tools, and exercises, the decisions
        and actions you take are your own.
      </p>

      <h2>No Guaranteed Outcomes</h2>
      <p>
        Every individual’s experience is different. We do not guarantee specific results, transformations, or outcomes
        from participating in our programs.
      </p>

      <h2>When Additional Support May Be Needed</h2>
      <p>
        Coaching may not be appropriate for every situation. If you are experiencing significant emotional distress or
        mental health concerns, we encourage you to seek support from a qualified mental health professional.
      </p>
      <p>Our intention is to support your personal growth while respecting the boundaries of coaching.</p>

      <h2>In an Emergency</h2>
      <p>If you are in crisis or at risk of harm, please contact local emergency services or a crisis helpline immediately.</p>
    </LegalPage>
  ),
});
