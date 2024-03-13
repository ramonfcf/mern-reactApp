import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Input from "./Input";

describe("Input component", () => {
  const mockOnChange = jest.fn();
  const label = "Test label";
  const placeholder = "Test placeholder";

  it("matches snapshot", () => {
    const { container } = render(
      <Input
        type="text"
        value="Test value"
        onChange={mockOnChange}
        label={label}
        placeholder={placeholder}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("calls onChange prop when input value changes", () => {
    render(
      <Input
        type="text"
        value="Test value"
        onChange={mockOnChange}
        label={label}
        placeholder={placeholder}
      />
    );
    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "New value" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("renders with correct label", () => {
    render(
      <Input
        type="text"
        value="Test value"
        onChange={mockOnChange}
        label={label}
        placeholder={placeholder}
      />
    );
    const labelElement = screen.getByText(label);

    expect(labelElement).toHaveTextContent(label);
  });

  it("renders with correct placeholder", () => {
    render(
      <Input
        type="text"
        value="Test value"
        onChange={mockOnChange}
        label={label}
        placeholder={placeholder}
      />
    );
    const inputElement = screen.getByRole("textbox");

    expect(inputElement).toHaveAttribute("placeholder", placeholder);
  });
});
