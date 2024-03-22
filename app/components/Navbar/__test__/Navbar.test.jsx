import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

// Mocking the Link
jest.mock("next/link", () => {
  const MockedLink = ({ children }) => {
    return <div>{children}</div>;
  };
  MockedLink.displayName = "NextLink";
  return MockedLink;
});
// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));
describe("Navbar component", () => {
  it("should render Navbar with Link and Search", () => {
    render(<Navbar />);

    expect(screen.getByText("Beautiful Gallery")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });
});
