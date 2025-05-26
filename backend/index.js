import cors from "cors";
import dotenv from "dotenv"; // Import dotenv using ES Modules syntax
import express from "express";

//? create app
const app = express();

//? to make understand
app.use(express.json());
dotenv.config(); // Load the environment variables

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001" ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.get("/", (req, res) => {
  res.json({ message: "Login successful" });
});

//? connect Database
// await ConnectDb();

//?  register Routers / Controller
// app.use(userController);

//?Network
const Port = 8000;

app.listen(Port, () => {
  console.log(`App is listening on port : ${Port}`);
});
