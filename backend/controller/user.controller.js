import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";


import { isAuthenticated } from "../middleware/user.middleware.js";
import { UserTable } from "../models/user.model.js";
import { loginCredentialSchema, registerUserSchema } from "../validations/user.validation.js";
import validateReqBody from "../middleware/validate.req.body.js";

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

router.put("/user/update-profile/:id", isAuthenticated, async (req, res) => {
  try {
    const userId = req.params.id;

    const updatedUser = req.body;

    const user = await UserTable.updateOne(
      { _id: userId },
      {
        $set: {
          ...updatedUser,
        },
      }
    );

    if (!user) {
      return res
        .status(400)
        .json({ message: "Something went Wrong", success: false });
    }
    return res.status(400).json({
      message: "User updated successfully",
      updatedUser,
      success: true,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

export { router as userController };
