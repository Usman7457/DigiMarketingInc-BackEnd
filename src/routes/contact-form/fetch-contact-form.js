const { contactFormServices } = require("../../services");

module.exports = async (req, res) => {
  return await contactFormServices.fetchContactForm(req, res);
};
