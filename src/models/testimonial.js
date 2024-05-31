const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const testimonialSchema = Schema({
  name: { type: String, required: false },
  imageUrl: { type: String, required: false },
  country: { type: String, required: false },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
  UpdatedAt: { type: Date, default: Date.now() },
});

module.exports = model("testimonial", testimonialSchema);
