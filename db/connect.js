require("dotenv").config();
const password = process.env.PASSWORD;
const username = process.env.USERNAME_DB;
const cluster = process.env.CLUSTER;

const mongoose = require("mongoose");

const url = `mongodb+srv://${username}:${password}@${cluster}.vis1qwi.mongodb.net/node-api-05?retryWrites=true&w=majority`;

const connectDB = () => {
  mongoose.connect(url);
};

module.exports = connectDB;
