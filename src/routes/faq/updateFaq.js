const { faqServices } = require("../../services");

module.exports = async (req, res) => {
  return await faqServices.updateFaq(req, res);
};
