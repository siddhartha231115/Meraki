import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { LegalPage } from "@/components/site/sections";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Meraki Coaching" },
      { name: "description", content: "How Meraki Coaching collects, uses, and protects your personal information." },
      { property: "og:title", content: "Privacy Policy | Meraki Coaching" },
      { property: "og:description", content: "How Meraki handles your personal information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy" updated="[DATE]">
      <h2>Information we collect</h2>
      <p>When you request a call or contact us, we collect the details you provide, such as your name, email, phone number, preferred times, and message.</p>
      <h2>How we use it</h2>
      <p>Your information is used only to respond to you, arrange sessions, and provide coaching. We do not sell your data.</p>
      <h2>Confidentiality</h2>
      <p>Session content is kept confidential, except where there is a serious risk of harm or disclosure is required by law.</p>
      <h2>Your rights</h2>
      <p>You may request access to, correction of, or deletion of your personal data at any time by emailing {SITE.email}.</p>
      <h2>Contact</h2>
      <p>Questions about this policy can be sent to {SITE.email}.</p>
    </LegalPage>
  ),
});
