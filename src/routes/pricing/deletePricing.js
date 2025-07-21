const { pricingServices } = require("../../services");

module.exports = async (req, res) => {
  return await pricingServices.deletePricing(req, res);
};
