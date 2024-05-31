const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const faqSchema = Schema({
  target: { type: String, required: false },
  question: { type: String, required: false },
  answer: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
  UpdatedAt: { type: Date, default: Date.now() },
});

module.exports = model("faq", faqSchema);
