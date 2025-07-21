const { userServices } = require("../../services");

module.exports = async (req, res) => {
  return await userServices.deleteUser(req, res);
};
