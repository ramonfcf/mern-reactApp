import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Loading from "./Loading";

describe("Loading component", () => {
  it("matches snapshot", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
