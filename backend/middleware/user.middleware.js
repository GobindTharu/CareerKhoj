import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }

    const token = authHeader.split(" ")[1];
    const secretKey = process.env.SECRET_KEY;

    const payload = jwt.verify(token, secretKey);
    req.id = payload.userId; // Attach user ID to request
    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    return res.status(401).json({ message: "Unauthorized", success: false });
  }
};
