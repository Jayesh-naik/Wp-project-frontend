import Room from "../models/Room.js";

export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate("postedBy");
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const postRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.json(room);
  } catch (err) {
    res.status(400).json({ err });
  }
};
