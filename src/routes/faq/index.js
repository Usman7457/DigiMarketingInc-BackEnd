const express = require("express");
const addFaq = require("./addFaq");
const fetchFaq = require("./fetchFaq");
const deleteFaq = require("./deleteFaq");
const updateFaq = require("./updateFaq");
const routes = express.Router();

module.exports = () => {
  routes.post("/add-faq", addFaq);
  routes.get("/fetch-faq", fetchFaq);
  routes.delete("/delete-faq/:id", deleteFaq);
  routes.patch("/update-faq/:id", updateFaq);
  return routes;
};
