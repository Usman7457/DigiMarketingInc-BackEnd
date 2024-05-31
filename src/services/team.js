const Team = require("../models/team");

const addTeam = async (req, res) => {
  try {
    const { name, imageUrl, role } = req.body;
    const team = new Team({ name, imageUrl, role });
    await team.save();
    res.status(201).send({ message: "Success Added Team Member" });
  } catch (error) {
    console.error(error);
  }
};

const fetchTeam = async (req, res) => {
  try {
    const team = await Team.find();
    res.send(team);
  } catch (error) {
    console.error(error);
  }
};

const deleteTeam = async (req, res) => {
  const id = req.params.id;
  try {
    await Team.deleteOne({ _id: id });
    res.send({ message: "Team Member deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateTeam = async (req, res) => {
  const id = req.params.id;
  const { name, imageUrl, role } = req.body;
  try {
    await Team.updateOne({ _id: id }, { $set: { name, imageUrl, role } });
    res.send({ message: "Team updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addTeam,
  fetchTeam,
  deleteTeam,
  updateTeam,
};
