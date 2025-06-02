import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true
    },
    description: {
      type: String,
      minlength: [10, "Description must be at least 10 characters long"],
    },
    industry: {
      type: String,
      enum: [
        "Information Technology",
        "Finance",
        "Marketing",
        "Healthcare",
        "Education",
        "Construction",
        "Manufacturing",
        "Retail",
        "Transportation",
        "Other",
      ],
    },
    website: {
      type: String,
      match: [/^https?:\/\/.+/, "Please enter a valid website URL"],
    },
    logo: {
      type: String, // URL to logo
      default: "",
    },
    location: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Admin or Recruiter user who created the company
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const CompanyTable = mongoose.model("Company", companySchema);
