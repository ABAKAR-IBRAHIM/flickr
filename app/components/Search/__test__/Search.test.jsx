import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Search from "../Search";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));
describe("Search for images", () => {
  it("should be able to add text to the input", async () => {
    render(<Search />);

    const input = screen.getByPlaceholderText("Search");
    await userEvent.type(input, "Birds");
    expect(input).toHaveValue("Birds");
  });
});
