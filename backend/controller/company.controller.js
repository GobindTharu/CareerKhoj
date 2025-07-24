import express from "express";
import { CompanyTable } from "../models/company.models.js";
import { isAuthenticated } from "../middleware/user.middleware.js";
import { singleUpload } from "../middleware/multer.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";
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
    userId;
    const companies = await CompanyTable.find({ userId: userId });
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
router.put(
  "/company/update/:id",
  singleUpload,
  isAuthenticated,
  async (req, res) => {
    try {
      const { name, description, website, location } = req.body;
      const file = req.file;

      const fileUri = getDataUri(file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      const logo = cloudResponse.secure_url;

      const companyId = req.params.id;

      const updatedCompany = { name, description, website, location, logo };

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
  }
);

export { router as companyController };
