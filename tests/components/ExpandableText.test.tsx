import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const text = "a".repeat(300);
  const truncText = text.substring(0, 255) + "...";

  it("should render short text without a button for expanding the text ", () => {
    render(<ExpandableText text="Lorem ipsum " />);
    expect(screen.getByRole("article")).toHaveTextContent("Lorem ipsum");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
  it("should expand text when Show More button is clicked ", async () => {
    render(<ExpandableText text={text} />);
    const button = screen.getByRole("button");
    const user = userEvent.setup();

    expect(screen.getByText(truncText)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Show More");

    await user.click(button);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(button).toHaveTextContent("Show Less");
  });
  it("should collapse text when Show Less button is clicked", async () => {
    render(<ExpandableText text={text} />);

    const button = screen.getByRole("button");
    const user = userEvent.setup();

    await user.click(button);

    await user.click(button);

    expect(screen.getByText(truncText)).toBeInTheDocument();
    expect(button).toHaveTextContent("Show More");
  });
});
