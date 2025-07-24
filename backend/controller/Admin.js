import express from "express";
import { JobTable } from "../models/job.models.js";
import { CompanyTable } from "../models/company.models.js";
import { ApplicationTable } from "../models/application.models.js";

const router = express.Router();

// Dashboard statistics
router.get("/stats", async (req, res) => {
  try {
    // Total counts
    const totalJobs = await JobTable.countDocuments();
    const totalCompanies = await CompanyTable.countDocuments();
    const totalApplicants = await ApplicationTable.countDocuments();

    // Dates
    const now = new Date();
    const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const prevWeek = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

    // Last 7 days counts
    const jobsLastWeek = await JobTable.countDocuments({
      createdAt: { $gte: lastWeek },
    });
    const jobsPrevWeek = await JobTable.countDocuments({
      createdAt: { $gte: prevWeek, $lt: lastWeek },
    });

    const companiesLastWeek = await CompanyTable.countDocuments({
      createdAt: { $gte: lastWeek },
    });
    const companiesPrevWeek = await CompanyTable.countDocuments({
      createdAt: { $gte: prevWeek, $lt: lastWeek },
    });

    const applicantsLastWeek = await ApplicationTable.countDocuments({
      appliedAt: { $gte: lastWeek },
    });
    const applicantsPrevWeek = await ApplicationTable.countDocuments({
      appliedAt: { $gte: prevWeek, $lt: lastWeek },
    });

    // New applications = this week only
    const newApplications = applicantsLastWeek;

    // Change percentages
    const jobsChange = jobsPrevWeek
      ? (((jobsLastWeek - jobsPrevWeek) / jobsPrevWeek) * 100).toFixed(2)
      : 100;

    const companiesChange = companiesPrevWeek
      ? (
          ((companiesLastWeek - companiesPrevWeek) / companiesPrevWeek) *
          100
        ).toFixed(2)
      : 100;

    const applicantsChange = applicantsPrevWeek
      ? (
          ((applicantsLastWeek - applicantsPrevWeek) / applicantsPrevWeek) *
          100
        ).toFixed(2)
      : 100;

    const newApplicationsChange = applicantsPrevWeek
      ? (
          ((newApplications - applicantsPrevWeek) / applicantsPrevWeek) *
          100
        ).toFixed(2)
      : 100;

    res.json({
      totalJobs,
      jobsChange,
      totalCompanies,
      companiesChange,
      totalApplicants,
      applicantsChange,
      newApplications,
      newApplicationsChange,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Applications trend (last 30 days)
router.get("/applications-trend", async (req, res) => {
  try {
    // Get days param (default 7)
    const days = parseInt(req.query.days) || 7;

    const data = [];
    const labels = [];

    for (let i = days - 1; i >= 0; i--) {
      const dayStart = new Date();
      dayStart.setHours(0, 0, 0, 0);
      dayStart.setDate(dayStart.getDate() - i);

      const dayEnd = new Date(dayStart);
      dayEnd.setHours(23, 59, 59, 999);

      const count = await ApplicationTable.countDocuments({
        appliedAt: { $gte: dayStart, $lte: dayEnd },
      });

      labels.push(
        dayStart.toLocaleDateString("en-US", { month: "short", day: "numeric" })
      );
      data.push(count);
    }

    res.json({ labels, data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Application status distribution
router.get("/application-status", async (req, res) => {
  try {
    const accepted = await ApplicationTable.countDocuments({
      status: "accepted",
    });
    const pending = await ApplicationTable.countDocuments({
      status: "pending",
    });
    const rejected = await ApplicationTable.countDocuments({
      status: "rejected",
    });

    res.json({ accepted, pending, rejected });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/applicants", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;

    const applicants = await ApplicationTable.find()
      .populate({ path: "applicant" })
      .populate({
        path: "job",
        select: "title company",
        populate: { path: "company", select: "name" },
      })
      .sort({ createdAt: -1 })
      .limit(limit);

    res.json({ applicants });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// Admin Control


// GET all jobs
router.get("/admin/all-jobs", async (req, res) => {
  try {
    const jobs = await JobTable.find().populate("company");
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all users
router.get("/admin/all-user", async (req, res) => {
  try {
    const users = await UserTable.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all companies
router.get("/admin/all-company", async (req, res) => {
  try {
    const companies = await CompanyTable.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all applications (with job and applicant details)
router.get("/admin/all-applicants", async (req, res) => {
  try {
    const applications = await ApplicationTable.find()
      .populate("job")
      .populate("applicant");
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

;

export { router as dashboardRoutes };
