import { render, screen } from "@testing-library/react";
import { Gentleman } from "./gentleman";

test("renders learn react link", () => {
  render(<Gentleman />);
  const linkElement = screen.getByRole("list");
  expect(linkElement).toBeInTheDocument();
});
