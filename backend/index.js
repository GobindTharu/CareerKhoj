import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

// components import
import { userController } from "./controller/user.controller.js";
import { companyController } from "./controller/company.controller.js";
import { jobController } from "./controller/job.controller.js";
import { applicationController } from "./controller/application.controller.js";
import connectDb from "./utils/db.connection.js";

//? create app
const app = express();

//? to make understand middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Load the environment variables
dotenv.config({});

app.use(
  cors({
    origin: [
      "https://career-khoj.vercel.app",
      "https://57a4-2405-acc0-1304-3a5b-da85-866d-ab0a-e52b.ngrok-free.app",
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  })
  
);

//? connect Database
await connectDb();

//?  Routers / Controller
app.use(userController);
app.use(companyController);
app.use(jobController);
app.use(applicationController);

//?Network
const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`App is listening on port : ${Port}`);
});
