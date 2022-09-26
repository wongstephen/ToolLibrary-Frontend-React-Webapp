import { fireEvent, render, screen } from "@testing-library/react";
import { LoginRegisterLink } from "../presentational/LoginRegisterLink";
import { BrowserRouter as Router } from "react-router-dom";
describe("LoginRegisterLink", () => {
  it("register text links to register component", () => {
    render(
      <Router>
        <LoginRegisterLink />
      </Router>
    );
    const registerLink = screen.getByText(/register/i);
    fireEvent.click(registerLink);
    expect(registerLink).toBeEnabled(); //need to fix
  });
});
