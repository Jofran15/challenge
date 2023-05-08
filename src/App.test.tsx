import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  expect(screen.getByText(/decode/i)).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/insert the encoded string/i)
  ).toBeInTheDocument();
});
