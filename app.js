import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import {config} from "dotenv";

export const app = express();


config({
    path:"./data/config.env"
});

//using middleware 
app.use(express.json());
// custom url 
app.use("/users" ,userRouter);
