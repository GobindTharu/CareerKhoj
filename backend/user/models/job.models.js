import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
      minlength: [3, "Job title must be at least 3 characters"],
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
      minlength: [10, "Job description must be at least 10 characters"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: [0, "Salary must be a positive number"],
    },
    category: {
      type: String,
      required: [true, "Job category is required"],
      enum: [
        "IT",
        "Finance",
        "Marketing",
        "Design",
        "Engineering",
        "Healthcare",
        "Education",
        "Sales",
        "Other",
      ],
    },
    jobType: {
      type: String,
      required: [true, "Job type is required"],
      enum: ["Full-time", "Part-time", "Internship", "Contract", "Remote"],
    },
    positions: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company", // assuming you have a company model
      required: true,
    },
    experienceLevel: {
      type: String,
      enum: ["Fresher", "Mid-Level", "Senior-Level"],
      default: "Fresher",
    },
    requirements: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    application: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
  },
  {
    timestamps: true,
  }
);

export const JobTable = mongoose.model("Job", jobSchema);
