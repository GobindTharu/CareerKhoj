import express from "express";
import { CompanyTable } from "../user/models/company.models.js";
const router = express.Router();
//  register company
router.post("/company/register", async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res
        .status(400)
        .json({ message: "Company name is required", success: false });
    }
    let company = await CompanyTable.findOne({ name: companyName });

    if (!company) {
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
    console.log(error.message);
    return res.status(400).json(error.message);
  }
});

// get company
router.post("/company/list", async (req, res) => {
  try {
    const userId = req.id;
    const companies = await CompanyTable.findOne({ userId });
    if (!companies) {
      return res
        .status(404)
        .json({ message: "Companies not found", success: false });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).json(error.message);
  }
});

//
router.post("/company/list/:id", async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await CompanyTable.findOne(companyId);

    if (!company) {
      return res
        .status(400)
        .json({ message: "Company not found", success: true });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).json(error.message);
  }
});
export { router as companyController };

