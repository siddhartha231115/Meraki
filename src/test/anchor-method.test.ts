import { describe, expect, it } from "vitest";

import { RESET, SITE } from "@/lib/site";

// The Reset is six weeks long and each week carries one letter of the ANCHOR Method.
describe("The 6-Week RESET", () => {
  it("has one week per letter of ANCHOR, in order", () => {
    expect(RESET.weeks.map((w) => w.letter)).toEqual(["A", "N", "C", "H", "O", "R"]);
    expect(RESET.weeks).toHaveLength(6);
    expect(SITE.prices.programWeeks).toBe("6");
  });

  it("gives every week a number, a name, a question and a description", () => {
    for (const w of RESET.weeks) {
      expect(w.n).toMatch(/^\d{2}$/);
      expect(w.name.length).toBeGreaterThan(0);
      expect(w.q.length).toBeGreaterThan(0);
      expect(w.d.length).toBeGreaterThan(0);
    }
  });
});
