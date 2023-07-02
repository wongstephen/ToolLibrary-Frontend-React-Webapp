import {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { checkUser, getUserToolsApi, userLogin } from "../api/axiosApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    checkUserStatus();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      const res = await userLogin(userInfo);
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
      const res = await checkUser(token);
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
    const res = await getUserToolsApi(token);
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
    <AuthContext.Provider value={contextData}>
      {loading ? <p>loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
