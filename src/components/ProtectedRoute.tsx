import type { ReactNode } from "react";

import {
  Navigate,
} from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({
  children,
}: Props) => {
  const { isLoggedIn } =
    useAuth();

  if (!isLoggedIn) {
    return (
      <Navigate to="/login" />
    );
  }

  return children;
};

export default ProtectedRoute;