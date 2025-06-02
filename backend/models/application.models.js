import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: [true, "Job reference is required"],
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: [true, "Applicant reference is required"],
    },
    status: {
      type: String,
      enum: ["pending","rejected", "accepted"],
      default: "pending",
    },
    appliedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

export const ApplicationTable = mongoose.model("Application", applicationSchema);
