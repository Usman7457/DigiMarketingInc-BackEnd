const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const contactFormSchema = Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
  UpdatedAt: { type: Date, default: Date.now() },
});

module.exports = model("contact-form", contactFormSchema);
