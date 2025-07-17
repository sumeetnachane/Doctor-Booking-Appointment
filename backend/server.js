import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

//app config

const app = express();

const port = process.env.PORT || 4000;
connectDB(); // connect to mongodb
connectCloudinary(); // connect to cloudinary

//Middlewares

app.use(express.json());
app.use(cors()); // allow  connect front end to the backend

// api end point
//localhost:4000/api/admin/add-doctor
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

//npm run server

app.listen(port, () => console.log("Server Started", port));
