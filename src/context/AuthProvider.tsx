import {
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

import { AuthContext } from "./AuthContext";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({
  children,
}: Props) => {
  const [isLoggedIn, setIsLoggedIn] =
    useState<boolean>(() => {
      const stored =
        localStorage.getItem("auth");

      return stored === "true";
    });

  // SAVE
  useEffect(() => {
    localStorage.setItem(
      "auth",
      String(isLoggedIn)
    );
  }, [isLoggedIn]);

  // LOGIN
  const login = () => {
    setIsLoggedIn(true);
  };

  // LOGOUT
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};