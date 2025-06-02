import express from "express";
import { CompanyTable } from "../models/company.models.js";
import { isAuthenticated } from "../middleware/user.middleware.js";
const router = express.Router();

//  register company
router.post("/company/register", isAuthenticated, async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res
        .status(400)
        .json({ message: "Company name is required", success: false });
    }
    let company = await CompanyTable.findOne({ name: companyName });

    if (company) {
      return res
        .status(400)
        .json({ message: "You cannot register same company", success: false });
    }

    company = await CompanyTable.create({ name: companyName, userId: req.id });

    return res.status(201).json({
      message: "Your Company registered Successful",
      company,
      success: true,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// get company
router.get("/company/get", isAuthenticated, async (req, res) => {
  try {
    const userId = req.id;
    console.log(userId);
    const companies = await CompanyTable.find({ userId: userId });
    console.log(companies);
    if (!companies) {
      return res
        .status(404)
        .json({ message: "Companies not found", success: false });
    }
    return res.status(200).json({ companies, success: true });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// get company by id

router.get("/company/get/:id", isAuthenticated, async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await CompanyTable.findOne({ _id: companyId });

    if (!company) {
      return res
        .status(400)
        .json({ message: "Company not found", success: false });
    }
    return res.status(200).json({ company, success: true });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// update company
router.put("/company/update/:id", isAuthenticated, async (req, res) => {
  try {
    const updatedCompany = req.body;
    const file = req.file;

    const companyId = req.params.id;

    const existing = await CompanyTable.findOne({
      name: updatedCompany.name,
      _id: { $ne: companyId },
    });

    if (existing) {
      return res.status(400).json({
        message: "Company name already exists.",
        success: false,
      });
    }
    const company = await CompanyTable.findByIdAndUpdate(
      req.params.id,
      updatedCompany,
      { new: true }
    );

    if (!company) {
      return res
        .status(404)
        .json({ message: "Company not found", success: false });
    }

    return res.status(200).json({ company, success: true });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

export { router as companyController };
