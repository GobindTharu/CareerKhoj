import jwt from "jsonwebtoken";
import { UserTable } from "../models/user.model.js";

export const isAuthenticated = async (req, res, next) => {
  let payload = null; // <-- Move declaration outside the try block

  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }

    const secretKey = process.env.SECRET_KEY;

    payload = await jwt.verify(token, secretKey); // Decode token
    if (!payload) {
      return res.status(401).send({ message: "Unauthorized", success: false });
    }
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized", success: false });
  }

  req.id = payload.userId;
  next();
};
