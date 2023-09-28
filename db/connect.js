require("dotenv").config();
const password = process.env.PASSWORD;
const username = process.env.USERNAME_DB;
const cluster = process.env.CLUSTER;

const url = `mongodb+srv://${username}:${password}@${cluster}.vis1qwi.mongodb.net/?retryWrites=true&w=majority`;
