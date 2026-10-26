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
      <h2>Coaching is not therapy</h2>
      <p>Meraki coaching is not psychotherapy, counselling, medical treatment, or crisis care, and is not a replacement for support from a licensed mental health professional or doctor.</p>
      <h2>No guaranteed results</h2>
      <p>Every person’s experience is different. Testimonials reflect individual experiences and are not a promise of specific outcomes.</p>
      <h2>Seeking professional help</h2>
      <p>If you are experiencing a mental health condition, please continue working with your healthcare provider. Coaching may complement, but never replace, that care.</p>
      <h2>In an emergency</h2>
      <p>If you are in crisis or at risk of harm, please contact local emergency services or a crisis helpline immediately.</p>
    </LegalPage>
  ),
});
