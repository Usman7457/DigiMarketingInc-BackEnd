const ContactForm = require("../models/contact-form");

const addContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contactForm = new ContactForm({ name, email, phone, message });
    await contactForm.save();
    res.status(201).send({ message: "Success Added Contact Form" });
  } catch (error) {
    console.error(error);
  }
};

const fetchContactForm = async (req, res) => {
  try {
    const contactForm = await ContactForm.find();
    res.send(contactForm);
  } catch (error) {
    console.error(error);
  }
};

const deleteContactForm = async (req, res) => {
  const id = req.params.id;
  try {
    await ContactForm.deleteOne({ _id: id });
    res.send({ message: "Data deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addContactForm,
  fetchContactForm,
  deleteContactForm,
};
