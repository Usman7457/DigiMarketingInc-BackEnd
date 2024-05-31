const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const teamSchema = Schema({
  name: { type: String, required: false },
  imageUrl: { type: String, required: false },
  role: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
  UpdatedAt: { type: Date, default: Date.now() },
});

module.exports = model("team", teamSchema);
