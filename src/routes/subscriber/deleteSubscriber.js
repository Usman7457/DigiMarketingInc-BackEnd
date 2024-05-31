const { subscriberServices } = require("../../services");

module.exports = async (req, res) => {
  return await subscriberServices.deleteSubscriber(req, res);
};
