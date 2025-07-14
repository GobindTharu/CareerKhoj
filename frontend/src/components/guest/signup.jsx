import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosInstance from "../../libs/axiosInstance";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

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
    agreeToTerms: false,
  });

  // Yup validation schema
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Full name is required")
      .min(5, "Full name must be at least 5 characters")
      .matches(
        /^[a-zA-Z\s.-]+$/,
        "Full name must contain only letters, spaces, dots, or hyphens"
      ),
    email: yup
      .string()
      .email("Please enter a valid email")
      .matches(
        /^[^\s@]+@[^\s@]+\.(com|net|org|in)$/i,
        "Only .com, .net, .org, or .in email allowed"
      )
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must include uppercase, lowercase, number, and special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("Please confirm your password"),
    role: yup.string().required("Role is required"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(
        /^(\+977-?|\b)(98|97)\d{8}$/,
        "Must be a valid Nepali number (e.g., 980XXXXXXX or +977-980XXXXXXX)"
      ),
    agreeToTerms: yup
      .boolean()
      .oneOf([true], "You must agree to the terms and conditions"),
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      mutate(formData);
    } catch (validationErrors) {
      const formattedErrors = {};
      validationErrors.inner.forEach((err) => {
        formattedErrors[err.path] = err.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-indigo-200 to-purple-200 w-full max-w-lg p-8 rounded-2xl shadow-xl space-y-6"
      >
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-semibold font-serif text-gray-700">
            CareerKhoj
          </h1>
        </div>

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
