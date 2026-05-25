import {
  createContext,
  useEffect,
  useState,
} from "react";

export const AuthContext =
  createContext();

function AuthProvider({ children }) {

  const [user, setUser] =
    useState(null);

  const [token, setToken] =
    useState(
      localStorage.getItem("token")
    );

  useEffect(() => {

    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  const login = (data) => {

    localStorage.setItem(
      "token",
      data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(data)
    );

    setToken(data.token);

    setUser(data);
  };

  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setToken(null);

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;