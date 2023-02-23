import {
  render,
  fireEvent,
  screen,
  cleanup,
  within,
} from "@testing-library/react";
import React from "react";
import { Login } from "../Login";
import * as router from "react-router";

const axios = require("axios");

jest.mock("axios");

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

afterEach(() => {
  cleanup();
});

describe("Login Component Test", () => {
  test("submit button valid with valid inputs", () => {
    render(<Login />);

    const inputForm = screen.getByTestId("form");
    // Find the form fields and enter valid input
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: "guest@email.com" } });
    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.change(passwordInput, { target: { value: "password" } });

    // Check button
    const submitButton = within(inputForm).getByText(/login/i);
    expect(submitButton).not.toHaveAttribute("disabled");
  });

  test("submit button disabled with invalid inputs", () => {
    render(<Login />);

    const inputForm = screen.getByTestId("form");
    // Find the form fields and enter valid input
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: "guest@email.com" } });
    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.change(passwordInput, { target: { value: "" } });

    // Check Button
    const submitButton = within(inputForm).getByText(/login/i);
    expect(submitButton).toHaveAttribute("disabled");
  });

  test("form displays error message when a required field is blank", () => {
    render(<Login />);

    const inputForm = screen.getByTestId("form");
    // Find the form fields and enter valid input
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: "1" } });
    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.change(passwordInput, { target: { value: "1" } });

    // Fire Button
    const submitButton = within(inputForm).getByText(/login/i);
    fireEvent.click(submitButton);
    expect(
      screen.getByText(/please enter a valid email and password/i)
    ).toBeInTheDocument();
  });
});
