const { testimonialServices } = require("../../services");

module.exports = async (req, res) => {
  return await testimonialServices.updateTestimonial(req, res);
};
