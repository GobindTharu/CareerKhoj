import express from "express";
import { JobTable } from "../models/job.models.js";
import { isAuthenticated } from "../middleware/user.middleware.js";
const router = express.Router();

// Create Jobs by recruiter
router.post("/job/post", isAuthenticated, async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      category,
      deadline,
      companyId,
    } = req.body;

    if (
      !title ||
      !description ||
      !salary ||
      !location ||
      !jobType ||
      experience == null ||
      position == null ||
      !category ||
      !requirements ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Some required fields are missing",
        success: false,
      });
    }

    const normalizedRequirements = requirements
      .split(",")
      .map((item) => item.trim().toLowerCase());

    const duplicateJobs = await JobTable.find({
      title: title.trim(),
      description: description.trim(),
      salary: Number(salary),
      location: location.trim(),
      jobType,
      category,
      company: companyId,
      experienceLevel: experience,
      created_by: req.id,
    });

    const isDuplicate = duplicateJobs.some((job) => {
      const existingReq = (job.requirements || [])
        .map((r) => r.toLowerCase())
        .sort();
      const newReq = [...normalizedRequirements].sort();
      return (
        JSON.stringify(existingReq) === JSON.stringify(newReq) &&
        job.positions === Number(position)
      );
    });

    if (isDuplicate) {
      return res.status(409).json({
        message: "This job has already been posted.",
        success: false,
      });
    }

    // Create new job
    const newJob = await JobTable.create({
      title: title.trim(),
      description: description.trim(),
      requirements: normalizedRequirements,
      salary: Number(salary),
      location: location.trim(),
      jobType,
      experienceLevel: experience,
      positions: Number(position),
      category,
      deadline: deadline || null,
      company: companyId,
      created_by: req.id,
    });

    return res.status(201).json({
      message: "Job created successfully",
      job: newJob,
      success: true,
    });
  } catch (error) {
    console.error("Job post error:", error);
    return res.status(500).json({
      message: error.message || "Server Error",
      success: false,
    });
  }
});

/// jobSeeker job list

router.get("/job/jobseeker/list", isAuthenticated, async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await JobTable.find(query)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });

    if (!jobs) {
      return res
        .status(404)
        .json({ message: "Jobs Not Found", jobs, success: false });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// jobseeker hob by id

router.get("/job/detail/:id", isAuthenticated, async (req, res) => {
  try {
    const jobId = req.params.id;

    const jobs = await JobTable.findById(jobId);

    if (!jobs) {
      return res
        .status(404)
        .json({ message: "Jobs Not Found", jobs, success: false });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// job listing by for recruiter

router.get("/job/recruiter/list", isAuthenticated, async (req, res) => {
  try {
    const recruiterId = req.id;

    const jobs = await JobTable.find({ created_by: recruiterId });
    if (!jobs) {
      return res
        .status(404)
        .json({ message: "Jobs Not Found", jobs, success: false });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

export { router as jobController };
