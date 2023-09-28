require("dotenv").config();
const password = process.env.PASSWORD;
const username = process.env.USERNAME_DB;
const cluster = process.env.CLUSTER;

const url = `mongodb+srv://${username}:${password}@${cluster}.vis1qwi.mongodb.net/?retryWrites=true&w=majority`;

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb://${username}:${password}@127.0.0.1:27017/test`
  );

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
