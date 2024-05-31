const express = require("express");
const addTestimonial = require("./addTestimonial");
const fetchTestimonial = require("./fetchTestimonial");
const deleteTestimonial = require("./deleteTestimonial");
const updateTestimonial = require("./updateTestimonial");
const routes = express.Router();

module.exports = () => {
  routes.post("/add-testimonial", addTestimonial);
  routes.get("/fetch-testimonial", fetchTestimonial);
  routes.delete("/delete-testimonial/:id", deleteTestimonial);
  routes.patch("/update-testimonial/:id", updateTestimonial);
  return routes;
};
