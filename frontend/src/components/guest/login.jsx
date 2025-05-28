import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosInstance from "../../libs/axiosInstance";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const { mutate } = useMutation({
    mutationKey: ["login-user"],
    mutationFn: async (values) => {
      return await axiosInstance.post("/user/login", values);
    },
    onSuccess: (res) => {
      const { accessToken, userDetails } = res.data;
      const { firstName, role } = userDetails;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("role", role);

      toast.success("Login successful");
      navigate("/");
    },
    onError: () => {
      toast.error("Invalid credentials");
    },
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      mutate(formData);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-indigo-200 to-purple-200 w-full max-w-md bg-gray-200 p-8 rounded-2xl shadow-xl space-y-6"
      >
        {/* insert the logo here*/}

        {/* start */}
        <div className="flex justify-center items-center gap-3 mb-4">
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl font-semibold font-serif text-gray-700">
            CareerKhoj
          </h1>
        </div>
        {/* ends */}
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="your@example.com"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="space-y-1">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>

        <button
          type="button"
          className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-100 transition"
        >
          <img src="/google.png" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>

        <div className="flex justify-between text-sm text-gray-600 mt-4">
          <a href="/forget-password" className="hover:underline">
            Forgot Password?
          </a>
          <a
            href="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Don't have an account? Signup
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
