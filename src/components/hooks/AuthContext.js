import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [hasUser, setUser] = useState(false);
  return (
    <AuthContext.Provider value={{ hasUser, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
