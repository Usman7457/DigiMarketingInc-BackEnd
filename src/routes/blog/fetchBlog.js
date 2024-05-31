const { blogServices } = require("../../services");

module.exports = async (req, res) => {
  return await blogServices.fetchBlog(req, res);
};
