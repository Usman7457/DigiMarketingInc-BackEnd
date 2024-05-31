const { testimonialServices } = require("../../services");

module.exports = async (req, res) => {
  return await testimonialServices.fetchTestimonial(req, res);
};
