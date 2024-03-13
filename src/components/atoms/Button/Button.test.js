import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button component", () => {
  const mockOnClick = jest.fn();
  const buttonText = "Click me";

  it("matches snapshot", () => {
    const { container } = render(
      <Button
        onClick={mockOnClick}
        text={buttonText}
        type="normal"
        color="primary"
        size="large"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("calls onClick prop when clicked", () => {
    render(<Button onClick={mockOnClick} text={buttonText} />);
    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders with correct text", () => {
    render(<Button onClick={mockOnClick} text={buttonText} />);
    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveTextContent(buttonText);
  });

  it("renders with correct size", () => {
    render(<Button onClick={mockOnClick} text={buttonText} size="small" />);
    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveClass("btn-sm");
  });

  it("renders with correct color", () => {
    render(<Button onClick={mockOnClick} text={buttonText} color="primary" />);
    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveClass("bg-primary");
  });
});
