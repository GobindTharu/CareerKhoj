import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosInstance from "../../libs/axiosInstance";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const { mutate } = useMutation({
    mutationKey: ["signup-user"],
    mutationFn: async (values) => {
      return await axiosInstance.post("/user/register", values);
    },
    onSuccess: () => {
      toast.success("Register Successful");
      navigate("/login");
    },
    onError: (error) => {
      if (error?.response?.status === 409) {
        setErrors((prev) => ({
          ...prev,
          email: "Email already exists. Please use a different email.",
        }));
      } else {
        toast.error("Failed to Register");
      }
    },
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "jobseeker",
    phoneNumber: "",
    verificationMethod: "email",
    agreeToTerms: false,
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName || formData.fullName.length < 2)
      newErrors.fullName = "Full name must be at least 2 characters";

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";

    if (!formData.password || formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.role) newErrors.role = "Role is required";

    if (!formData.verificationMethod)
      newErrors.verificationMethod = "Verification method is required";

    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      mutate(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-indigo-200 to-purple-200 w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl space-y-6"
      >
        {/* LOgo Here Also */}
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-semibold font-serif text-gray-700">
            CareerKhoj
          </h1>
        </div>
        {/* ...... */}
        {[
          { name: "fullName", label: "Full Name" },
          { name: "email", label: "Email Address", type: "email" },
          { name: "password", label: "Password", type: "password" },
          {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
          },
          { name: "phoneNumber", label: "Phone Number", type: "tel" },
        ].map(({ name, label, type = "text" }) => (
          <div key={name}>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              {label}
            </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors[name] && (
              <p className="text-sm text-red-500">{errors[name]}</p>
            )}
          </div>
        ))}

        {/* Role Selection */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="admin">Admin</option>
            <option value="recruiter">Recruiter</option>
            <option value="jobseeker">Jobseeker</option>
          </select>
          {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
        </div>

        {/* Agree to Terms */}
        <div className="flex items-center justify-end gap-2">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600"
          />
          <label className="text-sm text-gray-700">
            I agree to the{" "}
            <a href="/terms" className="text-blue-600 underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 underline">
              Privacy Policy
            </a>
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-sm text-red-500">{errors.agreeToTerms}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Register
        </button>

        <button
          type="button"
          className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-100 transition"
        >
          <img src="/google.png" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
