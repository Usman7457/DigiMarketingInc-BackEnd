const { blogServices } = require("../../services");

module.exports = async (req, res) => {
  return await blogServices.deleteBlog(req, res);
};
