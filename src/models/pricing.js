const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const pricingSchema = Schema({
  title: { type: String, required: false },
  price: { type: String, required: false },
  features: { type: String, required: false },
  cls: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
  UpdatedAt: { type: Date, default: Date.now() },
});

module.exports = model("pricing", pricingSchema);
