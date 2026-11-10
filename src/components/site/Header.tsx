import { useEffect, useRef, useState, type FocusEvent } from "react";
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
  const [showFloat, setShowFloat] = useState(false);
  const { open: book } = useBooking();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  // Keyboard support: focus first link on open, Escape closes and returns focus.
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!menuRef.current?.contains(t) && !toggleRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  // Close the mobile menu when focus leaves it (e.g. Tab past the last item).
  const onMenuBlur = (e: FocusEvent<HTMLElement>) => {
    const next = e.relatedTarget as Node | null;
    if (next && !e.currentTarget.contains(next) && !toggleRef.current?.contains(next)) setOpen(false);
  };

  useEffect(() => {
    // Hide the floating button while a section with its own booking call
    // (the clarity-call section, the final CTA band or the footer) is on screen.
    const onScroll = () => {
      const h = window.innerHeight;
      const covered = Array.from(
        document.querySelectorAll<HTMLElement>("#contact, footer, [data-no-float-cta]"),
      ).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top < h && r.bottom > 0;
      });
      setScrolled(window.scrollY > 24);
      setShowFloat(window.scrollY > 24 && !covered);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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
          <Link to="/" aria-label="Meraki home" className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <Wordmark />
          </Link>
          <nav aria-label="Main" className="hidden min-[920px]:block">
            <ul className="flex items-center gap-7 text-sm min-[920px]:gap-5 xl:gap-7">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link
                    to={n.to}
                    {...("hash" in n ? { hash: n.hash } : {})}
                    className="relative py-1 text-foreground/80 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-sage after:transition-transform hover:text-foreground hover:after:scale-x-100 focus-visible:text-foreground focus-visible:after:scale-x-100 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden min-[920px]:block">
            <BookButton size="default" className="h-10 px-5" />
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 items-center justify-center rounded-full border border-border min-[920px]:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
        {open && (
          <nav ref={menuRef} onBlur={onMenuBlur} id="mobile-menu" aria-label="Mobile" className="border-t border-border bg-background min-[920px]:hidden">
            <ul className="container-page flex flex-col py-4">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link
                    to={n.to}
                    {...("hash" in n ? { hash: n.hash } : {})}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-serif text-2xl rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
                  type="button"
                  className="w-full rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary py-3.5 text-primary-foreground"
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
          "fixed bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-lift transition-all duration-500 min-[920px]:hidden",
          showFloat && !open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
        )}
        tabIndex={showFloat && !open ? 0 : -1}
        aria-hidden={!showFloat || open}
      >
        Book a Free Clarity Call
      </button>
    </>
  );
}
