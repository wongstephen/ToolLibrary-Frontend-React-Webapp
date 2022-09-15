import { act, render, renderHook, screen } from "@testing-library/react";
import { useContext } from "react";
import { Login } from "./Login";
// import userEvent from "@testing-library/user-event";

describe(Login, () => {
  it("tool loaner title should render", () => {
    // render(<Login />);
    // act(() => {
    // render(<Login />);
    // const title = getByTestId("title").textContent();
    // expect(title).toEqual(/tool loaner/i);
    // });
  });
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
