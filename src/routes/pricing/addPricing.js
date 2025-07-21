const { pricingServices } = require("../../services");

module.exports = async (req, res) => {
  return await pricingServices.addPricing(req, res);
};
