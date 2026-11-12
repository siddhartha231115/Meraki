import { Link } from "@tanstack/react-router";
import { NAV, SITE, hasBookingUrl } from "@/lib/site";
import { Wordmark } from "./Header";
import { useBooking } from "./Booking";

export function Footer() {
  const { open } = useBooking();
  return (
    <footer className="bg-charcoal pb-24 pt-16 text-ivory lg:pb-10">
      <div className="container-page grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Wordmark className="text-3xl" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
            Private life and mindset coaching for people ready to reconnect with themselves and move forward with
            clarity.
          </p>
        </div>
        <FooterCol title="Explore">
          {NAV.map((n) => (
            <li key={n.label}>
              <Link to={n.to} {...("hash" in n ? { hash: n.hash } : {})} className="hover:text-ivory">
                {n.label}
              </Link>
            </li>
          ))}
        </FooterCol>
        <FooterCol title="Pages">
          <li><Link to="/about" className="hover:text-ivory">About</Link></li>
          <li><Link to="/coaching" className="hover:text-ivory">Coaching Services</Link></li>
          <li><Link to="/contact" className="hover:text-ivory">Contact</Link></li>
          <li><Link to="/privacy" className="hover:text-ivory">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-ivory">Terms and Conditions</Link></li>
          <li><Link to="/cancellation" className="hover:text-ivory">Cancellation and Refund</Link></li>
          <li><Link to="/disclaimer" className="hover:text-ivory">Coaching Disclaimer</Link></li>
        </FooterCol>
        <FooterCol title="Connect">
          <li>
            <a href={`mailto:${SITE.email}`} className="hover:text-ivory">{SITE.email}</a>
          </li>
          <li>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
              Instagram
            </a>
          </li>
          <li>
            {hasBookingUrl() ? (
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                Book a call
              </a>
            ) : (
              <button onClick={open} className="hover:text-ivory">Book a call</button>
            )}
          </li>
          <li className="text-ivory/50">{SITE.location}</li>
        </FooterCol>
      </div>
      <div className="container-page mt-14 flex flex-col gap-2 border-t border-ivory/15 pt-6 text-xs text-ivory/50 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Meraki. All rights reserved.</p>
        <p>Coaching is not therapy, medical treatment, or crisis care.</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ivory/50">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm text-ivory/75">{children}</ul>
    </div>
  );
}
