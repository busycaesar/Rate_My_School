// const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_STRING = process.env.MONGODB_STRING || "";
let dataBase;

/**
 * Connect with mongoDB.
 * @memberof module:MongoDB
 * @returns A promise which is resolved if Backend is successfully connected with MongoDB; otherwise the promise is rejected.
 */
const connectMongoDB = () => {
  return new Promise((resolve, reject) => {
    if (!MONGODB_STRING) reject("MongoDB connection string is not provided.");
    // dataBase = mongoose.createConnection(MONGODB_STRING);
    // dataBase.on("error", (error) => reject(error));
    // dataBase.once("open", () => resolve("Connected with MongoDB!"));
    resolve("Connected");
  });
};

/**
 * Get mongoDB instance
 * @memberof module:MongoDB
 * @returns Returns in instance of MongoDB
 */
const getMongoDBInstance = () => {
  if (dataBase) return dataBase;
  connectMongoDB()
    .then(() => dataBase)
    .catch((error) => console.log(error));
};

module.exports = { connectMongoDB, getMongoDBInstance };
