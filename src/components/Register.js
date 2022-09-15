import React, { useEffect, useState } from "react";
import useDisabled from "../hooks/useDisabled";
export const Register = () => {
  const [formVal, setFormVal] = useState({ email: "", password: "" });
  const [disabled, setDisabled] = useDisabled(true);

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
          pattern=".+@globex\.com"
          size="30"
          required
        ></input>
        <input
          type="password"
          value={formVal.password}
          placeholder="password"
          aria-label="password"
          name="password"
          onChange={handleChange}
          required
        ></input>
        <button name="register" aria-label="register" disabled={disabled}>
          Register
        </button>
      </form>
    </div>
  );
};
