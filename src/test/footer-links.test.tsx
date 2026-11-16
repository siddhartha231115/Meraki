import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory } from "@tanstack/react-router";
import { RouterContextProvider, createRouter } from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BookingProvider } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";
import { routeTree } from "@/routeTree.gen";

function renderFooter() {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory(),
    context: { queryClient: new QueryClient() },
  });

  return render(
    <RouterContextProvider router={router}>
      <BookingProvider>
        <Footer />
      </BookingProvider>
    </RouterContextProvider>,
  );
}

describe("Footer links", () => {
  it("lists every link once — no page appears in two columns", () => {
    renderFooter();

    const labels = screen
      .getAllByRole("link")
      .map((a) => a.textContent?.trim() ?? "")
      .filter(Boolean);

    expect(labels.length).toBeGreaterThan(0);
    expect(labels.filter((l, i) => labels.indexOf(l) !== i)).toEqual([]);
  });
});
