import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  it("should render the component ", () => {
    render(<UserAccount user={{ id: 1, name: "Vilizar", isAdmin: true }} />);

    expect(screen.getByText("Vilizar")).toBeInTheDocument();
    expect(screen.getByText("User Profile")).toBeInTheDocument();
  });
  it("should render the component as admin ", () => {
    render(<UserAccount user={{ id: 1, name: "Vilizar", isAdmin: true }} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(/edit/i);
  });
  it("should render the component as guest ", () => {
    render(<UserAccount user={{ id: 1, name: "Vilizar" }} />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByText(/edit/i)).not.toBeInTheDocument();
  });
});
