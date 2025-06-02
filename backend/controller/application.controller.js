import express from "express";
import { isAuthenticated } from "../middleware/user.middleware.js";
import { ApplicationTable } from "../models/application.models.js";
import { JobTable } from "../models/job.models.js";
const router = express.Router();

// Apply for the job
router.get("/application/apply/:id", isAuthenticated, async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    if (!jobId) {
      return res.status(400).json({
        message: "Job not found",
        success: false,
      });
    }

    const existingApplication = await ApplicationTable.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job",
        success: false,
      });
    }

    const job = await JobTable.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    const newApplication = await ApplicationTable.create({
      job: jobId,
      applicant: userId,
    });

    if (!job.application) {
      job.application = [];
    }

    job.application.push(newApplication._id);

    await job.save();

    return res.status(201).json({
      message: "Job applied successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Server Error",
      success: false,
    });
  }
});

// get applied jobs

router.get("/application/get", isAuthenticated, async (req, res) => {
  try {
    const userId = req.id;

    const application = await ApplicationTable.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: { path: "company", options: { sort: { createdAt: -1 } } },
      });

    if (!application) {
      return res.status(404).json({
        message: "No Application  found",
        success: false,
      });
    }
    return res.status(200).json({
      application,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Server Error",
      success: false,
    });
  }
});

// get applicants

router.get("/application/:id/applicants", async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await JobTable.findById(jobId).populate({
      path: "job",
      options: { sort: { createdAt: -1 } },
      populate: { path: "company", options: { sort: { createdAt: -1 } } },
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Server Error",
      success: false,
    });
  }
});

// update status of appplication

router.post("/application/status/:id/update", async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    if (!status) {
      return res.status(400).json({
        message: "Status is required field",
        success: false,
      });
    }

    const application = await ApplicationTable.findOne({ _id: applicationId });
    if (!application) {
      return res.status(404).json({
        message: "Application Not found",
        success: false,
      });
    }

    //   update status

    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "Status updated successful",
      status,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Server Error",
      success: false,
    });
  }
});
export { router as applicationController };
