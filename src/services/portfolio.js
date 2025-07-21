const Portfolio = require("../models/portfolio");

const addPortfolio = async (req, res) => {
  try {
    const { name, imageUrl, slug, type } = req.body;
    const portfolio = new Portfolio({ name, imageUrl, slug, type });
    await portfolio.save();
    res.status(201).send({ message: "Success Added Portfolio" });
  } catch (error) {
    console.error(error);
  }
};

const fetchPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find();
    res.send(portfolio);
  } catch (error) {
    console.error(error);
  }
};

const deletePortfolio = async (req, res) => {
  const id = req.params.id;
  try {
    await Portfolio.deleteOne({ _id: id });
    res.send({ message: "Portfolio deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updatePortfolio = async (req, res) => {
  const id = req.params.id;
  const { name, imageUrl, slug, type } = req.body;
  try {
    await Portfolio.updateOne(
      { _id: id },
      { $set: { name, imageUrl, slug, type } }
    );
    res.send({ message: "Portfolio updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addPortfolio,
  fetchPortfolio,
  deletePortfolio,
  updatePortfolio,
};
