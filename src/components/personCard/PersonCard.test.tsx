import { render, screen } from "@testing-library/react";
import PersonCard from "./PersonCard";
import { Person } from "../../interfaces/Person";

test("renders learn react link", () => {
  const person: Person = {
    name: "Luke",
    last_name: "Skywalker",
    id: "1234",
  };

  render(<PersonCard person={person} />);
  expect(screen.getByText(/luke/i)).toBeInTheDocument();
  expect(screen.getByText(/skywalker/i)).toBeInTheDocument();
  expect(screen.getByText(/1234/)).toBeInTheDocument();
});
