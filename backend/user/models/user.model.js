import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      minlength: [2, "Full name must be at least 2 characters long"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
    },
    role: {
      type: String,
      enum: ["admin", "recruiter", "jobseeker"],
      default: "jobseeker",
      required: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    agreeToTerms: {
      type: Boolean,
      required: [true, "You must agree to the terms and conditions"],
    },
    profile: {
      profilePhoto: { type: String, default: "" },
      bio: { type: String },
      skills: { type: String },
      resume: { type: String },
      resumeOriginalName: { type: String },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    },
  },
  {
    timestamps: true,
  }
);

export const UserTable = mongoose.model("User", userSchema);
