const User = require("../models/user");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password: _password } = req.body;
    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.status(409).send({ message: "Email not found" });
    }
    const isPasswordValid = await bcrypt.compare(_password, user.password);
    if (!isPasswordValid) {
      return res.status(409).send({ message: "Wrong password" });
    }

    const { password, ...existingUser } = user;

    const token = jwt.sign({ existingUser }, process.env.SECRET_JWT);

    res.status(200).send({ message: "Success Login", token });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "User Already Exsists." });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({ userName, email, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: "Success Register" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const fetchUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
    // console.log(users);
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.deleteOne({ _id: id });
    res.send({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { userName, email, password } = req.body;

  try {
    const updateFields = { userName, email };
    if (password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      updateFields.password = hashedPassword;
    }

    await User.updateOne({ _id: id }, { $set: updateFields });

    res.send({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const transporter = nodemailer.createTransport({
  host: "smtp.gatewayconsultacy.pk",
  port: 465,
  secure: true,
  auth: {
    user: "usman@gatewayconsultacy.com",
    pass: "Usman@btc4",
  },
});

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Set the reset token expiry time
    const resetTokenExpiry = Date.now() + 3600000; // Token valid for 1 hour

    // Save the expiry to the user's record
    user.resetPasswordExpiry = resetTokenExpiry;
    await user.save();

    // Send email with the reset link containing the user's ID
    const resetLink = `http://localhost:3000/reset-password/${user._id}`;
    const mailOptions = {
      from: "DMI <usman@gatewayconsultacy.com>",
      to: user.email,
      subject: "Password Reset",
      html: `
      <p>Hello,</p>
      <p>We received a request to reset your password. Please click the link below to proceed:</p><br />
      <a href="${resetLink}" style="background-color: #007bff; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Reset Your Password</a><br /><br />
      <p>If you did not request a password reset, please ignore this email or contact support.</p><br />
      <p>Thank you,</p>
      <p>DMI Support Team</p>
    `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send({ message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const resetPassword = async (req, res) => {
  const id = req.params.id;
  const { password } = req.body;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).send({ message: "Invalid User" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiry = undefined;
    await user.save();

    res.status(200).send({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  login,
  register,
  fetchUsers,
  deleteUser,
  updateUser,
  forgotPassword,
  resetPassword,
};
