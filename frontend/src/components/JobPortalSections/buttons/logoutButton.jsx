import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../../redux/userSlice";
import { useDispatch } from "react-redux";

export const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    window.localStorage.clear();
    navigate("/login");
    toast.success("Logout Successful");
  };
  return (
    <>
      <button
        onClick={handleLogout}
        className="h-8 w-36 flex justify-center gap-3 items-center text-white rounded-xl bg-gradient-to-r  from-indigo-700 to-purple-600 hover:bg-gray-500 ease-soft-spring duration-400 transition-all"
      >
        <LogOut size={16} /> Log Out
      </button>
    </>
  );
};
