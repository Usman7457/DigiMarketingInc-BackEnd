const { faqServices } = require("../../services");

module.exports = async (req, res) => {
  return await faqServices.addFaq(req, res);
};
