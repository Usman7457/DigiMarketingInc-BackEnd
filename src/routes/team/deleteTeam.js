const { teamServices } = require("../../services");

module.exports = async (req, res) => {
  return await teamServices.deleteTeam(req, res);
};
