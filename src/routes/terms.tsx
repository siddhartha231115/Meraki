import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/sections";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Meraki Coaching" },
      { name: "description", content: "Terms for booking and taking part in coaching with Meraki." },
      { property: "og:title", content: "Terms and Conditions | Meraki Coaching" },
      { property: "og:description", content: "Terms for booking and taking part in Meraki coaching." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Terms and Conditions" updated="[DATE]">
      <h2>Services</h2>
      <p>Meraki provides life and mindset coaching. Coaching is not therapy, counselling, medical, legal, or financial advice.</p>
      <h2>Bookings and payment</h2>
      <p>[Placeholder] Sessions are confirmed once payment is received. Packages and programs may be paid in full or via an agreed payment plan.</p>
      <h2>Cancellations</h2>
      <p>[Placeholder] Sessions may be rescheduled with at least 24 hours’ notice. Late cancellations or missed sessions may be charged in full.</p>
      <h2>Your responsibility</h2>
      <p>You remain responsible for your own decisions, actions, and results during and after coaching.</p>
      <h2>Changes</h2>
      <p>These terms may be updated from time to time. The latest version will always be available on this page.</p>
    </LegalPage>
  ),
});
