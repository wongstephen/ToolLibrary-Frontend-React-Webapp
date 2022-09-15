import { render, screen } from "@testing-library/react";
import { Register } from "./Register";
import userEvent from "@testing-library/user-event";

describe("Register", () => {
  it("render register component title", () => {
    render(<Register />);
    const text = screen.getByText(/register a new account/i);
    expect(text).toBeTruthy();
  });
  it("register button disabled on render", () => {
    render(<Register />);
    const button = screen.getByRole("button", { name: /register/i });
    expect(button).toBeDisabled();
  });

  it("email and password has value, button is enabled", () => {
    render(<Register />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    userEvent.type(emailInput, "email@email.com");
    const passwordInput = screen.getByPlaceholderText(/password/i);
    userEvent.type(passwordInput, "qwer1234");
    const button = screen.getByRole("button", { name: /register/i });
    expect(button).toBeEnabled();
  });

  it("only email has value, button should be disabled", () => {
    render(<Register />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    userEvent.type(emailInput, "email@email.com");
    const button = screen.getByRole("button", { name: /register/i });
    expect(button).toBeDisabled();
  });

  it("only password has value, button should be disabled", () => {
    render(<Register />);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    userEvent.type(passwordInput, "qwer1234");
    const button = screen.getByRole("button", { name: /register/i });
    expect(button).toBeDisabled();
  });
});
