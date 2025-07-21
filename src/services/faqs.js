const Faq = require("../models/faq");

const addFaq = async (req, res) => {
  try {
    const { target, question, answer } = req.body;
    const faq = new Faq({ target, question, answer });
    await faq.save();
    res.status(201).send({ message: "Success Added FAQ" });
  } catch (error) {
    console.error(error);
  }
};

const fetchFaq = async (req, res) => {
  try {
    const faq = await Faq.find();
    res.send(faq);
  } catch (error) {
    console.error(error);
  }
};

const deleteFaq = async (req, res) => {
  const id = req.params.id;
  try {
    await Faq.deleteOne({ _id: id });
    res.send({ message: "FAQ deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateFaq = async (req, res) => {
  const id = req.params.id;
  const { target, question, answer } = req.body;
  try {
    await Faq.updateOne({ _id: id }, { $set: { target, question, answer } });
    res.send({ message: "Faq updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addFaq,
  fetchFaq,
  deleteFaq,
  updateFaq,
};
