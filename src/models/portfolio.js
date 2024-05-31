const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const portfolioSchema = Schema({
  name: { type: String, required: false },
  imageUrl: { type: String, required: false },
  slug: { type: String, required: false },
  type: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
  UpdatedAt: { type: Date, default: Date.now() },
});

module.exports = model("portfolio", portfolioSchema);
