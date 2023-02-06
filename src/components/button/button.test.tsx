import { render, screen } from "@testing-library/react";
import { Button } from "./button";

test("renders learn react link", () => {
  render(<Button />);
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
});
