require("dotenv").config();
const password = process.env.PASSWORD;
const username = process.env.USERNAME_DB;
const cluster = process.env.CLUSTER;

const mongoose = require("mongoose");

const url = `mongodb+srv://${username}:${password}@${cluster}.vis1qwi.mongodb.net/node-api-05?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then(() => console.log("connected to db.."))
  .catch((err) => console.log(err));
//const mongoose = require("mongoose");

// main().catch((err) => console.log(err));

// async function main() {
//   const a = await mongoose.connect(
//     `mongodb://${username}:${password}@127.0.0.1:27017/test`
//   );
//   if (a) {
//     console.log("success");
//   } else {
//     console.log("filed");
//   }
//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

// main();
