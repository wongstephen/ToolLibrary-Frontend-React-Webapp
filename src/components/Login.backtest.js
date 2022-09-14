import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { Login } from "./Login";

test("render page title", async () => {
  render(<Login />);

  expect(screen.getByText(/login now/i)).toBeInTheDocument();
});

/* 
test("on render sign in button should be disabled", () => {
  render(<Login />);

  expect(screen.getByRole("button", { name: /login/i })).toBeDisabled();
});

test("when login and password have a value, login button is enabled", () => {
  render(<Login />);

  userEvent.type(screen.getByPlaceholderText(/email/i), "test@email.com");
  userEvent.type(screen.getByPlaceholderText(/password/i), "qwer123");

  expect(screen.getByRole("button", { name: /login/i })).toBeEnabled();
}); */
