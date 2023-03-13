import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  // todo delete this in production
  useEffect(() => {
    console.log(auth);
  }, [auth]);

  // function setAuth(data) {
  //   setHasUser((state) => {
  //     return data.token;
  //   });
  //   localStorage.setItem("token", JSON.stringify(data.token));
  // }

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
