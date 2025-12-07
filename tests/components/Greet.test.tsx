import Greet from "../../src/components/Greet";
import { render, screen } from "@testing-library/react";

describe("Greet", () => {
  const renderGreet = (name?: string) => {
    render(<Greet name={name} />);

    return {
      heading: screen.queryByRole("heading"),
      button: screen.queryByRole("button"),
    };
  };

  it("should render Hello with the name when name is provided", () => {
    const { heading, button } = renderGreet("Vilizar");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello vilizar/i);
    expect(button).not.toBeInTheDocument();
  });

  it("should render login button when name is not provided", () => {
    const { button, heading } = renderGreet();

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
    expect(heading).not.toBeInTheDocument();
  });
});
