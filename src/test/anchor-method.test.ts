import { describe, expect, it } from "vitest";
import { INTENTS } from "@/components/site/Booking";
import { OFFERS } from "@/components/site/sections";
import { ANCHOR, PROGRAMS, SITE, isFilled } from "@/lib/site";

describe("Meraki Identity Reclaim", () => {
  it("follows the ANCHOR Method across six weeks", () => {
    expect(ANCHOR.weeks.map((w) => w.letter)).toEqual(["A", "N", "C", "H", "O", "R"]);
    expect(ANCHOR.weeks).toHaveLength(6);
    expect(ANCHOR.program).toBe("Meraki Identity Reclaim");
  });

  it("gives every letter a name, a question and a description", () => {
    for (const w of ANCHOR.weeks) {
      expect(w.name.length).toBeGreaterThan(0);
      expect(w.q.length).toBeGreaterThan(0);
      expect(w.d.length).toBeGreaterThan(0);
    }
  });
});

describe("The two Meraki programs", () => {
  it("offers Self-Worth Reset at three weeks and Identity Reclaim at six", () => {
    expect(PROGRAMS.map((p) => p.name)).toEqual(["Meraki Self-Worth Reset", "Meraki Identity Reclaim"]);
    expect(PROGRAMS.map((p) => p.weeks)).toEqual(["3", "6"]);
  });
});

describe("Site details", () => {
  it("links Instagram to the coach's own handle", () => {
    expect(SITE.instagramHandle).toBe("@walkwithsri");
    expect(SITE.instagram).toBe("https://www.instagram.com/walkwithsri");
  });

  it("keeps bracketed placeholder text out of every detail", () => {
    expect(JSON.stringify(SITE)).not.toContain("[");
  });

  it("treats blank and bracketed values as unfilled so they stay hidden", () => {
    expect(isFilled("")).toBe(false);
    expect(isFilled("[PRICE]")).toBe(false);
    expect(isFilled("hello@meraki.com")).toBe(true);
  });
});

describe("The offers row", () => {
  it("shows only the free clarity call and 1:1 coaching", () => {
    expect(OFFERS.map((o) => o.name)).toEqual(["Free Clarity Call", "1:1 Coaching"]);
  });

  it("shows no program card", () => {
    const names = OFFERS.map((o) => o.name).join(" ");
    expect(names).not.toContain("Self-Worth Reset");
    expect(names).not.toContain("Identity Reclaim");
  });

  it("sends each offer to its own booking form, never the free-call one", () => {
    expect(OFFERS.find((o) => o.name === "1:1 Coaching")?.intent).toBe("coaching");
    expect(OFFERS.find((o) => o.name === "Free Clarity Call")?.intent).toBe("clarity");
    expect(INTENTS.coaching.eyebrow).toBe("1:1 coaching");
    expect(INTENTS.coaching.eyebrow).not.toBe(INTENTS.clarity.eyebrow);
  });
});
