const express = require("express");
const login = require("./login");
const register = require("./register");
const fetchUsers = require("./fetchUsers");
const deleteUser = require("./deleteUser");
const updateUser = require("./updateUser");
const forgotPassword = require("./forgotPassword");
const resetPassword = require("./resetPassword");

const routes = express.Router();

module.exports = () => {
  routes.post("/login", login);
  routes.post("/register", register);
  routes.get("/fetch-users", fetchUsers);
  routes.delete("/delete-user/:id", deleteUser);
  routes.patch("/update-user/:id", updateUser);
  routes.post("/forgot-password/:email", forgotPassword);
  routes.patch("/reset-password/:id", resetPassword);
  return routes;
};
