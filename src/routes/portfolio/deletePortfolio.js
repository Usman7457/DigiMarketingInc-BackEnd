const { portfolioServices } = require("../../services");

module.exports = async (req, res) => {
  return await portfolioServices.deletePortfolio(req, res);
};
