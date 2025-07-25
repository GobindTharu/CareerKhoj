import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/login")}
      className="px-5 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 hover:shadow-md transition duration-300"
    >
      Login / Register
    </button>
  );
};
