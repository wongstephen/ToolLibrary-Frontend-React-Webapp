import { createContext, useState, useContext, useEffect } from "react";
import {
  userCheckAxios,
  toolFetchAxios,
  userLoginAxios,
} from "../api/axiosApi";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    checkUserStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      const res = await userLoginAxios(userInfo);
      if (res.status === 200) {
        setUser((prev) => res.data);
        localStorage.setItem("token", res.data.token);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const logoutUser = () => {
    setUser(false);
    localStorage.removeItem("token");
  };
  const registerUser = (userInfo) => {};

  const checkUserStatus = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await userCheckAxios(token);
      if (res.status === 200) {
        setUser((prev) => {
          return {
            ...prev,
            user: res.data,
            token: token,
          };
        });
      } else {
        setUser(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const updateUserData = async () => {
    const token = localStorage.getItem("token");
    const res = await toolFetchAxios(token);
    setUser((prev) => {
      return { ...prev, user: { ...prev.user, tool: res } };
    });
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    checkUserStatus,
    updateUserData,
  };

  return (
    // todo loading trobber
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthContext;
