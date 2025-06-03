import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/login")}
       className="h-8 w-36 flex justify-center gap-3 items-center text-white rounded-xl bg-gradient-to-r  from-indigo-700 to-purple-600 hover:bg-gray-500 ease-soft-spring duration-400 transition-all"
    >
      Login / Register
    </button>
  );
};
