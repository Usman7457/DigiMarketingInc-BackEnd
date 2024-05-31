const express = require("express");
const addContactForm = require("./add-contact-form");
const fetchContactForm = require("./fetch-contact-form");
const deleteContactForm = require("./delete-contact-form");
const routes = express.Router();

module.exports = () => {
  routes.post("/add-contact-form", addContactForm);
  routes.get("/fetch-contact-form", fetchContactForm);
  routes.delete("/delete-contact-form/:id", deleteContactForm);
  return routes;
};
