const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = Schema({
  userName: { type: String, required: false },
  email: { type: String, required: false },
  password: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
  UpdatedAt: { type: Date, default: Date.now() },
});

module.exports = model("users", userSchema);
