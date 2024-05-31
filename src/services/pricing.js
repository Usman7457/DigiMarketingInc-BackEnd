const Pricing = require("../models/pricing");

const addPricing = async (req, res) => {
  try {
    const { title, price, features, cls } = req.body;
    const pricing = new Pricing({ title, price, features, cls });
    await pricing.save();
    res.status(201).send({ message: "Success Added Pricing" });
  } catch (error) {
    console.error(error);
  }
};

const fetchPricing = async (req, res) => {
  try {
    const pricing = await Pricing.find();
    res.send(pricing);
  } catch (error) {
    console.error(error);
  }
};

const deletePricing = async (req, res) => {
  const id = req.params.id;
  try {
    await Pricing.deleteOne({ _id: id });
    res.send({ message: "Pricing deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updatePricing = async (req, res) => {
  const id = req.params.id;
  const { title, price, features, cls } = req.body;
  try {
    await Pricing.updateOne(
      { _id: id },
      { $set: { title, price, features, cls } }
    );
    res.send({ message: "Pricing updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addPricing,
  fetchPricing,
  deletePricing,
  updatePricing,
};
