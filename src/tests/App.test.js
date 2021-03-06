import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { location } from "../data/forecast.json";

test("renders Weather App", () => {
  render(<App location={location} />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
