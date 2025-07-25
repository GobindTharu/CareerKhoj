import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosInstance from "../../libs/axiosInstance";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      dispatch(setUser(res.data.userDetails));
      localStorage.setItem("user", JSON.stringify(res.data.userDetails));
      const { accessToken, userDetails } = res.data;
      const { fullName, role } = userDetails;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("fullName", fullName);
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
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) mutate(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6"
      >
        {/* Logo or Title */}
        <div className="text-center">
          {/* Replace this with your logo if needed */}
          <h1 className="text-3xl font-bold text-indigo-700 font-sans tracking-wide">
            CareerKhoj
          </h1>
          <p className="text-sm text-gray-500 mt-1">Welcome back! Please login</p>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Password */}
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2.5 rounded-md hover:bg-indigo-700 transition text-sm font-medium"
        >
          Login
        </button>

        {/* Links */}
        <div className="flex justify-between text-sm text-gray-600 mt-4">
          <a href="/forget-password" className="hover:underline">
            Forgot password?
          </a>
          <a href="/signup" className="text-indigo-600 hover:underline font-medium">
            Don't have an account?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
