import { describe, expect, it } from "vitest";
import { ANCHOR, PROGRAMS, SITE } from "@/lib/site";

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

  it("prices both programs in the editable site file", () => {
    expect(SITE.prices.selfWorthReset).toBe("[PRICE]");
    expect(SITE.prices.identityReclaim).toContain("payment plan");
  });
});
