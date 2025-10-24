// const express = require('express')// method-1
import express from "express"; // method-2
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import sheetRoute from "./routes/sheetRoute.js";
import questionRoute from "./routes/questionRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// import { app, server } from "./socket/socket.js";
dotenv.config({});

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOption));

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/question", questionRoute);
app.use("/api/v1/sheet", sheetRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listen at prot ${PORT}`);
});
