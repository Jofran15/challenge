import React from "react";
import { render, screen } from "@testing-library/react";
import Decoder from "./Decoder";

test("renders learn react link", () => {
  render(<Decoder />);
  expect(screen.getByText(/decode/i)).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/insert the encoded string/i)
  ).toBeInTheDocument();
});
