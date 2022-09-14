import { render, screen } from "@testing-library/react";
import { Register } from "./Register";
import userEvent from "@testing-library/user-event";

test("render register component title", async () => {
  render(<Register />);
  expect(screen.getByText(/register a new account/i)).toBeInTheDocument();
});

test("login and password have a value - register button is enabled", () => {
  render(<Register />);

  userEvent.type(screen.getByPlaceholderText(/email/i), "test@email.com");
  userEvent.type(screen.getByPlaceholderText(/password/i), "qwer1234");

  expect(screen.getByRole("button", { name: /register/i })).toBeEnabled();
});

test("login has a value and password has no value - register button is disabled", () => {
  render(<Register />);

  userEvent.type(screen.getByPlaceholderText(/email/i), "test@email.com");
  userEvent.type(screen.getByPlaceholderText(/password/i), "");

  expect(screen.getByRole("button", { name: /register/i })).toBeDisabled();
});

test("login has a no value and password has a value - register button is disabled", () => {
  render(<Register />);

  userEvent.type(screen.getByPlaceholderText(/email/i), "test@email.com");
  userEvent.type(screen.getByPlaceholderText(/password/i), "");

  expect(screen.getByRole("button", { name: /register/i })).toBeDisabled();
});
