import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Register } from "./Register";

describe("Register", () => {
  test("renders the register form", () => {
    render(<Register />);

    // Assert that the title is rendered
    expect(screen.getByTestId("title")).toBeInTheDocument();

    // Assert that the email input is rendered
    expect(screen.getByLabelText("email")).toBeInTheDocument();

    // Assert that the password input is rendered
    expect(screen.getByLabelText("password")).toBeInTheDocument();

    // Assert that the confirm password input is rendered
    expect(screen.getByLabelText("confirm password")).toBeInTheDocument();

    // Assert that the register button is rendered
    expect(screen.getByLabelText("register")).toBeInTheDocument();

    // Assert that the cancel button is rendered
    expect(screen.getByLabelText("cancel")).toBeInTheDocument();
  });

  test("submits the form successfully", async () => {
    // Mock the userRegisterAxios function
    const userRegisterAxiosMock = jest.fn().mockResolvedValue({ status: 201 });
    jest.mock("../api/axiosApi", () => ({
      userRegisterAxios: userRegisterAxiosMock,
    }));

    render(<Register />);

    // Fill in the form inputs
    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText("confirm password"), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByLabelText("register"));

    // Assert that the userRegisterAxios function was called with the correct form values
    await waitFor(() => {
      expect(userRegisterAxiosMock).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
        confirmPassword: "password123",
      });
    });

    // Assert that the navigation occurred
    // You might need to mock the useNavigate hook for this test
    // and check that the navigate function was called with the correct path
  });

  test("displays an error when passwords do not match", async () => {
    render(<Register />);

    // Fill in the form inputs
    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText("confirm password"), {
      target: { value: "differentpassword" },
    });

    // Submit the form
    fireEvent.click(screen.getByLabelText("register"));

    // Assert that the error message is displayed
    await waitFor(() => {
      expect(
        screen.getByText(
          "Passwords do not Match. Please enter your password again."
        )
      ).toBeInTheDocument();
    });
  });
});
