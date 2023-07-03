import express from "express";
import { User } from "../models/userD.js";
import { deleteUserByID, getAllUsers, getUserByID, registerUser, updateUserByID } from "../controllers/user.js";



const router = express.Router();
router.post("/new", registerUser);
router.get("/all", getAllUsers);
router.get("/userid/:id", getUserByID)
router.put("/userid/:id", updateUserByID)
router.delete("/userid/:id", deleteUserByID)
export default router;