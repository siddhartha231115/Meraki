import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";
import { BookButton, useBooking } from "./Booking";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-serif text-2xl font-medium tracking-[0.12em]", className)}>
      Meraki<span className="text-rose">.</span>
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: book } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "border-b border-border/70 bg-background/90 shadow-soft backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="container-page flex h-20 items-center justify-between gap-6">
          <Link to="/" aria-label="Meraki home">
            <Wordmark />
          </Link>
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link
                    to={n.to}
                    {...("hash" in n ? { hash: n.hash } : {})}
                    className="relative py-1 text-foreground/80 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-sage after:transition-transform hover:text-foreground hover:after:scale-x-100"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:block">
            <BookButton size="default" className="h-10 px-5" />
          </div>
          <button
            className="inline-flex size-11 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
            <ul className="container-page flex flex-col py-4">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link
                    to={n.to}
                    {...("hash" in n ? { hash: n.hash } : {})}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-serif text-2xl"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <button
                  onClick={() => {
                    setOpen(false);
                    book();
                  }}
                  className="w-full rounded-full bg-primary py-3.5 text-primary-foreground"
                >
                  Book a Free Clarity Call
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>
      {/* Floating mobile booking button */}
      <button
        onClick={book}
        className={cn(
          "fixed bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-lift transition-all duration-500 lg:hidden",
          scrolled && !open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
        )}
        tabIndex={scrolled && !open ? 0 : -1}
        aria-hidden={!scrolled || open}
      >
        Book a Free Clarity Call
      </button>
    </>
  );
}
