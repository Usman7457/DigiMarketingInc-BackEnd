const express = require("express");
const addPricing = require("./addPricing");
const fetchPricing = require("./fetchPricing");
const deletePricing = require("./deletePricing");
const updatePricing = require("./updatePricing");
const routes = express.Router();

module.exports = () => {
  routes.post("/add-pricing", addPricing);
  routes.get("/fetch-pricing", fetchPricing);
  routes.delete("/delete-pricing/:id", deletePricing);
  routes.patch("/update-pricing/:id", updatePricing);
  return routes;
};
