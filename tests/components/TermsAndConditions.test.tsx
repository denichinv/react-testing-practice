import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  it("should render with correct text and initial state ", () => {
    render(<TermsAndConditions />);
    expect(screen.getByText("Terms & Conditions")).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor/i)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });

  it("should enable the button when the checkbox is clicked ", async () => {
    render(<TermsAndConditions />);

    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    const user = userEvent.setup();
    await user.click(checkbox);

    expect(button).toBeEnabled();
  });
});
