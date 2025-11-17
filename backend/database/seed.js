import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import User from "../models/User.js";
import Room from "../models/Room.js";

import users from "./sampleUsers.json" assert { type: "json" };
import rooms from "./sampleRooms.json" assert { type: "json" };

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await User.deleteMany();
    await Room.deleteMany();

    await User.insertMany(users);
    await Room.insertMany(rooms);

    console.log("Database Seeded Successfully ✔");
    process.exit();
  })
  .catch((err) => console.log(err));
