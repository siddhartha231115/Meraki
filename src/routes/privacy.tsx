import { createFileRoute } from "@tanstack/react-router";
import { SITE, isFilled } from "@/lib/site";
import { LegalPage } from "@/components/site/sections";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Meraki Coaching" },
      { name: "description", content: "How Meraki Life Coaching collects, uses, and protects your personal information." },
      { property: "og:title", content: "Privacy Policy | Meraki Coaching" },
      { property: "og:description", content: "How Meraki Life Coaching handles your personal information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy" updated="11 November 2026">
      <p>
        At Meraki Life Coaching (“Meraki”, “we”, “our” or “us”), we respect your privacy and are committed to protecting
        the personal information you share with us.
      </p>
      <p>
        This Privacy Policy explains what information we collect, how we use it, and how we protect it when you visit
        our website or interact with our coaching services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following information:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Name and contact details, including email address and phone number.</li>
        <li>Information submitted through website enquiry and contact forms.</li>
        <li>Information shared when booking an introductory session.</li>
        <li>Payment and transaction information when purchasing a program.</li>
        <li>Information voluntarily shared during coaching interactions.</li>
        <li>Basic website usage information, such as pages visited and browser information, where analytics tools are used.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Respond to enquiries and requests.</li>
        <li>Schedule and manage coaching sessions.</li>
        <li>Provide coaching programs and services.</li>
        <li>Communicate important updates about your program.</li>
        <li>Process payments and maintain transaction records.</li>
        <li>Improve our website and visitor experience.</li>
        <li>Send promotional updates only where you have agreed to receive them.</li>
      </ul>

      <h2>3. Confidentiality of Coaching Conversations</h2>
      <p>We respect the personal nature of coaching conversations.</p>
      <p>
        Information shared during coaching sessions will be treated as confidential and will not be shared with third
        parties without your permission, except where disclosure is required by law or necessary to address an immediate
        safety concern.
      </p>
      <p>We do not publish client stories, photographs, names, or testimonials without appropriate permission.</p>

      <h2>4. Sharing of Information</h2>
      <p>We do not sell or rent your personal information.</p>
      <p>Your information may be shared with trusted service providers when necessary to operate our business, such as:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Website hosting providers.</li>
        <li>Email and communication platforms.</li>
        <li>Online meeting platforms.</li>
        <li>Payment processing providers.</li>
        <li>Scheduling and administrative tools.</li>
      </ul>
      <p>These providers may process information according to their own privacy and security policies.</p>

      <h2>5. Data Security</h2>
      <p>
        We take reasonable steps to protect the information shared with us against unauthorised access, loss, misuse, or
        disclosure.
      </p>
      <p>
        However, no method of transmitting or storing information electronically can be guaranteed to be completely
        secure.
      </p>

      <h2>6. Cookies and Website Analytics</h2>
      <p>This website does not place cookies or similar files on your device, and it does not run advertising trackers.</p>
      <p>
        To understand how the site is used, we use the visitor analytics service built into the platform that hosts this
        website. It records the pages visited, where visitors came from, their country, browser, operating system and
        device type, how long they stay, how fast pages load, errors, and which buttons and links are clicked. A click
        is identified by where it is on the page, not by its text.
      </p>
      <p>
        This analytics uses no cookies, stores nothing on your device, does not keep your IP address, and cannot
        identify you or recognise a returning visitor — each visit counts on its own. Detailed data is kept for 90 days.
        Daily summaries are kept for a year: visit and page-view counts, and for each visit, the pages seen and where
        the visitor came from.
      </p>
      <p>
        Because this data uses no cookies and identifies no one, and this site shows no consent banner, it is recorded
        for every visitor. You can still manage cookies generally through your browser settings.
      </p>
      <p>
        Lovable collects this data for us.{" "}
        <a
          href="https://lovable.dev/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-4"
        >
          Lovable’s privacy policy
        </a>{" "}
        explains how it handles it.
      </p>
      <p>
        This site also loads its web fonts from Google Fonts. That request goes to Google, which sees your IP address,
        and is covered by Google’s own privacy policy.
      </p>

      <h2>7. Your Privacy Rights</h2>
      <p>You may contact us to:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Request access to personal information you have shared with us.</li>
        <li>Request correction of inaccurate information.</li>
        <li>Withdraw consent for certain uses of your information.</li>
        <li>Request deletion of personal information, subject to applicable legal and record-retention requirements.</li>
        <li>Opt out of promotional communications.</li>
      </ul>

      <h2>8. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary for the purposes for which it was collected,
        including applicable legal, accounting, and business requirements.
      </p>

      <h2>9. Children’s Privacy</h2>
      <p>
        Our coaching services are intended for adults. We do not knowingly collect personal information from children
        through our coaching enquiry or booking processes.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated
        revision date.
      </p>

      <h2>11. Contact Us</h2>
      <p>For questions about this Privacy Policy or the information we hold about you, contact:</p>
      <p className="font-semibold text-foreground">Meraki Life Coaching</p>
      {isFilled(SITE.email) && (
        <p>
          Email:{" "}
          <a href={`mailto:${SITE.email}`} className="text-foreground underline underline-offset-4">
            {SITE.email}
          </a>
        </p>
      )}
      <p>Location: {SITE.location}</p>
      {isFilled(SITE.siteUrl) && <p>Website: {SITE.siteUrl}</p>}
    </LegalPage>
  ),
});
