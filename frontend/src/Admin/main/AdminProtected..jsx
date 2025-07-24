import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user?.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (user === null || user.role !== "admin") {
      navigate("/");
    }
  }, []);

  return <>{children}</>;
};
export default AdminProtectedRoute;
