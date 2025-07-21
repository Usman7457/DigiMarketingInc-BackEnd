const express = require("express");
const addBlog = require("./addBlog");
const fetchBlog = require("./fetchBlog");
const deleteBlog = require("./deleteBlog");
const updateBlog = require("./updateBlog");
const routes = express.Router();

module.exports = () => {
  routes.post("/add-blog", addBlog);
  routes.get("/fetch-blog", fetchBlog);
  routes.delete("/delete-blog/:id", deleteBlog);
  routes.patch("/update-blog/:id", updateBlog);
  return routes;
};
