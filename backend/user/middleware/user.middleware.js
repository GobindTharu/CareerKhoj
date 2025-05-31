import jwt from "jsonwebtoken";
import { UserTable } from "../models/user.model.js";

export const isRecruiter = async (req, res, next) => {
  // extract token from req.headers
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  // extract payload from token by decryption
  let payload = null;

  try {
    const secretKey = process.env.SECRETE_KEY;

    payload = jwt.verify(token, secretKey);
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  // find user using email from payload
  const user = await UserTable.findOne({ email: payload.email });

  if (!user) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  if (user.role !== "recruiter") {
    return res.status(401).send({ message: "Unauthorized." });
  }

  req.loggedInUserId = user._id;

  next();
};

export const isJobSeeker = async (req, res, next) => {
  // extract token from req.headers
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  // extract payload from token by decryption

  let payload = null;

  try {
    const secretKey = process.env.SECRETE_KEY;
    payload = jwt.verify(token, secretKey);
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  // find user using email from payload
  const user = await UserTable.findOne({ email: payload.email });

  if (!user) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  if (user.role !== "jobseeker") {
    return res.status(401).send({ message: "Unauthorized." });
  }

  req.loggedInUserId = user._id;

  next();
};

export const isUser = async (req, res, next) => {
  // extract token from req.headers
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  // extract payload from token by decryption

  let payload = null;

  try {
    const secretKey = process.env.SECRETE_KEY;
    payload = jwt.verify(token, secretKey);
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  // find user using email from payload
  const user = await UserTable.findOne({ email: payload.email });

  if (!user) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  if (user.role !== "admin") {
    return res.status(401).send({ message: "Unauthorized." });
  }
  req.loggedInUserId = user._id;

  next();
};

export const isAuthenticated = async (req, res, next) => {
  // extract token from req.headers
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).send({ message: "Unauthorized." });
    }
    //  verify token
    const secretKey = process.env.SECRETE_KEY;
    const decode = jwt.verify(token, secretKey);

    if (!decode) {
      return res.status(401).send({ message: "Unauthorized." });
    }
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  req.id = user.loggedInUserId;

  next();
};
