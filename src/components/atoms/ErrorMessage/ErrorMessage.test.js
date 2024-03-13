import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage component", () => {
  it("matches snapshot", () => {
    const { container } = render(<ErrorMessage error="Test error" />);
    expect(container).toMatchSnapshot();
  });

  it("renders with correct error message", () => {
    render(<ErrorMessage error="Test error" />);
    const errorMessageElement = screen.getByRole("alert");

    expect(errorMessageElement).toHaveTextContent("Error: Test error");
  });
});
