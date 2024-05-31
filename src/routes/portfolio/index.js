const express = require("express");
const addPortfolio = require("./addPortfolio");
const fetchPortfolio = require("./fetchPortfolio");
const deletePortfolio = require("./deletePortfolio");
const updatePortfolio = require("./updatePortfolio");
const routes = express.Router();

module.exports = () => {
  routes.post("/add-portfolio", addPortfolio);
  routes.get("/fetch-portfolio", fetchPortfolio);
  routes.delete("/delete-portfolio/:id", deletePortfolio);
  routes.patch("/update-portfolio/:id", updatePortfolio);
  return routes;
};
