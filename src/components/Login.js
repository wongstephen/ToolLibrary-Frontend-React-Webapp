import React, { useEffect, useState } from "react";

export const Login = () => {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const [disabledBtn, setDisabledBtn] = useState(true);

  const handleChange = (e) => {
    setLoginValue((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  useEffect(() => {
    if (loginValue.email.length > 0 && loginValue.password.length > 0) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [loginValue]);

  return (
    <div>
      <h3>Register or Sign In</h3>
      Please enter a valid email and password.
      <form>
        <input
          placeholder="Email"
          type="text"
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button type="submit" name="loginBtn" disabled={disabledBtn}>
          Login
        </button>
      </form>
      <button className="" type="submit" name="registerBtn">
        Register
      </button>
    </div>
  );
};
