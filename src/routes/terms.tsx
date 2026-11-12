import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { LegalPage } from "@/components/site/sections";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Meraki Coaching" },
      { name: "description", content: "Terms for using this website and taking part in coaching with Meraki Life Coaching." },
      { property: "og:title", content: "Terms and Conditions | Meraki Coaching" },
      { property: "og:description", content: "Terms for using this website and taking part in Meraki coaching." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Terms and Conditions" updated="[INSERT DATE]" template={false}>
      <p>
        Welcome to Meraki Life Coaching. By accessing this website or purchasing our coaching programs, you agree to the
        following terms and conditions.
      </p>

      <h2>1. About Our Services</h2>
      <p>
        Meraki provides personal development and mindset coaching services, including individual coaching sessions,
        structured coaching programs, and digital resources.
      </p>
      <p>
        Our services are designed to support self-awareness, personal growth, self-worth, boundaries, and identity
        development.
      </p>

      <h2>2. Program Enrolment</h2>
      <p>When enrolling in a coaching program:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>You agree to provide accurate contact and booking information.</li>
        <li>Program details, duration, session structure, and fees will be communicated before enrolment.</li>
        <li>Your enrolment will be confirmed once the applicable payment and booking requirements are completed.</li>
      </ul>

      <h2>3. Coaching Sessions</h2>
      <p>Coaching sessions are conducted online unless otherwise specified.</p>
      <p>
        Clients are expected to attend sessions on time and participate actively in the coaching process.
      </p>

      <h2>4. Client Responsibility</h2>
      <p>Coaching is a collaborative process. You are responsible for your own decisions, actions, and outcomes.</p>
      <p>
        Meraki provides a supportive environment for reflection and personal development but does not guarantee specific
        personal or professional results.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All original content on this website, including written material, program structures, worksheets, exercises,
        branding, and digital resources, belongs to Meraki unless otherwise stated.
      </p>
      <p>
        These materials are provided for personal use only and may not be copied, distributed, reproduced, or
        commercially used without written permission.
      </p>

      <h2>6. Payments</h2>
      <p>Program fees and payment instructions will be communicated before enrolment.</p>
      <p>Any applicable taxes and additional charges will be disclosed during the purchase process.</p>

      <h2>7. Changes to Services</h2>
      <p>
        Meraki reserves the right to update program content, session schedules, and service offerings when necessary.
        Any material changes affecting an enrolled client will be communicated.
      </p>

      <h2>8. Website Use</h2>
      <p>
        Visitors agree not to misuse this website, attempt unauthorised access, reproduce its content without
        permission, or engage in activities that may affect its security or operation.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        Meraki does not guarantee specific outcomes from coaching services. Clients remain responsible for their own
        decisions and actions.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These terms are governed by the applicable laws of India. Any disputes will be subject to the jurisdiction of
        the competent courts in Bengaluru, Karnataka, subject to applicable law.
      </p>

      <h2>11. Contact</h2>
      <p>For questions regarding these Terms and Conditions:</p>
      <p>
        Email:{" "}
        <a href={`mailto:${SITE.email}`} className="text-foreground underline underline-offset-4">
          {SITE.email}
        </a>
      </p>
      <p className="font-semibold text-foreground">Meraki Life Coaching</p>
      <p>
        Cancellations, rescheduling and refunds are covered separately in our{" "}
        <Link to="/cancellation" className="text-foreground underline underline-offset-4">
          Cancellation and Refund Policy
        </Link>
        .
      </p>
    </LegalPage>
  ),
});
