const Blog = require("../models/blog");

const addBlog = async (req, res) => {
  try {
    const { heading, imageUrl, slug, paragraph } = req.body;
    const blog = new Blog({ heading, imageUrl, slug, paragraph });
    await blog.save();
    res.status(201).send({ message: "Success Added Contact Form" });
  } catch (error) {
    console.error(error);
  }
};

const fetchBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.send(blog);
  } catch (error) {
    console.error(error);
  }
};

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    await Blog.deleteOne({ _id: id });
    res.send({ message: "Data deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { heading, imageUrl, slug, paragraph } = req.body;
  try {
    await Blog.updateOne(
      { _id: id },
      { $set: { heading, imageUrl, slug, paragraph } }
    );
    res.send({ message: "Blog updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addBlog,
  fetchBlog,
  deleteBlog,
  updateBlog,
};
