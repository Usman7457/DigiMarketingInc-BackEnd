const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const subscriberSchema = Schema({
  email: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
  UpdatedAt: { type: Date, default: Date.now() },
});

module.exports = model("subscriber", subscriberSchema);
