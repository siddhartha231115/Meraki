import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { LegalPage } from "@/components/site/sections";

export const Route = createFileRoute("/cancellation")({
  head: () => ({
    meta: [
      { title: "Cancellation and Refund Policy | Meraki Coaching" },
      { name: "description", content: "How session cancellations, rescheduling and program refunds are handled at Meraki." },
      { property: "og:title", content: "Cancellation and Refund Policy | Meraki Coaching" },
      { property: "og:description", content: "How cancellations, rescheduling and refunds are handled at Meraki." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Cancellation and Refund Policy" updated="[INSERT DATE]" template={false}>
      <p>
        At Meraki, we value your time and commitment to personal growth. This policy explains how session
        cancellations, rescheduling, and program refunds are handled.
      </p>

      <h2>1. Session Rescheduling</h2>
      <p>If you are unable to attend a scheduled coaching session, please notify us at least 24 hours in advance.</p>
      <p>Rescheduling requests will be accommodated based on availability.</p>

      <h2>2. Late Cancellations</h2>
      <p>
        Cancellations made less than 24 hours before a scheduled session may be treated as a completed session, except
        where exceptional circumstances apply.
      </p>

      <h2>3. Missed Sessions</h2>
      <p>If a client does not attend a scheduled session without prior notice, the session may be considered utilised.</p>

      <h2>4. Program Refunds</h2>
      <p>
        Refund requests for coaching programs will be reviewed based on the enrolment agreement, services already
        delivered, and applicable consumer protection laws.
      </p>
      <p>Any applicable refund terms will be communicated before payment.</p>

      <h2>5. Cancellation by Meraki</h2>
      <p>If Meraki needs to cancel or reschedule a session, the client will be offered an alternative time.</p>
      <p>
        If a program cannot be delivered as agreed, an appropriate refund or alternative arrangement will be
        communicated.
      </p>

      <h2>6. Contact Us</h2>
      <p>For cancellation, rescheduling, or refund-related questions:</p>
      <p>
        Email:{" "}
        <a href={`mailto:${SITE.email}`} className="text-foreground underline underline-offset-4">
          {SITE.email}
        </a>
      </p>
      <p>WhatsApp: {SITE.whatsapp}</p>
    </LegalPage>
  ),
});
