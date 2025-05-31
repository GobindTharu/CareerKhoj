import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GuestGuard = ({ children }) => {
  const navigate = useNavigate();
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      navigate("/", { replace: true }); // already authenticated, redirect to home
    } else {
      setIsGuest(true); // no token = guest user
    }
  }, [navigate]);

  return <>{isGuest && children}</>;
};

export default GuestGuard;
