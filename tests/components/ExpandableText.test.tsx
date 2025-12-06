import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  it("should render short text without a button for expanding the text ", () => {
    render(<ExpandableText text="Lorem ipsum " />);
    expect(screen.getByRole("article")).toHaveTextContent("Lorem ipsum");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
  it("should expand text when Show More button is clicked ", async () => {
    const text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis quaerat nihil eaque odit et possimus corrupti, aperiam saepe debitis eveniet sunt natus non asperiores maxime adipisci dicta? Veniam quas distinctio expedita nihil quibusdam voluptatum impedit, neque consequatur quia nisi tenetur necessitatibus cumque fuga dignissimos aliquid repellat laboriosam error! Mollitia assumenda quos aliquid consequuntur molestias, sint placeat ex neque dolorum possimus id nihil atque inventore quibusdam voluptatum reiciendis deleniti, maiores molestiae perferendis? Exercitationem, soluta, reprehenderit aliquid minus incidunt, saepe facere ducimus quaerat est velit blanditiis voluptatum earum temporibus expedita sunt. Nostrum ex deserunt atque assumenda mollitia. Nihil adipisci voluptates quos.";
    render(<ExpandableText text={text} />);
    const truncText = text.substring(0, 255) + "...";
    const button = screen.getByRole("button");
    const user = userEvent.setup();

    expect(screen.getByText(truncText)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Show More");

    await user.click(button);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(button).toHaveTextContent("Show Less");
  });
  it("should collapse text when Show Less button is clicked ", async () => {
    const text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis quaerat nihil eaque odit et possimus corrupti, aperiam saepe debitis eveniet sunt natus non asperiores maxime adipisci dicta? Veniam quas distinctio expedita nihil quibusdam voluptatum impedit, neque consequatur quia nisi tenetur necessitatibus cumque fuga dignissimos aliquid repellat laboriosam error! Mollitia assumenda quos aliquid consequuntur molestias, sint placeat ex neque dolorum possimus id nihil atque inventore quibusdam voluptatum reiciendis deleniti, maiores molestiae perferendis? Exercitationem, soluta, reprehenderit aliquid minus incidunt, saepe facere ducimus quaerat est velit blanditiis voluptatum earum temporibus expedita sunt. Nostrum ex deserunt atque assumenda mollitia. Nihil adipisci voluptates quos.";
    render(<ExpandableText text={text} />);

    const button = screen.getByRole("button");
    const user = userEvent.setup();

    await user.click(button);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Show Less");
  });
});
