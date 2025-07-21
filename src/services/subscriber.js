const Subscriber = require("../models/subscriber");

const addSubscriber = async (req, res) => {
  try {
    const { email } = req.body;
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).send({ message: "Email already added" });
    }
    const subscriber = new Subscriber({ email });
    await subscriber.save();

    res.status(201).send({ message: "Success Added Subscriber" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const fetchSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.find();
    res.send(subscriber);
  } catch (error) {
    console.error(error);
  }
};

const deleteSubscriber = async (req, res) => {
  const id = req.params.id;
  try {
    await Subscriber.deleteOne({ _id: id });
    res.send({ message: "Subscriber deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addSubscriber,
  fetchSubscriber,
  deleteSubscriber,
};
