import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

// components import
import connectDb from "./db.connection.js";
import { userController } from "./user/controllors/user.controller.js";

//? create app
const app = express();

//? to make understand middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

dotenv.config({}); // Load the environment variables

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//? connect Database
await connectDb();

//?  register Routers / Controller
app.use(userController);

//?Network
const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`App is listening on port : ${Port}`);
});
