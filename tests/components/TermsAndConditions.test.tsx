import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  const TermsAndConditionsRender = () => {
    render(<TermsAndConditions />);

    return {
      checkbox: screen.getByRole("checkbox"),
      button: screen.getByRole("button"),
    };
  };
  it("should render with correct text and initial state ", () => {
    const { checkbox, button } = TermsAndConditionsRender();
    expect(screen.getByText("Terms & Conditions")).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor/i)).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("disabled");
  });

  it("should enable the button when the checkbox is clicked ", async () => {
    const { checkbox, button } = TermsAndConditionsRender();

    const user = userEvent.setup();
    await user.click(checkbox);

    expect(button).toBeEnabled();
  });
});
