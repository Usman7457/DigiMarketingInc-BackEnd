const express = require("express");
const addSubscriber = require("./addSubscriber");
const fetchSubscriber = require("./fetchSubscriber");
const deleteSubscriber = require("./deleteSubscriber");
const routes = express.Router();

module.exports = () => {
  routes.post("/add-subscriber", addSubscriber);
  routes.get("/fetch-subscriber", fetchSubscriber);
  routes.delete("/delete-subscriber/:id", deleteSubscriber);
  return routes;
};
