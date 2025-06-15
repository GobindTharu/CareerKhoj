import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";

import { isAuthenticated } from "../middleware/user.middleware.js";
import { UserTable } from "../models/user.model.js";
import {
  loginCredentialSchema,
  registerUserSchema,
} from "../validations/user.validation.js";
import validateReqBody from "../middleware/validate.req.body.js";
import { singleUpload } from "../middleware/multer.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

const router = express.Router();

router.post(
  "/user/register",
  validateReqBody(registerUserSchema),
  async (req, res) => {
    try {
      const newUser = req.body;

      const user = await UserTable.findOne({ email: newUser.email });

      if (user) {
        return res.status(409).send({ message: "User already exists." });
      }

      const plainPassword = newUser.password;
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

      newUser.password = hashedPassword;

      await UserTable.create(newUser);

      return res
        .status(201)
        .send({ message: "User is registered successfully." });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
);

router.post(
  "/user/login",
  validateReqBody(loginCredentialSchema),
  async (req, res) => {
    try {
      const loginCredentials = req.body;

      let user = await UserTable.findOne({ email: loginCredentials.email });

      if (!user) {
        return res.status(404).send({ message: "Invalid credentials." });
      }

      const plainPassword = loginCredentials.password;
      const hashedPassword = user.password;
      const isPasswordMatch = await bcrypt.compare(
        plainPassword,
        hashedPassword
      );

      if (!isPasswordMatch) {
        return res.status(404).send({ message: "Invalid credentials." });
      }

      const payload = { userId: user._id };
      const secretKey = process.env.SECRET_KEY;

      const token = jwt.sign(payload, secretKey, {
        expiresIn: "7d",
      });

      user.password = undefined;

      return res
        .status(200)
        .cookie("token", token, {
          maxAge: 1 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          sameSite: "strict",
        })
        .send({ message: "success", accessToken: token, userDetails: user });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
);

router.post("/user/logout", isAuthenticated, async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { maxAge: 0 })
    .json({ message: "LoggedOut Successfully", success: true });
});

router.put(
  "/user/update-profile",
  singleUpload,
  isAuthenticated,
  async (req, res) => {
    try {
      const { fullName, phoneNumber, bio, skills, profilePhoto } = req.body;

      const file = req.file;

      const fileUri = getDataUri(file);

      const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
        resource_type: "raw",
        folder: "resumes",
        use_filename: true,
        unique_filename: false,
      });

      const userId = req.id;

      let user = await UserTable.findById(userId);

      if (!user) {
        return res
          .status(404)
          .json({ message: "User not found", success: false });
      }

      // Basic updates
      if (fullName) user.fullName = fullName;
      if (phoneNumber) user.phoneNumber = phoneNumber;
      if (bio) user.profile.bio = bio;
      if (bio) user.profile.profilePhoto = profilePhoto;

      // Skills: Parse JSON string to array
      if (skills) {
        try {
          const parsedSkills = JSON.parse(skills);
          if (Array.isArray(parsedSkills)) {
            user.profile.skills = parsedSkills;
          }
        } catch {
          return res.status(400).json({
            message: "Skills must be a valid JSON array",
            success: false,
          });
        }
      }

      // Resume file handling
      if (cloudResponse) {
        user.profile.resume = cloudResponse.secure_url;
        user.profile.resumeOriginalName = file.originalname;
      }

      await user.save();

      const safeUser = {
        _id: user._id,
        fullName: user.fullName,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile,
      };

      return res.status(200).json({
        message: "User updated successfully",
        user: safeUser,
        success: true,
      });
    } catch (error) {
      console.error("Update error:", error);
      return res.status(500).json({
        message: "Server error: " + error.message,
        success: false,
      });
    }
  }
);

router.get("/user/profile", isAuthenticated, async (req, res) => {
  try {
    const userId = req.id;

    const user = await UserTable.findById(userId).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export { router as userController };
