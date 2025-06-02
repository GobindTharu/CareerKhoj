import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
    },
    requirements: {
      type: [String],
      required: true,
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: [0, "Salary must be a positive number"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
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

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company", // assuming you have a company model
      required: true,
    },
    experienceLevel: {
      type: String,
      enum: [
        "internship",
        "Fresher",
        "Associate",
        "Mid-Level",
        "Senior-Level",
        "Executive",
      ],
      default: "Fresher",
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
    application: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const JobTable = mongoose.model("Job", jobSchema);
