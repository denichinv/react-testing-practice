import React from "react";
import { it, expect, describe } from "vitest";
import Greet from "../../src/components/Greet";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Vilizar" />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(/hello vilizar/i);
  });
  it("should render login button when name is not provided", () => {
    render(<Greet />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(/login/i);
  });
});
