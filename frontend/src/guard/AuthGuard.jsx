import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");

    if (!accessToken || !role) {
      setIsAuthenticated(false);
      localStorage.clear();
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return <>{isAuthenticated && children}</>;
};

export default AuthGuard;
