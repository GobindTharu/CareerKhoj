import yup from "yup";
import dayjs from "dayjs";

export const loginCredentialSchema = yup.object({
  email: yup.string().email().required().trim().lowercase(),
  password: yup.string().required().trim(),
});

export const registerUserSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),

  email: yup
    .string()
    .email("Please use a valid email address")
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Confirm password is required"),

  role: yup
    .string()
    .oneOf(["admin", "recruiter", "jobseeker"], "Invalid role")
    .required("Role is required"),

  phoneNumber: yup
    .string()
    .matches(/^[0-9+()\- ]*$/, "Phone number is not valid")
    .nullable(),

  agreeToTerms: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions"),
});
