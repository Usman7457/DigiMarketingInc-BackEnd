const express = require("express");
const routes = express.Router();
const users = require("./users");
const faqs = require("./faq");
const team = require("./team");
const blog = require("./blog");
const portfolio = require("./portfolio");
const testimonial = require("./testimonial");
const pricing = require("./pricing");
const subscriber = require("./subscriber");
const contactForm = require("./contact-form");

module.exports = () => {
  routes.use("/users", users());
  routes.use("/faq", faqs());
  routes.use("/team", team());
  routes.use("/blog", blog());
  routes.use("/portfolio", portfolio());
  routes.use("/testimonial", testimonial());
  routes.use("/pricing", pricing());
  routes.use("/subscriber", subscriber());
  routes.use("/contact-form", contactForm());

  return routes;
};
