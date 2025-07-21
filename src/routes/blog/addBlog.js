const { blogServices } = require("../../services");

module.exports = async (req, res) => {
  return await blogServices.addBlog(req, res);
};
