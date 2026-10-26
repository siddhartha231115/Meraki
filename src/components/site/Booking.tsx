import { createContext, useContext, useState, type ReactNode } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE, hasBookingUrl } from "@/lib/site";

const BookingCtx = createContext<{ open: () => void }>({ open: () => {} });
export const useBooking = () => useContext(BookingCtx);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = () => {
    if (hasBookingUrl()) window.open(SITE.bookingUrl, "_blank", "noopener,noreferrer");
    else setOpen(true);
  };
  return (
    <BookingCtx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="max-h-[92vh] overflow-y-auto rounded-3xl border-border bg-card sm:max-w-lg">
          <DialogHeader>
            <p className="eyebrow">Free clarity call</p>
            <DialogTitle className="font-serif text-3xl font-medium">Request your call</DialogTitle>
            <DialogDescription>
              Share a few details and a time that suits you. You will receive a reply to confirm.
            </DialogDescription>
          </DialogHeader>
          <BookingForm onDone={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </BookingCtx.Provider>
  );
}

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+\d\s()-]*$/, "Please use digits, spaces, + or - only")
    .optional()
    .or(z.literal("")),
  date: z.string().min(1, "Please choose a preferred date"),
  time: z.string().min(1, "Please choose a preferred time"),
  message: z.string().trim().max(1000, "Please keep your message under 1000 characters").optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof bookingSchema>, string>>;

export function BookingForm({ onDone, compact }: { onDone?: () => void; compact?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = bookingSchema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof Errors;
        next[k] ??= issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("Thank you — your request has been received.");
    // TODO: connect this form to email or a booking service before launch.
  }

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 className="size-10 text-sage" aria-hidden />
        <h3 className="text-2xl">Thank you for reaching out.</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Your request has been received. You will hear back soon to confirm your call time.
        </p>
        {onDone && (
          <Button variant="soft" size="xl" className="mt-2" onClick={onDone}>
            Close
          </Button>
        )}
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];
  return (
    <form noValidate onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <Field id="name" label="Name" error={errors.name} className="sm:col-span-2">
        <Input id="name" name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby="name-err" />
      </Field>
      <Field id="email" label="Email" error={errors.email}>
        <Input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby="email-err" />
      </Field>
      <Field id="phone" label="Phone (optional)" error={errors.phone}>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby="phone-err" />
      </Field>
      <Field id="date" label="Preferred date" error={errors.date}>
        <Input id="date" name="date" type="date" min={today} required aria-invalid={!!errors.date} aria-describedby="date-err" />
      </Field>
      <Field id="time" label="Preferred time" error={errors.time}>
        <Input id="time" name="time" type="time" required aria-invalid={!!errors.time} aria-describedby="time-err" />
      </Field>
      <Field id="message" label="A little about what’s on your mind" error={errors.message} className="sm:col-span-2">
        <Textarea id="message" name="message" rows={compact ? 3 : 4} aria-invalid={!!errors.message} aria-describedby="message-err" />
      </Field>
      <div className="sm:col-span-2">
        <Button type="submit" variant="hero" size="xl" className="w-full">
          Send my request
        </Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Coaching is not therapy or crisis support. If you are in crisis, please contact local emergency services.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-1.5 block text-sm">
        {label}
      </Label>
      {children}
      <p id={`${id}-err`} className="mt-1 min-h-4 text-xs text-destructive" aria-live="polite">
        {error}
      </p>
    </div>
  );
}

export function BookButton({ children = "Book a Free Clarity Call", ...props }: ButtonProps) {
  const { open } = useBooking();
  return (
    <Button variant="hero" size="xl" onClick={open} {...props}>
      {children}
    </Button>
  );
}
