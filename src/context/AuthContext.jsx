import React, {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
} from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContextWrapper = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  useLayoutEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setIsAuthenticated(true);
      setToken(storedToken);
      setUserData(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const loginUser = (userInfo, authToken) => {
    setIsAuthenticated(true);
    setUserData(userInfo);
    setToken(authToken);
    localStorage.setItem("user", JSON.stringify(userInfo));
    localStorage.setItem("token", authToken);
    return true;
  };

  const logoutUser = () => {
    setIsAuthenticated(false);
    setUserData(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const values = {
    isAuthenticated,
    loginUser,
    logoutUser,
    user: userData,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextWrapper;
