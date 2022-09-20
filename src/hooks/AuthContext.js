import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [hasUser, setHasUser] = useState(null);

  function setUser(data) {
    setHasUser((state) => {
      return data;
    });
    // localStorage.setItem("token", data.token);
  }

  return (
    <AuthContext.Provider value={{ hasUser, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
