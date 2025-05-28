import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDb from "./db.connection.js";

//? create app
const app = express();

//? to make understand
app.use(express.json());
dotenv.config(); // Load the environment variables

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//? connect Database
await connectDb();

//?  register Routers / Controller
// app.use(userController);

//?Network
const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`App is listening on port : ${Port}`);
});
