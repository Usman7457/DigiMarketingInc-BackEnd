const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const blogSchema = Schema({
  heading: { type: String, required: false },
  imageUrl: { type: String, required: false },
  slug: { type: String, required: false },
  paragraph: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
  UpdatedAt: { type: Date, default: Date.now() },
});

module.exports = model("blog", blogSchema);
