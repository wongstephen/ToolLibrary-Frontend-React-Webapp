import React, { useEffect, useState } from "react";

export const Register = () => {
  const [formVal, setFormVal] = useState({ email: "", password: "" });
  const [btnDisabled, setDisabled] = useState(true);

  useEffect(() => {
    if (formVal.email && formVal.password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formVal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVal((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h1>Register a new account</h1>
      <form>
        <input
          type="text"
          value={formVal.email}
          placeholder="email"
          aria-label="email"
          name="email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          value={formVal.password}
          placeholder="password"
          aria-label="password"
          name="password"
          onChange={handleChange}
        ></input>
        <button
          name="register"
          data-testid="button"
          aria-label="register"
          disabled={btnDisabled}
        >
          Register
        </button>
      </form>
    </div>
  );
};
