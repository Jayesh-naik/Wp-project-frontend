import express from "express";
import { getAllRooms, postRoom } from "../controllers/roomController.js";

const router = express.Router();

router.get("/", getAllRooms);
router.post("/", postRoom);

export default router;
