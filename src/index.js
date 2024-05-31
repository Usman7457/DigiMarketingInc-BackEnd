require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes/todoroutes");
const database = require("./config/database");
const app = express();

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/api", routes());
    await database();
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
