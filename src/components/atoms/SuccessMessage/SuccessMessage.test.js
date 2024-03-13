import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SuccessMessage from "./SuccessMessage";

describe("SuccessMessage component", () => {
  it("matches snapshot", () => {
    const { container } = render(<SuccessMessage message="Test message" />);
    expect(container).toMatchSnapshot();
  });

  it("renders with correct success message", () => {
    render(<SuccessMessage message="Test message" />);
    const successMessageElement = screen.getByRole("alert");

    expect(successMessageElement).toHaveTextContent("Success: Test message");
  });
});
