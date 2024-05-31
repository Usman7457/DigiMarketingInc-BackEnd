const Testimonial = require("../models/testimonial");

const addTestimonial = async (req, res) => {
  try {
    const { name, imageUrl, country, message } = req.body;
    const testimonial = new Testimonial({ name, imageUrl, country, message });
    await testimonial.save();
    res.status(201).send({ message: "Success Added Testimonial" });
  } catch (error) {
    console.error(error);
  }
};

const fetchTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.find();
    res.send(testimonial);
  } catch (error) {
    console.error(error);
  }
};

const deleteTestimonial = async (req, res) => {
  const id = req.params.id;
  try {
    await Testimonial.deleteOne({ _id: id });
    res.send({ message: "Testimonial deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateTestimonial = async (req, res) => {
  const id = req.params.id;
  const { name, imageUrl, country, message } = req.body;
  try {
    await Testimonial.findByIdAndUpdate(id, {
      $set: { name, imageUrl, country, message },
    });
    res.send({ message: "Testimonial updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addTestimonial,
  fetchTestimonial,
  deleteTestimonial,
  updateTestimonial,
};
