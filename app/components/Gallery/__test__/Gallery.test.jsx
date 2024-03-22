import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Gallery from "../Gallery";

// Mocking the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(["image1.jpg", "image2.jpg"]),
  })
);

describe("Gallery component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render no images found message when no images are fetched", async () => {
    // Mocking the fetch function to return an empty array
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    render(<Gallery tag={{ tag: "nonexistenttag" }} />);

    // Wait for the fetch call to complete and check for no images found message
    await waitFor(() => {
      expect(screen.getByText("No Images Found")).toBeInTheDocument();
    });
  });
});
