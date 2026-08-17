import { EAppRoutes } from "@shared/constants/routes";
import type { TToken } from "@shared/types/common";
import { createContext, useState, type FC, type PropsWithChildren } from "react";
import { useNavigate } from "react-router";

const TOKEN_KEY: TToken = "token";

interface IAuthContext {
  token: TToken | null;
  isAuthenticated: boolean;
  setToken: (token: TToken) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);
export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [token, setTokenState] = useState<TToken | null>(() => localStorage.getItem(TOKEN_KEY));
  const navigate = useNavigate();

  const setToken = (token: TToken) => {
    localStorage.setItem(TOKEN_KEY, token);
    setTokenState(token);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setTokenState(null);

    navigate(EAppRoutes.Login, {
      replace: true,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: Boolean(token),
        setToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
