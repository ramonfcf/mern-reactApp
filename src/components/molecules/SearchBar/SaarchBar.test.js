import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import SearchBar from "./SearchBar";

describe("SearchBar component", () => {
  const onChange = jest.fn();
  const placeholder = "Test placeholder";

  it("matches snapshot", () => {
    const { container } = render(
      <SearchBar onChange={onChange} placeholder={placeholder} value="" />
    );
    expect(container).toMatchSnapshot();
  });

  it("calls onChange prop when input value changes", () => {
    render(
      <SearchBar onChange={onChange} placeholder={placeholder} value="" />
    );
    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "New value" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("renders with correct placeholder", () => {
    render(
      <SearchBar onChange={onChange} placeholder={placeholder} value="" />
    );
    const inputElement = screen.getByPlaceholderText(placeholder);

    expect(inputElement).toHaveAttribute("placeholder", placeholder);
  });
});
