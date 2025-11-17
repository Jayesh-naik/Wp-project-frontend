import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  title: String,
  description: String,
  rent: Number,
  location: String,
  photos: [String],
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

export default mongoose.model("Room", roomSchema);
