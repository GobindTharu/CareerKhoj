import express from "express";
import { JobTable } from "../models/job.models.js";
import { isAuthenticated } from "../middleware/user.middleware.js";
const router = express.Router();

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
      offer,
      companyId,
    } = req.body;

    // Validate required fields
    if (!title || !description || !salary) {
      return res.status(400).json({
        message: "Some required fields are missing",
        success: false,
      });
    }

    // Extract and normalize requirement fields
    const { qualification = "", skills = [], resume = false } = requirements;

    const normalizedSkills = Array.isArray(skills)
      ? skills.map((s) => s.trim().toLowerCase()).filter((s) => s.length > 0)
      : typeof skills === "string"
      ? skills
          .split(",")
          .map((s) => s.trim().toLowerCase())
          .filter((s) => s.length > 0)
      : [];

    // Check for duplicate job
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
      const existingSkills = Array.isArray(job.requirements.skills)
        ? [...job.requirements.skills].map((s) => s.toLowerCase()).sort()
        : [];

      const newSkills = [...normalizedSkills].sort();

      return (
        job.requirements.qualification?.toLowerCase().trim() ===
          qualification.toLowerCase().trim() &&
        JSON.stringify(existingSkills) === JSON.stringify(newSkills) &&
        job.requirements.resume === resume &&
        job.positions === Number(position)
      );
    });

    if (isDuplicate) {
      return res.status(409).json({
        message: "This job has already been posted.",
        success: false,
      });
    }

    const newJob = await JobTable.create({
      title: title.trim(),
      description: description.trim(),
      requirements: {
        qualification: qualification.trim(),
        skills: normalizedSkills,
        resume: resume,
      },
      salary: Number(salary),
      location: location.trim(),
      jobType,
      experienceLevel: experience,
      positions: Number(position),
      category,
      deadline: deadline || null,
      offer: offer || "",
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

router.get("/jobs/get-all", async (req, res) => {
  try {
    const jobs = await JobTable.find().sort({ postedAt: -1 }); // newest first
    res.status(200).json({ success: true, jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

/// jobSeeker job list

router.get("/jobs/search", isAuthenticated, async (req, res) => {
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

    const jobs = await JobTable.findById(jobId)
      .populate({
        path: "company",
      })
      .populate({
        path: "application",
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
