import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosInstance from "../../libs/axiosInstance";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const SignupForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "jobseeker",
    phoneNumber: "",
    agreeToTerms: false,
  });

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
      .matches(/^[^\s@]+@gmail\.com$/i, "Only @gmail.com email is allowed")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
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
        /^(98|97)\d{8}$/,
        "Phone number must start with 98 or 97 and be exactly 10 digits"
      ),
    agreeToTerms: yup
      .boolean()
      .oneOf([true], "You must agree to the terms and conditions"),
  });

  const { mutate } = useMutation({
    mutationKey: ["signup-user"],
    mutationFn: async (values) => {
      return await axiosInstance.post("/user/register", values);
    },
    onSuccess: () => {
      toast.success("Registration Successful");
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
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-100 to-purple-100 py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-2xl space-y-6"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-indigo-700 font-sans tracking-wide">
            CareerKhoj
          </h1>
          <p className="text-sm text-gray-500 mt-1">Create your account</p>
        </div>

        {/* Input Fields */}
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
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            {errors[name] && (
              <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
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
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          >
            <option value="admin">Admin</option>
            <option value="recruiter">Recruiter</option>
            <option value="jobseeker">Jobseeker</option>
          </select>
          {errors.role && <p className="text-sm text-red-500 mt-1">{errors.role}</p>}
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded"
          />
          <label className="text-sm text-gray-700">
            I agree to the{" "}
            <a href="/terms" className="text-indigo-600 underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-indigo-600 underline">
              Privacy Policy
            </a>
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-sm text-red-500 mt-1">{errors.agreeToTerms}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2.5 rounded-md hover:bg-indigo-700 transition text-sm font-medium"
        >
          Register
        </button>

        {/* Login Redirect */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
