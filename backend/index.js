import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

// components import
import connectDb from "./db.connection.js";
import { userController } from "./user/controllers/user.controller.js";
import { companyController } from "./company/company.controller.js";
import { jobController } from "./jobs/job.controller.js";

//? create app
const app = express();

//? to make understand middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

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

//?  Routers / Controller
app.use(userController);
app.use(companyController);
app.use(jobController);

//?Network
const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`App is listening on port : ${Port}`);
});
