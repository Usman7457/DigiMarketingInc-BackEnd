const express = require("express");
const addTeam = require("./addTeam");
const fetchTeam = require("./fetchTeam");
const deleteTeam = require("./deleteTeam");
const updateTeam = require("./updateTeam");
const routes = express.Router();

module.exports = () => {
  routes.post("/add-team", addTeam);
  routes.get("/fetch-team", fetchTeam);
  routes.delete("/delete-team/:id", deleteTeam);
  routes.patch("/update-team/:id", updateTeam);
  return routes;
};
